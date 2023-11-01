import { useEffect, useState } from "react";
import { readAllNote } from "../functions/note";

export const AllNote = () => {


  // Read all My note
  const [note, setNote] = useState([]);         
  useEffect(() => {       
    readAllNote()
    .then((res) => {
      setNote(res.data);   
    })
    .catch((err) => {
      console.log(err.response.data); 
    });  
  }, []);

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
    <h1 className="big-title">All Note</h1>
    <div className='container-main-noborder'>
      <div className='note-grid'>

        {note.map((note) => (
          <div className='note-item' key={note.note_id}>
            <div className="note-item-conten">
              <h2>{filterToxicWords(note.title)}</h2>
              <p>{filterToxicWords(note.content)}</p>
            </div>
            <div className="note-item-footer">
              <h4>{note.customer_id}</h4>
              <span>{formatCreatedAtDate(note.created_at)}</span>
            </div>
          </div>
        ))}
       
      </div>
    </div>
  </>
  )
}
export default AllNote;
