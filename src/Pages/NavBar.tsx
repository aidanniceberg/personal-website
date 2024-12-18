import {
  Box,
  Button,
  HStack,
  Link,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTrigger,
} from "../components/ui/drawer";
import { IoLogoGithub, IoLogoLinkedin, IoMenuOutline } from "react-icons/io5";

function NavBar() {
  const useMenu = useBreakpointValue({ base: true, md: false });

  const scrollToArea = (top: number) => {
    setTimeout(() => (window.scrollTo({ top, behavior: "smooth" }), 100));
  };

  const scrollToSection = (id: string) => {
    const offset = 75;
    const section = document.getElementById(id);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      scrollToArea(sectionTop - offset);
    }
  };

  return (
    <Stack
      align="center"
      pt={2}
      pb={2}
      pr={8}
      pl={8}
      background="var(--chakra-colors-gray-100)"
      position="fixed"
      top={0}
      width="100%"
    >
      <HStack
        width={["100%", "90%", "80%"]}
        maxWidth={1080}
        justify="space-between"
      >
        {useMenu ? (
          <>
            <Box flex={1}></Box>
            <DrawerRoot>
              <DrawerBackdrop />
              <DrawerTrigger asChild>
                <Button variant="plain" padding={0}>
                  <IoMenuOutline size={25} />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader></DrawerHeader>
                <DrawerBody>
                  <DrawerActionTrigger asChild>
                    <Stack gap={0}>
                      <Button
                        variant="ghost"
                        size="lg"
                        onClick={() => scrollToSection("about")}
                        pl={4}
                        pr={4}
                      >
                        About
                      </Button>
                      <Button
                        variant="ghost"
                        size="lg"
                        onClick={() => scrollToSection("education")}
                        pl={4}
                        pr={4}
                      >
                        Education
                      </Button>
                      <Button
                        variant="ghost"
                        size="lg"
                        onClick={() => scrollToSection("experience")}
                        pl={4}
                        pr={4}
                      >
                        Experience
                      </Button>
                      <Button
                        variant="ghost"
                        size="lg"
                        onClick={() => scrollToSection("projects")}
                        pl={4}
                        pr={4}
                      >
                        Projects
                      </Button>
                      <HStack gap={8} justify="center" mt={8}>
                        <Link
                          href="https://linkedin.com/in/aidanniceberg"
                          target="_blank"
                        >
                          <IoLogoLinkedin size={25} />
                        </Link>
                        <Link
                          href="https://github.com/aidanniceberg"
                          target="_blank"
                        >
                          <IoLogoGithub size={25} />
                        </Link>
                      </HStack>
                    </Stack>
                  </DrawerActionTrigger>
                </DrawerBody>
                <DrawerCloseTrigger />
              </DrawerContent>
            </DrawerRoot>
          </>
        ) : (
          <>
            <HStack gap={8}>
              <Link
                href="https://linkedin.com/in/aidanniceberg"
                target="_blank"
              >
                <IoLogoLinkedin size={25} />
              </Link>
              <Link href="https://github.com/aidanniceberg" target="_blank">
                <IoLogoGithub size={25} />
              </Link>
            </HStack>
            <HStack gap={0}>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => scrollToSection("about")}
                pl={4}
                pr={4}
              >
                About
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => scrollToSection("education")}
                pl={4}
                pr={4}
              >
                Education
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => scrollToSection("experience")}
                pl={4}
                pr={4}
              >
                Experience
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => scrollToSection("projects")}
                pl={4}
                pr={4}
              >
                Projects
              </Button>
            </HStack>
          </>
        )}
      </HStack>
    </Stack>
  );
}

export default NavBar;
