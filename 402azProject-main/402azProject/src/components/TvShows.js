import React, {Component, useEffect, useState} from 'react';



function Tvshows() {

    const [tvshow, setTvshow] = useState([]);
    const baseUrl = "https://4cs89ii4ua.execute-api.us-east-1.amazonaws.com/tvshows";
   

    const getTvshow = () => {
        try{
        fetch(baseUrl)
        .then((res) => res.json())
        .then((res) => setTvshow(res.Items))
        }
    catch (err){
        console.log(err)
        }
    }

    useEffect(() => {
        getTvshow()
    }, [])

    return(
        <section className="hero is-large has-bg-img">
            <div className="hero-body"> 
            <div className= "container has-text-black-bis">   
            <h1 className= "title">TV Show</h1>
            <h2 className='subtitle'><b></b>Free Shows anytime anywhere<b/></h2>
            <section className= "container">
            <div className= "columns is-multiline">
                {
                    tvshow && tvshow.length > 0
                    ?   tvshow.map(tvshow =>
                        <div className="column is-one-third">

                            <div className="card ">
                                <div className="card-content">
                                    <div className="content">
                                      <p className="title">{tvshow.showTitle}</p>
                                      <p className="subtitle">{tvshow.ageRating}</p>  
                                      <p>{tvshow.showDesc}</p>
                                      <p>{tvshow.showCast}</p>
                                      <p>{tvshow.showGenre}</p>
                                      <p>{tvshow.showLanguage}</p>
                                      <p>{tvshow.showTitle}</p>
                                      <p>{tvshow.showDuration}</p>
                                      <p>{tvshow.showDirector}</p>
                                           
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                        :<h1>show not found</h1>
                }
            </div>
            </section>  
            </div>
            </div>
        </section>

    )

}
export default Tvshows;
