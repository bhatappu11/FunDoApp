import React, { Component ,useEffect, useState} from 'react'
import Header from '../../components/header/Header'
import './Dashboard.scss'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { experimentalStyled as styled } from '@mui/material/styles';

import TakeNotes from '../../components/takenotes/TakeNotes';
import Display from '../../components/display/Display';
import UserService from '../../services/UserService';

const userService = new UserService();

export default function Dashboard() {
    const [notes, setNotes] = useState([""]);
    const displayNote = () => {
        let config = {
            headers: {
                'Authorization' : localStorage.getItem("id"),
            }
        };
        userService.displayNotes("/notes/getNotesList",config)
        .then((res)=>{
            const data = res.data;
            const notes = data;
            setNotes(notes.data.data);
            console.log(notes.data.data);
            console.log("Notes displayed");
        })
        .catch((err)=>{
            console.log(err);
        });
    }
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

    React.useEffect(()=>{
         displayNote();
    },[]);
    return (
        <div>
            <ThemeProvider theme={theme}>
            <Header />
            <TakeNotes displayAfterAdd = {displayNote}/>
            <Display data={notes} displayAfterUpdate = {displayNote}/> 
            </ThemeProvider>
        </div>
    )
}


