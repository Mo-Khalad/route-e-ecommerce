import axios from "axios"

const baseServerUrl = process.env.REACT_APP_Base_API_URL

export const mainFormHandlerTypeRaw =async({
method ,
type ,
fromData ,
token ,
count 
}
)=>{
console.log(baseServerUrl);

try{
let response=null;
if(method==="get"){  
  
  response= await axios.get(`${baseServerUrl}${type}`, token)
}
else if(method==="post"){
  response=await axios.post(`${baseServerUrl}${type}` , fromData , token )
}
else if(method==="put"){
  console.log(baseServerUrl , type);
  response=await axios.put(`${baseServerUrl}${type}` , {count} , token )
  console.log(response);
}

return response.data ;
}catch(error){
return error
}

}

