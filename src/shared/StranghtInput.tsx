import { useState } from "react";
import { Input, Card, CardBody, Stack, IconButton } from "@chakra-ui/react";
import { CheckIcon, CopyIcon } from "@chakra-ui/icons";
import Strengthbar from "./Strengthbar";

interface StrengthInputProps {
  value: string;
}

export default function StrengthInput({ value }: StrengthInputProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <Card>
      <CardBody>
        <Stack gap={2}>
          <Stack flexDirection={"row"}>
            <Input placeholder="Password" size={"lg"} value={value} />
            <IconButton
              size={"lg"}
              aria-label={copied ? "Copied" : "Copy"}
              onClick={handleCopy}
              icon={copied ? <CheckIcon /> : <CopyIcon />}
            />
          </Stack>

          <Strengthbar password={value} />
        </Stack>
      </CardBody>
    </Card>
  );
}
