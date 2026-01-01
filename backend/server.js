const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Welcome route
app.get("/", (req, res) => {
    res.json({
        message: "🚀 KnowledgeKraft.pk API is running!",
        version: "1.0.0",
        status: "active",
        timestamp: new Date().toISOString(),
        endpoints: {
            courses: "/api/courses",
            health: "/health",
            docs: "https://github.com/your-username/knowledgekraft-pk"
        }
    });
});

// Health check (required for Railway)
app.get("/health", (req, res) => {
    res.json({
        status: "healthy",
        service: "knowledgekraft-api",
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: process.env.NODE_ENV || "development"
    });
});

// Courses API
app.get("/api/courses", (req, res) => {
    const courses = [
        {
            id: 1,
            title: "Web Development Fundamentals",
            description: "Learn HTML, CSS, and JavaScript from scratch",
            category: "Programming",
            level: "Beginner",
            free: true,
            duration: "8 weeks",
            students: 1500,
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400"
        },
        {
            id: 2,
            title: "Python for Beginners",
            description: "Master Python programming basics",
            category: "Programming",
            level: "Beginner",
            free: true,
            duration: "10 weeks",
            students: 1200,
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec1?w-400"
        },
        {
            id: 3,
            title: "Database Design with MongoDB",
            description: "Learn database concepts and MongoDB",
            category: "Database",
            level: "Intermediate",
            free: true,
            duration: "6 weeks",
            students: 800,
            rating: 4.6,
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400"
        },
        {
            id: 4,
            title: "UI/UX Design Principles",
            description: "Design beautiful user interfaces",
            category: "Design",
            level: "Beginner",
            free: true,
            duration: "7 weeks",
            students: 950,
            rating: 4.5,
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400"
        }
    ];
    
    // Add query parameters support
    const { category, search } = req.query;
    let filteredCourses = [...courses];
    
    if (category) {
        filteredCourses = filteredCourses.filter(c => c.category.toLowerCase() === category.toLowerCase());
    }
    
    if (search) {
        filteredCourses = filteredCourses.filter(c => 
            c.title.toLowerCase().includes(search.toLowerCase()) ||
            c.description.toLowerCase().includes(search.toLowerCase())
        );
    }
    
    res.json({
        success: true,
        count: filteredCourses.length,
        data: filteredCourses
    });
});

// Get single course
app.get("/api/courses/:id", (req, res) => {
    const courseId = parseInt(req.params.id);
    
    const courses = {
        1: {
            id: 1,
            title: "Web Development Fundamentals",
            description: "Learn HTML, CSS, and JavaScript from scratch. Perfect for beginners who want to build websites.",
            category: "Programming",
            level: "Beginner",
            free: true,
            duration: "8 weeks",
            students: 1500,
            rating: 4.8,
            instructor: {
                name: "Ali Ahmed",
                expertise: "Full Stack Developer",
                experience: "5+ years",
                bio: "Senior developer with experience at multiple tech companies"
            },
            curriculum: [
                { week: 1, topic: "HTML Basics", duration: "4 hours", description: "Learn HTML structure and tags" },
                { week: 2, topic: "CSS Styling", duration: "6 hours", description: "Style your websites with CSS" },
                { week: 3, topic: "JavaScript Fundamentals", duration: "8 hours", description: "Add interactivity with JavaScript" }
            ],
            requirements: ["Basic computer knowledge", "Internet connection"],
            whatYoullLearn: ["Build websites from scratch", "Responsive design", "JavaScript basics"]
        }
    };
    
    const course = courses[courseId];
    
    if (course) {
        res.json({
            success: true,
            data: course
        });
    } else {
        res.status(404).json({
            success: false,
            error: "Course not found"
        });
    }
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        error: "Route not found",
        path: req.path,
        method: req.method,
        availableEndpoints: ["/", "/health", "/api/courses", "/api/courses/:id"]
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`
    🚀 KnowledgeKraft API Server
    📍 Port: ${PORT}
    🌐 Environment: ${process.env.NODE_ENV || 'development'}
    
    📚 Available Routes:
       GET  /                 - Welcome message
       GET  /health          - Health check
       GET  /api/courses     - List all courses
       GET  /api/courses/:id - Get specific course
       
    🔗 Local: http://localhost:${PORT}
    `);
});
