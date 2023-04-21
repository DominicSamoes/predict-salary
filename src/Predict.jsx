import React, { useState } from "react";
import { validExperience, validTestAndInterviewScore } from "./Regex";
import axios from "axios";
import "./style.css";

const Predict = () => {
  const [prediction, setPrediction] = useState(null)

  const [experience, setExperience] = useState('')
  const [experienceErr, setExperienceErr] = useState(null)

  const [test_score, setTestScore] = useState('')
  const [testScoreErr, setTestScoreErr] = useState(null)

  const [interview_score, setInterviewScore] = useState('')
  const [interviewScoreErr, setInterviewScoreErr] = useState(null)

  const formatter = new Intl.NumberFormat('en-SZ', {
    style: 'currency',
    currency: 'SZL'
  })  

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validExperience.test(experience)){
      setExperienceErr('Number of years worked is required as a number from 0 to 50!')
    }
    if (!validTestAndInterviewScore.test(test_score)){
      setTestScoreErr('Test score is required is required as a number from 0 to 10!')
    }
    if (!validTestAndInterviewScore.test(interview_score)){
      setInterviewScoreErr('Interview score is required as a number from 0 to 10!')
    }

    const isValid = !experienceErr && !testScoreErr && !interviewScoreErr

    if (isValid){
      axios
      .post("http://localhost:5000/predict_api", { experience, test_score, interview_score })
      .then(response => {
        console.log(response)
        setPrediction(response.data)
      })
    } else {
      return
    }

  }

  const handleClear = () => {
    setExperience(" ")
    setTestScore(" ")
    setInterviewScore(" ")
    setExperienceErr(" ")
    setTestScoreErr(" ")
    setInterviewScoreErr(" ")
    setPrediction(null)
    window.location.href = "/"
  }

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
              required
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
              required
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
             required
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
       <button type="reset" className="button" onClick={handleClear}>Clear</button>
     </fieldset>
    </form>
    <p className="form-help">
      { prediction !== null ? 'Employee Salary should be ' + formatter.format(prediction) : prediction }
    </p>
    <p className="form-help">
      {experienceErr}
    </p>
    <p className="form-help">
      {testScoreErr}
    </p>
    <p className="form-help">
      {interviewScoreErr}
    </p>
  </section> 
  );
};

export default Predict;
