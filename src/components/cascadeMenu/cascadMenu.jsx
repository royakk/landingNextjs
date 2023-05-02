import React from 'react'
import classess from '../../../styles/landing.module.css';
import MenuItem from '@mui/material/MenuItem';
import CascadeMenuItem from './cascadeMenuItem';
import {cascadeMenuItems} from '../../Data/cascadeMenuItem.data'

export default function CascadMenu1() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }
  const handleClose = () => {
    setAnchorEl(null);
  };
 
  
  return (
    <div>
    <div className={classess.containerCascadMenu}>
    <div className={classess.leftCascadMenu}>
{cascadeMenuItems.map((item)=>(
  <CascadeMenuItem src={item.src} itemName={item.itemName} /> 
))}
 
    
  </div>
  
  <div className={classess.rightCascadMenu}>
  <div className={classess.iconCascadMenu}>
  <MenuItem onClick={handleClose}>Animation</MenuItem>
  </div>
  <div className={classess.iconCascadMenu}>
  <MenuItem onClick={handleClose}>Branding</MenuItem>
  </div>
  <div className={classess.iconCascadMenu}>
  <MenuItem onClick={handleClose}>Illustration</MenuItem>
  </div>

  <div className={classess.iconCascadMenu}> 
  <MenuItem onClick={handleClose}>Mobile</MenuItem>
  </div>
  <div className={classess.iconCascadMenu}> 
  <MenuItem onClick={handleClose}>Product Design</MenuItem>
  </div>
</div>
</div>
</div>
  )
}
