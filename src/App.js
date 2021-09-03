import React from 'react';
import './App.css';
import Home from './pages/Home'
import History from './pages/History';
import Payloads from './pages/Payloads';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme';
import { Route, BrowserRouter, Switch, Link, Redirect } from "react-router-dom";

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

  const routes = ['/home', '/history', '/payloads']

  return (
    <>
    <ThemeProvider theme={theme}> 
      <CssBaseline />
      <BrowserRouter>
        <Route path="/">
          <AppBar position="sticky">
            <Tabs value={value} onChange={handleChange} className={classes.root} variant="fullWidth">
              <Tab label="Home" value={routes[0]} component={Link} to={routes[0]} />
              <Tab label="History" value={routes[1]} component={Link} to={routes[1]} />
              <Tab label="Payloads" value={routes[2]} component={Link} to={routes[2]} />
            </Tabs>
          </AppBar>
        </Route>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" component={Home} />
          <Route path="/history" component={History} />
          <Route path="/payloads" component={Payloads} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider> 
    </>
  );
}

export default App;
