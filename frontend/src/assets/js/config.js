// API Configuration
const API_CONFIG = {
    development: {
        apiUrl: "http://localhost:3000",
        timeout: 5000
    },
    production: {
        apiUrl: "knowledgekraft-pk.railway.internal",
        timeout: 10000
    }
};

const isProduction = window.location.hostname !== "localhost";
window.API_CONFIG = isProduction ? API_CONFIG.production : API_CONFIG.development;

console.log("🌐 KnowledgeKraft API:", window.API_CONFIG.apiUrl);
