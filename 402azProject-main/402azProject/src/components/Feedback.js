import React, {Component, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";


function FeedbackUser(){



  const [feedback, setFeedback] = useState({
      id:"",
      feedbackUser:"",
      feedbackContent:""
  });

  const [feedbacks, setFeedbacks] = useState([])

  const baseUrl = "https://2nyh9zrb3l.execute-api.us-east-1.amazonaws.com/feedback";

  
  const navigate = useNavigate();

  const requestOptions = {
    method: 'PUT',
    headers:{ 'Content-Type': 'application/json'},
    body: JSON.stringify(feedback)
  }

  const deleterequestOptions = {
      method: 'DELETE',
      headers:{ 'Content-Type': 'application/json'}
      
  }



  const deleteFeedback = (id) => {
    try{
            fetch(`${baseUrl}/${id}`,deleterequestOptions)
            .then((res) => res.json())
            .then((data) => console.log(data))
            navigate("/feedback"); 
    }catch(err){
      console.log(err)
    }
  }

  const putFeedback = () => {
    try{
        fetch(baseUrl,requestOptions)
        .then((res) => res.json())
        .then((data) => console.log(data));
        navigate("/feedback"); 
    }catch(err){
      console.log(err)
    }
  }

  const getFeedbacks = () => {
    try {
      fetch (baseUrl)
      .then ((res) => res.json())
      .then ((res) => setFeedbacks(res.Items))
    }catch (err){
      console.log(err)
    }  
  }
  useEffect(() => {
    getFeedbacks()
  }, [])


        return(
            <>
            <section className = "container">
            <p className="mt-6"></p>
              <h1 className = 'title'>FeedBack</h1> 
              <h2 className = 'subtitle'>Insert Feedback below</h2>  
            </section>
            <section className = 'container is-widescreen'>
                <p class="mt-6"></p>
                    <div className = 'hero-body is-large'>
                      <input className="input m-1" type="text" placeholder="Feedback ID" onChange={e => setFeedback({...feedback, id:e.target.value})} />
                      <input className="input m-1" type="text" placeholder="Feedback User" onChange={e => setFeedback({...feedback, feedbackUser:e.target.value})} /> 
                      <input className="input m-1" type="text" placeholder="Feedback Content" onChange={e => setFeedback({...feedback, feedbackContent:e.target.value})} /> 
                      {/* <input className="input m-1" type="text" placeholder="Feedback ID"{feedback.feedbackUser} onChange={e => setFeedback({...feedback, id:e.target.value})}/>*/}
                      <a className="button is-primary" href = "/ViewFB" onClick={putFeedback} >Add feedback</a>
                      
                      <p className="mt-6"></p>
                      <section className = "section">
                      <div className = "columns is-multiline"> 
                          {
                          feedbacks && feedbacks.length > 0
                          ? feedbacks.map(feedback =>
                          <div className = "column is-one-third">
                              <div className = "card">
                              <div className = "card-content">
                                  <div className = "content">
                                  <p className = "User">{feedback.feedbackUser}</p>
                                  <p>{feedback.feedbackContent}</p>
                                  <footer  className = "card-footer">
                                  <a className="button is-primary card-footer-item" href = "/Feedback" onClick= {() => deleteFeedback(feedback.id)}>DELETE</a>
                                  </footer>
                              </div>
                              </div>
                          </div>
                          </div>
                          )
                          :<h3>Feedback not found</h3>
                          }
                      </div>
                  </section>
                    </div>
                    
                    
                 
                </section>
            </>

        );
    }


export default FeedbackUser

