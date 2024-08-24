/* eslint-disable react/prop-types */
// import React from "react";
import { useState } from "react";
import NoteContext from "./NoteContext";
const NoteState=(props)=>{
    const notesinitial=[{
        "_id": "66c8404d10099ee2bb37e0a8",
        "user": "66c83f1914a9a7d2452e00bc",
        "title": "rajesh notes nodejs ",
        "description": "node js full course ",
        "tag": "using youtube",
        "date": "2024-08-23T07:54:53.389Z",
        "__v": 0
      },
      {
        "_id": "66c9b6b993b2f3e0cf213cee",
        "user": "66c83f1914a9a7d2452e00bc",
        "title": "rajesh notes reactjs ",
        "description": "react  js full course ",
        "tag": "youtube code with harry",
        "date": "2024-08-24T10:32:25.470Z",
        "__v": 0
      },{
        "_id": "66c8404d10099ee2bbhj37e0a8",
        "user": "66c83f1914a9a7d2452e00bc",
        "title": "rajesh notes nodejs ",
        "description": "node js full course ",
        "tag": "using youtube",
        "date": "2024-08-23T07:54:53.389Z",
        "__v": 0
      },
      {
        "_id": "66c9b6b993ib2f3e0cf213cee",
        "user": "66c83f1914a9a7d2452e00bc",
        "title": "rajesh notes reactjs ",
        "description": "react  js full course ",
        "tag": "youtube code with harry",
        "date": "2024-08-24T10:32:25.470Z",
        "__v": 0
      },{
        "_id": "66c8404d1009ki9ee2bb37e0a8",
        "user": "66c83f1914a9a7d2452e00bc",
        "title": "rajesh notes nodejs ",
        "description": "node js full course ",
        "tag": "using youtube",
        "date": "2024-08-23T07:54:53.389Z",
        "__v": 0
      },
      {
        "_id": "66c9b6b993jb2f3e0cf213cee",
        "user": "66c83f1914a9a7d2452e00bc",
        "title": "rajesh notes reactjs ",
        "description": "react  js full course ",
        "tag": "youtube code with harry",
        "date": "2024-08-24T10:32:25.470Z",
        "__v": 0
      },{
        "_id": "66c8404jd10099ee2bb37e0a8",
        "user": "66c83f1914a9a7d2452e00bc",
        "title": "rajesh notes nodejs ",
        "description": "node js full course ",
        "tag": "using youtube",
        "date": "2024-08-23T07:54:53.389Z",
        "__v": 0
      },
      {
        "_id": "66c9b6b993b2f3e0cof213cee",
        "user": "66c83f1914a9a7d2452e00bc",
        "title": "rajesh notes reactjs ",
        "description": "react  js full course ",
        "tag": "youtube code with harry",
        "date": "2024-08-24T10:32:25.470Z",
        "__v": 0
      }]
     const [notes,setNotes]=useState(notesinitial);

    //  Add a Note
        const addNote=(title,description,tag)=>{
          console.log("adding a new note");
          const   note={
            "_id": "66c840e4d100sfef99ee2bb37e0a8",
            "user": "66c83f1914a9a7d2452e00bc",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-08-23T07:54:53.389Z",
            "__v": 0
          }
      setNotes(notes.concat(note))

        }

    //  Delete a Note
        const  deleteNote=(id)=>{
          console.log("delete the note with id"+id);
          const newNotes=notes.filter((note)=>{return note._id!==id});
          setNotes(newNotes)
        } 

    //  Edit a Note
    const  editNote=()=>{

    }  

    return(
        
            <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
                {props.children}
            </NoteContext.Provider>
            
        )
}

export default NoteState;

