// import AddNote from "./AddNote";
import Notes from "./Notes";
const Home = (props) => {
    const {showAlert}=props;
  return (
    <>
      <div>
        {/* <AddNote/> */}
        
        <div className="container my-3">
            <Notes showAlert={showAlert}/>
        </div>
      </div>
    </>
  )
}

export default Home

