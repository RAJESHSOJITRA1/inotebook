/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import NoteContext from "../Context/Notes/NoteContext";

import { useContext } from 'react';

const AddNote = (props) => {
    const  context = useContext(NoteContext);       //starting 5.40  63 video
    const {addNote}=context;

    const [note,setNote]=useState({title:"",description:"",tag:""})
   
    const handleClick=(e)=>{
        e.preventDefault(); // when Add Note clicked page not reload
        addNote(note.title,note.description,note.tag);  
        setNote({title:"",description:"",tag:""});
        props.showAlert("Note Added Successfully","success")
    }
        // e  = event
    const handleChange=(e)=>{                      //below line name is title,desc.. that  value will be change
        setNote({...note,[e.target.name]: e.target.value})      //...note is spread operator for added previous value
    }  
  return (
   <>   
     <div className="container my-3">
          <h2>Add a Note</h2>
          {/* below code for  first time adding a note */}
          <form action="POST">  
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Title</label>
              <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" placeholder="Enter Title of your note"  onChange={handleChange} minLength={5} value={note.title} required />   {/*onChange */  }  
              <small id="title" className="form-text text-muted">Well never share your Title with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input type="text" className="form-control" id="description" name="description" placeholder="Note Description " onChange={handleChange} minLength={5} value={note.description} required />   {/*onChange */  }  
            </div>
            <div className="form-group">
              <label htmlFor="tag">Tag</label>
              <input type="text" className="form-control" id="tag" name="tag" placeholder="tag" onChange={handleChange} value={note.tag} minLength={5} required/>   {/*onChange */  }  
            </div>

            <button disabled={note.title.length<5||note.description.length<5||note.tag.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>

          </form>
        </div>
   </>
  )
}

export default AddNote