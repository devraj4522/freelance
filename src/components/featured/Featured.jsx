import React, { useState, useEffect } from "react";
import "./Featured.scss";
import { useNavigate } from "react-router-dom";
import GigCard from "../gigCard/GigCard";
import newRequest from "../../utils/newRequest";

function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    newRequest.get("/gigs/all").then(res=> setData(res.data))
  }, []);

  console.log(data);
  
  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <span>freelance</span> services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input
                type="text"
                placeholder='Try "building mobil app"'
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>

          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
           <div>
             <ul style={{display: "flex", listStyle: "none", flexWrap: "wrap"}}>
              {data.map((gig) =><li style={{margin: "14px"}}> <GigCard key={gig._id} item={gig} /> </li>)}
            </ul>
           </div>
        </div>
        
        <div className="right">
          <img src="./img/man.png" alt="" />
        </div>
      </div>
      
    </div>
  );
}

export default Featured;
