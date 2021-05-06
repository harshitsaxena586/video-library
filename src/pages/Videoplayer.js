import React from 'react'
import {useParams } from "react-router-dom";
import { videoDB } from '../videoDB';
import ReactPlayer from 'react-player'

export default function Videoplayer() {
const  {vid}=useParams()
console.log(vid)
const currentVideo=videoDB.find(item=> item.id==vid)
console.log(currentVideo)
    return (
        <div>
        <div><ReactPlayer url={currentVideo.url} /> </div>
            <h1>{currentVideo.title}</h1>
            <h2>{currentVideo.channel}</h2>
            <button>watchlater</button>
            <button>Like</button>
        </div>
    )
}
