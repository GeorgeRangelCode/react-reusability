const Button = (props) => {
  const { children, handleClick } = props;
  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
