import React from 'react';
import logo from './logo.svg';
import './App.css';
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import {theme} from '../src/themes/themes';
import Header from './components/organisms/header/Header';
import ExploreMenuIcons from './components/atoms/exploreMenuIcons/ExploreMenuIcons';
import ExploreMenu from './components/organisms/exploreMenu/ExploreMenu';

function App() {
  return (
    <div>
      <Header/>
    </div>
  );
}

export default App;
