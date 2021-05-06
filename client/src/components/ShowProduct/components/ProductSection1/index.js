import React from "react";
import "./ProductSection1.scss";

const ProductSection1 = ({ gross, sold, categoryId, handleChangeCategory }) => {
  const calcPercent = (soldProduct) => {
    const alreadyProduct = gross - soldProduct;
    const soldPercent = (alreadyProduct / 100) * 100;
    return soldPercent;
  };

  return (
    <section>
      <div className="container wide">
        <div className="shop-category-1">
          <div className="special-offer">
            <div className="product-picture">
              <div className="text">Giảm giá đặc biệt</div>
              <div className="image">
                <img src="https://salt.tikicdn.com/cache/280x280/ts/product/57/69/85/213e06995df2f8880e61253b22c8ec64.jpg" />
              </div>
              <div className="save-percent">
                Tiết kiệm{" "}
                <span style={{ fontWeight: "bolder", fontSize: "18px" }}>
                  30%
                </span>
              </div>
            </div>
            <div className="product-information">
              <div className="name">Máy hút bụi</div>
              <div className="price">
                350.000đ <span className="old-price">500.000đ</span>
              </div>
              <div className="sold-information">
                <div className="quantity">
                  <div className="number">
                    <div className="left">Đã bán: {sold} </div>
                    <div className="right">Còn lại: {gross - sold} </div>
                  </div>
                  <div className="process-bar">
                    <div className="total">
                      <div
                        className="sold"
                        style={{ width: `${calcPercent(sold)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="deal-countdown">
                <span>00</span>:<span>00</span>:<span>00</span>
              </div>
            </div>
          </div>
          <div className="other-product">
            <div className="category">
              <ul className="list-inline">
                <li
                  onClick={() => handleChangeCategory(1)}
                  className={`cate-title-1 ${
                    categoryId === 1 ? "cate-title-active-1" : ""
                  }`}
                >
                  Mới nhất
                </li>
                <li
                  onClick={() => handleChangeCategory(2)}
                  className={`cate-title-1 ${
                    categoryId === 2 ? "cate-title-active-1" : ""
                  }`}
                >
                  Đang sale
                </li>
                <li
                  onClick={() => handleChangeCategory(3)}
                  className={`cate-title-1 ${
                    categoryId === 3 ? "cate-title-active-1" : ""
                  }`}
                >
                  Top bình chọn
                </li>
              </ul>
            </div>
            <div className="products">
              <div className="col l-3">
                <div className="product-item-1">
                  <div className="provider">Bulgari</div>
                  <div className="product-name">Máy Fax mới 2021</div>
                  <div className="product-picture">
                    <img src="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Printer_180x.jpg?v=1604559864" />
                  </div>
                  <div className="product-bottom">
                    <div className="product-price">220.000đ</div>
                    <div className="get-product"></div>
                  </div>
                  <div className="product-hover">
                    <div className="view-product">Xem</div>
                    <div className="favorite-product">Yêu thích</div>
                  </div>
                </div>
              </div>
              <div className="col l-3">
                <div className="product-item-1">
                  <div className="provider">Bulgari</div>
                  <div className="product-name">Máy Fax mới 2021</div>
                  <div className="product-picture">
                    <img src="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Printer_180x.jpg?v=1604559864" />
                  </div>
                  <div className="product-bottom">
                    <div className="product-price">220.000đ</div>
                    <div className="get-product"></div>
                  </div>
                  <div className="product-hover">
                    <div className="view-product">Xem</div>
                    <div className="favorite-product">Yêu thích</div>
                  </div>
                </div>
              </div>
              <div className="col l-3">
                <div className="product-item-1">
                  <div className="provider">Bulgari</div>
                  <div className="product-name">Máy Fax mới 2021</div>
                  <div className="product-picture">
                    <img src="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Printer_180x.jpg?v=1604559864" />
                  </div>
                  <div className="product-bottom">
                    <div className="product-price">220.000đ</div>
                    <div className="get-product"></div>
                  </div>
                  <div className="product-hover">
                    <div className="view-product">Xem</div>
                    <div className="favorite-product">Yêu thích</div>
                  </div>
                </div>
              </div>
              <div className="col l-3">
                <div className="product-item-1">
                  <div className="provider">Bulgari</div>
                  <div className="product-name">Máy Fax mới 2021</div>
                  <div className="product-picture">
                    <img src="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Printer_180x.jpg?v=1604559864" />
                  </div>
                  <div className="product-bottom">
                    <div className="product-price">220.000đ</div>
                    <div className="get-product"></div>
                  </div>
                  <div className="product-hover">
                    <div className="view-product">Xem</div>
                    <div className="favorite-product">Yêu thích</div>
                  </div>
                </div>
              </div>
              <div className="col l-3">
                <div className="product-item-1">
                  <div className="provider">Bulgari</div>
                  <div className="product-name">Máy Fax mới 2021</div>
                  <div className="product-picture">
                    <img src="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Printer_180x.jpg?v=1604559864" />
                  </div>
                  <div className="product-bottom">
                    <div className="product-price">220.000đ</div>
                    <div className="get-product"></div>
                  </div>
                  <div className="product-hover">
                    <div className="view-product">Xem</div>
                    <div className="favorite-product">Yêu thích</div>
                  </div>
                </div>
              </div>
              <div className="col l-3">
                <div className="product-item-1">
                  <div className="provider">Bulgari</div>
                  <div className="product-name">Máy Fax mới 2021</div>
                  <div className="product-picture">
                    <img src="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Printer_180x.jpg?v=1604559864" />
                  </div>
                  <div className="product-bottom">
                    <div className="product-price">220.000đ</div>
                    <div className="get-product"></div>
                  </div>
                  <div className="product-hover">
                    <div className="view-product">Xem</div>
                    <div className="favorite-product">Yêu thích</div>
                  </div>
                </div>
              </div>
              <div className="col l-3">
                <div className="product-item-1">
                  <div className="provider">Bulgari</div>
                  <div className="product-name">Máy Fax mới 2021</div>
                  <div className="product-picture">
                    <img src="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Printer_180x.jpg?v=1604559864" />
                  </div>
                  <div className="product-bottom">
                    <div className="product-price">220.000đ</div>
                    <div className="get-product"></div>
                  </div>
                  <div className="product-hover">
                    <div className="view-product">Xem</div>
                    <div className="favorite-product">Yêu thích</div>
                  </div>
                </div>
              </div>
              <div className="col l-3">
                <div className="product-item-1">
                  <div className="provider">Bulgari</div>
                  <div className="product-name">Máy Fax mới 2021</div>
                  <div className="product-picture">
                    <img src="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Printer_180x.jpg?v=1604559864" />
                  </div>
                  <div className="product-bottom">
                    <div className="product-price">220.000đ</div>
                    <div className="get-product"></div>
                  </div>
                  <div className="product-hover">
                    <div className="view-product">Xem</div>
                    <div className="favorite-product">Yêu thích</div>
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

export default ProductSection1;
