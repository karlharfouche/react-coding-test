import React from 'react';
import './App.css';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import History from './pages/History';
import Payloads from './pages/Payloads';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme';

// Tab pannel:
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'linear-gradient(45deg, #4F00A1 30%, #A400B6 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    padding: '0 30px',
  },
}));

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <ThemeProvider theme={theme}> 
      <CssBaseline />
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} className={classes.root} aria-label="simple tabs example" variant="fullWidth">
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="History" {...a11yProps(1)} />
          <Tab label="Payloads" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Home />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <History />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Payloads />
      </TabPanel>
    </ThemeProvider> 
    </>
  );
}

export default App;
