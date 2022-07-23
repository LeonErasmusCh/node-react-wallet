import './App.css';
import { Link } from "react-router-dom";
import React, {useEffect} from 'react';

function App() {

  useEffect(() => {
    fetch("/api/transaction")
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    })
  }, [])
  
  return (
    <div className="App">
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/hello">hello</Link> |{" "}
      </nav>
    </div>
  );
}

export default App;
