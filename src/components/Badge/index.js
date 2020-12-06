import React from "react";
import cx from "classnames";

import "./index.scss";

const Badge = ({ bgcolor, isActive = false, onClick }) => {
  return (
    <span
      className={cx("badge", { "badge--active": isActive })}
      style={{ backgroundColor: bgcolor }}
      onClick={onClick}
    ></span>
  );
};

export default Badge;
