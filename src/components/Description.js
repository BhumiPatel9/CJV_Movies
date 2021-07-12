import React,{useState,useEffect} from 'react'
import {    useParams
  } from "react-router-dom";

function Description(props) {
    let { id } = useParams();
    const [mediaDetails, setMediaDetail] = useState({});
    useEffect(() => {
        const url= `http://localhost:3000/${props.url}/${id}`;
        const fetchData= async () =>{
            try{
                const response= await fetch(url);
                const json=await response.json();
                setMediaDetail(json);
            }
            catch(err){
                console.log("Error");
            }
        }
        fetchData();
    }, [])
    return  (
        <div className="col-xs-12 cardcont nopadding">

          <div className="meta-data-container col-xs-12 col-md-8 push-md-4 col-lg-7 push-lg-5">
            <h1>{mediaDetails.title}</h1>

            <span className="tagline">{mediaDetails.tagline}</span>
            <p>{mediaDetails.description}</p>
            <div className="additional-details">
              <div className="row nopadding release-details">
                <div className="col-xs-6"> Original Release: <span className="meta-data">{mediaDetails.release}</span></div>
                <div className="col-xs-6"> Running Time: <span className="meta-data">{mediaDetails.runtime} mins</span> </div>
                <div className="col-xs-6"> Vote Average: <span className="meta-data">{mediaDetails.vote}</span></div>
              </div>
            </div>
          </div>
          <div className="poster-container nopadding col-xs-12 col-md-4 pull-md-8 col-lg-5 pull-lg-7 ">
            <img id="postertest" className='poster' src={mediaDetails.poster}/>
          </div>
        </div>
      )
}

export default Description
