import React from "react";
import { NavLink as Link } from "react-router-dom";

import Seiko from "../../../../resources/seiko.png";
import LSMBV from "../../../../resources/lsmbv.png";
import Janome from "../../../../resources/janome.png";
import Yamato from "../../../../resources/yamato.png";
import Mitsubishi from "../../../../resources/mitsubishi.png";
import Brother from "../../../../resources/brother.png";
import OrganNeedles from "../../../../resources/organneedles.png";
import MaiMin from "../../../../resources/maimin.png";
import NewLong from "../../../../resources/newlong.png";
import IMPULSA from "../../../../resources/impulsa.png";

import "./products.css";

const Products = () => (
  <div id="products-container">
    <div id="products-title">產品</div>
    <div id="products-content">
      <div className="products-content-container">
        <div className="content-list-title">總代理</div>
        <div className="content-list">
          <div className="content-list-item">
            <img src={Seiko} alt="Seiko" />
            <Link
              className="content-list-link"
              target="_blank"
              to="http://www.seiko-sewing.co.jp"
            >
              <span>精工</span>
            </Link>
          </div>
          <div className="content-list-item">
            <img src={LSMBV} alt="LSM BV" />
            <Link
              className="content-list-link"
              target="_blank"
              to="http://www.lsmbv.com.hk"
            >
              <span>利華</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="products-content-container">
        <div className="content-list-title">代理</div>
        <div className="content-list">
          <div className="content-list-item">
            <img src={Janome} alt="Janome" />
            <Link
              className="content-list-link"
              target="_blank"
              to="https://www.janome.com"
            >
              <span>真善美</span>
            </Link>
          </div>
          <div className="content-list-item">
            <img src={Yamato} alt="Yamato" />
            <Link
              className="content-list-link"
              target="_blank"
              to="https://www.yamato-sewing.com"
            >
              <span>雅滿桃</span>
            </Link>
          </div>
          <div className="content-list-item">
            <img src={Mitsubishi} alt="Mitsubishi" />
            <Link
              className="content-list-link"
              target="_blank"
              to="http://www.mitsubishi-sewing-machines.com"
            >
              <span>三菱</span>
            </Link>
          </div>
          <div className="content-list-item">
            <img src={Brother} alt="Brother" />
            <Link
              className="content-list-link"
              target="_blank"
              to="https://http://www.brother.com/as_oc/ism"
            >
              <span>兄弟</span>
            </Link>
          </div>
          <div className="content-list-item">
            <img src={OrganNeedles} alt="Organ Needles" />
            <Link
              className="content-list-link"
              target="_blank"
              to="http://organ-needles.com"
            >
              <span>風琴</span>
            </Link>
          </div>
          <div className="content-list-item">
            <img src={MaiMin} alt="Mei Min" />
            <div className="content-list-link">
              <span>美文電剪</span>
            </div>
          </div>
          <div className="content-list-item">
            <img src={NewLong} alt="New Long" />
            <Link
              className="content-list-link"
              target="_blank"
              to="http://www.nlwww.com/"
            >
              <span>紐朗</span>
            </Link>
          </div>
          <div className="content-list-item">
            <img src={IMPULSA} alt="IMPULSA" />
            <Link
              className="content-list-link"
              target="_blank"
              to="http://www.impulsa.de"
            >
              <span>IMPULSA</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Products;
