export const siteConfig = {
  name: "Ali Zia",
  title: "Senior Software Engineer",
  description: "Portfolio website of Ali Zia. I turn complicated, high-stakes systems into software people can trust. Senior Software Engineer with 13+ years in .NET and C# AI, building the software solutions including banking, fintech, printing, ecommerce, CRM, and healthcare platforms that can't afford to go down. Lately I'm also bringing AI agents into real-world codebases.",
  accentColor: "#1d4ed8",
  social: {
    email: "alizia0321@gmail.com",
    linkedin: "https://linkedin.com/in/alizia0321",
    github: "https://github.com/alizia-dev",
  },
  aboutMe:
    "I'm a senior software engineer who enjoys the hard end of the stack: banking, fintech and healthcare systems where security, reliability and compliance aren't optional. Over 13+ years I've grown from building ASP.NET web apps to architecting distributed microservices on AWS and Azure with DDD, CQRS and RabbitMQ. What I enjoy most is owning a system end to end: shaping the architecture, shipping it, and keeping it healthy in production. I've moved legacy platforms to modern microservices without interrupting the business, and I've worked alongside Microsoft's engineers on code-analysis tooling. I care about people as much as code. I mentor through code review and pairing, and I explain trade-offs in plain language so product owners can make confident decisions. Right now I'm exploring agentic AI, LLMs and RAG with .NET, and bringing responsible AI into existing systems.",
  skills: [".NET", "C#", "Angular", "Python", "AWS", "Docker", "SQL", "ML.NET", "Microsoft Agent Framework", "AI Agents", "AI Workflow"],
  projects: [
    {
      name: "JEB Bank — fintech platform",
      description:
        "Architected and built a fintech system on AWS (EC2, ECS Fargate, RDS, S3). Each module is its own Domain-Driven Design microservice, communicating over RabbitMQ, with Python-based OCR for customer onboarding and SonarQube and Sentry for quality and monitoring.",
      link: "#experience",
      skills: ["AWS", "RabbitMQ", "DDD", "CQRS", "TDD", "Python OCR", "SonarQube", "Sentry"],
    },
    {
      name: "Code analysis tooling with Microsoft",
      description:
        "Worked with Microsoft's engineering team (via Code Logic, USA) on static and dynamic code-analysis tools built on Roslyn and Neo4j.",
      link: "#experience",
      skills: ["Roslyn", ".NET", "Neo4j", "Static analysis"],
    },
    {
      name: "AI Medical Scribe",
      description:
        "An AI-powered clinical documentation platform that turns clinician–patient conversations into structured notes, reducing time spent on paperwork.",
      link: "https://github.com/alizia-dev",
      skills: [".NET", "LLMs", "Healthcare", "Agentic AI"],
    },
    {
      name: "Tile Estimator",
      description:
        "A multi-tenant estimating and quoting SaaS for US tile contractors, built with AI-assisted development using Claude Code.",
      link: "https://github.com/alizia-dev",
      skills: [".NET 10", "Angular", "SQL Server", "Multi-tenant"],
    },
  ],
  experience: [
    {
      company: "Nova Enterprises · Lahore, Pakistan",
      title: "Senior Software Consultant / Architect",
      dateRange: "Nov 2024 – Current",
      bullets: [
        "Provide architectural decisions for new features on a secure RCM healthcare enterprise platform (.NET Core, TypeScript, MVC, SQL, Azure).",
        "Lead Agile/Scrum delivery: write user stories, define the roadmap and execution plan, and mentor the team.",
        "Review and compile documentation (RCA, BRDs, ITD, database design) and keep cloud services and third-party API integrations running reliably.",
        "Implemented JWT/claims-based authentication across distributed services.",
        "Perform end-to-end testing, evaluate AI model performance on secure data, implement AI agents and ensure responsible-AI practices.",
        "Lead code reviews and Agile ceremonies; author architecture diagrams and API documentation.",
      ],
    },
    {
      company: "Virtual Force Inc. · Lahore, Pakistan",
      title: "Principal Software Engineer",
      dateRange: "Nov 2019 – Sep 2024",
      bullets: [
        "JEB Bank (fintech): architected and built a system on AWS (EC2, ECS Fargate, RDS, S3) as DDD microservices communicating via RabbitMQ; integrated Python OCR for customer onboarding; applied SonarQube and Sentry, SOLID, CQRS, TDD, EDD, the Mediator pattern and idempotency.",
        "Bayan Credit Bureau (KSA): built an enterprise web portal with a custom multi-level workflow engine and RBAC; integrated Forti-Authenticator SSO, improving login performance by 40%; resolved 200+ technical issues.",
        "HBL Bank: developed a secure ASP.NET banking interface with RBAC, integrated the NIFT payment gateway and enforced AML/CFT compliance; resolved 150+ critical production security and backend issues.",
        "KFH Bank (Bahrain): integrated secure multi-currency banking transactions with Temenos and FX payment, with strict data access controls for internal and external users.",
        "Code Logic / Microsoft (USA): collaborated with Microsoft's engineering team on static and dynamic code-analysis tools using Roslyn (.NET) and Neo4j.",
      ],
    },
    {
      company: "Edward Milton SMC / Soft Steer · Lahore, Pakistan",
      title: "Senior Software Engineer",
      dateRange: "Mar 2018 – Oct 2019",
      bullets: [
        "Built a scheduling system, KPI dashboard and staff-management systems with ASP.NET Web API, Angular 2+, DevExtreme and SQL Server for a London-based healthcare/fitness company.",
        "Developed a scheduler for staff attendance and shift planning, with role-aware data views using RBAC.",
      ],
    },
    {
      company: "Print MIS · Lahore, Pakistan",
      title: "Software Engineer",
      dateRange: "Jan 2014 – Feb 2018",
      bullets: [
        "Developed white-label e-commerce web-to-print portals using ASP.NET MVC and AngularJS.",
        "Built a printing cost estimator that calculates production and packaging costs from materials, dimensions, quantities and other pricing parameters.",
        "Developed a product designer with custom design upload and high-quality PDF export for production and printing workflows.",
      ],
    },
    {
      company: "Soft Solutions · Lahore, Pakistan · internship, then full-time",
      title: ".NET Web Developer",
      dateRange: "Nov 2012 – Dec 2013",
      bullets: [
        "Learned JavaScript, .NET Framework, HTML, CSS and SQL Server, and built production-grade web applications for clients.",
        "Developed CMS-based ASP.NET C# applications with SQL Server, including stored procedures.",
      ],
    },
  ],
  education: [
    {
      school: "BUITEMS, University of Engineering & Technology · Quetta, Pakistan",
      degree: "BSc Computer Science",
      dateRange: "2008 – 2012",
      achievements: [
        "Grade: B+",
        "Key subjects: OOP, Data Structures, DBMS, AI, Computer Networks, OS, Compiler Construction, Software Engineering",
      ],
    },
    {
      school: "LinkedIn Learning",
      degree: "Advanced C# Language Features",
      dateRange: "Jun 2025",
      achievements: [],
    },
    {
      school: "IBM",
      degree: "Python for Data Science",
      dateRange: "Dec 2023",
      achievements: [],
    },
    {
      school: "IBM",
      degree: "Data Science Methodologies",
      dateRange: "Nov 2023",
      achievements: [],
    },
    {
      school: "Languages",
      degree: "English — C1, professional proficiency",
      dateRange: "",
      achievements: [],
    },
  ],
};
