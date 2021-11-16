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
import UserService from '../../services/UserService';
import Collaborators from '../collaborators/Collaborators';

const userService = new UserService();

export default function IconButtons(props) {

    const handleArchive = () => {
        //props.setArchive(true);
        if(props.mode=="create"){
            props.setArchive(true);
            console.log("created archived notes");
            props.setCallEffect(!props.callEffect);
        }
        if(props.mode == "update"){            
            let data = {
                noteIdList: [props.noteid],
                isArchived: true,
            };
            let config = {
                headers: {
                    'Authorization': localStorage.getItem("id"),
                }
            }
            userService.archiveNotes("/notes/archiveNotes",data,config)
            .then(()=>{
                console.log("archived successfully");
                props.handleClose();
                props.displayAfterUpdate();
            })
            .catch((err)=>{
                console.log(err);
            });
        }
    };
    
    return (
        <div>
            <Box sx={{display:'flex'}}>
            <IconButton><AddAlertOutlinedIcon/></IconButton>
            <IconButton><Collaborators /></IconButton>
            <IconButton>{props.mode=="create" ? <Palette mode="create" setColor={props.setColor} displayAfterUpdate = {props.displayAfterUpdate} noteid={props.noteid}/> : <Palette mode="update" setColor={props.setColor} displayAfterUpdate = {props.displayAfterUpdate} noteid={props.noteid} />}</IconButton>
            <IconButton><ImageOutlinedIcon/></IconButton>
            <IconButton><ArchiveOutlinedIcon onClick={handleArchive} /></IconButton>
            <IconButton>{props.mode=="create" ? <MoreIcon mode="create" setDelete={props.setDelete} setCallEffect={props.setCallEffect} displayAfterUpdate = {props.displayAfterUpdate} noteid={props.noteid}/> : <MoreIcon mode="update" handleClose={props.handleClose} setDelete={props.setDelete} setCallEffect={props.setCallEffect} displayAfterUpdate = {props.displayAfterUpdate} noteid={props.noteid}/>}</IconButton>
            </Box> 
            
        </div>
    )
}
