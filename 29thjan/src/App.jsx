function App(){
  const name = "katla"
  const a = ["srujana", "chandu","sou","teja"]
  const b = [10,4,8]
  const c = [{id:1},{id:2}]
  const para = "dfghbnjkmlyghbnjkm,"
console.log("hello this is my vite components");
return <div><h1> hello this srujana: {name}</h1>
<h2>hi: {a} and b is = {b}</h2>
<h3>{b}</h3>
<h4>c: {c[0].id}</h4>
{/* <Hello />  */}
<p>reactjs{para} </p></div>
}
export default App
// div (h1+p)

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
