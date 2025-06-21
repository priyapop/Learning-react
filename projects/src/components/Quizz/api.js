const BASE_URL=" https://the-trivia-api.com/v2";

export const getQuestions= async () =>{
    const response= await fetch(`${BASE_URL}/questions`)
    const data = await response.json();  
    return data
}