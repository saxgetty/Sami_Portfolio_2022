import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppBar from '@mui/material/AppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';

const theme = createTheme({
  palette: {
    primary: {  
      main: '#9C6984',
    },
    secondary: {
      main: '#F4E1B5',
    },
  },
});

function Navbar() {

  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar sx={{ height: 85 }}>
      <Tabs 
        selectionFollowsFocus
        value={selectedTab}  
        onChange={handleChange}
        textColor='warning-light' 
        indicatorColor='warning-light'  
        aria-label='icon label tabs example' 
        centered
      >
          <Tab 
            icon={<PersonOutlineOutlinedIcon />} 
            style={{ color: 'wheat', fontSize: 'large', marginTop: 5 }} 
            component={ Link } 
            to={ '/about' }
            label={<span style={{ color: 'wheat'}}>ABOUT ME</span>} 
          />
          <Tab 
            icon={<CodeOutlinedIcon />} 
            style={{ color: 'wheat', fontSize: 'large', marginTop: 5 }} 
            component={ Link } 
            to={ '/project' } 
            label={<span style={{ color: 'wheat' }}>PROJECTS</span>} 
          />
          <Tab 
            icon={<BuildOutlinedIcon />} 
            style={{ color: 'wheat', fontSize: 'large', marginTop: 5 }} 
            component={ Link } 
            to={ '/skill' } 
            label={<span style={{ color: 'wheat' }}>SKILLS</span>} 
          />
          <Tab 
            icon={<AlternateEmailOutlinedIcon />} 
            style={{ color: 'wheat', fontSize: 'large', marginTop: 5 }} 
            component={ Link } 
            to={ '/contact' } 
            label={<span style={{ color: 'wheat' }}>CONTACT ME</span>} 
          />
        </Tabs>
      </AppBar>
    </ThemeProvider>
  );
}
    
export default Navbar;