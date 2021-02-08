export enum StoriesTypes {
    GET_STORIES = 'GET_STORIES'
  }
  
  export interface Story {
    id: number,
    user: string,
    userPicture: string,
    time: string
  }