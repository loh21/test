import React, {Component, useEffect, useState} from "react";

function Movies() {

    const [movie, movieSet] = useState([]);
    const baseUrl = "https://ttatimjm5b.execute-api.us-east-1.amazonaws.com/movies";

    const getMovies = () => {
        try{
        fetch(baseUrl)
        .then((res) => res.json())
        .then((res) => movieSet(res.Items))
        }
    catch (err){
        console.log(err)
        }
    }

    useEffect(() => {
        getMovies()
    }, [])

    return(
        <section className="hero is-large has-bg-img">
            <div className="hero-body"> 
            <div className= "container has-text-black-bis"> 

            <h1 className= "title">Movie</h1>
            <section className= "container">
            <div className= "columns is-multiline">
                {
                    movie && movie.length > 0
                    ?   movie.map(movie =>
                        <div className="column is-one-third">
                            <div className="card">
                                <div className="card-content">
                                    <div className="content">
                                      <p className="title">{movie.movieTitle}</p>
                                      <p className="subtitle">{movie.movieAgeRating}</p>   
                                      <p>{movie.movieDescription}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                        :<h1>Movie not found</h1>
                }
            </div>
        </section>
        </div>
        </div>
        </section>
    )

}
export default Movies;