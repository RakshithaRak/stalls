import { Navigate, Outlet } from 'react-router-dom';
import Header from '../../components/header';
import { getLocalData } from '../../services/helpers';

const Layout = () => {
    const { accessToken } = getLocalData() || {}

    if (!accessToken) return <Navigate to='/login' replace />

    return (<main className='h-100'>
        <Header />
        <Outlet />
    </main>);
}

export default Layout;