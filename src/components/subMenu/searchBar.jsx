import React,{useState} from 'react'
// import SearchBar from "material-ui-search-bar";
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

export default function SearchBar2() {
    const [state,setState]=useState();
    const Search = styled('div')(({ theme }) => ({
      position: 'relative',
      borderRadius: '50px',
      backgroundColor: (theme.palette.common.white),
      '&:hover': {
        backgroundColor: (theme.palette.common.white),
        border:'1px solid #ea4c89 '
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('md')]: {
        marginLeft: theme.spacing(1),
        width: '500px',
        height:'55px'
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
        padding: theme.spacing(2, 2, 2, 2),
        
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '100%',
          height:'1ch'
        },
        [theme.breakpoints.up('xs')]: {
          width: '18ch',
          height:'1ch'
        },
      },
    }));
  return (
    <div>
        <Box sx={{ flexGrow: 0, display: {md: 'flex' }}}>
            <Search >
            <SearchIconWrapper sx={{color: 'white'}}>
              <SearchIcon sx={{color: '#6e6d71'}}/>
            </SearchIconWrapper>
            <StyledInputBase
           sx={{color: '#6e6d71'}}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> 
          </Box>
    </div>
  )
}
