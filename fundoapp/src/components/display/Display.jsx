import React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Fade from '@mui/material/Fade';
import IconButtons from '../icons/IconButtons';
import Grid from '@mui/material/Grid';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';


import { experimentalStyled as styled } from '@mui/material/styles';

export default function Display(props) {
    const [checked, setChecked] = React.useState(false);
    
    const open = () => {
        setChecked(true);
    }
    const bottom = (
        <Box>
            <IconButtons />
        </Box>
    )
    const close = () => {
        setChecked(false);
    }
    const pinbutton = (         
            <IconButton><PushPinOutlinedIcon/></IconButton>
    ); 
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
            <Box sx={{marginLeft: '5%', marginTop: '5%'}} >
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 10 }}>
                    {props.data.map((note)=>(
                        <Grid item xs={6} sm={3} md={2} >
                        <Item>
                        <Box  sx={{display:'flex', flexDirection:'column'}} onMouseEnter={open} onMouseLeave={close}>                        
                            <Paper  variant="outlined" sx={{border:'0.1px solid', borderRadius:'10px', padding: '0 10px', wordWrap: 'break-word'}} >
                        
                            <Box sx={{fontSize:'16px', padding:'5px'}}>
                                 <div className="notes-title">{note.title}<Fade in={checked}>{pinbutton}</Fade></div>
                                 <div className="notes-content">{note.description}</div>
                            </Box>
                             <Fade in={checked}>{bottom}</Fade>
                            </Paper>
                        </Box>
                        </Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>            
        </div>
    )
}