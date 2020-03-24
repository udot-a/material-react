import React from 'react';
import Home from "./components";
import CssBaseline from "@material-ui/core/CssBaseline";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {MuiThemeProvider} from '@material-ui/core'
import './App.css'

const theme = createMuiTheme();
//     {
//     palette: {
//         primary: {
//             light: orange[200], // same as '#FFCC80',
//             main: '#FB8C00', // same as orange[600]
//             dark: '#EF6C00',
//             contrastText: 'rgb(0,0,0)'
//         }
//     }
// });
export default function App() {
  return (
      <MuiThemeProvider theme={theme}>

          <CssBaseline>
              <Home/>

          </CssBaseline>
      </MuiThemeProvider>
  );
}


