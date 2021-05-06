import React from 'react'
import ReactPlayer from 'react-player/youtube'
import { Link } from 'react-router-dom'
export default function Playlistcard({item}) {
    return (
        <div>
            
            <Link to={String(item.id)} className="text-link"> 
            <ReactPlayer width="550px" height="309px" light url={item.url} className="player-listing" />
            <h2>{item.title}</h2>
            <h2>{item.channel}</h2>
            </Link>
            
        </div>
    )
}
