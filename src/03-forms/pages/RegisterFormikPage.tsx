import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

import '@/03-forms/styles/styles.css';

interface FormState {
  name: string;
  email: string;
  password1: string;
  password2: string;
}

const initFormValues: FormState = {
  name: '',
  email: '',
  password1: '',
  password2: '',
};
export const RegisterFormikPage = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Debe de tener un mínimo 2 caracteres')
      .max(15, 'Debe de tener 15 caracteres o menos')
      .required('Requerido'),
    email: Yup.string()
      .email('El email no tiene un formato válido')
      .required('Requerido'),
    password1: Yup.string()
      .min(6, 'Debe de tener un mínimo 6 caracteres ')
      .required('Requerido'),
    password2: Yup.string()
      .oneOf([Yup.ref('password1'), null], 'Los password no coinciden')
      .required('Requerido'),
  });

  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={initFormValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}>
        {({ handleReset }) => (
          <Form>
            <MyTextInput label='Name' name='name' placeholder='Jorge' />
            <MyTextInput
              type='email'
              label='Email'
              name='email'
              placeholder='correo@dominio.com'
            />
            <MyTextInput type='password' label='Password' name='password1' />
            <MyTextInput
              type='password'
              label='Confirm Password'
              name='password2'
            />
            <button type='submit'>Submit</button>
            <button type='button' onClick={handleReset}>
              Reset Form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
