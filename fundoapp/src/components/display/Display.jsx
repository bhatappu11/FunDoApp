import React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Fade from '@mui/material/Fade';
import IconButtons from '../icons/IconButtons';
import Grid from '@mui/material/Grid';
import InputBase from '@mui/material/InputBase';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import {Button} from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import UserService from '../../services/UserService';
import './Display.scss';

const userService = new UserService();

export default function Display(props) {
    const [checked, setChecked] = React.useState(false);
    const [pop, setOpen] = React.useState(false);
    const [title,setTitle] = React.useState("");
    const [content,setContent] = React.useState("");
    const [noteid,setId] = React.useState("");

    const handleClickOpen = (note) => {
        setOpen(true);
        setTitle(note.title);
        setId(note.id);
        setContent(note.description);
    };
    const updateNote = () => {
        let data = {
            noteId:noteid,
            title: title,
            description: content,
        };
        let config = {
            headers: {
                'Authorization': localStorage.getItem("id"),
            }
        }
        userService.updateNotes("/notes/updateNotes",data,config)
        .then(()=>{
            console.log("Notes updated successfully");
            props.displayAfterUpdate();
        })
        .catch((err)=>{
            console.log(err);
        });
        setOpen(false);
    }
    const handleClose = () => {
        updateNote();
    };
    
    const open = () => {
        setChecked(true);
    }
    const close = () => {
        setChecked(false);
    }
    const bottom = (
        <Box>
            <IconButtons />
        </Box>
    )
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
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {props.data.map((note)=>(
                        <Grid item xs={6} sm={3} md={2} >
                        <Item>
                            <div className="note">
                        <Box  sx={{display:'flex', flexDirection:'column'}} onMouseEnter={open} onMouseLeave={close} onClick={()=>handleClickOpen(note)}>                        
                            <Paper  variant="outlined" sx={{border:'0.1px solid', borderRadius:'10px', padding: '0 5px', wordWrap: 'break-word'}} >
                        
                            <Box sx={{fontSize:'16px', padding:'5px'}}>
                                 <div className="notes-title">{note.title}<div className="pin-icons">{pinbutton}</div></div>
                                 <div className="notes-content">{note.description}</div>
                            </Box>
                            <div className="icons">
                                {bottom}
                            </div>
                            </Paper>
                        </Box>
                        </div>
                        </Item>
                        </Grid>
                    ))}
                </Grid>
            </Box> 
            <Dialog open={pop} onClose={()=>handleClose}>
            <Box sx={{display:'flex', flexDirection:'column' ,width: '100%', justifyContent:'space-between'}}>
                <Paper sx={{padding:'5px 20px 5px 20px', borderRadius:'10px', border:'1px solid'}}>
                <DialogContent>
                    <InputBase
                        defaultValue={title}
                        sx={{flexGrow:'1'}}
                        onChange={(e)=> setTitle(e.target.value)}
                    />
                    <InputBase
                        defaultValue={content}
                        sx={{flexGrow:'1', padding:'10px'}}
                        multiline
                        maxRows={30}
                        onFocus={open}
                        fullWidth
                        sx={{flexGrow:1, padding: '20px 0'}}
                        onChange={(e)=> setContent(e.target.value)}
                    />
                </DialogContent>
                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <IconButtons />
                        <Button onClick={handleClose} size="small" sx={{color: 'white',textTransform: 'none', fontWeight: 'bolder', fontSize: '0.875rem'}}>Close</Button>
                    </Box>
                </Paper>
                </Box>
            </Dialog>           
        </div>
    )
}