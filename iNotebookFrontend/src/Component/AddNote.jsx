import React, { useState } from 'react'
import NoteContext from "../Context/Notes/NoteContext";
import { useContext } from 'react';

const AddNote = () => {
    const  context = useContext(NoteContext);       //starting 5.40  63 video
    const {addNote}=context;

    const [note,setNote]=useState({title:"",description:"",tag:""})
   
    const handleClick=(e)=>{
        e.preventDefault(); // when Add Note clicked page not reload
        addNote(note.title,note.description,note.tag);  
    }
        // e  = event
    const handleChange=(e)=>{                      //below line name is title,desc.. that  value will be change
        setNote({...note,[e.target.name]: e.target.value})      //...note is spread operator for added previous value
    }  
  return (
   <>   
     <div className="container my-3">
          <h2>Add a Note</h2>
          <form action="POST">  
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Title</label>
              <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" placeholder="Enter Title of your note"  onChange={handleChange} />   {/*onChange */  }  
              <small id="title" className="form-text text-muted">Well never share your Title with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input type="text" className="form-control" id="description" name="description" placeholder="Note Description " onChange={handleChange} />   {/*onChange */  }  
            </div>
            <div className="form-group">
              <label htmlFor="tag">Tag</label>
              <input type="text" className="form-control" id="tag" name="tag" placeholder="tag" onChange={handleChange} />   {/*onChange */  }  
            </div>

            <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>

          </form>
        </div>
   </>
  )
}

export default AddNote