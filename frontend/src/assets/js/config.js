// API Configuration
const API_CONFIG = {
    // Development
    development: {
        apiUrl: "http://localhost:3000",
        timeout: 5000
    },
    // Production (Railway)
    production: {
        apiUrl: "https://knowledgekraft-api.up.railway.app",
        timeout: 10000
    }
};

// Get current environment
const isProduction = window.location.hostname !== "localhost";
const config = isProduction ? API_CONFIG.production : API_CONFIG.development;

console.log("🌐 API Configuration:", config);

// Export
window.API_CONFIG = config;
