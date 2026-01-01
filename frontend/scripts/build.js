console.log("🔨 Building KnowledgeKraft frontend...");

const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, "../src");
const distDir = path.join(__dirname, "../dist");

// Clean old dist
if (fs.existsSync(distDir)) {
    try {
        fs.rmSync(distDir, { recursive: true });
        console.log("🧹 Cleaned old dist folder");
    } catch (err) {
        console.log("⚠️ Could not clean dist:", err.message);
    }
}

// Create dist
try {
    fs.mkdirSync(distDir, { recursive: true });
} catch (err) {
    console.log("⚠️ Could not create dist:", err.message);
}

// Simple copy - one file at a time
try {
    const files = fs.readdirSync(srcDir);
    console.log(`📄 Found ${files.length} files in src`);
    
    files.forEach(file => {
        const srcPath = path.join(srcDir, file);
        const destPath = path.join(distDir, file);
        
        if (fs.statSync(srcPath).isDirectory()) {
            // Skip directories for now
            console.log("📁 Skipping directory:", file);
        } else {
            fs.copyFileSync(srcPath, destPath);
            console.log("✅ Copied:", file);
        }
    });
    
    console.log("🎉 Build completed successfully!");
    console.log("🌐 Your files are ready in dist/ folder");
} catch (err) {
    console.log("❌ Build failed:", err.message);
    process.exit(1);
}
