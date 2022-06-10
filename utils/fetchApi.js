import axios from 'axios';


export const baseUrl = 'https://bayut.p.rapidapi.com';



export const fetchApi = async (url) => {
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'bdde72a415mshbfd5dc69c450720p10f3f4jsnec1542010c22'
          }
    });
    return data;

}
