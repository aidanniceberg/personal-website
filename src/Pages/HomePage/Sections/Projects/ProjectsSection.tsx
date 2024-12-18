import { Heading, Stack } from "@chakra-ui/react";
import HomePageSection from "../../HomePageSection";
import Project from "./Project";

function ProjectsSection() {
  return (
    <HomePageSection title="Projects" id="projects">
      <Stack>
        <Heading fontWeight={400}>2024</Heading>
        <Project
        name="Personal Website"
        description="Written in Typescript/React. Deployed to AWS S3 and served via AWS CloudFront."
        githubUrl="https://github.com/aidanniceberg/personal-website"
        skills={["Typescript", "React", "S3", "CloudFront", "Route53"]} />
        <Project
        name="SCOUT"
        description="Developed a search and review service for Boston area bars. Designed backend microservice architecture, built Python/Flask APIs, and deployed to AWS. Integrated with various third party APIs (Google API, Foursquare API) to aggregate metadata for venues."
        skills={["Python", "Flask", "Nginx", "Cognito", "DynamoDB", "EC2", "IAM", "Lambda", "Load Balancer", "OpenSearch", "RDS"]} />
        <Project
        name="Mini Search Engine"
        description="Full-stack project using Elasticsearch to facilitate low latency web searches. A web crawler uses Selenium to scrape and store web content, which is surfaced by a Flask API to a simple React frontend."
        githubUrl="https://github.com/aidanniceberg/mini-search-engine"
        skills={["Elasticsearch", "Python", "React"]} />
        <Project
        name="API Template"
        description="Comprehensively documented Flask API template using a multi-layered architecture consisting of endpoint, service, and data access layers to emphasize separation of concerns."
        githubUrl="https://github.com/aidanniceberg/api-template"
        skills={["Python", "Flask", "PostgreSQL", "Docker"]} />
        <Heading fontWeight={400}>2023</Heading>
        <Project
        name="Twitter Clone"
        description="Full-stack dockerized social media platform allowing users to create posts, follow users, and interact with their posts. Supports native authentication."
        githubUrl="https://github.com/aidanniceberg/twitter-clone"
        skills={["Python", "FastAPI", "React", "MySQL", "Docker"]} />
      </Stack>
    </HomePageSection>
  );
}

export default ProjectsSection;
