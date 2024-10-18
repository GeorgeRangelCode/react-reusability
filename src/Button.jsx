const Button = ({ children, ...rest }) => {
  console.log("rest", rest);
  return <button {...rest}>{children}</button>;
};

export default Button;
