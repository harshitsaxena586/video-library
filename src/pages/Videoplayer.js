import React, { useEffect } from 'react'
import {useParams } from "react-router-dom";
import { videoDB } from '../videoDB';
import ReactPlayer from 'react-player'
import { useApp } from '../context/AppContext';

export default function Videoplayer() {
const  {vid}=useParams()
const {state,dispatch}=useApp()
console.log(state)
const currentVideo=videoDB.find(item=> item.id==vid)
useEffect(()=>dispatch({type:"ADDHISTORY",payload:currentVideo}),[])
console.log(currentVideo)
    return (
        <div className="video-player">
        <div><ReactPlayer url={currentVideo.url} width="1200px" height="675px" className="video-l"/> </div>
        <div className="player-content">
            <h1>{currentVideo.title}</h1>
            <h2>{currentVideo.channel}</h2>
            <p>{currentVideo.desicription}</p>
            <button onClick={()=>dispatch({type:"ADDTOWATCHLATER",payload:currentVideo})}><i class="fa fa-bookmark" ></i></button>
            <button onClick={()=>dispatch({type:"LIKED",payload:currentVideo})}>Like</button>
        </div>
           
        </div>
    )
}
