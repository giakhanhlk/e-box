import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Error.scss";

const Error = () => {
  return (
    <>
      <Header />
      <main id="error-page">
        <div className="error-wrapper">
          <div className="error-heading">
            <h3>Oops! Không tìm thấy trang</h3>
            <h1>
              <span>4</span>
              <span>0</span>
              <span>4</span>
            </h1>
          </div>
          <h2>Không tìm thấy trang bạn yêu cầu</h2>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Error;
