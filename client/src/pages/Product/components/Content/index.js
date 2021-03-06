import React from "react";
import { useForm } from "react-hook-form";

import ImageZoom from "../../../../components/ImageZoom";
import "./Content.scss";

import CompareIcon from "@material-ui/icons/Compare";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ContactsIcon from "@material-ui/icons/Contacts";
import HttpsIcon from "@material-ui/icons/Https";
import { Link } from "react-router-dom";

const Content = ({ getQuantity, product }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => getQuantity(data);

  const zoomOption = {
    compressedImage: product.image,
    originalImage: product.image,
    zoomFactor: "2",
    dir: "left",
  };

  return (
    <div className="product-content-holder container wide">
      <div className="row">
        <div className="left-content col l-4">
          <div className="main-image">
            {/* <img
                    src="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/MobileCase1_6580367a-e79b-40df-9ed9-57c40f91ca96_2048x2048.jpg?v=1604559863"
                    alt="samsung-image-1"
                  /> */}
            <ImageZoom options={zoomOption} />
          </div>
          <div className="more-images">
            <ul className="list-images list-inline">
              <li>
                <img src="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/LaptopYoga_2fdce1e7-4334-4dad-8727-c53c235539f5_small.jpg?v=1604559863" />
              </li>
              <li>
                <img src="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/LaptopYoga_2fdce1e7-4334-4dad-8727-c53c235539f5_small.jpg?v=1604559863" />
              </li>
              <li>
                <img src="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/LaptopYoga_2fdce1e7-4334-4dad-8727-c53c235539f5_small.jpg?v=1604559863" />
              </li>
              <li>
                <img src="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/LaptopYoga_2fdce1e7-4334-4dad-8727-c53c235539f5_small.jpg?v=1604559863" />
              </li>
            </ul>
          </div>
        </div>
        <div className="center-content col l-5">
          <div className="owner">{product.seller}</div>
          <div className="product-name">{product.name}</div>
          <div className="rating">
            <span>{product.countRating} l?????t ????nh gi??</span>
          </div>
          <div className="product-available">
            {product.isStock ? "C??n h??ng" : "H???t h??ng"}
          </div>
          <div className="product-summary">
            <ul>
              <li>S???n ph???m ch???t l?????ng</li>
              <li>Gi?? ngon b??? r???</li>
              <li>Ki???u d??ng sang tr???ng</li>
            </ul>
          </div>
          <div className="product-func">
            <a href="#">
              <FavoriteBorderIcon /> Wishlist
            </a>
            <a href="#">
              <CompareIcon /> Compare
            </a>
          </div>
          <div className="price">
            <span className="latest-price">{product.price}</span>
            <span className="old-price">{product.oldPrice}</span>
          </div>
          <div className="product-colors">
            <span className="title">Color</span>
            <div className="pick-colors">
              <span className="color color-red active"></span>
              <span className="color color-pink"></span>
              <span className="color color-blue"></span>
              <span className="color color-orange"></span>
            </div>
          </div>
          <div className="quantity">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="number"
                defaultValue="1"
                {...register("quantity", { min: 1, max: 99 })}
              />
            </form>
            <div className="increase">
              <AddCircleIcon />
            </div>
            <div className="decrease">
              <RemoveCircleIcon />
            </div>
          </div>

          <div className="assurance-item">
            <a href="#" rel="noopener noreferrer" className="assurance-link">
              <span className="assurance__icon-frame">
                <svg
                  className="icbu-icon-svg ta-link-item icon-ta"
                  width="16"
                  height="16"
                  viewBox="0 0 64 64"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#FACE32"
                    d="M52.268 5.564V14.5h-9.784V2.637L32 0 21.516 2.636V14.5h-9.784V5.565L1.592 8.65l2.644 46.703L32 64l27.764-8.647L62.408 8.65z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M35.643 40.64c0-1.067-.33-1.934-.993-2.603-.66-.668-1.808-1.29-3.438-1.866-2.635-.893-4.587-1.948-5.856-3.16s-1.902-2.918-1.902-5.112c0-2.084.61-3.766 1.83-5.047 1.218-1.28 2.906-2.05 5.064-2.307v-4.008h2.942v4.044c2.145.318 3.797 1.203 4.955 2.656 1.16 1.453 1.738 3.423 1.738 5.91h-4.45c0-1.568-.338-2.79-1.012-3.667-.673-.877-1.623-1.316-2.85-1.316-1.274 0-2.217.328-2.83.984-.614.656-.92 1.56-.92 2.712 0 1.078.32 1.94.956 2.583s1.826 1.272 3.567 1.885c2.635.944 4.572 2.013 5.81 3.208 1.238 1.196 1.857 2.884 1.857 5.066 0 2.157-.635 3.858-1.904 5.102s-3.037 1.982-5.304 2.216v3.584H29.98v-3.567c-2.233-.233-4.05-1.02-5.454-2.362-1.403-1.343-2.105-3.374-2.105-6.095h4.47c0 1.777.42 3.03 1.26 3.76.84.73 1.908 1.094 3.208 1.094 1.385 0 2.445-.325 3.18-.975.738-.65 1.105-1.556 1.105-2.72z"
                  ></path>
                </svg>
              </span>
              <span className="assurance__text-bold">Trading Guarantee</span>
              <span className="assurance__text">
                Box s??? ?????m b???o ch???t l?????ng c???a s???n ph???m
              </span>
            </a>
          </div>
          <div className="secure-image">
            <img
              src="//cdn.shopify.com/s/files/1/0066/4322/0562/files/pay-right-450x_450x.png?v=1604560580"
              alt="Secure"
            />
          </div>
        </div>
        <div className="right-content l-3">
          <div className="right-content__inner col">
            <div className="delivery-info">
              <div className="delivery-info__local">
                V???n chuy???n t???i <span className="logistics-method">HCMC</span>
              </div>
              <div className="delivery-info__price">${product.price}</div>
            </div>
            <div className="shipping-time">
              Th???i gian v???n chuy???n t???{" "}
              <span style={{ fontWeight: 600 }}>1-3</span> ng??y
            </div>
            <div className="btn-wrapper">
              <div className="btn-buying">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <button type="submit" className="btn btn-submit-product">
                    <AddShoppingCartIcon />
                    Th??m v??o gi??? h??ng
                  </button>
                  <button type="submit" className="btn btn-submit-product">
                    <ShoppingBasketIcon />
                    Mua ngay
                  </button>
                  <button
                    type="submit"
                    className="btn btn-submit-product btn-outline"
                  >
                    <ContactsIcon />
                    Li??n h??? nh?? b??n
                  </button>
                </form>
              </div>
            </div>
            <div className="secure-transaction">
              <div className="secure-transaction__title">
                <HttpsIcon style={{ color: "#333" }} />
                B???o m???t giao d???ch
              </div>
              <div className="ship-style ship-from">
                <div className="ship-style__left">V???n chuy???n t???</div>
                <div className="ship-style__right">E-box</div>
              </div>
              <div className="ship-style ship-by">
                <div className="ship-style__left">V???n chuy???n b???i</div>
                <div className="ship-style__right">E-box</div>
              </div>
            </div>
          </div>

          <div className="right-content__supplier section-mg">
            <div className="supplier-tier">
              <img
                src="https://www.flaticon.com/svg/vstatic/svg/3068/3068353.svg?token=exp=1619371750~hmac=8823994123e5e7af542bbd0c7fe5d504"
                alt="tier"
                width="20"
                height="20"
              />{" "}
              h???ng V??ng
            </div>
            <div className="supplier-content col">
              <div className="supplier-name">
                <Link to="/">{product.name}</Link>
              </div>
              <div className="supplier-type">Trading Company</div>
              <div className="supplier-ranking">
                <span className="supplier-ranking__flag">
                  <img
                    src="https://www.flaticon.com/svg/vstatic/svg/206/206632.svg?token=exp=1619369963~hmac=e741683b05decba43d9b66b49251f6cc"
                    alt="region"
                    height="17"
                    width="19"
                  />{" "}
                  VN
                </span>
                <span className="supplier-ranking__ta">
                  <span className="value">1</span>
                  <span className="unit">YR</span>
                </span>
              </div>
              <div className="supplier-response">
                <span style={{ color: "#d02323", fontWeight: "500" }}>24h</span>{" "}
                Th???i gian ph???n h???i
              </div>
              <div className="supplier-delivery-time">
                <span style={{ color: "#d02323", fontWeight: "500" }}>
                  100%
                </span>{" "}
                T??? l??? ph???n h???i
              </div>
              <div className="supplier-products">
                <span style={{ color: "#d02323", fontWeight: "500" }}>176</span>{" "}
                Th???i gian giao ????ng h???n
              </div>
              <div className="supplier-rated">
                <span style={{ color: "#d02323", fontWeight: "500" }}>
                  38.5k
                </span>{" "}
                ????nh gi??
              </div>
              <div className="supplier-follower">
                <span style={{ color: "#d02323", fontWeight: "500" }}>28k</span>{" "}
                Ng?????i theo d??i
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
