import React from "react";
import cross from "./Images/cross.png";

export default function Cart({cartItem , deleteCart, ItemCnt}) {

  
  return (
    <main>
    <div className="bg-slate-100">
      <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt="cart-banner" className="sm:w-80 w-full" />
      </div>
      <div className="flex flex-wrap gap-6 mx-3 sm:justify-start justify-center">{
        (ItemCnt) ? cartItem.map((scart,idx)=>{
          return <div  className="p-4 border flex flex-col items-center gap-3 border-slate-900 cursor-pointer" key={idx} ><img src={cross} onClick={deleteCart} alt="cross" /><div dangerouslySetInnerHTML={{__html:scart}}  /> </div>
        
        }) : <div className="flex flex-col sm:gap-3 gap-2"><h1 className="font-bold xl:text-5xl text-3xl">Your cart is empty</h1><p className="text-zinc-400  xl:text-xl text-lg">You have no items in your cart. To add item to cart click the add to cart button.</p></div>
      
      }
      </div>
    </main>
  );
}
