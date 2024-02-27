import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Store from '../../components/store';

import { baseURL } from '../../services/config';
import { getLocalData } from '../../services/helpers';

import useAppStore from '../../store';

import './Stores.scss';

const Stores = () => {
    const [state, setState] = useState({
        stores: [],
        isScrolled: false
    });
    const setIsScrolled = useAppStore((state) => state.setIsScrolled)
    const navigate = useNavigate()

    useEffect(() => {
        getStores()
    }, []);

    const getStores = async () => {
        try {
            const { accessToken } = getLocalData()

            const response = await fetch(`${baseURL}/stores`, {
                headers: {
                    authorization: accessToken,
                }
            })

            const { data, message, status } = await response.json()

            if (status === 'failed') {
                if (message === 'Unauthorized') {
                    localStorage.clear()
                    return navigate('/login', { replace: true })
                } else {
                    alert(message)
                }
            } else {
                handleSetState({ stores: data })
            }

        } catch (error) {
            alert(error.message)
            console.error(error);
        }
    }

    const handleSetState = (newState) => setState((prevState) => ({ ...prevState, ...newState }))

    const handleScroll = ({ target }) => {
        const height = window.innerWidth === 390 ? 182 : 84
        const isScrolled = target.scrollTop > height

        setIsScrolled(isScrolled)
        handleSetState({ isScrolled })
    }

    return <main
        className={
            `container-fluid stores-container-default ${state.isScrolled ? 'stores-container-scrolled' : 'stores-container'}`
        }
        onScroll={handleScroll}>
        {state.stores.map(store => <Store key={store.branch_name} store={store} />)}
    </main>
}

export default Stores;