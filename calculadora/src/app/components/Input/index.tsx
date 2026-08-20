import { InputContainer } from "./styles";

export const Input = ({
  value,
}: {
  value: string;
}) => {
  return (
    <InputContainer>
        <input
            type="text"
            disabled
            value={value}
        />
    </InputContainer>
  );
}