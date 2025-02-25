export const introText = ["Hello.", "I'm Colin."];
export const introTextSpeedMs = 150; // Ms per character.
export const wordCycleText = ["Engineer", "Developer", "Designer", "Enthusiast"];

export interface Resource {
    path: string;
    name: string;
    year: number;
    description: string;
}

// List of programming languages and libraries.
export const resources: Resource[] = [
    {
        path: "programming/java.svg",
        name: "Java",
        year: 2017,
        description:
            "Highly skilled in Java with deep knowledge of OOP, design principles, and design patterns. Strong grasp of data structures, algorithms, and computational complexity for building efficient, scalable solutions.",
    },
    {
        path: "programming/typescript.svg",
        name: "Typescript",
        year: 2022,
        description: "Proficient in TypeScript with a good understanding of static typing, generics, and advanced type system features.",
    },
    {
        path: "programming/javascript.svg",
        name: "Javascript",
        year: 2021,
        description:
            "Skilled in JavaScript with a solid grasp of asynchronous programming, functional patterns, and modern ES features. Experienced in developing interactive and dynamic web applications.",
    },
    {
        path: "programming/selenium.svg",
        name: "Selenium",
        year: 2023,
        description:
            "Skilled in Selenium, with expertise in writing reliable automated tests and enhancing execution efficiency. Also experienced in integrating logging systems to improve debugging and traceability.",
    },
    {
        path: "programming/node.svg",
        name: "Node.js",
        year: 2021,
        description:
            "Skilled in Node.js, with experience in building and optimizing backend APIs, handling database interactions, and managing asynchronous operations for scalable applications.",
    },
    {
        path: "programming/python.svg",
        name: "Python",
        year: 2023,
        description:
            "Experienced in Python, with familiarity in building microservices and working with NumPy for data processing. Capable of developing backend services and integrating data-driven functionalities.",
    },
    {
        path: "programming/react.svg",
        name: "React",
        year: 2022,
        description:
            "Skilled in React, with expertise in building intuitive and user-friendly interfaces. Focused on creating seamless UX through well-structured components, efficient state management, and maintainable code.",
    },
    {
        path: "programming/material-ui.svg",
        name: "Material UI",
        year: 2022,
        description: "Skilled in Material UI, with experience in designing clean, responsive, and accessible interfaces.",
    },
    {
        path: "programming/tailwindcss.svg",
        name: "Tailwindcss",
        year: 2024,
        description:
            "Experienced in Tailwind CSS, with a focus on building responsive and modern UIs. Comfortable leveraging its utility-first approach to streamline styling and improve development efficiency.",
    },
    {
        path: "programming/jest.svg",
        name: "Jest",
        year: 2022,
        description:
            "Skilled in Jest and React Testing Library for writing reliable and maintainable test suites. Experienced in testing React components, ensuring proper behavior through unit and integration tests.",
    },
    {
        path: "programming/openlayers.svg",
        name: "OpenLayers",
        year: 2024,
        description:
            "Skilled in OpenLayers, with experience in building interactive and dynamic map-based applications. Proficient in customizing layers, handling geospatial data, and optimizing map performance.",
    },
    {
        path: "programming/electron.svg",
        name: "Electron",
        year: 2022,
        description: "Experienced in Electron, with the ability to build cross-platform desktop applications using web technologies.",
    },
    {
        path: "programming/sql.svg",
        name: "SQL",
        year: 2021,
        description:
            "Proficient in SQL, with experience in designing and querying relational databases. Skilled in writing efficient queries, optimizing performance, and managing data integrity.",
    },
    {
        path: "programming/postgresql.svg",
        name: "PostgreSQL",
        year: 2022,
        description:
            "Experienced in PostgreSQL, with the ability to design and query relational databases. Familiar with indexing, optimizing queries, and managing structured data efficiently.",
    },
    {
        path: "programming/docker.svg",
        name: "Docker",
        year: 2023,
        description:
            "Experienced in Docker, with the ability to containerize applications and manage dependencies. Familiar with writing Dockerfiles and using Docker Compose for local development and deployment.",
    },
    {
        path: "programming/maven.svg",
        name: "Maven",
        year: 2020,
        description:
            "Experienced in Maven for managing Java project dependencies and build processes. Familiar with configuring POM files and integrating plugins for automation.",
    },
    {
        path: "programming/gradle.svg",
        name: "Gradle",
        year: 2020,
        description:
            "Experienced in Gradle for building and managing Java projects. Comfortable with writing and modifying build scripts, handling dependencies, and optimizing build performance.",
    },
    {
        path: "programming/tic-tac-toe.svg",
        name: "Tic Tac Toe",
        year: 2025,
        description: ":)",
    },
];
