import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import StrengthInput from "./StranghtInput";
import PasswordLengthChanger from "./PasswordLengthChanger";
import { DEFAULT_PASSWORD_LENGTH } from "@/constants";
import PasswordSettings from "./PasswordSettings";
import { passwordGenerator } from "@/utils/passwordGenerator";

export default function ControlPanel() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(DEFAULT_PASSWORD_LENGTH);
  const [settingOptions, setSettingOptions] = useState(DEFAULT_SETTING_STATE);

  const handleChangeSetting = (key: string, value: boolean) => {
    setSettingOptions((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  useEffect(() => {
    handleGenerate();
  }, [passwordLength]);

  const handleGenerate = () => {
    const result = passwordGenerator({
      ...settingOptions,
      length: passwordLength,
    });
    setPassword(result);
  };

  return (
    <Stack>
      <StrengthInput value={password} />
      <Card maxW="inherit">
        <CardBody as={Stack} gap={6}>
          <PasswordLengthChanger
            value={passwordLength}
            onChange={setPasswordLength}
          />

          <PasswordSettings
            onChange={handleChangeSetting}
            value={settingOptions}
          />
        </CardBody>
        <Divider />
        <CardFooter>
          <Button width={"100%"} variant="solid" onClick={handleGenerate}>
            Generate
          </Button>
        </CardFooter>
      </Card>
    </Stack>
  );
}

const DEFAULT_SETTING_STATE = {
  lowerLetter: true,
  upperLetter: true,
  number: true,
  symbol: false,
  excludeDuplicates: true,
  includeSpaces: false,
  excludeSimilar: false,
  includeAmbiguous: false,
};
