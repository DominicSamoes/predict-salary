import "./style.css";

const Predict = () => {

  const handleReload = () => {
    window.location.reload(true)
  }

  return (
    <section className="container">
    <h1>Predict Salary</h1>
    <form action="" method="post">
     <fieldset>
       <legend className="visually-hidden">Predict Salary</legend>
       <div className="form-group col-1-2">
         <div className="form-field">
           <span className="form-field-container">
             <input type="text" name="experience" placeholder="Number of years worked" pattern="[0-9]|[1-4][0-9]|50" maxLength="2" required={true} />
             <i className="form-field-icon"></i>
           </span>
           <p className="form-help">Experience should be between 0 and 50</p>
         </div>
       </div>
       <div className="form-group col-1-2">
         <div className="form-field">
           <span className="form-field-container">
             <input type="text" name="text_score" placeholder="Test Score" pattern="[0-9]|10" maxLength="2"  required={true} />
             <i className="form-field-icon"></i>
           </span>
           <p className="form-help">Test score should be between 0 and 10</p>
         </div>
       </div>
       <div className="form-group col-1-2">
         <div className="form-field">
           <span className="form-field-container">
            <input type="text" name="interview_score" placeholder="Interview Score" pattern="[0-9]|10" maxLength="2"  required={true} />
             <i className="form-field-icon"></i>
           </span>
           <p className="form-help">Interview score should be between 0 and 10</p>
         </div>
       </div>
       <br />
       <button type="submit" className="button">Predict</button>
       <br />
       <button className="button" onClick={handleReload}>Clear</button>
     </fieldset>
    </form>
    <p className="form-help">{/* Prediction Text Will be here */}</p>
  </section> 
  );
};

export default Predict;
