import { Post, PostsTypes } from './types'

const initialStatePosts: Post[] = []

function reducerPosts(state = initialStatePosts, action: any) {
    switch(action.type) {

      case PostsTypes.GET_POSTS:
        return action.payload

      default: 
        return state
    }
}

export default reducerPosts
