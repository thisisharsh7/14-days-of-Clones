import React from "react";
import cross from "./Images/cross.png";

export default function Cart({cartItem , deleteCart, ItemCnt}) {

  
  
  return (
    <main className="pb-10">
    <div className="bg-slate-100 relative">
      <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt="cart-banner" className="sm:w-80 w-full" />
      <div className="absolute right-0 z-30 bg-zinc-300 bottom-0 sm:top-0 sm:py-0 py-3 flex flex-col gap-1  justify-center px-5 md:opacity-100 opacity-60">
        <p>Cart-total: <strong className="text-green-800 text-2xl">24$</strong></p>
        <p>Cart-item: <span className="font-bold text-yellow-600 text-2xl">{ItemCnt}</span></p>
      </div>
      </div>
      <div className="flex flex-wrap gap-4 mx-3  xl:justify-start sm:justify-center justify-center pt-4">{
        (cartItem && ItemCnt) ? cartItem.map((scart,idx)=>{
          return <div  className="p-4 border flex flex-col items-center gap-3 border-slate-900 cursor-pointer" key={idx} ><img src={cross} onClick={deleteCart} alt="cross" /><div className="cursor-auto" dangerouslySetInnerHTML={{__html:scart}}  /> </div>
  
        }) : <div className="flex flex-col sm:gap-3 gap-2"><h1 className="font-bold xl:text-5xl sm:text-3xl text-2xl">Your cart is empty</h1><p className="text-zinc-400  xl:text-xl sm:text-lg text-base">You have no items in your cart. To add item to cart click the add to cart button.</p></div>
      
      }
      </div>
      
    </main>
  );
}
