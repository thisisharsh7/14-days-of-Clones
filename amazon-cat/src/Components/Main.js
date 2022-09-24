import React from 'react';
import Shop from './Shop';

export default function Main(props){
    return(
        <main className='relative'>
        <div className='overflow-hidden sm:h-72 max-h-max'>
            <img src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt="amazon-banner" className='w-full '/>
        </div>
            <Shop AddTo={props.AddTo} setItemCnt={props.itemCnt}/>
        </main>
    )
}