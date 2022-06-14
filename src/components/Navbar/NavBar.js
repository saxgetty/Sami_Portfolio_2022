import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppBar from '@mui/material/AppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { Link } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
     
      main: '#9C6984',
    },
    secondary: {
      
      main: '#00838f',
    },
  },
});

// style= {{ background: 'black' }}
function Navbar() {

  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
   
    setSelectedTab(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <AppBar position="static" sx={{ height: 85 }}>
        <Tabs 
          selectionFollowsFocus
          value={selectedTab}  
          onChange={handleChange}
          textColor="warning-light" 
          indicatorColor="warning-light"  
          aria-label="icon label tabs example" 
          centered>
            <Tab icon={<PersonOutlineOutlinedIcon />} label="ABOUT ME" component={Link} to={"/about"} />
            <Tab icon={<CodeOutlinedIcon />} label="PROJECTS" component={Link} to={"/project"} />
            <Tab icon={<ArticleOutlinedIcon />} label="RESUME" component={Link} to={"/resume"} />
            <Tab icon={<AlternateEmailOutlinedIcon />} label="CONTACT ME" component={Link} to={"/contact"} />
          </Tabs>
        </AppBar>
      </>
    </ThemeProvider>
  );
}
    
export default Navbar;