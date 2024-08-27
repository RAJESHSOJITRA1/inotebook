/* eslint-disable react/prop-types */
// import React from "react";
import { useState } from "react";
import NoteContext from "./NoteContext";
const NoteState=(props)=>{
  const host="http://localhost:3000"
    const notesinitial=[] ;
     const [notes,setNotes]=useState(notesinitial);   

    //  get all notes
    const getNotes=async()=>{
        // broweser not allowed to request api                                                   need to install in a backend    /*  npm install cors*/        
      //  api call    
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method:"GET",
        headers: {  
          "Content-Type": "application/json",
          // ayush token                                               
           "auth-token":localStorage.getItem("token")
            // rajesh token
          // "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjODNmMTkxNGE5YTdkMjQ1MmUwMGJjIn0sImlhdCI6MTcyNDU5MDAzN30.12Z0F_CEftGdsjXMK4Ne1ERlAB511OvbRqCksYu7CeU"
        },
      });
      const json= await response.json();
      console.log(json);
      setNotes(json);
    }

    //  Add a Note
        const addNote=async(title,description,tag)=>{
          console.log("adding a new note");
          // Todo api call 
          const response = await fetch(`${host}/api/notes/addnote`, {
            method:"POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token":localStorage.getItem("token")
            },
            body:JSON.stringify({title,description,tag}),
          });
          const note=await response.json();
          setNotes(notes.concat(note))    //notes.concat return  a new array
        
}

    //  Delete a Note
        const  deleteNote=async(id)=>{
          //api call
          const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method:"DELETE",
            headers: {
              "Content-Type": "application/json",
              "auth-token":localStorage.getItem("token")
            },
           
          });
            const json=response.json();
            console.log(json);
          console.log("delete the note with id"+id);
          const newNotes=notes.filter((note)=>{return note._id!==id});
          setNotes(newNotes)
        } 

    //  Edit a Note
    const  editNote=async(id,title,description,tag)=>{
                    // api call
                    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
                      method:"PUT",
                      headers: {    
                        "Content-Type": "application/json",
                        "auth-token":localStorage.getItem("token")
                      },
                      body:JSON.stringify({title,description,tag}),
                    });
                      const json=await response.json();
                      console.log(json);
                                                            //notes convert to json
                      let newNotes=JSON.parse(JSON.stringify(notes))  //create a deep copy of array or object
                    // logic for edit a notes
                  for(let index=0;index<newNotes.length;index++){
                    const element=notes[index];
                    if(element._id===id){
                      newNotes[index].title=title;
                      newNotes[index].description=description;
                      newNotes[index].tag=tag;
                      break;
                    }
                  }
                  console.log(id,notes)
                  setNotes(newNotes); 
    }  

    return(
        
            <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
                {props.children}
            </NoteContext.Provider>
            
        )
}

export default NoteState;

