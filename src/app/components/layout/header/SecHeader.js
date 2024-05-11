import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoBagRemoveOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import { FaAngleDown } from "react-icons/fa6";

import classes from "./SecHeader.module.css";

const SecHeader = () => {
  return (
    <div className={classes.header}>
      <div className={classes.contents}>
        <div className={classes.logo}>
          <span className={classes.logomain}></span>
        </div>
        <div className={classes.text}>LOGO</div>
        <div className={classes.icons2}>
          <span className={classes.icons2main}>
            <CiSearch size={24}></CiSearch>
          </span>
          <span className={classes.icons2main}>
            <IoIosHeartEmpty size={24}></IoIosHeartEmpty>
          </span>
          <span className={classes.icons2main}>
            <IoBagRemoveOutline size={24}></IoBagRemoveOutline>
          </span>
          <span className={classes.icons2main}>
            <HiOutlineUser size={24}></HiOutlineUser>
          </span>
          <span className={classes.icons2languge}>
            <span className={classes.eng}>ENG</span>
            <span className={classes.downarrow}>
              <FaAngleDown size={16}></FaAngleDown>
            </span>
          </span>
        </div>
      </div>
      <div className={classes.tabs}>
        <div className={classes.tab1}>
          <span className={classes.line}></span>
          <span className={classes.text1}>SHOP</span>
        </div>
        <div className={classes.tab2}>
          <span className={classes.line}></span>
          <span className={classes.text2}>SKILLS</span>
        </div>
        <div className={classes.tab3}>
          <span className={classes.line}></span>
          <span className={classes.text3}>STORIES</span>
        </div>
        <div className={classes.tab4}>
          <span className={classes.line}></span>
          <span className={classes.text4}>ABOUT</span>
        </div>
        <div className={classes.tab5}>
          <span className={classes.line}></span>
          <span className={classes.text5}>CONTACT US</span>
        </div>
      </div>
    </div>
  );
};

export default SecHeader;
