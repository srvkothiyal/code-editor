
import React from 'react'
import {AppBar ,Toolbar,styled} from "@mui/material";


const Container=styled(AppBar)`
background: #060606;
height:9vh
`


export default function Header() {
 const logo = "https://www.svgrepo.com/show/349323/codepen.svg";
 
  return (
  <Container position='static'>
    <Toolbar>
<img src={logo} alt='logo' style={{width:'40px',height:'40px'}}/>
    </Toolbar>
  </Container>
  )
}

