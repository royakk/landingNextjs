import React from 'react'
import classess from  '../../../styles/landing.module.css';
import MenuItem from '@mui/material/MenuItem';
export default function cascadeMenuItem(props) {
  
    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const handleClose = () => {
      setAnchorEl(null);
    };
   
  return (
    // <div className={classess.itemContainer}>
    <div className={classess.iconCascadMenu}> 
    <img src={props.src}/>
   <MenuItem onClick={handleClose}>{props.itemName}</MenuItem>
  
   </div> 
  //  </div> 
    
  )
}
