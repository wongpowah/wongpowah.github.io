import React from "react";
import { LoadWhenVisible } from "../../../../../loader";

import "./style.css";

const ContentItem = LoadWhenVisible({
  loader: () => import("./contentitem")
});

const soleAgent = [
  {
    loader: () => import("../../../../../resources/seiko.png"),
    alt: "Seiko",
    to: "http://www.seiko-sewing.co.jp",
    label: "精工"
  },
  {
    loader: () => import("../../../../../resources/lsm.png"),
    alt: "LSM BV",
    to: "http://www.lsmbv.com.hk",
    label: "利華"
  }
];

const agent = [
  {
    loader: () => import("../../../../../resources/janome.png"),
    alt: "Janome",
    to: "https://www.janome.com",
    label: "真善美"
  },
  {
    loader: () => import("../../../../../resources/yamato.png"),
    alt: "Yamato",
    to: "https://www.yamato-sewing.com",
    label: "雅滿桃"
  },
  {
    loader: () => import("../../../../../resources/mitsubishi.png"),
    alt: "Mitsubishi",
    to: "http://www.mitsubishi-sewing-machines.com",
    label: "三菱"
  },
  {
    loader: () => import("../../../../../resources/brother.png"),
    alt: "Brother",
    to: "https://http://www.brother.com/as_oc/ism",
    label: "兄弟"
  },
  {
    loader: () => import("../../../../../resources/organ.png"),
    alt: "Organ Needles",
    to: "http://organ-needles.com",
    label: "風琴"
  },
  {
    loader: () => import("../../../../../resources/maimin.png"),
    alt: "Mei Min",
    label: "美文電剪"
  },
  {
    loader: () => import("../../../../../resources/newlong.png"),
    alt: "New Long",
    to: "http://www.nlwww.com/",
    label: "紐朗"
  },
  {
    loader: () => import("../../../../../resources/impulsa.png"),
    alt: "IMPULSA",
    to: "http://www.impulsa.de",
    label: "IMPULSA"
  }
];

const Products = () => (
  <div id="products-container">
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
