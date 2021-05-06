import React from "react";
import "./ProductSection2.scss";

const ProductSection2 = ({ categoryId, handleChangeCategory }) => {
  return (
    <section>
      <div className="shop-category-2">
        <div className="container wide">
          <div className="category">
            <ul className="list-inline">
              <li
                className={`cate-title-2 ${
                  categoryId === 1 ? "cate-title-active-2" : ""
                }`}
                onClick={() => handleChangeCategory(1)}
              >
                Siêu khuyến mãi
              </li>
              <li
                className={`cate-title-2 ${
                  categoryId === 2 ? "cate-title-active-2" : ""
                }`}
                onClick={() => handleChangeCategory(2)}
              >{`TV & Video`}</li>
              <li
                className={`cate-title-2 ${
                  categoryId === 3 ? "cate-title-active-2" : ""
                }`}
                onClick={() => handleChangeCategory(3)}
              >
                Cameras
              </li>
              <li
                className={`cate-title-2 ${
                  categoryId === 4 ? "cate-title-active-2" : ""
                }`}
                onClick={() => handleChangeCategory(4)}
              >
                Âm thanh
              </li>
            </ul>
          </div>
          <div className="products-2">
            <div className="products products__left">
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

            <div className="products products__middle">
              <div className="product-item-1 product-middle">
                <div className="provider">Bulgari</div>
                <div className="product-name">Máy Fax mới 2021</div>
                <div className="product-picture-large">
                  <img src="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/1_1920x.jpg?v=1604559865" />
                </div>
                <div className="other-pictures">
                  <ul className="list-inline">
                    <li className="picture">
                      <img src="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/1_180x.jpg?v=1604559865" />
                    </li>
                    <li className="picture">
                      <img src="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/2_180x.jpg?v=1604559865" />
                    </li>
                    <li className="picture">
                      <img src="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/1_180x.jpg?v=1604559865" />
                    </li>
                    <li className="picture">
                      <img src="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/1_180x.jpg?v=1604559865" />
                    </li>
                  </ul>
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

            <div className="products products__right">
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
    </section>
  );
};

export default ProductSection2;
