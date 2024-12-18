import { Stack } from "@chakra-ui/react";
import HomePageSection from "../../HomePageSection";
import Experience from "../Experience/Experience";

function ExperienceSection() {
  return (
    <HomePageSection title="Experience" id="experience">
      <Stack>
        <Experience
          company="WHOOP"
          role="Software Engineer Co-op"
          thumbnail="/whoop.jpg"
          description="On the Hardware Accelerate team, I helped build WHOOP's internal tools - mainly, I developed a full-stack platform for engineers to run regression tests on hardware. The backend was created with Python and Flask, integrated with S3, Sentry, and Slack, and deployed to AWS. Other technologies include Docker, Redis, and React."
          timeline="Jan - June 2024"
          location="Boston, MA"
        />
        <Experience
          company="Wayfair"
          role="Software Engineer Co-op"
          thumbnail="/wayfair.jpeg"
          description="On the Talent Engineering team, I helped build the backend Python/FastAPI microservice powering Wayfair's careers site. Contributions include caching with Redis, integrations with third party Applicant Tracking System APIs, and assistance with database decoupling."
          timeline="Jan - Aug 2023"
          location="Boston, MA"
        />
      </Stack>
    </HomePageSection>
  );
}

export default ExperienceSection;
