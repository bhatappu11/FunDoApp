import React from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import MoreIcon from '../more/MoreIcon';
import Palette from '../palette/Palette';


export default function IconButtons() {
    
    return (
        <div>
            <Box sx={{display:'flex'}}>
            <IconButton><AddAlertOutlinedIcon/></IconButton>
            <IconButton><PersonAddAltOutlinedIcon/></IconButton>
            <IconButton><Palette /></IconButton>
            <IconButton><ImageOutlinedIcon/></IconButton>
            <IconButton><ArchiveOutlinedIcon/></IconButton>
            <IconButton><MoreIcon/></IconButton>
            </Box> 
            
        </div>
    )
}
