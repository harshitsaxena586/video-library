import React from "react";
import {useParams } from "react-router-dom";
import { videoDB } from "../videoDB";
import Videocard from "../components/Videocard";
export default function Category() {
  const { filter } = useParams();
  console.log(filter)
  const filteredArr=videoDB.filter(item=> item.category==filter)
  console.log(filteredArr)
  return (
    <div>
      <h1 className="text-center">{filter}</h1>
      <div className="listing-wrap">
        {filteredArr.map(item=><Videocard item={item} />)}
      
      </div>
    </div>
  );
}
