import { useState, useEffect } from "react";
import { getQuestions } from "./key.js";

function Quiz() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    // fetch("https://the-trivia-api.com/v2/questions")
    // .then((res) => res.json())
    // .then((data)=>{
    //     setApiData(data);
    // })
    // .catch((error) => console.log(error));
    const load = async () => {
      try {
        const question = await getQuestions();
        setApiData(question);
      } catch (error) {
        console.log(error);
      }
    };
    load();
  }, []);

  return (
    <>
      <h1>Questions</h1>
    
      <div className="questionContainer">
        {apiData.map((que) => {
          return  (
            <span key={que.id} >{que.question.text} </span> 
        )
        })}
        </div>
        <div className="answerContainer">
        {apiData.map((que) => {
          return  (
            <span key={que.id} > {que.incorrectAnswers} {que.correctAnswers}</span> 
        )
        })}
        </div>
    </>
  );
}
export default Quiz;
