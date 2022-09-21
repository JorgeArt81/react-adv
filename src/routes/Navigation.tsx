import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from '@/01-lazyload/pages';
import logo from '@/assets/react.svg';
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
                            <NavLink to='/lazy1' className={isActiveLink}>Lazy1</NavLink>
                        </li>
                        <li>
                            <NavLink to='/lazy2' className={isActiveLink}>Lazy2</NavLink>
                        </li>
                        <li>
                            <NavLink to='/lazy3' className={isActiveLink}>Lazy3</NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="pages">
                    <Routes>
                        <Route path='/lazy1' element={<LazyPage1 />} />
                        <Route path='/lazy2' element={<LazyPage2 />} />
                        <Route path='/lazy2' element={<LazyPage3 />} />
                        <Route path='/*' element={<Navigate to='lazy1' replace />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}
