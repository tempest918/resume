// This file is the single source of truth for all resume content.
// Edit this file to update your bio, experience, skills, and projects - no HTML touching required!

import type { ResumeData } from './types';

export const resumeData: ResumeData = {
    name: "Anthony Lane Barnes",
    title: "DevSecOps Engineer & Cloud Architect",
    contact: {
        location: "Bloomington, IN",
        email: "tonylbarnes@gmail.com",
        linkedin: "linkedin.com/in/tonylbarnes/",
        github: "github.com/tempest918",
        gravatarHash: "7cdff63debe0dfcc3fca1b5a283aa4b64c641682e6911ea925e24158959fad34"
    },
    profile: "Results-driven DevOps Engineer with a Master's in Software Engineering. Specialized in designing secure, scalable cloud-native architectures and automating complex CI/CD pipelines. Expert in container orchestration, AWS infrastructure, and refactoring monolithic systems into decoupled microservices. Combines deep technical expertise in SAST/DAST security practices with a strategic approach to software delivery and reliability.",
    experience: [
        {
            title: "DevOps Engineer",
            company: "Carter Logistics LLC",
            location: "Anderson, Indiana",
            period: "Jun 2021 - Present",
            isArchive: false,
            details: [
                "Developing tools and scripts to assist in automating manual processes.",
                "Utilizing Visual Studio to debug code and to push to Azure DevOps.",
                "Web automation utilizing Selenium.",
                "Writing functions and procedures for Microsoft SQL Server to support SQL Server Reporting Services.",
                "Manage PowerBI dashboards and datasets.",
                "Create various API integrations using Postman."
            ]
        },
        {
            title: "Systems/Configuration Administrator",
            company: "Envisage Technologies LLC",
            location: "Bloomington, Indiana",
            period: "Apr 2017 - Jun 2021",
            isArchive: false,
            details: [
                "Release software upgrades and patches to all customers including manual releases and automated deployments to AWS.",
                "Create and maintain web sites and database schemas (Oracle, Microsoft SQL Server, Postgres).",
                "Maintain normal database operations on these databases (includes system monitoring and applying database patches).",
                "Set up and maintain monitoring and logging SIEM systems.",
                "Write scripts to automate manual processes (Powershell, Bash).",
                "Set up backups, perform data recovery and data migration.",
                "Perform upgrades and patches to internal tools.",
                "Troubleshooting technical issues with hosting partners, customers and development team."
            ]
        },
        {
            title: "Retail Sales Consultant",
            company: "AT&T",
            location: "Bloomington, Indiana",
            period: "Oct 2016 - Apr 2017",
            isArchive: true,
            details: [
                "Troubleshoot and solve customer's technical and billing problems.",
                "Offer and sell appropriate services to customers to meet their needs.",
                "Provide excellent customer service."
            ]
        },
        {
            title: "Children's Pastor",
            company: "First Assembly of God",
            location: "Ellettsville, Indiana",
            period: "Jul 2014 - Oct 2016",
            isArchive: true,
            details: [
                "Prepared messages for Sunday and Wednesday night services.",
                "Organized children's activities and VBS.",
                "Managed the church website and digital media."
            ]
        },
        {
            title: "Field Network Technician",
            company: "Cox Communications",
            location: "Tulsa, Oklahoma",
            period: "Oct 2012 - Jul 2014",
            isArchive: true,
            details: [
                "Repaired and resolved aerial and underground plant.",
                "Maintained plant from fiber nodes to all active devices on the plant.",
                "Helped to establish a night shift for plant maintenance."
            ]
        },
        {
            title: "Dispatcher",
            company: "Cox Communications",
            location: "Tulsa, Oklahoma",
            period: "Apr 2011 - Oct 2012",
            isArchive: true,
            details: [
                "Helped technicians over the phone with a variety of technical issues.",
                "Ran reports to ensure work orders were properly completed.",
                "Learned continuously to keep up with the changing work environment."
            ]
        },
        {
            title: "Universal Home Technician",
            company: "Cox Communications",
            location: "Tulsa, Oklahoma",
            period: "Sep 2008 - Apr 2011",
            isArchive: true,
            details: [
                "Installed and troubleshoot cable services.",
                "Formed bonds with customers to enhance company image.",
                "Shared information with teammates to increase productivity."
            ]
        },
        {
            title: "Children's Pastor",
            company: "CommonGround Church",
            location: "Tulsa, Oklahoma",
            period: "Jul 2010 - Jul 2014",
            isArchive: true,
            details: [
                "Preached on Sunday morning.",
                "Organized a team of volunteers for 2 services.",
                "Prepared my own sermons each week."
            ]
        },
        {
            title: "Youth Pastor",
            company: "New Bethel Assembly of God",
            location: "Coweta, Oklahoma",
            period: "Feb 2007 - Nov 2008",
            isArchive: true,
            details: [
                "Prepared messages for Sunday and Wednesday services.",
                "Designed graphics and slides."
            ]
        },
        {
            title: "Electrical Apprentice",
            company: "Midland Technical",
            location: "Tulsa, Oklahoma",
            period: "Jan 2007 - Jun 2008",
            isArchive: true,
            details: [
                "Ran conduit in a commercial environment.",
                "Pulled wire feeds for new panels and switch gear.",
                "Installed various types of electronic devices."
            ]
        },
        {
            title: "Overnight Stocker",
            company: "Lowe's Companies, Inc.",
            location: "Broken Arrow, Oklahoma",
            period: "Sep 2006 - Jan 2007",
            isArchive: true,
            details: [
                "Unloaded trucks.",
                "Stocked merchandise.",
                "Completed other daily tasks and special projects."
            ]
        },
        {
            title: "Sales Associate/Interim Manager",
            company: "Payless ShoeSource",
            location: "Tulsa, Oklahoma",
            period: "Jun 2003 - Dec 2006",
            isArchive: true,
            details: [
                "Trained new employees.",
                "Opened and closed store.",
                "Assisted customers with purchases."
            ]
        },
        {
            title: "Sales Associate",
            company: "Just For Feet",
            location: "Tulsa, Oklahoma",
            period: "May 2000 - Aug 2002",
            isArchive: true,
            details: [
                "Sold shoes based on commission.",
                "Assisted customers with finding their correct shoe sizes.",
                "Cleaned the facilities."
            ]
        }
    ],
    skills: {
        "Cloud & DevOps": [
            "AWS (EKS, Beanstalk, CloudFormation)",
            "Azure DevOps & Cloud Management",
            "Kubernetes & Docker Containerization",
            "GitLab CI/CD Pipelines",
            "Infrastructure as Code",
            "Artifact Management (ECR/GitLab Registry)"
        ],
        "DevSecOps & Security": [
            "SAST/DAST Vulnerability Analysis",
            "WAF & ACL Implementation",
            "IAM & Least Privilege Security",
            "SIEM Administration (Splunk/Graylog)",
            "Firewall Rules & Network Security",
            "Secure Software Supply Chain"
        ],
        "Development & Automation": [
            "Python, C#, Node.js, PHP",
            "Microservices Architecture",
            "Web Automation (Selenium)",
            "Scripting (PowerShell/Bash)",
            "API Development & Integration (Postman)",
            "Visual Studio & Debugging"
        ],
        "Data & Observability": [
            "Prometheus & Grafana Monitoring",
            "Microsoft SQL Server & SSRS",
            "Database Administration (Oracle/Postgres)",
            "PowerBI Dashboards & Analytics",
            "Log Aggregation (Loki/CloudWatch)",
            "KPI Definition & Alerting"
        ]
    },
    education: [
        {
            title: "Master of Science, Software Engineering - DevOps Engineering",
            institution: "Western Governor's University",
            date: "January 13, 2026"
        },
        {
            title: "Bachelor of Science in Software Engineering",
            institution: "Western Governor's University",
            date: "August 22, 2025"
        },
        {
            title: "Associate of Science in Software Development",
            institution: "Ivy Tech Community College",
            date: "May 12, 2024"
        },
        {
            title: "Software Development Technical Certificate",
            institution: "Ivy Tech Community College",
            date: "May 12, 2024"
        },
        {
            title: "Indiana College Core Technical Certificate",
            institution: "Ivy Tech Community College",
            date: "May 12, 2024"
        },
        {
            title: "Software Application Developer Certificate",
            institution: "Ivy Tech Community College",
            date: "May 12, 2024"
        },
        {
            title: "Associate of Arts in Education",
            institution: "Tulsa Community College",
            date: "2006"
        }
    ],
    certifications: [
        {
            title: "Front-End Developer",
            issuer: "WGU",
            date: "July 8, 2025",
            img: "wgu-frontend-developer-certificate.png",
            link: "https://badgr.com/public/assertions/BOHvhokoThuUCqd5QZzBww"
        },
        {
            title: "Certified Cloud Practitioner",
            issuer: "AWS",
            date: "July 16, 2025",
            img: "aws-certified-cloud-practicioner-foundational.png",
            link: "https://www.credly.com/badges/6a4b28cc-fe63-40ff-a85e-2aee079b65d3"
        },
        {
            title: "Project+",
            issuer: "CompTIA",
            date: "July 26, 2025",
            img: "comptia-project+-certificate.png",
            link: "https://www.certmetrics.com/comptia/public/verification.aspx?code=7FKS35D501F12B8J"
        }
    ],
    projects: [
        {
            title: "DevOps Security: Vulnerability Management",
            description: "Conducted security analysis using SAST/DAST tools. Identified and remediated critical vulnerabilities including SQL and Command Injection. Implemented WAF and ACLs for defense.",
            technologies: ["GitLab SAST/DAST", "Node.js", "Express", "WAF", "ACLs"]
        },
        {
            title: "Container Orchestration & CI/CD",
            description: "Designed a comprehensive CI/CD pipeline automating build, test, and deployment to AWS EKS. Implemented multi-stage Docker builds and Kubernetes HPA/Ingress.",
            technologies: ["Kubernetes", "Docker", "AWS EKS", "GitLab CI/CD", "Helm"]
        },
        {
            title: "Kubernetes Performance Monitoring",
            description: "Implemented Prometheus and Grafana for cluster monitoring. Defined 99.9% uptime KPIs, configured alerts, and optimized resource efficiency with scaling strategies.",
            technologies: ["Prometheus", "Grafana", "Kubernetes", "Alerting", "HPA"]
        },
        {
            title: "Secure Cloud Architecture",
            description: "Architected a secure AWS environment using Elastic Beanstalk and CloudFront. Implemented Least Privilege IAM roles, strict Security Groups, and HTTPS encryption.",
            technologies: ["AWS Elastic Beanstalk", "CloudFront", "IAM", "CloudFormation", "PHP"]
        },
        {
            title: "Artifact Management System",
            description: "Established a centralized artifact strategy using Amazon ECR and GitLab Package Registry. Standardized versioning and automated container validation.",
            technologies: ["Amazon ECR", "GitLab Package Registry", "Docker", "CI/CD"]
        },
        {
            title: "Software Architecture & Design Patterns",
            description: "Analyzed complex business requirements to design scalable cloud-native architectures. Refactored a legacy monolithic Python system into a decoupled microservices ecosystem with orchestration.",
            technologies: ["Python", "Microservices", "Design Patterns", "Cloud Architecture", "Refactoring"]
        }
    ]
};