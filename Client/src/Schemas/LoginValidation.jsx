import * as YUP from 'yup';

const LoginValidation = YUP.object({
    email: YUP.string().email().required('Email is required'),
    password: YUP.string().required('Password is required'),
})

export default LoginValidation;