/* eslint-disable react/prop-types */
  // card for  each note 
const Noteitem = (props) => {
  const { note } = props;
  return (
    <>
      <div className="col-md-3 ">
        <div className="card my-2">
          <div className="card-body">
            <div className="d-flex align-items-center">
            <h5 className="card-title">Title : {note.title}</h5>
            <i className="fa-solid fa-trash-can  mx-2" style={{color: "#b82000"}}></i>
            <i className="fa-regular fa-pen-to-square mx-3" style={{color: "blue"}}></i>

            </div>
            <p className="card-text">Description :{note.description} </p>
            <p className="card-text">Tag :{note.tag}</p>
            <p className="card-text">Date : {note.date}</p>
            {/* <i className="fa-solid fa-trash fa-sm" style={{color: "#b84000"}}></i>  */}
  
          </div>
        </div>
      </div>
    </>
  );
};

export default Noteitem;
