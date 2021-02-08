
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { setUsuario } from '../../store/ducks/user/actions';

const UsuarioPerfil = () => {

    const dispatch = useDispatch()

    const { name, username, userPicture } = useSelector((state: any) => state.user)

    useEffect(() => {
        axios.get('http://localhost:4000/user')
            .then(resposta => dispatch(setUsuario(resposta.data)))
    }, [dispatch])


    return <div className="user-info">
        <img
            alt="Perfil"
            src={userPicture}
        />
        <div className="user-bio">
            <strong>{name}</strong>
            <span>{username}</span>
        </div>
    </div>
}
export default UsuarioPerfil;