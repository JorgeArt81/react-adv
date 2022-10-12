import { Formik, Form } from 'formik';
import formJson from '@/03-forms/data/custom-form.json';
import { MySelect, MyTextInput } from '../components';
import * as Yup from 'yup';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('Este campo es requerido');
    }
    if (rule.type === 'minLength') {
      const minValue = (rule as any).value || 1;
      schema = schema.min(minValue, `Mínimo de ${minValue} caracteres`);
    }
    if (rule.type === 'email') {
      schema = schema.email('El email no tiene un formato válido');
    }

    // ... otras reglas
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });
export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}>
        {(formik) => (
          <Form noValidate>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === 'input' || type === 'password' || type === 'email') {
                return (
                  <MyTextInput
                    type={type as any}
                    key={name}
                    label={label}
                    name={name}
                    placeholder={placeholder}
                  />
                );
              } else if (type === 'select') {
                return (
                  <MySelect key={name} label={label} name={name}>
                    <option value='' disabled>
                      Select an option
                    </option>
                    {options?.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.label}
                      </option>
                    ))}
                  </MySelect>
                );
              }

              throw new Error(`El type: ${type}, no es soportado`);
            })}
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
