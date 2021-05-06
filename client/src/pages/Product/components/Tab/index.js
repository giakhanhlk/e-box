import React from "react";
import { Parser as HtmlToReactParser } from "html-to-react";

import "./Tab.scss";
import Comment from "../Comment";

const Tab = ({ tab, tabIndex, handleClickTabHeader }) => {
  return (
    <div className="tab-wrapper section-mg">
      <div className="tab-body container wide">
        <div id="module-tabs">
          <div className="detail-tab-wrapper">
            <div className="tab__header">
              <ul className="list-inline">
                {tab.map((item, i) => {
                  return (
                    <li
                      key={item.key}
                      className={
                        item.key === tabIndex
                          ? "tab-item list-item-r3 active"
                          : "tab-item list-item-r3"
                      }
                      onClick={() => handleClickTabHeader(item.key)}
                    >
                      {item.name}
                    </li>
                  );
                })}
              </ul>
              <div className="tab-slider">
                <div className="tab-slider__slide" style={{}}></div>
              </div>
            </div>
            <div className="tab__content">
              {tab.map((item, i) => {
                const htmlToReactParser = new HtmlToReactParser();
                const reactElement = item.description
                  ? htmlToReactParser.parse(item.description)
                  : item.main;
                return item.key === tabIndex && reactElement;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
