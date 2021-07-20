import React, { useEffect } from "react";
import Playlistcard from "../components/Playlistcard";
import { useApp } from "../context/appContext";
import fetchWatchLater from "../api/fetchWatchLater";
export default function Playlists() {
  const { state, dispatch } = useApp();

  useEffect(async () => {
    const data = await fetchWatchLater();
    console.log(data);
    dispatch({ type: "FETCH_WATCH_LATER", payload: data.response });
  }, []);

  const { watchlater, liked } = state;
  return (
    <div className="playlist-wrap">
      <h1 className="text-center">Watch Later</h1>
      <ul class="list-tag">
        {watchlater.map((item) => (
          <Playlistcard item={item} />
        ))}
      </ul>
      <h1 className="text-center">Liked</h1>
      <ul class="list-tag">
        {liked.map((item) => (
          <Playlistcard item={item} />
        ))}
      </ul>
    </div>
  );
}
