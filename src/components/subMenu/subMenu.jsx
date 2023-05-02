import React,{useRef,useState} from 'react'
import classess from  '../../../styles/landing.module.css';
import {subMenuItem} from '../../Data/subMenu.data';
import createRef from 'createref';
import SearchBar1 from './searchBar';

export default function SubMenu() {
  const [displayState,setDisplayState] = useState([true]);
  const [active, setActive]=useState();
    const handleClick =(data,index,id)=>{
     
      console.log("subMenuItem", subMenuItem)
      setDisplayState([]);
      displayState=[];
      console.log("index",index)
      subMenuItem.map((item,i)=>{
        if(index==i){
          displayState[i]=true;
          setActive(index)
          setDisplayState([
            ...displayState,
            true
          ])
        }
        else{
          displayState[i]=false;
          setDisplayState([
            ...displayState,
            false
          ])
        }
      })
      console.log("displayState",displayState)

    }
  return (

    <div className={classess.subMenu}>
        <ul className={classess.menuItem}>
       {subMenuItem.map((item,i) => (
        
          <li>
            <a id={i} className={item.i === active ? "selected" : ""} href='#' onClick={() => handleClick(item, i)}>{item.title}</a>
           </li>  
            
              ))} 
       </ul>
       
      {subMenuItem.map((item,i) => (
        
         <div  id={item.title} className={displayState[i]?classess.blockDisplay:classess.nonDisplay}>
          <h1 className={classess.text1}>
          {item.text}
          </h1>
          <div className={classess.text2}>
            {item.text2}
          </div>
          <SearchBar1/>
         </div>
          
         
            
              ))}         
    </div>
  // </div>
  )
}
