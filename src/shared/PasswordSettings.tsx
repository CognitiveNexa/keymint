import {
  Checkbox,
  FormControl,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

interface OptionProps {
  label: string;
  onChange: (value: boolean) => void;
  value: boolean;
}

interface PasswordSettingsProps {
  onChange: (key: string, value: boolean) => void;
  value: PasswordOptions;
}

interface PasswordOptions {
  lowerLetter: boolean;
  upperLetter: boolean;
  number: boolean;
  symbol: boolean;
  excludeDuplicates: boolean;
  includeSpaces: boolean;
  excludeSimilar: boolean;
  includeAmbiguous: boolean;
}

export default function PasswordSettings({
  onChange,
  value: checkboxState,
}: PasswordSettingsProps) {
  const Option = ({ label, onChange, value }: OptionProps) => {
    return (
      <Checkbox
        isChecked={value}
        onChange={(e) => onChange(e.target.checked)}
        fontWeight={500}
      >
        {label}
      </Checkbox>
    );
  };

  return (
    <Stack>
      <Text fontSize="large" fontWeight={600}>
        Password settings
      </Text>
      <FormControl as={SimpleGrid} columns={{ base: 4, lg: 2 }} gap={2}>
        <Option
          label={"Lowercase (a-z)"}
          onChange={(value) => onChange("lowerLetter", value)}
          value={checkboxState.lowerLetter}
        />
        <Option
          label={"Uppercase (A-Z)"}
          onChange={(value) => onChange("upperLetter", value)}
          value={checkboxState.upperLetter}
        />
        <Option
          label={"Numbers (0-9)"}
          onChange={(value) => onChange("number", value)}
          value={checkboxState.number}
        />
        <Option
          label={"Symbols (@#$<?)"}
          onChange={(value) => onChange("symbol", value)}
          value={checkboxState.symbol}
        />
        <Option
          label={"Exclude Duplicates"}
          onChange={(value) => onChange("excludeDuplicates", value)}
          value={checkboxState.excludeDuplicates}
        />
        <Option
          label={"Include Spaces"}
          onChange={(value) => onChange("includeSpaces", value)}
          value={checkboxState.includeSpaces}
        />
        <Option
          label={"Ex Similar Ch (iIl1oO0)"}
          onChange={(value) => onChange("excludeSimilar", value)}
          value={checkboxState.excludeSimilar}
        />
        <Option
          label={"In Ambiguous Ch (^(){}[]~)"}
          onChange={(value) => onChange("includeAmbiguous", value)}
          value={checkboxState.includeAmbiguous}
        />
      </FormControl>
    </Stack>
  );
}
