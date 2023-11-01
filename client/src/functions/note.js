import axios from "axios";


export const addNote = async ( NewNote) =>  
  await axios.post(process.env.REACT_APP_API +"/note", NewNote); 


export const readAllNote = async () => 
    await axios.get(process.env.REACT_APP_API + "/note")

export const readAllmyNote = async (id) => 
await axios.get(`${process.env.REACT_APP_API}/note-mynote/${id}`);
  

export const readNote = async (id) => 
  await axios.get(`${process.env.REACT_APP_API}/note/${id}`);


export const updateNote= async ( ID, NewNote) => 
  await axios.put(`${process.env.REACT_APP_API}/note/${ID}`,NewNote)


export const deleteNote = async (id) => 
    await axios.delete(`${process.env.REACT_APP_API}/note/${id}`)
