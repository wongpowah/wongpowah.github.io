import React from "react";

import ContentItem from "./contentitem";

import Seiko from "../../../../../resources/seiko.png";
import LSMBV from "../../../../../resources/lsm.png";
import Janome from "../../../../../resources/janome.png";
import Yamato from "../../../../../resources/yamato.png";
import Mitsubishi from "../../../../../resources/mitsubishi.png";
import Brother from "../../../../../resources/brother.png";
import Organ from "../../../../../resources/organ.png";
import MaiMin from "../../../../../resources/maimin.png";
import NewLong from "../../../../../resources/newlong.png";
import IMPULSA from "../../../../../resources/impulsa.png";

import "./style.css";

const soleAgent = [
  {
    src: Seiko,
    alt: "Seiko",
    to: "http://www.seiko-sewing.co.jp",
    label: "精工"
  },
  {
    src: LSMBV,
    alt: "LSM BV",
    to: "http://www.lsmbv.com.hk",
    label: "利華"
  }
];

const agent = [
  {
    src: Janome,
    alt: "Janome",
    to: "https://www.janome.com",
    label: "真善美"
  },
  {
    src: Yamato,
    alt: "Yamato",
    to: "https://www.yamato-sewing.com",
    label: "雅滿桃"
  },
  {
    src: Mitsubishi,
    alt: "Mitsubishi",
    to: "http://www.mitsubishi-sewing-machines.com",
    label: "三菱"
  },
  {
    src: Brother,
    alt: "Brother",
    to: "https://http://www.brother.com/as_oc/ism",
    label: "兄弟"
  },
  {
    src: Organ,
    alt: "Organ Needles",
    to: "http://organ-needles.com",
    label: "風琴"
  },
  {
    src: MaiMin,
    alt: "Mai Min",
    label: "美文電剪"
  },
  {
    src: NewLong,
    alt: "New Long",
    to: "http://www.nlwww.com/",
    label: "紐朗"
  },
  {
    src: IMPULSA,
    alt: "IMPULSA",
    to: "http://www.impulsa.de",
    label: "IMPULSA"
  }
];

const Products = () => (
  <div id="products-container" className="container">
    <div id="products-title">產品</div>
    <div id="products-content">
      <div className="products-content-container">
        <div className="content-list-title">總代理</div>
        <div className="content-list">
          {soleAgent.map(brand => <ContentItem key={brand.alt} {...brand} />)}
        </div>
      </div>
      <div className="products-content-container">
        <div className="content-list-title">代理</div>
        <div className="content-list">
          {agent.map(brand => <ContentItem key={brand.alt} {...brand} />)}
        </div>
      </div>
    </div>
  </div>
);

export default Products;
