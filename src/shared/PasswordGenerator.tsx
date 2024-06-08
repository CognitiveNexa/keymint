import { Box, Stack } from "@chakra-ui/react";
import Appbar from "./AppHeader";
import ControlPanel from "./ControlPanel";

export default function PasswordGenerator() {
  return (
    <Box
      width={"100vw"}
      bg={"ButtonFace"}
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack width={"35vw"} bg={"transparent"}>
        <Appbar />
        <ControlPanel />
      </Stack>
    </Box>
  );
}
