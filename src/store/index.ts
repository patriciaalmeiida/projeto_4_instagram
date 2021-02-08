import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'

import reducerUser from './ducks/user'
import reducerStories from './ducks/stories'
import reducerPosts from './ducks/posts'

const createRootReducer = () => combineReducers({
  user: reducerUser,
  stories: reducerStories,
  posts: reducerPosts
})

const store = createStore(createRootReducer(), composeWithDevTools())

export { store }