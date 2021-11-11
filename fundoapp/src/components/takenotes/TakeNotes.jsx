import React,{useState} from 'react'
import IconButtons from '../icons/IconButtons';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {Button} from '@mui/material';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import UserService from '../../services/UserService';

const userService = new UserService();


export default function TakeNotes(props) {
    const [checked, setChecked] = React.useState(false);
    const [title,setTitle] = React.useState("");
    const [content,setContent] = React.useState("");
    const open = () => {
        setChecked(true);
    }
    const close = () => {
        let data = {
            title: title,
            description: content,
        };
        let config = {
            headers: {
                'Authorization': localStorage.getItem("id"),
            }
        }
        userService.addNotes("/notes/addNotes",data,config)
        .then(()=>{
            console.log("Notes Added");
            props.displayAfterAdd();
        })
        .catch((err)=>{
            console.log(err);
        });
        setChecked(false);
        setTitle("");
        setContent("");
    }
    const takenotes = (
        <Box sx={{display:'flex'}}>
            <InputBase
                placeholder="Title"
                sx={{flexGrow:'1'}}
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
            />
            <IconButton><PushPinOutlinedIcon/></IconButton>
        </Box>
    );
    return (
        <div>
            <Box sx={{display:'flex', flexDirection:'column' ,width: '50%', marginLeft: '25%', justifyContent:'space-between'}}>
                <Paper sx={{padding:'5px 20px 5px 20px', borderRadius:'10px', border:'1px solid'}}>
                    <Collapse in={checked}>{takenotes}</Collapse>
                    <Box sx={{display: 'flex'}}>
                    <InputBase
                        placeholder="Take a note... "
                        sx={{flexGrow:'1', padding:'10px'}}
                        multiline
                        maxRows={30}
                        onFocus={open}
                        fullWidth
                        value={content}
                        sx={{flexGrow:1, padding: '20px 0'}}
                        onChange={(e)=> setContent(e.target.value)}
                    />
                    <Collapse in={!checked}>
                        <Box sx={{display: 'flex'}}>
                        <IconButton><CheckBoxOutlinedIcon /></IconButton>
                        <IconButton><BrushOutlinedIcon /></IconButton>
                        <IconButton><ImageOutlinedIcon /></IconButton> 
                        </Box>
                    </Collapse>
                    </Box>
                    <Box >
                    <Collapse in={checked}>
                        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <IconButtons />
                        <Button onClick={close} size="small" sx={{color: 'white',textTransform: 'none', fontWeight: 'bolder', fontSize: '0.875rem'}}>Close</Button>
                        </Box>
                    </Collapse>
                    </Box>
                </Paper>
            </Box>
        </div>
    )
}
