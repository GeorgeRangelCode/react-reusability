import { IoPersonSharp } from "react-icons/io5";
import classNames from "classnames";
import "./styles.css";
/**
 * Challenge: Create a flexible Avatar component!
 *
 * Check the slides for notes on how the component
 * should be used.
 *
 * Each of the 3 different avatars should have a
 * wrapper div with the classes below:
 *
 * With image: `avatar`
 * With initials: `avatar avatar-letters`
 * Anonymous: `avatar avatar-icon`
 *
 * E.g. <Avatar>BZ</Avatar> should render
 * <div className="avatar avatar-letters">...</div>
 *
 * Check the hints.md file if you are really stuck.
 *
 * EXTRA CREDIT:
 * Randomize the background color of the non-image
 * avatars. Check the styles.css for some pre-written
 * color classes to add to the wrapper div.
 */

export default function Avatar({ src, alt, children }) {
  const colorClasses = ["navy", "pink", "red", "blue", "green"];
  const indexRandomColor = Math.floor(Math.random() * colorClasses.length);
  const randomColor = colorClasses[indexRandomColor];
  let avatarLetters =
    children && `avatar-letters ${colorClasses[indexRandomColor]}`;
  let avatarIcon = !src && !children && `avatar-icon ${randomColor}`;
  const allClassNames = classNames("avatar", avatarLetters, avatarIcon);

  return (
    <div className={allClassNames}>
      {src && <img src={src} alt={alt} />}
      {children && children}
      {!src && !children && <IoPersonSharp />}
    </div>
  );
}
