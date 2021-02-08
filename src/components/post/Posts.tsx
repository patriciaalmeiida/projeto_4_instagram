import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { setPosts } from '../../store/ducks/posts/actions';
import { FiHeart } from 'react-icons/fi';
import { Post } from '../../store/ducks/posts/types';

const Posts = () => {

    const dispatch = useDispatch()

    const postsList = useSelector((state: any) => state.posts)

    useEffect(() => {
        getPosts()
    }, [dispatch])

    const getPosts = () => {
        axios.get('http://localhost:4000/posts')
            .then(resposta => dispatch(setPosts(resposta.data)))
    }

    const onLikeClick = (post: Post) => {
        axios.patch(`http://localhost:4000/posts/${post.id}`, { ...post, likes: post.likes + 1 }).then(
            resposta => {
                if (resposta.statusText === "OK") {
                    getPosts()
                }
            }
        )
    }

    return (<>
        {
            postsList.map((p: Post) => <div className="post">
                <header>
                    <img src={p.userPicture} alt="user" />
                    <div className="post-user">
                        <strong>{p.user}</strong>
                        <span>{p.location}</span>
                    </div>
                </header>
                <div className="post-image">
                    <img src={p.postPicture} alt="post" />
                </div>
                <div className="post-likes">
                    <FiHeart onClick={() => onLikeClick(p)} /> <>{p.likes}</>

                </div>
                <p>{p.description}</p>
            </div>)
        }
    </>
    )
}

export default Posts;