import { memo } from 'react';
import { GoChevronDown } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';

import { getStoreOpenStatus } from '../../services/helpers';
import Address from '../Address';

import './Store.scss';

const Store = memo(({ store }) => {
    const navigate = useNavigate()
    const showStoreOpenStatus = getStoreOpenStatus(store)

    const navigateToStore = () =>
        navigate(store.branch_name, { state: store })

    return <main className='container store-container'>
        <div className='row h-100'>

            <section className="col-lg-5 offset-lg-1 col-xs-12 h-100 pb-1">
                <img alt={store.branch_name} className='store-image' onClick={navigateToStore} src={store.image} />
            </section>

            <section className="col-lg-5 offset-lg-1 col-xs-12 h-100">
                <div className="h-100 d-flex flex-column justify-content-center">
                    <p className='branch-name' onClick={navigateToStore} >{store.branch_name} Branch</p>

                    <Address address={store.address} className='address' />

                    <p className='contact-details phone mt-3'>{store.phone_no}</p>
                    <p className='contact-details'>{store.email}</p>

                    <p className='store-open-status'>{showStoreOpenStatus}    <GoChevronDown size={20} /></p>

                </div>
            </section>

        </div>
    </main>
})

export default Store;