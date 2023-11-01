import { useEffect, useState } from "react";
import { readAllmyNote,deleteNote } from "../functions/note";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export const MyNote = () => {
  const { user } = useSelector((state) => ({ ...state }));


  // Read all Mnote
  const [note, setNote] = useState([]);         
  const loadData = () => { 
    if (user && user.CustomerId) {
    readAllmyNote(user.CustomerId)
      .then((res) => {
        setNote(res.data);   
      })
      .catch((err) => {
        console.log(err.response.data); 
      });
    }
  };

  const handleDelete =(id)=>{
    if (window.confirm("Are You Sure Delete!")) {
      deleteNote(id)
      .then((res) => { 
        //alert("delete Reservation Success");
        loadData();
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }

  useEffect(() => {       
    loadData();  
  }, [user]);

  // กรองคำหยาบ
  function filterToxicWords(text) {
    const toxicWords = ["คำหยาบ1", "คำหยาบ2", "ลุงตู่"];
    let filteredText = text;
    toxicWords.forEach((word) => {
      const regex = new RegExp(word, "gi");
      filteredText = filteredText.replace(regex, "***");
    });
    return filteredText;
  }

  // แปลงวันที่
  function formatCreatedAtDate(created_at) {
    const date = new Date(created_at);
    const formattedDate = date.toLocaleDateString('th-TH'); 
    return formattedDate;
  }
  
      
  return (
    <>
    <h1 className="big-title">My Note</h1>
    <div className='container-main-noborder'>
      <div className='note-grid'>

        {note.map((note) => (
          <div className='note-item' key={note.note_id}>
            <div className="note-item-header">
              <button onClick={()=>handleDelete(note.note_id)}>X</button>
            </div>
            <div className="note-item-conten">
              <h2>{filterToxicWords(note.title)}</h2>
              <p>{filterToxicWords(note.content)}</p>
              
            </div>
            <div className="note-item-footer">
              <span>{formatCreatedAtDate(note.created_at)}</span>
              <Link to={`/note/${note.note_id}`}>
              <button>Edit Note </button>
              </Link>
              
            </div>
          </div>
        ))}
       
      </div>
    </div>
  
    
  </>
  )
}
export default MyNote;
