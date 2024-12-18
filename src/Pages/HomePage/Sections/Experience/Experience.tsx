import { Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";

interface ExperienceProps {
  company: string;
  role: string;
  thumbnail: string;
  description: string;
  timeline: string;
  location: string;
}

function Experience({
  company,
  role,
  thumbnail,
  description,
  timeline,
  location,
}: ExperienceProps) {
  return (
    <Stack
      mt={4}
      mb={2}
      ml={2}
      pl={6}
      borderLeft="2px solid var(--chakra-colors-gray-300)"
    >
      <HStack gap={3} align="end">
        <Image height={50} rounded="md" src={thumbnail} />
        <Stack gap={0}>
          <Heading size="lg" lineHeight={1.25}>
            {company}
          </Heading>
          <Heading size="md" lineHeight={1.25} fontWeight={400}>
            {role}
          </Heading>
        </Stack>
      </HStack>
      <HStack gap={4} mt={2}>
        <HStack gap={2} align="center">
          <IoCalendarOutline />
          <Text fontStyle="italic">{timeline}</Text>
        </HStack>
        <HStack gap={1} align="center">
          <IoLocationOutline />
          <Text fontStyle="italic">{location}</Text>
        </HStack>
      </HStack>
      <Text>{description}</Text>
    </Stack>
  );
}

export default Experience;
