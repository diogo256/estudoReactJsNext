import { ButtonContainer } from "./styles";

export const Button = ({
  label,
  onClick,
}: {
  label: React.ReactNode;
  onClick?: () => void;
}) => {
  return <ButtonContainer onClick={onClick} type="button">{label}</ButtonContainer>;
};
