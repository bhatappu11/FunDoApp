import React, { Component } from 'react'
import Header from '../../components/header/Header'
import './Dashboard.scss'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { experimentalStyled as styled } from '@mui/material/styles';

import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import IconButton from '@mui/material/IconButton';
import Fade from '@mui/material/Fade';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Collapse from '@mui/material/Collapse';
import InputBase from '@mui/material/InputBase';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import {Button} from '@mui/material';

export default function Dashboard() {
    const [checked, setChecked] = React.useState(false);
    const [hovered, setActive] = React.useState(false);

    const open = () => {
        setChecked(true);
    }
    const close = () => {
        setChecked(false);
    }
    const active = () => {
        setActive(true);
    }
    const inactive = () => {
        setActive(false);
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
      const bottomIcons = (
        <Box sx={{display:'flex'}}>
            <IconButton><AddAlertOutlinedIcon/></IconButton>
            <IconButton><PersonAddAltOutlinedIcon/></IconButton>
            <IconButton><PaletteOutlinedIcon/></IconButton>
            <IconButton><ImageOutlinedIcon/></IconButton>
            <IconButton><ArchiveOutlinedIcon/></IconButton>
            <IconButton><MoreVertOutlinedIcon/></IconButton>
        </Box>
    ); 
    const bottomPart = (
        <Box sx={{display:'flex'}}>
            <IconButton><AddAlertOutlinedIcon sx={{margin: '10px'}}/></IconButton>
            <IconButton><PersonAddAltOutlinedIcon sx={{margin: '10px'}}/></IconButton>
            <IconButton><PaletteOutlinedIcon sx={{margin: '10px'}}/></IconButton>
            <IconButton><ImageOutlinedIcon sx={{margin: '10px'}}/></IconButton>
            <IconButton><ArchiveOutlinedIcon sx={{margin: '10px'}}/></IconButton>
            <IconButton><MoreVertOutlinedIcon sx={{margin: '10px'}}/></IconButton>
            <IconButton><UndoOutlinedIcon sx={{margin: '10px'}}/></IconButton>
            <IconButton><RedoOutlinedIcon sx={{margin: '10px'}}/></IconButton>
            <Box sx={{flexGrow:1}}></Box>
            <Button onClick={close} size="small" sx={{color: 'white',textTransform: 'none', fontWeight: 'bolder', fontSize: '0.875rem'}}>Close</Button>
        </Box>
    );
    const tickmark = (
        <IconButton><CheckCircleIcon sx={{ display: 'flex', alignSelf: 'left',
        marginTop: -3,
        }} /></IconButton>
    );
    const pinbutton = (         
            <IconButton><PushPinOutlinedIcon/></IconButton>
    ); 
      
    const takenotes = (
        <Box sx={{display:'flex'}}>
            <InputBase
                placeholder="Title"
                sx={{flexGrow:'1'}}
            />
            <IconButton><PushPinOutlinedIcon/></IconButton>
        </Box>
    );
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
            <Box sx={{display:'flex', flexDirection:'column' ,width: '50%', marginLeft: '25%', justifyContent:'space-between'}}>
                <Paper sx={{padding:'5px 20px 5px 20px', borderRadius:'10px', border:'1px solid'}}>
                    <Collapse in={checked}>{takenotes}</Collapse>
                    <Box>
                    <InputBase
                        placeholder="Take a note... "
                        sx={{flexGrow:'1', padding:'10px'}}
                        multiline
                        maxRows={5}
                        onFocus={open}
                        fullWidth
                        sx={{flexGrow:1, padding: '20px 0'}}
                    />
                    </Box>
                    <Collapse in={checked}>{bottomPart}</Collapse>
                </Paper>
            </Box>
            <Box sx={{marginLeft: '15%', marginTop: '5%'}} onMouseEnter={active} onMouseLeave={inactive}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {dataArray.map((data)=>(
                        <Grid item xs={6} sm={3} md={2} >
                        <Item>
                            <Paper  variant="outlined" sx={{border:'0.1px solid', borderRadius:'10px', padding: '0 20px', wordWrap: 'break-word'}} >
                            <Fade in={hovered}>{tickmark}</Fade>
                            <Box sx={{fontSize:'16px', padding:'5px'}}>
                                <div className="notes-title">{data.Title}<Fade in={hovered}>{pinbutton}</Fade></div>
                                <div className="notes-content">{data.Content}</div>
                            </Box>
                            <Fade in={hovered}>{bottomIcons}</Fade>
                            </Paper>
                        </Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            </ThemeProvider>
        </div>
    )
}


