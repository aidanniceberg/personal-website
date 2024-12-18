import React from "react";
import { Box, Heading, Stack } from "@chakra-ui/react";

interface HomePageSectionProps {
  title: string;
  id?: string;
  children: React.JSX.Element;
}

function HomePageSection({ title, id, children }: HomePageSectionProps) {
  return (
    <Stack mt={4} mb={4} id={id}>
      <Heading>{title}</Heading>
      <Box>{children}</Box>
    </Stack>
  );
}

export default HomePageSection;
