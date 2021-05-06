import React from 'react'
import ReactPlayer from 'react-player/youtube'
import { Link } from 'react-router-dom'

export default function Videocard({item}) {
    return (
        <div className="video-card">
            <Link to={String(item.id)}> 
            <ReactPlayer  light url={item.url} className="player-listing" />
            <h2>{item.title}</h2>
            <h2>{item.channel}</h2>
            </Link>
            
        </div>
    )
}
