import { FormikErrors, useFormik } from 'formik';

import '@/03-forms/styles/styles.css';

interface FormValues {
  firsName: string;
  lastName: string;
  email: string;
}

const initFormValues: FormValues = {
  firsName: '',
  lastName: '',
  email: '',
};
export const FormikBasicPage = () => {
  const validate = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!values.firsName) {
      errors.firsName = 'Required';
    } else if (values.firsName.length >= 15) {
      errors.firsName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (values.lastName.length >= 10) {
      errors.lastName = 'Must be 10 characters or less';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
    useFormik({
      initialValues: initFormValues,
      onSubmit: (values) => {
        console.log(values);
      },
      validate,
    });

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor='firsName'>First Name</label>
        <input
          type='text'
          name='firsName'
          onBlur={handleBlur}
          value={values.firsName}
          onChange={handleChange}
        />
        {touched.firsName && errors.firsName && <span>{errors.firsName}</span>}

        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          name='lastName'
          onBlur={handleBlur}
          value={values.lastName}
          onChange={handleChange}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          onBlur={handleBlur}
          value={values.email}
          onChange={handleChange}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
