import { Box, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import HomePageSection from "../../HomePageSection";
import {
  IoLocationOutline,
  IoPencilOutline,
  IoSchoolOutline,
  IoStatsChartOutline,
  IoTimerOutline,
} from "react-icons/io5";
import Transcript from "./Transcript";

function Education() {
  return (
    <HomePageSection title="Education" id="education">
      <Stack
        direction={["column", "column", "row"]}
        flexWrap="wrap"
        align="start"
        gapX={8}
      >
        <Stack>
          <HStack gap={2} minWidth={150} align="start">
            <Box mt={0.5}>
              <IoSchoolOutline size={24} />
            </Box>
            <Stack gap={0}>
              <Heading size="lg">Northeastern University</Heading>
              <Text>Major: Computer Science</Text>
              <Text>Concentration: Artificial Intelligence</Text>
              <Text>Minor: Business Analytics</Text>
            </Stack>
          </HStack>
        </Stack>
        <Stack>
          <HStack gap={2} minWidth={150} align="start">
            <IoTimerOutline size={24} />
            <Text>Sept 2021 to May 2025</Text>
          </HStack>
          <HStack gap={2} minWidth={75} align="start">
            <IoLocationOutline size={24} />
            <Text>Boston, MA</Text>
          </HStack>
          <HStack gap={2} minWidth={75} align="start">
            <IoStatsChartOutline size={24} />
            <Text>3.9 / 4.0</Text>
          </HStack>
        </Stack>
        <HStack gap={2} minWidth={150} align="start">
          <Box mt={0.5}>
            <IoPencilOutline size={24} />
          </Box>
          <Stack gap={0}>
            <Text>Object Oriented Design</Text>
            <Text>Algorithms & Data</Text>
            <Text>Machine Learning 1</Text>
            <Transcript />
          </Stack>
        </HStack>
      </Stack>
    </HomePageSection>
  );
}

export default Education;
