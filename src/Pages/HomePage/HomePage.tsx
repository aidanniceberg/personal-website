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
            I am a software engineer based in New York City with over a year of professional experience.
            Having recently graduated from Northeastern University with a BS in computer science,
            I am now settled into my first full-time role as an engineer at Vanta!
            I am passionate about all things software, particularly backend services.
            I love helping people by enhancing their online experience, especially at scale.
          </Text>
        </Stack>
        <Image
          height={200}
          rounded="md"
          src="/family.jpg"
          objectFit="contain"
        />
      </Flex>
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
    </Stack>
  );
}

export default HomePage;
