// Simple copy script
const fs = require("fs");
const path = require("path");

console.log("📦 Building KnowledgeKraft...");

const srcDir = "./src";
const distDir = "./dist";
const dataDir = "./data";

// Clean dist
if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true });
}

// Create dist and copy data
fs.mkdirSync(distDir, { recursive: true });
fs.mkdirSync(path.join(distDir, "data"), { recursive: true });
fs.mkdirSync(path.join(distDir, "js"), { recursive: true });

// Copy files
function copyFiles(source, target) {
    const files = fs.readdirSync(source);
    
    files.forEach(file => {
        const sourcePath = path.join(source, file);
        const targetPath = path.join(target, file);
        
        if (fs.statSync(sourcePath).isDirectory()) {
            fs.mkdirSync(targetPath, { recursive: true });
            copyFiles(sourcePath, targetPath);
        } else {
            fs.copyFileSync(sourcePath, targetPath);
            console.log("✅ Copied:", file);
        }
    });
}

// Copy src to dist
copyFiles(srcDir, distDir);

// Copy data to dist/data
if (fs.existsSync(dataDir)) {
    copyFiles(dataDir, path.join(distDir, "data"));
}

console.log("🎉 Build complete! Files in dist/ folder");
