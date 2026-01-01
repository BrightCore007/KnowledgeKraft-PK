// Simple data loader for KnowledgeKraft
class DataLoader {
    constructor() {
        this.baseUrl = window.location.origin;
    }
    
    async loadCourses() {
        try {
            // Try to load from JSON file
            const response = await fetch('data/courses.json');
            if (!response.ok) throw new Error('Failed to load data');
            
            const data = await response.json();
            return data;
        } catch (error) {
            console.log('Using embedded data:', error.message);
            // Fallback to embedded data
            return this.getEmbeddedCourses();
        }
    }
    
    getEmbeddedCourses() {
        return {
            success: true,
            count: 4,
            data: [
                {
                    id: 1,
                    title: "Web Development Fundamentals",
                    description: "Learn HTML, CSS, and JavaScript from scratch",
                    category: "Programming",
                    free: true,
                    students: 1500
                },
                {
                    id: 2,
                    title: "Python Programming", 
                    description: "Master Python for automation and web development",
                    category: "Programming",
                    free: true,
                    students: 1200
                },
                {
                    id: 3,
                    title: "Database Design",
                    description: "Learn SQL and MongoDB database management",
                    category: "Database", 
                    free: true,
                    students: 800
                },
                {
                    id: 4,
                    title: "UI/UX Design",
                    description: "Create beautiful user interfaces and experiences",
                    category: "Design",
                    free: true,
                    students: 950
                }
            ]
        };
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    const loader = new DataLoader();
    
    loader.loadCourses().then(data => {
        console.log(`✅ Loaded ${data.count} courses`);
        window.coursesData = data;
        
        // Update UI
        updateCourseCount(data.count);
        displayCourses(data.data);
    });
});

function updateCourseCount(count) {
    const countElement = document.querySelector('[data-count="50"]');
    if (countElement) {
        countElement.textContent = count + '+';
    }
}

function displayCourses(courses) {
    console.log('Available courses:');
    courses.forEach(course => {
        console.log(`📚 ${course.title} - ${course.students} students`);
    });
    
    // You can update the DOM here later
}
