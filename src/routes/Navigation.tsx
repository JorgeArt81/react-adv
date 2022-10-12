import logo from '@/assets/react.svg';
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import {
  DynamicForm,
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  RegisterFormikPage,
  RegisterPage,
} from '@/03-forms/pages';
export const Navigation = () => {
  const isActiveLink = (active: { isActive: boolean; isPending: boolean }) => {
    const { isActive } = active;
    return isActive ? 'nav-active' : '';
  };

  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav className='nav'>
          <img className='logo' src={logo} alt='React-Logo' />
          <ul>
            <li>
              <NavLink to='/register' className={isActiveLink}>
                Register Page
              </NavLink>
            </li>
            <li>
              <NavLink to='/formik-basic' className={isActiveLink}>
                Formik Basic
              </NavLink>
            </li>
            <li>
              <NavLink to='/formik-yup' className={isActiveLink}>
                Formik Yup
              </NavLink>
            </li>
            <li>
              <NavLink to='/formik-components' className={isActiveLink}>
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink to='/formik-register' className={isActiveLink}>
                Register Formik
              </NavLink>
            </li>
            <li>
              <NavLink to='/dynamic-form' className={isActiveLink}>
                Dynamic Form
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/formik-basic' element={<FormikBasicPage />} />
          <Route path='/formik-yup' element={<FormikYupPage />} />
          <Route path='/formik-components' element={<FormikComponents />} />
          <Route path='/formik-register' element={<RegisterFormikPage />} />
          <Route path='/dynamic-form' element={<DynamicForm />} />
          <Route path='/*' element={<Navigate to='/register' replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
