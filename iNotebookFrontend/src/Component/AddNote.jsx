import React, { useState } from 'react'
import NoteContext from "../Context/Notes/NoteContext";
import { useContext } from 'react';

const AddNote = () => {
    const  context = useContext(NoteContext);       //starting 5.40  63 video
    const {addNote}=context;

    const [note,setNote]=useState({title:"",description:"",tag:""})
   
    const handleClick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
    }
    const handleChange=(e)=>{
        setNote({...note,[e.target.name]: e.target.value})      //...note spread operator for added previous value
    }
  return (
   <>   
     <div className="container my-3">
          <h2>Add a Note</h2>
          <form action="POST">  
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Title</label>
              <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" placeholder="Enter email"  onChange={handleChange} />   {/*onChange */  }  
              <small id="emailHelp" className="form-text text-muted">Well never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input type="text" className="form-control" id="description" name="description" placeholder="Password" onChange={handleChange} />   {/*onChange */  }  
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