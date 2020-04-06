import React from 'react';
import Home from "./components";
import CssBaseline from "@material-ui/core/CssBaseline";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {MuiThemeProvider} from '@material-ui/core'
import './App.css'
import  Resume from './components/Resume'
import {Route} from 'react-router-dom'
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";

const theme = createMuiTheme();

export default function App() {
  return (
      <MuiThemeProvider theme={theme}>

          <CssBaseline>
              <Route exact path={"/"} component={Home}/>
              <Route path={"/resume"} component={Resume}/>
              <Route path={"/portfolio"} component={Portfolio}/>
              <Route path={"/contacts"} component={Contacts}/>

          </CssBaseline>
      </MuiThemeProvider>
  );
}


