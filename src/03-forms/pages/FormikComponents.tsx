import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, MySelect, MyTextInput } from '../components';

import '@/03-forms/styles/styles.css';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  terms: boolean;
  jobType: string;
}

const initFormValues: FormValues = {
  firstName: '',
  lastName: '',
  email: '',
  terms: false,
  jobType: '',
};

export const FormikComponents = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, 'Debe de tener 15 caracteres o menos')
      .required('Requerido'),
    lastName: Yup.string()
      .max(10, 'Debe de tener 10 caracteres o menos')
      .required('Requerido'),
    email: Yup.string()
      .email('El email no tiene un formato válido')
      .required('Requerido'),
    terms: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
    jobType: Yup.string()
      .notOneOf(['it-jr'], 'Esta opción no es permitida')
      .required('Requerido'),
  });

  return (
    <div>
      <h1>Formik Components</h1>

      <Formik
        initialValues={initFormValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}>
        {(formik) => (
          <Form>
            <MyTextInput
              label='First Name'
              name='firstName'
              placeholder='Jorge'
            />
            <MyTextInput
              label='Last Name'
              name='lastName'
              placeholder='Reyes'
            />
            <MyTextInput
              label='Email'
              name='email'
              placeholder='correo@dominio.com'
              type='email'
            />

            <MySelect label='Job Type' name='jobType'>
              <option value='' disabled>
                -- Pick something --
              </option>
              <option value='developer'>Developer</option>
              <option value='designer'>Designer</option>
              <option value='it-senior'>IT Senior</option>
              <option value='it-jr'>IT Jr.</option>
            </MySelect>

            <MyCheckbox label='Terms and conditions' name='terms' />

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
