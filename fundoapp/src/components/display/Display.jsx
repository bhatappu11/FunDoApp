import React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Fade from '@mui/material/Fade';
import IconButtons from '../icons/IconButtons';

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
            <Box  sx={{display:'flex', flexDirection:'column'}} onMouseEnter={open} onMouseLeave={close}>                        
                    <Paper  variant="outlined" sx={{border:'0.1px solid', borderRadius:'10px', padding: '0 10px', wordWrap: 'break-word'}} >
                        {/* <Fade in={checked}>{tickmark}</Fade> */}
                        {/* <Box>{tickmark}</Box> */}
                        <Box sx={{fontSize:'16px', padding:'10px'}}>
                                 <div className="notes-title">{props.data.title}<Fade in={checked}>{pinbutton}</Fade></div>
                                 <div className="notes-content">{props.data.description}</div>
                        </Box>
                        <Fade in={checked}>{bottom}</Fade>
                    </Paper>
            </Box>
            
        </div>
    )
}