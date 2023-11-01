import axios from "axios";



export const login = async (value) => 
  await axios.post(process.env.REACT_APP_API +"/login", value); 


  export const register = async (value) => 
  await axios.post(process.env.REACT_APP_API +"/register", value); 


  

export const currentCustomer = async (authtoken) => {  //get  token
    return await axios.post(process.env.REACT_APP_API + "/current-customer",
      {},
      {
        headers: {   // send token from headers
          authtoken, //token
        },
      }
    );
  }
  
 