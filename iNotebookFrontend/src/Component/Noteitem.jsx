/* eslint-disable react/prop-types */
  // card for  each note 
import NoteContext from "../Context/Notes/NoteContext";
import { useContext } from "react";
const Noteitem = (props) => {
  const  context = useContext(NoteContext); 
  const { deleteNote } = context;
  const { note,updateNote } = props;
  return (
    <>
      <div className="col-md-3 ">
        <div className="card my-2">
          <div className="card-body">
            <div className="d-flex align-items-center">
            <h5 className="card-title">Title :- {note.title}</h5>
            {/* Icon from fontawsome */}
            <i className="fa-solid fa-trash-can  mx-2" style={{color: "#b82000"}}
             onClick={()=>{deleteNote(note._id)}}></i>
            <i className="fa-regular fa-pen-to-square mx-3" style={{color: "blue"}} onClick={()=>{updateNote(note)}}></i>

            </div>
            <p className="card-text">Description :- {note.description} </p>
            <p className="card-text">Tag :- {note.tag}</p>
            <p className="card-text">Date :- {note.date}</p>
            {/* <i className="fa-solid fa-trash fa-sm" style={{color: "#b84000"}}></i>  */}
  
          </div>
        </div>
      </div>
    </>
  );
};

export default Noteitem;
