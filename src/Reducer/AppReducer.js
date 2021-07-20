import React from "react";

export default function reducer(state, action) {
  switch (action.type) {
    case "ADDTOWATCHLATER":
      return { ...state, watchlater: state.watchlater.concat(action.payload) };
    case "LIKED":
      return { ...state, liked: state.liked.concat(action.payload) };
    case "ADDHISTORY":
      return { ...state, history: state.history.concat(action.payload) };
    case "INITALIZE-VIDEO-DB":
      return { ...state, videoDB: action.payload };
    case "ADDTOPLAYLIST":
      return { ...state, playlists: action.payload };
    case "FETCH_WATCH_LATER":
      return { ...state, watchlater: action.payload };
    default:
      return state;
  }
}
