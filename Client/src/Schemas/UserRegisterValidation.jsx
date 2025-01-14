import * as YUP from 'yup';

const UserRegisterValidation = YUP.object({
  firstname: YUP.string().required('First name is required'),
  lastname: YUP.string(),
  email: YUP.string().email().required('Email is required'),
  password: YUP.string().required('Password is required'),
})

export default UserRegisterValidation;