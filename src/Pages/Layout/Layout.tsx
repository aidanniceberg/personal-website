import { Stack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";

function Layout() {
  return (
    <Stack>
      <NavBar />
      <Stack align="center" mt={12}>
        <Stack width={["100%", "90%", "80%"]} maxWidth={1080} padding={8}>
          <Outlet />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Layout;
