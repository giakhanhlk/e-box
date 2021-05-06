import React from "react";

import "./Comment.scss";

import StarIcon from "@material-ui/icons/Star";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

const Comment = () => {
  return (
    <div className="comment-wrapper">
      <div id="comment" className="comment container wide">
        {/* <div className="comment-title">ĐÁNH GIÁ SẢN PHẨM</div> */}
        <div className="comment-rating">
          <div className="comment-rating__star">
            <div className="star-count">
              <div className="count-number">
                <span style={{ fontSize: "30px" }}>5</span> trên 5
              </div>
              <div className="count-average">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
          </div>
          <div className="comment-rating__choice">
            <div className="rating-filter">Tất cả</div>
            <div className="rating-filter">5 sao (17)</div>
            <div className="rating-filter">4 sao (0)</div>
            <div className="rating-filter">3 sao (0)</div>
            <div className="rating-filter">2 sao (0)</div>
            <div className="rating-filter">1 sao (0)</div>
            <div className="rating-filter">Có bình luận (3)</div>
            <div className="rating-filter">Có hình ảnh / Video (3)</div>
          </div>
        </div>
        <div className="comment-content">
          <ul className="comment-list list-column">
            <li className="product-comment">
              <div className="product-comment__user">
                <div className="product-comment__avatar">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-64.png"
                    alt="avatar"
                  />
                </div>
                <div className="product-comment__user-right">
                  <div className="product-comment__name">dung.nguyen.1</div>
                  <div className="product-comment__rating">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                </div>
              </div>

              <div className="product-comment__other">
                <div className="product-comment__space"></div>
                <div className="product-comment__content">
                  <div className="product-comment__description">
                    Thời gian giao hàng nhanh, đóng gói sản phẩm chắc chắn. Sản
                    phẩm ok
                  </div>
                  <div className="product-comment__images">
                    <ul className="list-inline">
                      <li className="product-image">
                        <img
                          src="https://cf.shopee.vn/file/c5f602522d0be16fcdd5f8967b54424c_tn"
                          alt="image"
                          height="72"
                          width="72"
                        />
                      </li>
                      <li className="product-image">
                        <img
                          src="https://cf.shopee.vn/file/c5f602522d0be16fcdd5f8967b54424c_tn"
                          alt="image"
                          height="72"
                          width="72"
                        />
                      </li>
                      <li className="product-image">
                        <img
                          src="https://cf.shopee.vn/file/c5f602522d0be16fcdd5f8967b54424c_tn"
                          alt="image"
                          height="72"
                          width="72"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="product-comment__date">06-03-2020 13:50</div>
                  <div className="product-comment__like">
                    <ThumbUpAltIcon />{" "}
                    <span className="text">Hữu ích hoặc Đồng tình</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Comment;
