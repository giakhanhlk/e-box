import React from "react";
import "./ProductSection3.scss";

import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";

const ProductSection3 = ({ categoryId, handleChangeCategory }) => {
  return (
    <section>
      <div className="shop-category-3">
        <div className="container wide">
          <div className="header section-mg">
            <div className="title">Best seller</div>
            <div className="category">
              <ul className="list-inline">
                <li
                  className={`cate-title-3 ${
                    categoryId === 1 ? "cate-title-active-3" : ""
                  }`}
                  onClick={() => handleChangeCategory(1)}
                >
                  Top 20
                </li>
                <li
                  className={`cate-title-3 ${
                    categoryId === 2 ? "cate-title-active-3" : ""
                  }`}
                  onClick={() => handleChangeCategory(2)}
                >
                  Điện thoại {`&`} máy tính bảng
                </li>
                <li
                  className={`cate-title-3 ${
                    categoryId === 3 ? "cate-title-active-3" : ""
                  }`}
                  onClick={() => handleChangeCategory(3)}
                >
                  Laptop {"&"} máy tính
                </li>
                <li
                  className={`cate-title-3 ${
                    categoryId === 4 ? "cate-title-active-3" : ""
                  }`}
                  onClick={() => handleChangeCategory(4)}
                >
                  Quần áo
                </li>
              </ul>
            </div>
          </div>
          <div className="products">
            <div className="product-item-3">
              <div className="image">
                <img
                  src="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Tablet_180x.jpg?v=1604559864"
                  alt="product-item-3"
                />
              </div>
              <div className="content">
                <div className="owner">Samsung Electronic</div>
                <div className="name">Máy Fax Thế Hệ Mới 2021 - Trắng</div>
                <div className="price">220.000đ</div>
                <div className="old-price">300.000đ</div>
                <div className="product-affected">
                  <div className="add-hover">
                    <FavoriteBorderOutlinedIcon fontSize="small" />
                    Yêu thích
                  </div>
                  <div className="add-hover">
                    <LocalMallOutlinedIcon fontSize="small" />
                    Thêm vào giỏ
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item-3">
              <div className="image">
                <img
                  src="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Tablet_180x.jpg?v=1604559864"
                  alt="product-item-3"
                />
              </div>
              <div className="content">
                <div className="owner">Samsung Electronic</div>
                <div className="name">Máy Fax Thế Hệ Mới 2021 - Trắng</div>
                <div className="price">220.000đ</div>
                <div className="old-price">300.000đ</div>
                <div className="product-affected">
                  <div className="add-hover">
                    <FavoriteBorderOutlinedIcon fontSize="small" />
                    Yêu thích
                  </div>
                  <div className="add-hover">
                    <LocalMallOutlinedIcon fontSize="small" />
                    Thêm vào giỏ
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item-3">
              <div className="image">
                <img
                  src="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Tablet_180x.jpg?v=1604559864"
                  alt="product-item-3"
                />
              </div>
              <div className="content">
                <div className="owner">Samsung Electronic</div>
                <div className="name">Máy Fax Thế Hệ Mới 2021 - Trắng</div>
                <div className="price">220.000đ</div>
                <div className="old-price">300.000đ</div>
                <div className="product-affected">
                  <div className="add-hover">
                    <FavoriteBorderOutlinedIcon fontSize="small" />
                    Yêu thích
                  </div>
                  <div className="add-hover">
                    <LocalMallOutlinedIcon fontSize="small" />
                    Thêm vào giỏ
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item-3">
              <div className="image">
                <img
                  src="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Tablet_180x.jpg?v=1604559864"
                  alt="product-item-3"
                />
              </div>
              <div className="content">
                <div className="owner">Samsung Electronic</div>
                <div className="name">Máy Fax Thế Hệ Mới 2021 - Trắng</div>
                <div className="price">220.000đ</div>
                <div className="old-price">300.000đ</div>
                <div className="product-affected">
                  <div className="add-hover">
                    <FavoriteBorderOutlinedIcon fontSize="small" />
                    Yêu thích
                  </div>
                  <div className="add-hover">
                    <LocalMallOutlinedIcon fontSize="small" />
                    Thêm vào giỏ
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item-3">
              <div className="image">
                <img
                  src="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Tablet_180x.jpg?v=1604559864"
                  alt="product-item-3"
                />
              </div>
              <div className="content">
                <div className="owner">Samsung Electronic</div>
                <div className="name">Máy Fax Thế Hệ Mới 2021 - Trắng</div>
                <div className="price">220.000đ</div>
                <div className="old-price">300.000đ</div>
                <div className="product-affected">
                  <div className="add-hover">
                    <FavoriteBorderOutlinedIcon fontSize="small" />
                    Yêu thích
                  </div>
                  <div className="add-hover">
                    <LocalMallOutlinedIcon fontSize="small" />
                    Thêm vào giỏ
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item-3">
              <div className="image">
                <img
                  src="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Tablet_180x.jpg?v=1604559864"
                  alt="product-item-3"
                />
              </div>
              <div className="content">
                <div className="owner">Samsung Electronic</div>
                <div className="name">Máy Fax Thế Hệ Mới 2021 - Trắng</div>
                <div className="price">220.000đ</div>
                <div className="old-price">300.000đ</div>
                <div className="product-affected">
                  <div className="add-hover">
                    <FavoriteBorderOutlinedIcon fontSize="small" />
                    Yêu thích
                  </div>
                  <div className="add-hover">
                    <LocalMallOutlinedIcon fontSize="small" />
                    Thêm vào giỏ
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item-3">
              <div className="image">
                <img
                  src="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Tablet_180x.jpg?v=1604559864"
                  alt="product-item-3"
                />
              </div>
              <div className="content">
                <div className="owner">Samsung Electronic</div>
                <div className="name">Máy Fax Thế Hệ Mới 2021 - Trắng</div>
                <div className="price">220.000đ</div>
                <div className="old-price">300.000đ</div>
                <div className="product-affected">
                  <div className="add-hover">
                    <FavoriteBorderOutlinedIcon fontSize="small" />
                    Yêu thích
                  </div>
                  <div className="add-hover">
                    <LocalMallOutlinedIcon fontSize="small" />
                    Thêm vào giỏ
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item-3">
              <div className="image">
                <img
                  src="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Tablet_180x.jpg?v=1604559864"
                  alt="product-item-3"
                />
              </div>
              <div className="content">
                <div className="owner">Samsung Electronic</div>
                <div className="name">Máy Fax Thế Hệ Mới 2021 - Trắng</div>
                <div className="price">220.000đ</div>
                <div className="old-price">300.000đ</div>
                <div className="product-affected">
                  <div className="add-hover">
                    <FavoriteBorderOutlinedIcon fontSize="small" />
                    Yêu thích
                  </div>
                  <div className="add-hover">
                    <LocalMallOutlinedIcon fontSize="small" />
                    Thêm vào giỏ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection3;
