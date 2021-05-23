import React,{ useEffect,useState} from "react";
import {useParams } from "react-router-dom";
import Videocard from "../components/Videocard";
import axios from 'axios';

export default function Category() {
  const [videoDB,setVideoDB]=useState([])
  useEffect(() =>{
    axios.get('https://jainwin-video-backend.herokuapp.com/videos')
    .then(function (response) {
      setVideoDB(response.data.videos)
    })
    .catch(function (error) {
      console.log(error);
    })

  },[])
  const { filter } = useParams();
  const filteredArr=videoDB.filter(item=> item.category===filter)
  return (
    <div>
      <h1 className="text-center">{filter}</h1>
      <div className="listing-wrap">
        {filteredArr.map(item=><Videocard item={item} />)}
      </div>
    </div>
  );
}
