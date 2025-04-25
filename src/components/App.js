
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [NoClick,setNoClicl]=useState(0);


  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button Clicked {NoClick} times</p>
   <button onClick={()=>setNoClicl(NoClick+1)}>Click Me</button>
        
    </div>
  )
}

export default App
