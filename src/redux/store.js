import {configureStore} from "@reduxjs/toolkit";
import count from "./count";
import async from "./async";
import logger from "redux-logger"


export default configureStore({
    reducer:{
        count:count,
       
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
  

})