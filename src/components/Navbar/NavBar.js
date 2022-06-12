import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppBar from '@mui/material/AppBar';
// import { makeStyles } from '@mui/styles';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { Link } from 'react-router-dom';
import { jsx, css } from '@emotion/react'

// const useStyle = makeStyles({
//   navbar: {
//     background: "#2874f0",
//     height: 55,
//   },
// });
const style = css`
  color: hotpink;
`

function Navbar() {

  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
   
    setSelectedTab(newValue);
  };

  return (
    <>
      <AppBar position="static" style= {{ background: 'white' }}>
      <Tabs 
        selectionFollowsFocus
        value={selectedTab}  
        onChange={handleChange}
        textColor="secondary" 
        indicatorColor="secondary"  
        aria-label="icon label tabs example" 
        centered>
          <Tab icon={<PersonOutlineOutlinedIcon />} label="ABOUT ME" component={Link} to={"/about"} />
          <Tab icon={<CodeOutlinedIcon />} label="PROJECTS" component={Link} to={"/project"} />
          <Tab icon={<ArticleOutlinedIcon />} label="RESUME" component={Link} to={"/resume"} />
          <Tab icon={<AlternateEmailOutlinedIcon />} label="CONTACT ME" component={Link} to={"/contact"} />
        </Tabs>
      </AppBar>
    </>
  );
}
    
export default Navbar;