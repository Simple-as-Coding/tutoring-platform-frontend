import { useState } from "react";
import classes from "./../assets/styles/Layout.module.css";

const Header = () => {
  const [classNames, setClassNames] = useState(
    `${classes.NavbarLinks} ${classes.active}`
  );

  const handleClick = () => {
    if (classNames === `${classes.NavbarLinks} ${classes.active}`) {
      setClassNames(classes.NavbarLinks);
    } else {
      setClassNames(`${classes.NavbarLinks} ${classes.active}`);
    }
  };

  return (
    <div className={classes.Header}>
      <div className={classes.Navbar}>
        <div className={classes.BrandTitle}>Tutoring Platform</div>
        <a href="#" className={classes.toggleButton} onClick={handleClick}>
          <span className={classes.Bar}></span>
          <span className={classes.Bar}></span>
          <span className={classes.Bar}></span>
        </a>
        <div className={classNames}>
          <ul>
            <li>
              <a href="#">Log in</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">ToS</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
