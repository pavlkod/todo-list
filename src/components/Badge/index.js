import React from "react";
import cx from "classnames";

import "./index.scss";

const Badge = ({ color, isActive = false }) => {
  return <span className={cx("badge", ` badge--${color}`, { "badge--active": isActive })}></span>;
};

export default Badge;
