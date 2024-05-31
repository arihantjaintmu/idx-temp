import axios from "axios";

export const fetchFood = async () => {
  const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/list',
    params: {
      from: '0',
      size: '10',
      tags: 'under_30_minutes',
      q: 'vegetarian'
    },
    headers: {
      'X-RapidAPI-Key': 'c668b76289msh6b52993d6c9f610p104a70jsn2df64dc1bce4',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data
  } catch (error: any) {
    console.error(error.response.data.message);
    return error.response.data.message
  }
};
