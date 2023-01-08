import {configureStore} from '@reduxjs/toolkit'
import {userReducer , postOfFollowingReducer, allUserReducer} from './Reducers/userReducer'
import {likeReducer} from './Reducers/postReducer'



const store = configureStore({
    reducer: {
        // Add reducers here
        user: userReducer,
        postofFollwoing: postOfFollowingReducer,
        allUser: allUserReducer,
        like:likeReducer
    }

})

export default store