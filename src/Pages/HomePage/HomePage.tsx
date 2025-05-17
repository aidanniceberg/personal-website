import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import ExperienceSection from "./Sections/Experience/ExperienceSection";
import EducationSection from "./Sections/Education/EducationSection";
import ProjectsSection from "./Sections/Projects/ProjectsSection";

function HomePage() {
  return (
    <Stack>
      <Flex direction={["column", "column", "row"]} gap={8} align={["center", "center", "end"]} id="about">
        <Stack gap={4}>
          <Heading size="3xl">Aidan Niceberg</Heading>
          <Text>
            I am a Northeastern University graduate with a BS in computer science.
            I have a year of professional experience in software development, split
            between co-ops at WHOOP and Wayfair. I am passionate about all things
            software, particularly backend microservices. I love helping people
            by enhancing their online experience, especially at scale.
          </Text>
        </Stack>
        <Image
          height={200}
          rounded="md"
          src="/family.jpg"
          objectFit="contain"
        />
      </Flex>
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
    </Stack>
  );
}

export default HomePage;
