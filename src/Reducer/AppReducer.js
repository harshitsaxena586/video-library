import React from 'react'

export default function reducer(action,state) {
    switch(action.type){
       case "test":
        return {...state,liked:["test succesfull"]} 
    }
}
