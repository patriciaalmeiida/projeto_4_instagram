import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { setStories } from '../../store/ducks/stories/actions';
import { Story } from '../../store/ducks/stories/types';

const Stories = () => {

    const dispatch = useDispatch()
    const storiesList = useSelector((state: any) => state.stories)

    useEffect(() => {
        axios.get('http://localhost:4000/stories')
            .then(resposta => dispatch(setStories(resposta.data)))
    }, [dispatch])

    return (<>
        {
            storiesList.map((s: Story) => <div className="storie">
                <div className="storie-image">
                    <img src={s.userPicture} alt="user" />
                </div>
                <div className="storie-user">
                    <strong>{s.user}</strong>
                    <span>{s.time}</span>
                </div>
            </div>)
        }
    </>)
}
export default Stories