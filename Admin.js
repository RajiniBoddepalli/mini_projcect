// import React, { useState } from 'react';
// import Details from './Details'
// import Home from './Home';
// function Admin() {
//   // State to track the user's login status and username
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [username, setUsername] = useState('');

//   // Function to handle user login
//   const handleLogin = (enteredUsername, enteredPassword) => {
//     // Simulate authentication logic (replace with your actual logic)
//     if (enteredUsername === 'Leela' && enteredPassword === '1234') {
//       setIsLoggedIn(true);
//       setUsername(enteredUsername);
//     } else {
//       // Authentication failed, handle error (e.g., show error message)
//       alert('Authentication failed. Please check your username and password.');
//     }
//   };

//   // Function to handle user logout
//   const handleLogout = () => {
//     // Simulate logout
//     setIsLoggedIn(false);
//     setUsername('');
//   };

//   return (
//     <div className="App">
//       <header>
       
//         {isLoggedIn ? (
//           <div>
//             {/* <p>Welcome, {username}!</p>
//             <button onClick={handleLogout}>Logout</button> */}
//             <Details/>
//           </div>
//         ) : (
//           <Admin onLogin={handleLogin} />
//         )}
//       </header>
//       {/* <main>
//         {isLoggedIn && <Dashboard />}
//       </main> */}
//     </div>
//   );
// }

// export default Admin;








import React, { useState } from "react";
import "./Admin.css"
import Details from "./Details";
const Admin = () =>{


    const [popupStyle , showPopup] = useState("hide")

    const popup = () =>{
        showPopup("login-popup")
        setTimeout(()=> showPopup("hide"),3000)
    }



    return (
        <div className="cover">
            <h1 className="adm1">Login</h1>
            <input type="text" placeholder ="Username" className="log1"/>
            {/* <input type="text" placeholder ="Yo" className="log1"/> */}
            <input type = "password" placeholder = "Password" className="log1"/>
            <div className="login-btn" onClick={popup}>Login
            </div>
            <div className={popupStyle}>
                <h3>
                    Login Failed
                </h3>
                <p>Rank is not matched</p>
                </div>     
                
       </div>
    )
}
export default Admin