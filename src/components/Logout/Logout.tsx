import React from "react";
import "./logout.scss";


const Logout = () => {
     const handlerClick = ():void => {
       localStorage.clear();
       window.location.reload();
     };
  return (
    <div className="logout">
      Logout
      <button onClick={()  =>handlerClick()}>Logout</button>
    </div>
  );
};
export default Logout;
