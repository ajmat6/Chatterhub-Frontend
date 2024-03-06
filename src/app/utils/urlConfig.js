export const HOST = 'http://localhost:5000' // backend url
const AUTH_ROUTES = `${HOST}/api/auth`
export const MESSAGES_ROUTES = `${HOST}/api/messages`

export const CHECK_USER = `${AUTH_ROUTES}/check-user`
export const NEW_USER = `${AUTH_ROUTES}/newUser`
export const GET_ALL_CONTACT = `${AUTH_ROUTES}/get-contacts`
export const ADD_MESSAGE_ROUTE = `${MESSAGES_ROUTES}/add-message`
export const GET_MESSAGES_ROUTE = `${MESSAGES_ROUTES}/get-messages`