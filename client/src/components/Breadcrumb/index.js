import React from "react";

import "./Breadcrumb.scss";

import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const Breadcrumb = ({ product }) => {
  return (
    <div id="breadcrumb" className="breadcrumb-holder container wide">
      <ul className="breadcrumb list-inline section-mg">
        <li>
          Trang chủ <ChevronRightIcon />
        </li>
        <li>
          Điện thoại {"&"} Máy tính bảng <ChevronRightIcon />
        </li>
        <li>
          Smartphones <ChevronRightIcon />
        </li>
        <li>{product.name}</li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
