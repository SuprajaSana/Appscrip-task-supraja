"use client";
import { useState } from "react";

import { FaAngleDown } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

import Filters from "./Filters";
import Products from "./Products";

import classes from "./SecHeading.module.css";

const SecHeading = () => {
  const [recommendedfilter, setRecommendedFilter] = useState(false);
  const [showFilter, setShowFilter] = useState(true);

  return (
    <>
      <div className={classes.sechead}>
        <div className={classes.topline}></div>
        <div className={classes.mainbody}>
          <span className={classes.items}>3425 Items</span>
          {showFilter && (
            <span className={classes.hidefilter}>
              <span className={classes.backwardarrow}>
                <IoChevronBackOutline
                  style={{ marginRight: "6px" }}
                  onClick={() => setShowFilter(false)}
                  size={16}
                ></IoChevronBackOutline>
              </span>
              <span className={classes.filtertext}>HIDE FILTER</span>
            </span>
          )}
          {!showFilter && (
            <span className={classes.hidefilter}>
              <span className={classes.backwardarrow}>
                <IoIosArrowForward
                  style={{ marginRight: "6px" }}
                  onClick={() => setShowFilter(true)}
                  size={16}
                ></IoIosArrowForward>
              </span>
              <span className={classes.filtertext}>SHOW FILTER</span>
            </span>
          )}
          <span className={classes.recommended}>
            <span className={classes.recommendedmain}>
              <span className={classes.recommendedtext}>RECOMMENDED</span>
              <span className={classes.recommendedfilter}>
                <span className={classes.rect}>
                  <span className={classes.rectarrow}>
                    <FaAngleDown
                      onClick={() => {
                        setRecommendedFilter(!recommendedfilter);
                      }}
                    ></FaAngleDown>
                  </span>
                </span>
              </span>
            </span>
            {recommendedfilter && (
              <div className={classes.recommendedexpandfilter}>
                <div className={classes.recommendedexpandtitle}>
                  <span className={classes.recommendedcorrecticon}>
                    <span className={classes.correcticon}>
                      <TiTick></TiTick>
                    </span>
                  </span>
                  <span className={classes.recommendedexpandhead}>
                    RECOMMENDED
                  </span>
                </div>
                <div className={classes.filter1}>NEWEST FIRST</div>
                <div className={classes.filter2}>POPULAR</div>
                <div className={classes.filter3}>PRICE : HIGH TO LOW</div>
                <div className={classes.filter3}>PRICE : LOW TO HIGH</div>
              </div>
            )}
          </span>
        </div>
        <div className={classes.bottomline}></div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "1248px",
          marginLeft: "130px",
          backgroundColor: "rgba(255, 255, 255, 1)",
        }}
      >
        {showFilter && <Filters></Filters>}
        <Products></Products>
      </div>
    </>
  );
};

export default SecHeading;
