import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

import Error from "../Error";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Breadcrumb from "../../components/Breadcrumb";
import { tab } from "./__mock__";
import "./Product.scss";

import Loading from "../../components/Loading";
import Content from "./components/Content";
import Tab from "./components/Tab";
import ProductSection4 from "../../components/ShowProduct/components/ProductSection4";

const Product = () => {
  const { id, name } = useParams();
  const [product, setProduct] = useState({});
  const [tabIndex, setTabIndex] = useState(1);
  const [directError, setDirectError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    try {
      const res = await axios.get(
        `https://6081c6a773292b0017cde2a7.mockapi.io/api/products/${id}`
      );

      if (res.status == 200) {
        console.log(res);
        const data = res.data;
        setProduct(data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setDirectError(true);
      console.log(error);
    }
  }, []);

  const handleClickTabHeader = (key) => {
    setTabIndex(key);
  };

  const getQuantity = (data) => {
    console.log(data);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : !loading && directError ? (
        <Error />
      ) : (
        <>
          <Header />
          <Breadcrumb product={product} />
          <Content product={product} getQuantity={getQuantity} />
          <Tab
            tab={tab}
            tabIndex={tabIndex}
            handleClickTabHeader={handleClickTabHeader}
          />
          <ProductSection4 title="Các sản phẩm khác của Shop" />
          <ProductSection4 title="Sản phẩm tương tự" />
          <ProductSection4 title="Có thể bạn cũng thích" />
          <Footer />
        </>
      )}
    </>
  );
};

export default Product;
