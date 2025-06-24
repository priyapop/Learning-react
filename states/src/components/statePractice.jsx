import { useState } from "react";

export const DerivedState = () => {
  const [users, setUsers] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Angles", age: 45 },
  ]);

  return(
    <div>
      <ul>{
          users.map((user,index) => {return(
          <li key={index}>
          {user.name}-{user.age}years old
        </li>
          )
         
     })}
     </ul>
    </div>
  )
  
};