/* eslint-disable react/prop-types */

const Noteitem = (props) => {
  const { note } = props;
  return (
    <>
      <div className="col-md-3 ">
        <div className="card my-2">
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium praesentium eius ipsum illo recusandae quo quam deserunt suscipit cum ipsa.</p>
            <p className="card-text">{note.date}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Noteitem;
