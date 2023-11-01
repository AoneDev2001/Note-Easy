import { Routes, Route } from "react-router-dom";
import MyNote from './Page/MyNote';
import Navbar from "./layouts/Navbar";
import Login from "./Page/Login";
import Register from "./Page/Register";
import AllNote from "./Page/Allnote";
import {currentCustomer} from "./functions/auth";
// redux
import { useDispatch} from "react-redux";
import Createnote from "./Page/Createnote";
import SinglePage from "./Page/SinglePage";

function App() {
  const dispatch = useDispatch();
  const idtoken = localStorage.token;     
  if (idtoken) {                          
    currentCustomer(idtoken)                  
      .then((res) => {   
        console.log(res);
        console.log("aone");               
        dispatch({  
          type: "LOGIN",
          payload: {
            token: idtoken,              
            CustomerId: res.data.customer_id, 
            CustomerName: res.data.customer_name       
          },
        })
      })
      .catch((err) => {   
        console.log(err);
      });

  }
  

  return (
    <>

      <Navbar/>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/mynote" element={<MyNote/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/createnote" element={<Createnote/>} />
        <Route path="/allnote" element={<AllNote/>} />
        <Route path="/note/:id" element={<SinglePage />} />
      </Routes>
    </>
  );
}

export default App;
