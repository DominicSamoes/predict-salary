import React, { useState } from "react";
import axios from "axios";
import "./style.css";

const Predict = () => {
  const [prediction, setPrediction] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post("http://localhost:5000/predict_api", { experience, test_score, interview_score })
      .then(response => {
        console.log(response)
        setPrediction(response.data)
      })
  }

  const handleReload = () => {
    window.location.href = "/";
  }

  const [experience, setExperience] = useState()
  const [test_score, setTestScore] = useState()
  const [interview_score, setInterviewScore] = useState()

  return (
    <section className="container">
    <h1>Predict Salary</h1>
    <form method="post" onSubmit={handleSubmit}>
     <fieldset>
       <legend className="visually-hidden">Predict Salary</legend>
       <div className="form-group col-1-2">
         <div className="form-field">
           <span className="form-field-container">
             <input 
              type="text" 
              name="experience"
              value={experience} 
              placeholder="Number of years worked" 
              pattern="[0-9]|[1-4][0-9]|50" 
              maxLength="2" 
              required={true} 
              onChange={e => setExperience(e.target.value)} 
            />
             <i className="form-field-icon"></i>
           </span>
           <p className="form-help">Experience should be between 0 and 50</p>
         </div>
       </div>
       <div className="form-group col-1-2">
         <div className="form-field">
           <span className="form-field-container">
             <input 
              type="text" 
              name="test_score" 
              value={test_score}
              placeholder="Test Score" 
              pattern="[0-9]|10" 
              maxLength="2"  
              required={true} 
              onChange={e => setTestScore(e.target.value)}
            />
             <i className="form-field-icon"></i>
           </span>
           <p className="form-help">Test score should be between 0 and 10</p>
         </div>
       </div>
       <div className="form-group col-1-2">
         <div className="form-field">
           <span className="form-field-container">
            <input
             type="text" 
             name="interview_score" 
             value={interview_score}
             placeholder="Interview Score" 
             pattern="[0-9]|10" maxLength="2"  
             required={true} 
             onChange={e => setInterviewScore(e.target.value)}
            />
             <i className="form-field-icon"></i>
           </span>
           <p className="form-help">Interview score should be between 0 and 10</p>
         </div>
       </div>
       <br />
       <button 
        type="submit" className="button">Predict</button>
       <br />
       <button type="reset" className="button" onClick={handleReload}>Clear</button>
     </fieldset>
    </form>
    <p className="form-help">{prediction}</p>
  </section> 
  );
};

export default Predict;
