import { Heading, HStack, Link, Stack, Tag, Text } from "@chakra-ui/react";
import { IoLogoGithub } from "react-icons/io5";

interface ProjectProps {
  name: string;
  description: string;
  githubUrl?: string;
  skills: string[];
}

function Project({ name, description, githubUrl, skills }: ProjectProps) {
  return (
    <Stack
      mb={4}
      ml={2}
      pl={6}
      borderLeft="2px solid var(--chakra-colors-gray-300)"
    >
      <HStack gap={4}>
        <Heading size="lg">{name}</Heading>
        {githubUrl && (
          <Link href={githubUrl} target="_blank">
            <IoLogoGithub size={25} />
          </Link>
        )}
      </HStack>
      <Text>{description}</Text>
      <HStack gap={2} mt={2} flexWrap="wrap">
        {skills.map((s) => (
          <Tag.Root size="xl">
            <Tag.Label>{s}</Tag.Label>
          </Tag.Root>
        ))}
      </HStack>
    </Stack>
  );
}

export default Project;
