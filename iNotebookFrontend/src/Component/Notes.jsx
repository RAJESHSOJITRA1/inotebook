/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import NoteContext from "../Context/Notes/NoteContext";
import { useContext, useEffect, useRef,useState } from 'react';
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import {  useNavigate } from 'react-router-dom';

    // Updating the Notes       
const Notes = (props) => {
    const context = useContext(NoteContext);       //starting 5.40  63 video
    const { notes, getNotes ,editNote} = context;
    let Navigate=useNavigate()
    const ref = useRef(null)
    const refClose = useRef(null)

    useEffect(() => {
        if(localStorage.getItem("token")){
        getNotes();
    }
    else{
        Navigate("./login")
    }
    }, [])
    const [note,setNote]=useState({id:"",etitle:"",edescription:"",etag:""})
    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id:currentNote._id, etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})
    }

    const handleClick=(e)=>{
        console.log("updating the note",note);
        editNote(note.id,note.etitle,note.edescription,note.etag);
        // e.preventDefault(); // when Add Note clicked page not reload
        refClose.current.click();
        props.showAlert("updated Successfully","success")
    }
        // e  = event
    const handleChange=(e)=>{                      //below line name is title,desc.. that  value will be change
        setNote({...note,[e.target.name]: e.target.value})      //...note is spread operator for added previous value
    }
    return (
        <>  
            <AddNote showAlert={props.showAlert} />

            {/* Below code is for edit a note */}
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edite Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="POST">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" placeholder="Enter Title of your note" value={note.etitle} onChange={handleChange} minLength={5}  required/>   {/*onChange */}
                                    <small id="title" className="form-text text-muted">Well never share your Title with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <input type="text" className="form-control" id="edescription" name="edescription" placeholder="Note Description " value={note.edescription} onChange={handleChange}  minLength={5} required/>   {/*onChange */}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="tag">Tag</label>
                                    <input type="text" className="form-control" id="etag" value={note.etag} name="etag" placeholder="tag" onChange={handleChange}    minLength={5} required />   {/*onChange */}
                                </div>


                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button  disabled={note.etitle.length<5||note.edescription.length<5||note.etag.length<5} type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row container">
            <div className='container'>
                  {notes.length===0 &&"no notes to display please add a notes"}
                  </div>
                {notes.map((note, key) => {
                    return <Noteitem key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note} />

                })}
            </div>
        </>
    )
}

export default Notes;

