import * as YUP from 'yup';

const CaptainRegisterValidation = YUP.object({
  firstname: YUP.string().required('First name is required'),
  lastname: YUP.string(),
  email: YUP.string().email().required('Email is required'),
  password: YUP.string().required('Password is required'),
  capacity: YUP.string().required('Capacity is required'),
  vehicleType: YUP.string().required('Vehicle type is required'),
  color: YUP.string().required('Color is required'),
  plate: YUP.string().required('Plate is required'),
})

export default CaptainRegisterValidation;