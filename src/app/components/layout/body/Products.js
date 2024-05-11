import classes from "./Products.module.css";

const Products = () => {
  return (
    <div className={classes.products}>
      <div className={classes.heading}>
        <span className={classes.headingtext}>NEWPRODUCT</span>
      </div>
      <h3 className={classes.productstext}>Products will be shown here</h3>
    </div>
  );
};

export default Products;
