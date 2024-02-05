import React from "react";
import {useState} from "react";
import "./index.css";
import MarathiTerms from "./MarathiTerms";
import EnglishTerms from "./EnglishTerms";

function TermsAndConditions() {
   
  const [showComponent, setShowComponent] = useState("");

  function langBtn(){

      setShowComponent(!showComponent);
  }

  return (
    <>
    <div  className="bnt">
     <button className="lang-btn" onClick={langBtn} >Language/भाषा
     </button>
     </div>
     
     {showComponent ? <MarathiTerms/> : <EnglishTerms/> }
     
     
    </>
  );
}

export default TermsAndConditions;
