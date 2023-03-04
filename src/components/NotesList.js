import {useEffect, useState } from "react";
import NotesService from "../services/NotesService";
import React from "react";
import { Link } from "react-router-dom";

const NotesList = () =>{
   const[notes,setNotes] = useState([]);
    useEffect(() => {
    NotesService.getAll().then(respnse => {
        console.log("printing data",respnse.data);
        setNotes(respnse.data);
    }).catch(error => {
        console.log('something went wrong',error);
    })
},[]);

    return( 
        <div className="create">
            <h4>List of Notes</h4>
            <div className="notes-list mt-4">
            {
                notes && notes.map(note =>(
                    <div key={note.id} className="notes-preview">
                        <Link to="#">
                        <h3 className="webnots-information">{note.title}</h3>
                        <h5>{note.body}</h5>
                        </Link>
                    </div>
                ))
            }
            </div>
        </div>
    );
}

export default NotesList;