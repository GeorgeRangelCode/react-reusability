import classnames from "classnames";

const Button = ({ children, size, className, ...rest }) => {
  /**
   * Challenge: See if you can fix the problem with the
   * conflicting `className` props. Doesn't need to be
   * elegant, just see if you can get the button to be
   * both large AND with green text
   */

  let sizeClass = size ? `button-${size}` : "";
  const allClassNames = classnames(sizeClass, className);

  return (
    <button {...rest} className={allClassNames}>
      {children}
    </button>
  );
};

export default Button;
