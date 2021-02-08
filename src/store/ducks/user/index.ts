import { Usuario, UsuariosTypes } from './types'

const initialStateUsuarios: Usuario = {
  name: '',
  username: '',
  userPicture: ''
}

function reducerUsuarios(state = initialStateUsuarios, action: any) {
    switch(action.type) {

      case UsuariosTypes.GET_USUARIO:
        return {
          name: action.payload.name,
          username: action.payload.username,
          userPicture: action.payload.userPicture
        }

      default: 
        return state
    }
}

export default reducerUsuarios
