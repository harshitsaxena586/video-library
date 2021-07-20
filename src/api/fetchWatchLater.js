import axios from "axios";
import { useApp } from "../context/appContext";

export default async function serWatchLater() {
    // useApp()
  const result = await axios.get("http://localhost:3000/watchlater");
  return result;
}
