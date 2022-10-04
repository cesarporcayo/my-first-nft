import React, {useState} from "react"
import Landing from "../Pages/Landing.js"
import Main from "../Pages/Main.js";
import Editor from "./Editor.js";

function App() {

  // const [page, setPage] = useState("LANDING")

  // switch (page) {
  //   case "LANDING":
  //     return <Landing setPage={setPage}/>
    
  //   case "MAIN":
  //     return <Main setPage={setPage}/>

  // }

  return (<Editor />)

}

export default App;
