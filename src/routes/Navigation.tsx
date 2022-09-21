import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import logo from '@/assets/react.svg';
import * as path from 'path';
export const Navigation = () => {

    const isActiveLink = (active: { isActive: boolean, isPending: boolean }) => {
        const { isActive } = active;
        return (isActive) ? 'nav-active' : ''
    }

    return (
        <BrowserRouter>
            <div className='main-layout'>
                <nav className='nav'>
                    <img className='logo' src={logo} alt="React-Logo" />
                    <ul>
                        <li>
                            <NavLink to='/home' className={isActiveLink}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className={isActiveLink}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/users' className={isActiveLink}>Users</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='/about' element={<h1 className='pages'>About Page</h1>} />
                    <Route path='/users' element={<h1 className='pages'>Users Page</h1>} />
                    <Route path='/home' element={<h1 className='pages'>Home Page</h1>} />
                    <Route path='/*' element={<Navigate to='home' replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
