import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import SignUp from "./components/signup.component";

function App() {
  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
        <h6 className="card-header text-center" style={{backgroundColor:"#637a91"}}>Get started today!</h6> 
          <SignUp />
        </div>
      </div>
    </div>
  );
}

export default App;
