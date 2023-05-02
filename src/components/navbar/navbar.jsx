import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { collapseClasses } from '@mui/material';
import classess from  '../../../styles/landing.module.css';
import { useRouter } from 'next/router';
import { useSession } from "next-auth/react"
import { AiFillHeart,AiFillHighlight,AiFillSmile,AiOutlineAliwangwang,AiTwotoneSkin } from "react-icons/ai";
import Link from 'next/link';
import CascadeMenu from '../cascadeMenu/cascadMenu';

const pages = ['Home', 'Menu1', 'Menu2','Menu3','Contact'];
const settings = [
  {name:'Profile',
   href:'/Profile'}, 
  {name:'Account',
   href:'/Account'}, 
  {name:'Dashboard',
   href:'/Dashboard'}, 
  {name:'Logout',
   href:'/Logout'}, 
  ]


const ResponsiveAppBar = ({children}) => {
  const router = useRouter();
  const { data: session, status } = useSession();

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));

      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [CascadMenu, setCascadMenu] = React.useState(null);
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
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  

  return (
<>
    <AppBar position="static"
    sx={{backgroundColor:'#f3f3f4',boxShadow:'none'}}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         
          

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
            
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{color: '#6e6d7a'}} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' ,zIndex:'99'},
               width:'100'
              }}
              
            >
             {pages.map((page) => (
             
             <Button
             sx={{ my: 2, color: 'white', display: 'block', }}
             id="basic-button"
             aria-controls={open ? 'basic-menu' : undefined}
             aria-haspopup="true"
             aria-expanded={open ? 'true' : undefined}
             onClick={handleClick}
            //  onMouseMove={handleClick}
             // onMouseOut={handleCloseUserMenu}
           >
           {page}
           </Button>
              ))}
               <Menu
             
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    onMouseLeave: handleClose
                   
        }}
      >
       <CascadeMenu/>
  
      </Menu>
        </Menu>
        <img className={classess.logoImgxs} src='logo.jpg'/>

          </Box>
         
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } , }}>
          <img className={classess.logoImg} src='logo.jpg'/>
            {pages.map((page) => (
             
            <Button
            sx={{ my: 2, color: 'white', display: 'block' }}
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            onMouseMove={handleClick}
            // onMouseOut={handleCloseUserMenu}
          >
          {page}
          </Button>
            ))}
            <Menu
             
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    onMouseLeave: handleClose
                   
        }}
      >
       <CascadeMenu/>
  
      </Menu>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }}}>
            <Search >
            <SearchIconWrapper sx={{color: '#6e6d71'}}>
              <SearchIcon sx={{color: '#6e6d71'}}/>
            </SearchIconWrapper>
            <StyledInputBase
           sx={{color: '#6e6d71'}}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> 
          </Box>
          { status==="authenticated" ?
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/150.jpg" />
              </IconButton>
            </Tooltip>
            
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
             
                {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center"><Link href={setting.href}>
                     {setting.name}</Link>
                     </Typography>
                </MenuItem>
             

              ))
             
              }  
            </Menu>
            
           
          </Box>
          :
          
          <Button
          
           sx={{backgroundColor: '#ea4c89',borderRadius:'8px',height: '40px',lineHeight:'20px',margin:'5px'}} variant="contained" href="/signIn">
                Sign In
            </Button>
}
        </Toolbar>
        
      </Container>
    </AppBar>
    {children}
   </>
  );
  
};
export default ResponsiveAppBar;
