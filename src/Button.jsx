import classnames from "classnames";

const Button = ({ children, size, variant, className, ...rest }) => {
  /**
   * Challenge:
   *
   * Accept a `variant` prop and style the Button component
   * accordingly. The values can be `success`, `warning`, or `danger`.
   * Check the Figma design for the specific colors to be used for each
   * variant.
   */

  let sizeClass = size && `button-${size}`;
  let variantClass = variant && `button-${variant}`;
  const allClassNames = classnames(sizeClass, variantClass, className);

  return (
    <button {...rest} className={allClassNames}>
      {children}
    </button>
  );
};

export default Button;
