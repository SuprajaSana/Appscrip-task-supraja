"use client";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

import classes from "./Filters.module.css";

const Filters = () => {
  const [filter, setFilter] = useState(false);

  return (
    <div className={classes.filters}>
      <div className={classes.customizable}>
        <div className={classes.customizablemain}>
          <input
            type="checkbox"
            className={classes.customizablechecbox}
            size={22}
          ></input>
          <span className={classes.customizabletext}>Customizble</span>
        </div>
      </div>
      <div className={classes.separator}></div>
      <div className={classes.filter}>
        <div className={classes.title}>
          <div className={classes.titlename}>
            <span className={classes.titlehead}>IDEAL FOR</span>
            <span className={classes.downarrow}>
              <span className={classes.downarrowmain}>
                <span className={classes.rectarrow}>
                  <span className={classes.triarrow}>
                    <FaAngleDown
                      onClick={() => setFilter(!filter)}
                    ></FaAngleDown>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <div className={classes.all}>All</div>
        </div>
        {filter && (
          <div className={classes.filtervalues}>
            <div className={classes.filtervaluetext}>Unselect all</div>
            <div className={classes.filtervaluename}>
              <input
                type="checkbox"
                className={classes.filtervalueinput}
              ></input>
              <span className={classes.filtervaluespan}>Men</span>
            </div>
            <div className={classes.filtervaluename}>
              <input
                type="checkbox"
                className={classes.filtervalueinput}
              ></input>
              <span className={classes.filtervaluespan}>Women</span>
            </div>
            <div className={classes.filtervaluename}>
              <input
                type="checkbox"
                className={classes.filtervalueinput}
              ></input>
              <span className={classes.filtervaluespan}>Baby & Kids</span>
            </div>
          </div>
        )}
      </div>
      <div className={classes.separator}></div>
      <div className={classes.filter}>
        <div className={classes.title}>
          <div className={classes.titlename}>
            <span className={classes.titlehead}>OCCASION</span>
            <span className={classes.downarrow}>
              <span className={classes.downarrowmain}>
                <span className={classes.rectarrow}>
                  <span className={classes.triarrow}>
                    <FaAngleDown></FaAngleDown>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <div className={classes.all}>All</div>
        </div>
      </div>
      <div className={classes.separator}></div>
      <div className={classes.filter}>
        <div className={classes.title}>
          <div className={classes.titlename}>
            <span className={classes.titlehead}>WORK</span>
            <span className={classes.downarrow}>
              <span className={classes.downarrowmain}>
                <span className={classes.rectarrow}>
                  <span className={classes.triarrow}>
                    <FaAngleDown></FaAngleDown>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <div className={classes.all}>All</div>
        </div>
      </div>
      <div className={classes.separator}></div>
      <div className={classes.filter}>
        <div className={classes.title}>
          <div className={classes.titlename}>
            <span className={classes.titlehead}>FABRIC</span>
            <span className={classes.downarrow}>
              <span className={classes.downarrowmain}>
                <span className={classes.rectarrow}>
                  <span className={classes.triarrow}>
                    <FaAngleDown></FaAngleDown>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <div className={classes.all}>All</div>
        </div>
      </div>
      <div className={classes.separator}></div>
      <div className={classes.filter}>
        <div className={classes.title}>
          <div className={classes.titlename}>
            <span className={classes.titlehead}>SEGMENT</span>
            <span className={classes.downarrow}>
              <span className={classes.downarrowmain}>
                <span className={classes.rectarrow}>
                  <span className={classes.triarrow}>
                    <FaAngleDown></FaAngleDown>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <div className={classes.all}>All</div>
        </div>
      </div>
      <div className={classes.separator}></div>
      <div className={classes.filter}>
        <div className={classes.title}>
          <div className={classes.titlename}>
            <span className={classes.titlehead}>SUITABLE FOR</span>
            <span className={classes.downarrow}>
              <span className={classes.downarrowmain}>
                <span className={classes.rectarrow}>
                  <span className={classes.triarrow}>
                    <FaAngleDown></FaAngleDown>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <div className={classes.all}>All</div>
        </div>
      </div>
      <div className={classes.separator}></div>
      <div className={classes.filter}>
        <div className={classes.title}>
          <div className={classes.titlename}>
            <span className={classes.titlehead}>RAW MATERIALS</span>
            <span className={classes.downarrow}>
              <span className={classes.downarrowmain}>
                <span className={classes.rectarrow}>
                  <span className={classes.triarrow}>
                    <FaAngleDown></FaAngleDown>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <div className={classes.all}>All</div>
        </div>
      </div>
      <div className={classes.separator}></div>
      <div className={classes.filter}>
        <div className={classes.title}>
          <div className={classes.titlename}>
            <span className={classes.titlehead}>PATTERN</span>
            <span className={classes.downarrow}>
              <span className={classes.downarrowmain}>
                <span className={classes.rectarrow}>
                  <span className={classes.triarrow}>
                    <FaAngleDown></FaAngleDown>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <div className={classes.all}>All</div>
        </div>
      </div>
      <div className={classes.separator}></div>
    </div>
  );
};

export default Filters;
