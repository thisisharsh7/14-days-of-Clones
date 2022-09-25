import React from "react";
import Product from "./Product";

export default function Shop(props) {
  return (
    <div className="shopping-items flex flex-wrap gap-8 mt-10 mx-3 justify-center pb-20">
      <Product AddTo={props.AddTo} cntItem={props.setItemCnt} imgSrc="https://images-eu.ssl-images-amazon.com/images/I/317JiGToz-L._SY445_SX342_QL70_FMwebp_.jpg" name="Vivo 9"/>
      <Product AddTo={props.AddTo} cntItem={props.setItemCnt} imgSrc="https://m.media-amazon.com/images/I/812YsUxpyfL._SX679_.jpg" name="Samsung M13"/>
      <Product AddTo={props.AddTo} cntItem={props.setItemCnt} imgSrc="https://images-eu.ssl-images-amazon.com/images/I/417k0DCw0GL._SX300_SY300_QL70_FMwebp_.jpg" name="Redmi note 11T"/>
      <Product AddTo={props.AddTo} cntItem={props.setItemCnt} imgSrc="https://m.media-amazon.com/images/I/61E4zA32FrL._SX569_.jpg" name="iQOO Z6 pro"/>
      <Product AddTo={props.AddTo} cntItem={props.setItemCnt} imgSrc="https://images-eu.ssl-images-amazon.com/images/I/51DLLa8HNWL._SX300_SY300_QL70_FMwebp_.jpg" name="iQOO Neo 6"/>
      <Product AddTo={props.AddTo} cntItem={props.setItemCnt} imgSrc="https://images-eu.ssl-images-amazon.com/images/I/31smn8fDvrL._SY445_SX342_QL70_FMwebp_.jpg" name="iPhone 13" />
    </div>
  );
}
