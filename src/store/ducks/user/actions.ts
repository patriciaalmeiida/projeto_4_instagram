import { action } from 'typesafe-actions'
import { UsuariosTypes, Usuario } from './types'

export const setUsuario = (payload: Usuario) => action(UsuariosTypes.GET_USUARIO, payload)