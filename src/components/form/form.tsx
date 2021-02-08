import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts } from '../../store/ducks/posts/actions';
import { Post } from '../../store/ducks/posts/types';
import './form.css'

const Form = () => {

  const postsList = useSelector((state: any) => state.posts)

  useEffect(() => {
    setPost({ ...post, id: postsList.lenght })
  }, [postsList])

  const dispatch = useDispatch()

  const [post, setPost] = useState<Post>({
    id: postsList.length,
    user: "",
    userPicture: "",
    postPicture: "",
    description: "",
    likes: 0
  })

  const getPosts = () => {
    axios.get('http://localhost:4000/posts')
      .then(resposta => dispatch(setPosts(resposta.data)))
  }

  const onCreateNewPost = () => {

    console.log(post)
    axios.patch(`http://localhost:4000/posts/${post.id}`, post).then(
      resposta => {
        console.log(resposta)
        if (resposta.statusText === "OK") {
          getPosts()
        }
      }
    )
  }


  return (
    <div className="form">
      <p>Faça uma postagem aqui</p>
      <input
        type="text"
        onChange={(event) => setPost({ ...post, postPicture: event.target.value })}
        placeholder="Cole a url da imagem" />
      <input
        type="text"
        onChange={(event) => setPost({ ...post, description: event.target.value })}
        placeholder="Digite uma descrição" />
      <button onClick={onCreateNewPost}>Postar!</button>
    </div>
  );
}

export default Form;