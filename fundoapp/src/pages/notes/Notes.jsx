import React,{ Component ,useEffect, useState} from 'react'
import UserService from '../../services/UserService';
import TakeNotes from '../../components/takenotes/TakeNotes';
import Display from '../../components/display/Display';

const userService = new UserService();

export default function Notes() {
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
    React.useEffect(()=>{
        displayNote();
   },[]);
    return (
        <div>
            <TakeNotes displayAfterAdd = {displayNote}/>
            <Display data={notes.filter(ele => ele.isArchived == false && ele.isDeleted == false)} displayAfterUpdate = {displayNote}/> 
        </div>
    )
}
