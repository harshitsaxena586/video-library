import React from 'react'

export default function reducer(state,action) {
    switch(action.type){
     case "ADDTOWATCHLATER":
     return {...state,watchlater:state.watchlater.concat(action.payload)} 
     case "LIKED":
     return {...state,liked:state.liked.concat(action.payload)};
     case "ADDHISTORY":
     return {...state,history:state.history.concat(action.payload)}
    }
}
