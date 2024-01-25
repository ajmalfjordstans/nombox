import * as yup from 'yup'

export const deliveryAddress = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  phoneNumber: yup.string()
    .matches(/^[0-9]+$/, 'Phone number must only contain digits')
    .required('Phone number is required'),
  address: yup.string().required('Address is required'),
  townOrCity: yup.string().required('Town or city is required'),
  stateOrCountry: yup.string().required('State or country is required'),
  zipOrPostal: yup.string().required('Zip or postal code is required'),
})
