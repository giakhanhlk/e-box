import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { nodeList } from "../api";

import CategoryButton from "../CategoryButton";

import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";

import "./NavService.scss";

const NavService = ({ showCategory, toggleShowCategory }) => {
  const [toggleCategory, setToggleCategory] = useState(false);

  return (
    <div className="nav-service row">
      <div className="nav-service__category col l-3">
        <div
          className="category-btn"
          style={toggleCategory ? { borderRadius: "30px 30px 0 0" } : null}
          onClick={() => setToggleCategory(!toggleCategory)}
        >
          <FormatListBulletedIcon /> Tất cả danh mục
        </div>
        <div className="category-dropdown">
          <div className="category-list-wrapper">
            <CategoryButton
              toggleCategory={toggleCategory}
              nodeList={nodeList}
              level={1}
            />
          </div>
        </div>
      </div>

      <div className="nav-service__link l-5">
        <ul className="list-inline">
          <li>
            <Link to="/deal-today">Deals hôm nay</Link>
          </li>
          <li className="tag">
            <span>
              <Link to="/customer-service">Dịch vụ khách hàng</Link>
            </span>
            <span className="highlight">Mới</span>
          </li>
          <li>
            <Link to="/coupon">Thẻ quá tặng</Link>
          </li>
          <li>
            <Link to="/seller">Bán hàng</Link>
          </li>
        </ul>
      </div>
      <div className="nav-service__notification col l-4">
        <Link to="/contact/covid-19">Phản hồi về tình trạng COVID-19</Link>
      </div>
    </div>
  );
};

export default NavService;
