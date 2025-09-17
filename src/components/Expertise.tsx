import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faReact, faAws, faDocker } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Java",
    "Spring Boot",
    "Spring Cloud",
    "Hibernate",
    "Microservices",
    "REST / SOAP",
    "OAuth2 / JWT",
    "JUnit / Mockito",
    "Swagger / OpenAPI"
];

const labelsSecond = [
    "React.js",
    "Redux",
    "Angular",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Sass"
];

const labelsThird = [
    "AWS (EC2, S3, RDS, Lambda, Terraform, Kubernetes)",
    "Azure (App Services, Functions, SQL, Blob Storage)",
    "Docker",
    "Jenkins / GitHub Actions",
    "Maven / Gradle",
    "SonarQube",
    "Kafka / RabbitMQ / ActiveMQ"
];

const labelsFourth = [
    "Oracle",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Cassandra",
    "DynamoDB"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">

                    <div className="skill">
                        <FontAwesomeIcon icon={faJava} size="3x"/>
                        <h3>Backend Development</h3>
                        <p>7+ years of experience designing and developing enterprise-grade applications with 
                           Java, Spring Boot, and Spring Cloud. Skilled in building secure, scalable, and resilient 
                           microservices architectures with RESTful and SOAP APIs.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x"/>
                        <h3>Frontend Development</h3>
                        <p>Proficient in React.js, Redux, and Angular for building responsive, modular, and 
                           user-centric applications. Experienced in TypeScript, JavaScript, and modern frontend 
                           tooling for high-performance web apps.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faAws} size="3x"/>
                        <h3>Cloud & DevOps</h3>
                        <p>Hands-on experience with AWS and Azure for cloud-native deployments, Infrastructure as 
                           Code, and automation. Strong background in DevOps practices, CI/CD pipelines, 
                           containerization, and orchestration.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDocker} size="3x"/>
                        <h3>Databases</h3>
                        <p>Extensive experience working with relational and NoSQL databases, optimizing performance, 
                           and implementing data models for enterprise-scale systems.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Databases:</span>
                            {labelsFourth.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Expertise;
