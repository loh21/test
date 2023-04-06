import React, {useEffect, useState, Component} from "react";
import {useNavigate} from "react-router-dom";

function MoviesEdit(){
    
    const [movie, movieSet] = useState({
        movieID:"",
        movieTitle:"",
        movieWatchRating:"",
        movieAgeRating:"",
        movieGenre:"",
        movieRuntime:"",
        movieDescription:"",
        movieReleaseYear:""
    });

    const baseUrl = "https://ttatimjm5b.execute-api.us-east-1.amazonaws.com/movies";
    const navigate = useNavigate();


    

    const reqOptions ={
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(movie)
    }

    const deletereqOptions = {
        method: 'DELETE',
        headers:{'Content-type': 'application/json'},
    }

    const deleteMovies =(movieID) => {
        try{
            fetch(`${baseUrl}/${movieID}`,deletereqOptions)
            .then((res) => res.json())
            .then((data) => console.log(data));
            navigate("/movies");
        } catch(err){
            console.log(err)
         }
    }


    const moviePUT = () => {
        try{
            fetch(baseUrl,reqOptions)
            .then((res) => res.json())
            .then((data) => console.log(data))
        
        }
    catch(err){
        console.log(err)
     }

    }

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
        <>
        <section className="section">
                <h1 className="title">ADMIN Movies Page</h1>
                <h2 className="subtitle">
                    Admins please add movies here
                </h2>
            </section>
        <div className="container">
            <input className="input m-1" type="text" placeholder="ID" onChange={e => movieSet({...movie, movieID:e.target.value})} />
            <input className="input m-1" type="text" placeholder="Title" onChange={e => movieSet({...movie, movieTitle:e.target.value})} />
            <input className="input m-1" type="text" placeholder="Watch Rating" onChange={e => movieSet({...movie, movieWatchRating:e.target.value})} />
            <input className="input m-1" type="text" placeholder="Age Rating" onChange={e => movieSet({...movie, movieAgeRating:e.target.value})} />
            <input className="input m-1" type="text" placeholder="Genre" onChange={e => movieSet({...movie, movieGenre:e.target.value})} />
            <input className="input m-1" type="text" placeholder="Runtime" onChange={e => movieSet({...movie, movieRuntime:e.target.value})} />
            <input className="input m-1" type="text" placeholder="Description" onChange={e => movieSet({...movie, movieDescription:e.target.value})} />
            <input className="input m-1" type="text" placeholder="Release Year" onChange={e => movieSet({...movie, movieReleaseYear:e.target.value})} />
            <button className="button is-primary" onClick={moviePUT}>Add movie</button>
        </div>
        <section className= "section">
            <h1 className= "title">Movie</h1>
            <h2 className= "subtitle">Test</h2>
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
                                    <footer  className = "card-footer">
                                    <button className="button is-primary card-footer-item" onClick= {() => deleteMovies(movie.movieID)}>DELETE</button>
                                    </footer>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                        :<h1>Movie not found</h1>
                }
            </div>
            </section>  
        </section>
        </>
    )

}

export default MoviesEdit