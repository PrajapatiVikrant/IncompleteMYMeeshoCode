import axios from "axios";
const data = async()=>{
     const data = await axios.get('https://purple-journalist-dmoxo.pwskills.app:5000/Meesho/ShowallProduct');
     console.log(data.data);
     return data.data
}
const Productdata = data
export default Productdata;

