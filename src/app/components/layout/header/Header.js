import GreyStrip from "./GreyStrip";
import SecHeader from "./SecHeader";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.divMain}>
      <GreyStrip></GreyStrip>
      <SecHeader></SecHeader>
    </div>
  );
};

export default Header;
