import immutable from 'immutable'

import Constants from '../constants/index.js'

let initState = immutable.OrderedMap;


const PostsActionTypes = Constants.ActionTypes.Posts

function posts(state = initState,action){
    switch (action.type){
        case PostsActionTypes.ADD_POSTS:
            let post = action.post
            return state.set(post.id,post)

        case PostsActionTypes.UPDATE_POSTS:
            let post = action.post
            return state.set(post.id,post)

        default:
            return state
    }
}