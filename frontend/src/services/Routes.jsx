import { createBrowserRouter, Navigate } from 'react-router-dom';

import Login from '../pages/login';
import Layout from '../pages/layout';
import Stores from '../pages/stores';
import StoresDetails from '../pages/storeDetails';

const router = createBrowserRouter([{
    path: '',
    Component: () => <Navigate to='login' replace />
}, {
    path: 'login',
    Component: Login
}, {
    path: '',
    Component: Layout,
    children: [{
        path: 'stores',
        Component: Stores
    }, {
        path: 'stores/:branch_name',
        Component: StoresDetails
    }]
}
])

export default router