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
      let dataArray = [
          {
              "Title":"one",
              "Content":"Hey there!!!"
          },
          {
            "Title":"two",
            "Content":"Hello world"
          },
          {
            "Title":"three",
            "Content":"Learning react and demonstrating array. It is a very long sentence."
          },
          {
            "Title":"four",
            "Content":"Random data everywhere"
          },
          {
            "Title":"five",
            "Content":"meeting at the central perk"
          }]; 
    return (
        <div>
            <ThemeProvider theme={theme}>
            <Header />
            <TakeNotes />
            <Box sx={{marginLeft: '15%', marginTop: '5%'}} >
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {notes.map((data)=>(
                        <Grid item xs={6} sm={3} md={2} >
                        <Item>
                        <Display data={data}/>
                        </Item>
                        </Grid>
                    ))}
                </Grid>
            </Box> 
            </ThemeProvider>
        </div>
    )
}


