import {
  DEFAULT_PASSWORD_LENGTH,
  MIN_PASSWORD_LENGTH,
  MAX_PASSWORD_LENGTH,
} from "@/constants";
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
} from "@chakra-ui/react";

interface PasswordLengthChangerProps {
  value: number;
  onChange: (value: number) => void;
}

export default function PasswordLengthChanger({
  onChange,
  value,
}: PasswordLengthChangerProps) {
  return (
    <Stack>
      <Stack flexDirection={"row"} justifyContent={"space-between"}>
        <Text fontSize="large" fontWeight={600}>
          Password length
        </Text>
        <Text>{value} charactors</Text>
      </Stack>
      <Slider
        defaultValue={DEFAULT_PASSWORD_LENGTH}
        min={MIN_PASSWORD_LENGTH}
        max={MAX_PASSWORD_LENGTH}
        value={value}
        onChange={onChange}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>

        <SliderThumb />
      </Slider>
    </Stack>
  );
}
