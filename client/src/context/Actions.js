export const LOGIN_STATES = {
    START: 0,
    SUCCESS: 1,
    FAILURE: 2
}

export const LoginStart = (creds) => ({
    type: LOGIN_STATES.START
})

export const LoginSuccess = (user) => ({
    type: LOGIN_STATES.SUCCESS,
    payload:user,
})

export const LoginFailure = () => ({
    type: LOGIN_STATES.FAILURE,
})