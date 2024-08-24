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
      }]
     const [notes,setNotes]=useState(notesinitial)
    return(
        
            <NoteContext.Provider value={{notes,setNotes}}>
                {props.children}
            </NoteContext.Provider>
            
        )
}

export default NoteState;

