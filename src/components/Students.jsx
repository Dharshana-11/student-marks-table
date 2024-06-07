import React from 'react';

const Students = () => {
  let stu_db = [
    {name:"Ashlyn", sub1:90, sub2: 95, sub3: 92, sub4:93, sub5:98}, 
    {name:"Blair", sub1:80, sub2: 85, sub3: 92, sub4:93, sub5:98}, 
    {name:"Courtney", sub1:79, sub2: 85, sub3: 72, sub4:83, sub5:78}, 
    {name:"Delia", sub1:40, sub2: 55, sub3: 32, sub4:43, sub5:68}, 
    {name:"Edeline", sub1:50, sub2: 65, sub3: 52, sub4:43, sub5:58}, 
    {name:"Fallon", sub1:98, sub2: 97, sub3: 99, sub4:93, sub5:99}, 
    {name:"Genevieve", sub1:100, sub2: 99, sub3: 98, sub4:98, sub5:97}, 
    {name:"Hadley", sub1:80, sub2: 85, sub3: 92, sub4:83, sub5:88}, 
    {name:"Isla", sub1:70, sub2: 75, sub3: 82, sub4:83, sub5:78}

  ];

  let totalmarks = (i) => {
    return i.sub1 + i.sub2 + i.sub3 + i.sub4 + i.sub5;
  };
 

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Reg No</th>
            <th>Name</th>
            <th>Subject 1</th>
            <th>Subject 2</th>
            <th>Subject 3</th>
            <th>Subject 4</th>
            <th>Subject 5</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {stu_db.map((i, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{i.name}</td>
              <td>{i.sub1}</td>
              <td>{i.sub2}</td>
              <td>{i.sub3}</td>
              <td>{i.sub4}</td>
              <td>{i.sub5}</td>
              <td>{totalmarks(i)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Students