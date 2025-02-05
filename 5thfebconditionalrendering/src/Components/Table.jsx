import React from 'react'

const Table = () => {
  return (
    <div>
     <table border={1} cellPadding={0}>
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>age</th>
                <th>gender</th>
                <th>mail</th>
                <th>phonenumber</th>
            </tr>
        </thead>
        <tbody>
            {
                peopledata.map ((person,index))=>(
                    <>
                    <tr key={index}>
                           <td>{person.id}</td>
                           <td>{person.name}</td>
                           <td>{person.age}</td>
                           <td>{person.mail}</td>
                           <td>{person.gender}</td>
                           <td>{person.phonenumber}</td>
                    </tr>
                    </>
                )
            }
        </tbody>
        </table> 
    </div>
  )
}

export default Table
