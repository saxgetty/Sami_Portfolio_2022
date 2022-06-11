import * as React from 'react';
import { Link } from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

function Navbar() {

    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <Tabs 
        value={value} 
        onChange={handleChange} 
        textColor="secondary" 
        indicatorColor="secondary" 
        aria-label="icon label tabs example" 
        centered>
        {/* <Tab icon={<PersonOutlineOutlinedIcon />} label="ABOUT ME" /> */}
        <Link to="/about"><Tab icon={<PersonOutlineOutlinedIcon />} label="ABOUT ME" /></Link>
        <Tab icon={<CodeOutlinedIcon />} label="PROJECTS" />
        <Tab icon={<ArticleOutlinedIcon />} label="RESUME" />
        {/* <Tab icon={<AlternateEmailOutlinedIcon />} label="CONTACT ME" /> */}
        <Link to="/contact"><Tab icon={<AlternateEmailOutlinedIcon />} label="CONTACT ME" /></Link>
        
        </Tabs>
    );
}
    
export default Navbar;