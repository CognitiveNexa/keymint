import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import PasswordGenerator from "./shared/PasswordGenerator";

const theme = extendTheme({
  colors: {
    brand: "#7CB9E8",
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <PasswordGenerator />
    </ChakraProvider>
  );
}

export default App;
