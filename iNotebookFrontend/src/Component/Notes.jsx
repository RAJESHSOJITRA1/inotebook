/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import NoteContext from "../Context/Notes/NoteContext";
import { useContext } from 'react';
import Noteitem from "./Noteitem";
const Notes=()=>{

    const  context = useContext(NoteContext);
    const {notes,setNotes}=context;
    return( 
        <>  
        <div className="row container">
            {notes.map((note)=>{
                return <Noteitem note={note}/>
                
            })}
          </div>
        </>
    )
}

export default Notes;