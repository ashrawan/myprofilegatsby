import { myPortfolio } from './portfolio';

export const personalInfo = {
  name: "Shrawan Adhikari",
  title: "Software Engineer",
  tagline: "Working towards a future with AI-driven innovation and scalable architectures. Passionate about crafting exceptional digital experiences.",
  email: "ashrawan.work@gmail.com",
  location: "",
  availability: "",
  
  social: {
    github: "https://github.com/ashrawan",
    linkedin: "https://www.linkedin.com/in/shrawan-adhikari",
    blog: "https://codegrave.com",
  },

  vision: {
    title: "Vision & Research",
    description: "Passionate about pushing the boundaries of technology through AI innovation and scalable architectures",
    areas: [
      {
        title: "Microservices Evolution",
        description: "Developing next-generation microservices with advanced patterns, resiliency, scalability, and performance"
      },
      {
        title: "Security & Applications",
        description: "Designing and implementing robust OAuth2/OIDC solutions to secure modern applications"
      },
      {
        title: "DevOps Innovation",
        description: "Streamlining processes and configurations through automation using Docker, Jenkins, Kubernetes, and scripting"
      },
      {
        title: "AI & Machine Learning",
        description: "Exploring cutting-edge AI applications in modern software development with secure implementations"
      },
      {
        title: "Cloud-Native Architecture",
        description: "Building resilient, scalable systems using modern cloud technologies"
      },
      {
        title: "Software Testing & Automation",
        description: "Conducting comprehensive testing strategies to uphold the highest standards of software quality and reliability"
      },
    ]
  },

  skills: {
    languages: [
      { name: "TypeScript", level: "Expert", context: "Building type-safe, scalable frontend applications" },
      { name: "Java", level: "Expert", context: "Developing enterprise-grade microservices" },
      { name: "Python", level: "Advanced", context: "AI/ML development and automation" },
      { name: "Go", level: "Intermediate", context: "High-performance microservices" }
    ],
    frontend: [
      { name: "React", level: "Expert", context: "Creating responsive, modern web applications" },
      { name: "Next.js", level: "Advanced", context: "Building SEO-friendly, performant websites" },
      { name: "Tailwind CSS", level: "Expert", context: "Crafting beautiful, responsive UIs" }
    ],
    backend: [
      { name: "Spring Boot", level: "Expert", context: "Developing robust microservices" },
      { name: "Node.js", level: "Advanced", context: "Building scalable API services" },
      { name: "GraphQL", level: "Advanced", context: "Designing flexible APIs" }
    ],
    cloud: [
      { name: "AWS", level: "Advanced", context: "Cloud infrastructure and serverless architecture" },
      { name: "Docker", level: "Expert", context: "Containerization and orchestration" },
      { name: "Kubernetes", level: "Advanced", context: "Container orchestration at scale" }
    ],
    databases: [
      { name: "PostgreSQL", level: "Expert", context: "Reliable relational data storage" },
      { name: "MongoDB", level: "Advanced", context: "Scalable NoSQL solutions" },
      { name: "Redis", level: "Advanced", context: "High-performance caching" }
    ]
  },

  projects: [
    {
      title: "AI-Powered Analytics Platform",
      description: "Built a scalable analytics platform using machine learning to provide predictive insights from user behavior data",
      longDescription: "Developed an enterprise-grade analytics platform that processes millions of data points daily. Implemented machine learning models for user behavior prediction, resulting in a 40% improvement in conversion rates for clients.",
      image: "/projects/analytics.jpg",
      tags: ["Python", "TensorFlow", "React", "AWS"],
      github: "https://github.com/yourusername/analytics-platform",
      link: "https://analytics-platform.demo",
      highlights: [
        "Processed 10M+ daily events",
        "40% improvement in prediction accuracy",
        "Scalable microservices architecture",
        "Real-time ML inference"
      ]
    },
    {
      title: "Cloud-Native DevOps Platform",
      description: "Created a comprehensive DevOps platform for automating deployment workflows and monitoring",
      longDescription: "Designed and implemented a cloud-native platform that streamlines the deployment process and provides real-time monitoring capabilities. Reduced deployment time by 70% and improved system reliability.",
      image: "/projects/devops.jpg",
      tags: ["Go", "Kubernetes", "React", "Prometheus"],
      github: "https://github.com/yourusername/devops-platform",
      link: "https://devops-platform.demo",
      highlights: [
        "70% reduction in deployment time",
        "99.9% system uptime",
        "Automated scaling and recovery",
        "Real-time monitoring dashboard"
      ]
    }
  ],

  experience: [
    {
      company: "Bank of America",
      title: "Senior Software Engineer",
      period: "May 2023 – Present",
      companyUrl: "https://www.bankofamerica.com",
      subTitle: "",
      description: [
        "Engineered OAuth2/OIDC solutions, implementing secure authentication and authorization, currently serving over 10 million traffic daily.",
        "Conducted performance optimizations through load testing, heap-dump analysis, caching, and replication - achieving a 25% reduction in response time and exceeding 5000 TPS in LLE tests.",
        "Automated testing and CI/CD pipelines, leveraging SOAP UI, Groovy, Jenkins, and SonarQube for robust, compliant deployments."
      ],
      technologies: ["Spring Boot", "OAuth2", "Cassandra", "Jenkins", "SOAP UI", "Groovy"]
    },
    {
      company: "Cotiviti",
      title: "Senior Software Engineer",
      period: "Aug 2020 – Mar 2022",
      companyUrl: "https://www.cotiviti.com",
      description: [
        "Developed healthcare microservices (Java, Spring) and Angular-based UIs serving over 500 US healthcare organizations, integrating OAuth2, Spring Cloud, and Redis.",
        "Created dynamic data visualizations (D3.js, RxJS, NgRx) within Angular, improving decision-making capabilities.",
        "Optimized code through refactoring and unit testing, employing Atlassian suite (Bamboo, Bitbucket, Jira) and SAFe Agile methodology."
      ],
      technologies: ["Java", "Spring", "Angular", "D3.js", "Redis", "OAuth2", "RxJS", "NgRx"]
    },
    {
      company: "Logica Beans",
      title: "Software Engineer",
      period: "Jul 2018 – Aug 2020",
      companyUrl: "https://www.logicabeans.com",
      description: [
        "Developed banking and healthcare applications leveraging Java, Spring, and Angular, aligning with Fintech industry standards.",
        "Reinforced application security and compliance with Spring Security ACL, Angular role-based views, Hibernate Envers (CDC), and Liquibase.",
        "Adopted Agile/Scrum practices and CI/CD pipelines (GitLab, Jenkins, Sonar) to streamline delivery of high-quality solutions."
      ],
      technologies: ["Java", "Spring", "Angular", "RabbitMQ", "ISO8583", "GitLab", "Jenkins"]
    }
  ],

  blog: {
    title: "Tech Insights & Thoughts",
    posts: [
      {
        title: "The Future of AI-Driven Development",
        description: "Exploring how AI is transforming software development practices",
        link: "/blog/ai-driven-development",
        date: "2023-10-15"
      },
      {
        title: "Building Resilient Microservices",
        description: "Best practices for developing reliable distributed systems",
        link: "/blog/resilient-microservices",
        date: "2023-09-28"
      }
    ]
  }
};