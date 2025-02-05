import React from 'react'
// import login from './Components/login'
// import Child from './Components/Child'
import Table from './Components/Table'
const App = () => {
  const name = " srujana"
  const islogged = true
  const spinnerstyle = {
    display : "flex",
    just
    ifyContent: "center",
  }
  if (name) {
    
    return (
      <>
      {/* <h1>{name}</h1> */}
      <h1>{name? name:"network issuse"}</h1>
      {islogged ? "login success": "login falied"}
      {islogged ? <child/>: <login/>}
      {name ? <Table/>: "loading...."}
      {/* <login/> */}
      {/* <Child/> */}
      <Table/>
      </>
    )
  }
  // else{
  //   return (
  //     <>
  //     <h1>network issue</h1>
  //     </>
  //   )
  // }
}
//   return (
//     <div>
//     </div>
//   )
// }

export default App
