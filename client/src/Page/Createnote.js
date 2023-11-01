import { useState } from "react";
// functions
import { addNote } from "../functions/note";
// ⁡⁣⁡⁣⁣⁢redux⁡⁡
import { useSelector } from "react-redux";
//React router
import { useNavigate } from "react-router-dom";


export const Createnote = () => {
    const navigate = useNavigate();
     const { user } = useSelector((state) => ({ ...state }));
     
   
  const [value, setValue] = useState({
    title: "",
    content: "",
    customer_id: "",
    category_id: "",
  });


  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {

    const NewNote ={
        title: value.title,
        content: value.content,
        customer_id: user.CustomerId,
        category_id: value.category_id,
    }
    e.preventDefault();
    addNote(NewNote)
      .then((res) => {
        alert("Create Note Success");
        navigate("/mynote");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <>
    <h1 className="big-title">New Note</h1>
    <div className="container-createnote">

     <div className="form-createnote">
      <form onSubmit={handleSubmit}>
        <div className="form-group ">
          <h3>Title</h3>
          <input
            placeholder="Title..."
            type="text"
            maxLength={40}
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="form-group ">
        <h3>Category</h3>
        <select
          name="category"
          onChange={handleChange} 
         >
          <option value="">เลือก...</option>
          <option value="1">งาน</option>
          <option value="2">การเรียน</option>
          <option value="3">อื่นๆ</option>
        </select>
        </div>
        <div className="form-group ">
          <h3>Content</h3>
          <textarea
            placeholder="Content..."
            maxLength={500}
            rows={10}
            name="content"
            onChange={handleChange}
          /> 
        </div>

        <div className="btn-container">
        <button className="btn-custom ">Add Note</button>
        </div> 
      </form>
      </div>
    </div>
  </>
  )
}
export default Createnote;
