import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { useApp } from "../context/appContext";
import axios from "axios";
export default function Videoplayer() {
  const { vid } = useParams();
  const { state, dispatch } = useApp();
  const currentVideo = state.videoDB.find((item) => item.id == vid);
  useEffect(() => dispatch({ type: "ADDHISTORY", payload: currentVideo }), []);
  const addToWatchLaterHandler = () => {
    axios.post("http://localhost:3000/watchlater", {
      videoId: currentVideo._id,
    });
  };
  return (
    <div className="video-player">
      <div>
        <ReactPlayer
          url={currentVideo.url}
          width="1200px"
          height="675px"
          className="video-l"
        />{" "}
      </div>
      <div className="player-content">
        <div>
          <h1>{currentVideo.title}</h1>
          <h2>{currentVideo.channel}</h2>
          <p>{currentVideo.desicription}</p>
        </div>
        <div>
          <button
            className="button-primary"
            onClick={() => addToWatchLaterHandler()}
          >
            {" "}
            <i class="fa fa-bookmark fa-lg"></i> Watchlater
          </button>
          <br />
          <button
            onClick={() => dispatch({ type: "LIKED", payload: currentVideo })}
            className="button-secondary"
          >
            {" "}
            <i class="far fa-heart fa-lg"></i> Like
          </button>
        </div>
      </div>
    </div>
  );
}
