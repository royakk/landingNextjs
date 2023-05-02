import React, { useState, useEffect } from 'react';

import Navbar from '../src/components/navbar/navbar';
import Classess from '../styles/landing.module.css';
import Card from '../src/components/card/card';
import Dbutton from '../src/components/buttons/dropDownButton';
import Footer from '../src/components/footer/footer';
import SubMenu from './../src/components/subMenu/subMenu';
import SearchBar1 from '../src/components/subMenu/searchBar';
import DetailProducts from './ProductPage';
import ProductCard from '../src/Data/card.data.json';
import Contact from './contact';
export default  function landingPage() {
  

 
  return (
    <>
      <Navbar /> 
      
       <div>
        <div className={Classess.slider}>
        <div className={Classess.test}>
        <div className={Classess.inner}>
        {/* <div className='d-flex'> */}
        <SubMenu/>
        </div>
        </div>
        {/* </div> */}
        
          <div className={Classess.media}>
          <video className={Classess.video} autoplay="autoplay" loop="true" muted defaultmuted playsinline  > 
          <source  src="https://cdn.dribbble.com/uploads/39417/original/49dbf46eae15d227fc95a69cee31251e.mp4?1657824906" type="video/mp4"/>
          
          </video>
          
          </div>
          </div>
          <div className={Classess.mainContainer}>
        <div className={Classess.filterContainer}>
          <div className={Classess.filterInner}>
            <div className={Classess.btnpopular}>
            <Dbutton 
            lable='popular'/>
            </div>
            <div className={Classess.btnfilters} >
            <Dbutton lable='filters'/>
            </div>
          </div>
        </div>
      <div className={Classess.cardContainer}>
      
        <ol className={Classess.groupCard} >
        {ProductCard.map((item) => (
          <li  className={Classess.cardItem} ><Card title={item.title} img={item.image} id={item.id} subheader={item.category} /></li>
          
          ))}
        </ol>
       
      </div>
     
    </div>
    </div>

    <div  className={Classess.footerContainer}>
        <div className={Classess.footerItems}>
          <Footer/>
         
        </div>
        
       </div>
      

      </>
  )
}
