//derived state any state that can be computed based on other state or prop
//helps avoide duplication
import { useState } from "react";

export const DeriveState = () => {
  const [users, setUsers] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Angles", age: 45 },
  ]);

const userCount=users.length
const averageAge= users.reduce((accumulator,curEle) => accumulator+curEle.age,0)/userCount
  return (
    <div>
      <ul>
        {users.map((user, index) => {
          return (
            <li key={index}>
              {user.name}-{user.age}years old
             
            </li>
  
          );
        })}
      </ul>
    <p>the average age is - {averageAge} </p>
    </div>
  );
};
