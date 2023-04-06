import React, {useEffect, useState, Component} from "react";
import { useNavigate } from "react-router-dom";

function Admin(){

    const [tvshow, setTvshow] = useState({
        id: "",
        showDes: "",
        showCast: "",
        showuploaddDate: "",
        showGenre: "",
        ageRating: "",
        showLanguage: "",
        showTitle: "",
        showDuration: "",
        showDirector: ""
    });

    const [tvshows, setTvshows]=useState([]);

    const baseUrl = "https://4cs89ii4ua.execute-api.us-east-1.amazonaws.com/tvshows";

    const navigate = useNavigate();

    const requestOptions = {
        method: 'PUT',
        headers:{ 'Content-Type': 'application/json'},
        body: JSON.stringify(tvshow)
    }

    const putTvshow = () => {
        try{
            fetch(baseUrl,requestOptions)
            .then((res) => res.json())
            .then((data) => console.log(data));
            navigate("/TvShows")
        }catch(err){
            console.log(err)
        }
    }
    const deleterequestOptions = {
        method: 'DELETE',
        headers:{'Content-Type': 'application/json'},
    }

    const deleteTvshow =(id) => {
        try{
            fetch(`${baseUrl}/${id}`,deleterequestOptions)
            .then((res) => res.json())
            .then((data) => console.log(data));
            navigate("/tvshows");
        }catch(err){
            console.log(err)
        }
   
}

const getTvShow = () => {
    try {
        fetch(baseUrl)
        .then((res) => res.json())
        .then((data) => setTvshow(data.Items))
    }catch(err){
        console.log(err)
    }
}
useEffect(() => {
    getTvShow()
},[])

    return(
        <>
        <section className="section">
                <h1 className="title">Tv Admin</h1>
                <h2 className="subtitle">
                    Add Tvshows
                </h2>
            </section>
        <div className="container">
            <input className="input m-1" type="text" placeholder=" id" onChange={e => setTvshow({...tvshow, id:e.target.value})} />
            <input className="input m-1" type="text" placeholder="show Description" onChange={e => setTvshow({...tvshow, showDesc:e.target.value})} />
            <input className="input m-1" type="text" placeholder="show Cast" onChange={e => setTvshow({...tvshow, showCast:e.target.value})} />
            <input className="input m-1" type="text" placeholder="Show Uplooad Date" onChange={e => setTvshow({...tvshow, showuploaddDate:e.target.value})} />
            <input className="input m-1" type="text" placeholder="Show Genre" onChange={e => setTvshow({...tvshow, showGenre:e.target.value})} />
            <input className="input m-1" type="text" placeholder="Age Rating" onChange={e => setTvshow({...tvshow, ageRating:e.target.value})} />
            <input className="input m-1" type="text" placeholder="show Language" onChange={e => setTvshow({...tvshow, showLanguage:e.target.value})} />
            <input className="input m-1" type="text" placeholder="show Tittle" onChange={e => setTvshow({...tvshow, showTitle:e.target.value})} />
            <input className="input m-1" type="text" placeholder="Show Duration" onChange={e => setTvshow({...tvshow, showDuration:e.target.value})} />
            <input className="input m-1" type="text" placeholder="Show Director" onChange={e => setTvshow({...tvshow, showDirector:e.target.value})} />
            <button className="button is-primary" onClick={putTvshow}>Add tvshow</button>
        </div>

        <section className= "section">
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
                                             <footer className="card-footer">
                                                 <button className="button is-primary" onClick={()=>deleteTvshow(tvshow.id)}>Delete</button>
                                            </footer>
                                   
                                </div>
                            </div>
                        </div>
                        )
                        :<h1>show not found</h1>
                }
            </div>
            </section>  
        </section>
        </>
    )
}

export default Admin;