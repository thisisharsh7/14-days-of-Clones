import React from 'react';
import Shop from './Shop';

export default function Main(props){
    return(
        <main className='relative'>
            <img src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt="amazon-banner" className='w-full'/>
            <Shop AddTo={props.AddTo}/>
        </main>
    )
}