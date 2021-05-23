import React from 'react'
import Playlistcard from '../components/Playlistcard'
import { useApp } from '../context/AppContext'

export default function Playlists() {
    const {state,dispatch}=useApp()
    const { watchlater,liked} =state
    return (
        <div className="playlist-wrap">
            <h1 className="text-center">Watch Later</h1>
            <ul class="list-tag">
            {watchlater.map(item=> <Playlistcard item={item} />)}
            </ul>
            <h1 className="text-center">Liked</h1>
            <ul class="list-tag">
                
            {liked.map(item=> <Playlistcard item={item} />)}
            </ul>
        </div>
    )
}
