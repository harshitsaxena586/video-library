import React from 'react'
import Playlistcard from '../components/Playlistcard'
import { useApp } from '../context/appContext'

export default function History() {
    const {state,dispatch}=useApp()
    const {history} =state
    return (
        <div className="history-wrap">
            <h1 className="text-center">History</h1>
            <ul class="list-tag">
            {history.map(item=> <Playlistcard item={item} />)}
            </ul>
           
        </div>
    )
}
