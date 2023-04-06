import React, {Component, useEffect, useState} from "react";

function Feedback() {
    const [feedback, setFeedback] = useState([])
    const baseUrl = "https://2nyh9zrb3l.execute-api.us-east-1.amazonaws.com/feedback";
  
    const getFeedback = () => {
      try {
        fetch (baseUrl)
        .then ((res) => res.json())
        .then ((res) => setFeedback(res.Items))
      }
    catch (err){
      console.log(err)
    }  
  }
  
    useEffect(() => {
        getFeedback()
    }, [])
        return(
            <section className="hero is-large has-bg-img">
            <div className="hero-body"> 
            <div className= "container has-text-black-bis">            
                <h1 className = "title">View Feedback</h1>
                <h2 className = "subtitle"></h2>
            <section className = "section">
                <div className = "columns is-multiline"> 
                    {
                    feedback && feedback.length > 0
                    ? feedback.map(feedback =>
                    <div className = "column is-one-third">
                        <div className = "card">
                        <div className = "card-content">
                            <div className = "content">
                            <p className = "User">{feedback.feedbackUser}</p>
                            <p>{feedback.feedbackContent}</p>
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
        </div> 
        </section>
    );
}
export default Feedback;