import classes from "./GreyStrip.module.css";

const GreyStrip = () => {
  return (
    <div className={classes.greystrip}>
      <div className={classes.frame}>
        <span>x</span>
        <span className={classes.text}>Lorem ipsum dolor</span>
      </div>
      <div className={classes.frame}>
        <span>x</span>
        <span className={classes.text}>Lorem ipsum dolor</span>
      </div>
      <div className={classes.frame}>
        <span>x</span>
        <span className={classes.text}>Lorem ipsum dolor</span>
      </div>
    </div>
  );
};

export default GreyStrip;
