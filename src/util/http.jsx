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

try{
let response=null;
if(method==="get"){  
  response= await axios.get(`${baseServerUrl}${type}`, token)
}

else if(method==="post"){
  response=await axios.post(`${baseServerUrl}${type}`, { productId: `${fromData}`} , token )   
}
else if(method==="put"){
  response=await axios.put(`${baseServerUrl}${type}` , {count} , token ) ;  
}
else if(method==="delete"){  
  response = await axios.delete(`${baseServerUrl}${type}`, token)  
console.log(response);

}
else if (method==="REMOVE-ALL-CART-ITEM"){
 response = await axios.delete(`${baseServerUrl}${type}`, token) 
}

return response?.data ;

}
catch(error){
return error
}

}

