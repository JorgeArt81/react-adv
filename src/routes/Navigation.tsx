import { Suspense } from 'react';
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import logo from '@/assets/react.svg';
export const Navigation = () => {

  const isActiveLink = (active: { isActive: boolean, isPending: boolean }) => {
    const { isActive } = active;
    return (isActive) ? 'nav-active' : ''
  }

  return (
    <Suspense fallback={<span>Cargando..</span>}>
      <BrowserRouter>
        <div className='main-layout'>
          <nav className='nav'>
            <img className='logo' src={logo} alt="React-Logo" />
            <ul>
              {
                routes.map(({ name, to }) => (
                  <li key={to}>
                    <NavLink to={to} className={isActiveLink}>{name}</NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>

          <div className="pages">
            <Routes>
              {
                routes.map(({ Component, path, to }) => (
                  <Route key={to} path={path} element={<Component />} />
                ))
              }
              <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}
