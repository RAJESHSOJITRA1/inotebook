/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import NoteContext from "../Context/Notes/NoteContext";
import { useContext } from 'react';
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
const Notes=()=>{

    const  context = useContext(NoteContext);       //starting 5.40  63 video
    const {notes,addNote}=context;
    return( 
        <>  
        <AddNote/>
        <div className="row container">
            {notes.map((note,key)=>{
                return <Noteitem key={note._id} note={note}/>
                
            })}
          </div>
        </>
    )
}

export default Notes;

