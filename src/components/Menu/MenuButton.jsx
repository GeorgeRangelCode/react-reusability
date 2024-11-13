import Button from "../../Button";

export default function MenuButton({ children, onClick }) {
  return <Button onClick={onClick}>{children}</Button>;
}
