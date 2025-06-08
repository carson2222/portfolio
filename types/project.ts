export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  images: string[];
  thumbnail: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  year: string;
}

// Example of how to structure the data
export const exampleProject: Project = {
  id: 1,
  title: "Project Name",
  description: "Short description of the project",
  longDescription: `## Project Title

A detailed description of the project.

**Key Features:**
- Feature 1
- Feature 2
- Feature 3

**Tech Stack:**
- Technology 1
- Technology 2
- Technology 3

**Results:**
✓ Achievement 1
✓ Achievement 2
✓ Achievement 3
`,
  images: ["/projects/image1.png", "/projects/image2.png"],
  thumbnail: "/projects/thumbnail.png",
  technologies: ["Tech1", "Tech2", "Tech3"],
  liveUrl: "https://example.com",
  githubUrl: "https://github.com/username/project",
  year: "2024",
};

// Schema explanation for AI consumption
export const projectSchemaDescription = {
  id: "Unique identifier for the project",
  title: "Short, descriptive title of the project",
  description: "Brief one-line summary of the project",
  longDescription:
    "Detailed markdown-formatted description including sections for features, tech stack, and results",
  images: "Array of image URLs showcasing the project",
  thumbnail: "Main preview image URL",
  technologies: "Array of technology names used in the project",
  liveUrl: "URL to live demo/deployment (if available)",
  githubUrl: "URL to GitHub repository (if available)",
  year: "Year the project was completed",
};
