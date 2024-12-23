import React, { useEffect, useState } from "react";
import "./Player.css";
import backarrow from "../../assets/back_arrow_icon.png";
import { useNavigate} from "react-router-dom";
import { useParams } from "react-router-dom";


const Player = () => {
 const {id} = useParams();
 const navigate = useNavigate();
  const [apidata,setapidata] = useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
  
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjc2MWViNzYzMTM2ODRiODQyMmYwNzAyMjQzYmRjMyIsIm5iZiI6MTczMjU5NTQzNy4yMjYxNjcyLCJzdWIiOiI2NmY5NDcxNzI3MTIwMDQ5MmVjYzRmNzMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.g6hUQgKXZs53LUjQHrIMtHhXEidV8_KNuy_KDy6to54'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setapidata(res.results[0]))
      .catch(err => console.error(err));
  },[])

  return (
    <div className="Player">
      <div>
        <img src={backarrow} alt="" onClick = { () => navigate('/') }/>
        
          <iframe
            width='90%' height='90%'
            src={`https://www.youtube.com/embed/${apidata.key}`}
            title="trailer" frameBorder="0" allowFullScreen ></iframe>
        
        <div className="player-info">
          <p>{apidata.published_at.slice(0,10)}</p>
          <p>{apidata.name}</p>
          <p>{apidata.type}</p>
        </div>
      </div>
    </div> 
  );
};

export default Player;
