import { action } from 'typesafe-actions'
import { StoriesTypes, Story } from './types'

export const setStories = (payload: Story) => action(StoriesTypes.GET_STORIES, payload)