import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ImageSlider from "../../components/ImageSlider";
import {
  ProductSection1,
  ProductSection2,
  ProductSection3,
  ProductSection4,
} from "../../components/ShowProduct";
import "./Home.scss";
import * as userActions from "../../redux/actions/userActions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("user_token")) {
      dispatch(userActions.getMyData());
    }
  }, []);

  const [categoryId1, setCategoryId1] = useState(1);
  const [categoryId2, setCategoryId2] = useState(1);
  const [categoryId3, setCategoryId3] = useState(1);
  const [categoryId4, setCategoryId4] = useState(1);
  const [slideId, setSlideId] = useState(1);
  const [translate, setTranslate] = useState(0);

  const handleChangeCategory1 = (categoryId) => {
    setCategoryId1(categoryId);
  };

  const handleChangeCategory2 = (categoryId) => {
    setCategoryId2(categoryId);
  };

  const handleChangeCategory3 = (categoryId) => {
    setCategoryId3(categoryId);
  };

  const handleChangeSlideId = (slideId, slideLength) => {
    if (slideId > slideLength) {
      return setSlideId(1);
    }

    if (slideId < 1) {
      return setSlideId(slideLength);
    }

    setSlideId(slideId);
  };

  return (
    <div className="home">
      <Header />
      <main>
        <ImageSlider
          slideId={slideId}
          handleChangeSlideId={handleChangeSlideId}
        />
        <section className="top-deal section-mg">
          <div className="container wide">
            <ul className="list-inline">
              <li className="super-deal">
                <img src="https://cf.shopee.vn/file/e147155a22672fb7196505dccbe2bd6f_xhdpi" />
                Săn Giờ Sale
              </li>
              <li className="super-deal">
                <img src="https://cf.shopee.vn/file/9ac705a2e9861e3897ef82e9ca2a238b_xhdpi" />
                Deal Sốc Từ 1K
              </li>
              <li className="super-deal">
                <img src="https://cf.shopee.vn/file/a08ab28962514a626195ef0415411585_xhdpi" />
                Hàng Quốc Tế
              </li>
              <li className="super-deal">
                <img src="https://cf.shopee.vn/file/281894c2ea029df3f2405ae42bff8f32_xhdpi" />
                Ưu Đãi Thành Viên
              </li>
              <li className="super-deal">
                <img src="https://cf.shopee.vn/file/07ee4296b0a33885418670f2e3ffeca0_xhdpi" />
                Freeship Extra
              </li>
              <li className="super-deal">
                <img src="https://cf.shopee.vn/file/4a147bf13b6a4d561ce52ef39c62f8b1_xhdpi" />
                Super Deal
              </li>
              <li className="super-deal">
                <img src="https://cf.shopee.vn/file/21a4856d1fecd4eda143748661315dba_xhdpi" />
                Hoàn Xu Mua Sắm
              </li>
              <li className="super-deal">
                <img src="https://cf.shopee.vn/file/765ca66457ec08802f74c529f71a99b7_xhdpi" />
                Hàng hiệu -50%
              </li>
              <li className="super-deal">
                <img src="https://cf.shopee.vn/file/0a3e3aa16b083d6b7e2c25a8f2c16731_xhdpi" />
                Premium Shop
              </li>
              <li className="super-deal">
                <img src="https://cf.shopee.vn/file/c360d75f1605e54f07c2b30100755722_xhdpi" />
                Chớp Sale Ngon
              </li>
            </ul>
          </div>
        </section>
        <section className="banner-notice">
          <div className="container wide">
            <div className="row">
              <div className="banner col l-3">
                <img src="https://salt.tikicdn.com/cache/w295/ts/banner/5d/e9/3e/26f62a9bfced0546bf58ded1a42ea6a3.png.jpg" />
              </div>
              <div className="banner col l-3">
                <img src="https://salt.tikicdn.com/cache/w295/ts/banner/6f/40/df/f3373ef6af1025c1530349a650f6315e.png.jpg" />
              </div>
              <div className="banner col l-3">
                <img src="https://salt.tikicdn.com/cache/w295/ts/banner/1b/c5/24/47142333b6ef76d4058adfe079ae5fe4.png.jpg" />
              </div>
              <div className="banner col l-3">
                <img src="https://salt.tikicdn.com/cache/w295/ts/banner/86/90/d1/abe5b97f161482032dacf8869da15759.png.jpg" />
              </div>
            </div>
          </div>
        </section>
        <ProductSection1
          gross={100}
          sold={80}
          categoryId={categoryId1}
          handleChangeCategory={handleChangeCategory1}
        />
        <ProductSection2
          handleChangeCategory={handleChangeCategory2}
          categoryId={categoryId2}
        />
        <ProductSection3
          categoryId={categoryId3}
          handleChangeCategory={handleChangeCategory3}
        />
        <ProductSection4 title="Danh mục nổi bật" />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
