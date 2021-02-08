import { action } from 'typesafe-actions'
import { PostsTypes, Post } from './types'

export const setPosts = (payload: Post[]) => action(PostsTypes.GET_POSTS, payload)