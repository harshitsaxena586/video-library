import React,{ useEffect} from "react";
import {useParams } from "react-router-dom";
import Videocard from "../components/Videocard";
import axios from 'axios';
import { useApp } from "../context/AppContext";

export default function Category() {

  const {state,dispatch}=useApp()
    useEffect(() =>{
    axios.get('https://jainwin-video-backend.herokuapp.com/videos')
    .then(function (response) {
      dispatch({type: 'INITALIZE-VIDEO-DB',payload:response.data.videos})
    })
    .catch(function (error) {
      console.log(error);
    })

  },[])
  const { filter } = useParams();
  const filteredArr=state.videoDB.filter(item=> item.category===filter)
  return (
    <div>
      <h1 className="text-center">{filter}</h1>
      <div className="listing-wrap">
        {filteredArr.map(item=><Videocard item={item} />)}
      </div>
    </div>
  );
}
