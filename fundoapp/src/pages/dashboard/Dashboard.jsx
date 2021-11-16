import React, { Component ,useEffect, useState} from 'react'
import Header from '../../components/header/Header'
import './Dashboard.scss'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import UserService from '../../services/UserService';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Archives from '../archives/Archives'
import Trash from '../trash/Trash'
import Notes from '../notes/Notes'

const userService = new UserService();

export default function Dashboard() {
    const theme = createTheme({
        palette:{
            mode:'dark',
        }
      });

      const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    return (
        <div>
            <ThemeProvider theme={theme}>
            <Header />
            <Switch>
                <Route exact path="/dashboard" component={Notes}/>
                <Route exact  path="/dashboard/archive" component={Archives}/>
                <Route exact path="/dashboard/trash" component={Trash}/>
            </Switch>
            </ThemeProvider>
        </div>
    )
}


