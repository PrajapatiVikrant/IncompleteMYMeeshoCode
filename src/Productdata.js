import axios from "axios";
const data = async()=>{
     const data = await axios.get('https://meesho-backend-psi.vercel.app/Meesho/ShowallProduct');
     console.log(data.data);
     return data.data
}
const Productdata = data
export default Productdata;

