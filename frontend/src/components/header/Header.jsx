import { GoChevronLeft } from 'react-icons/go';
import { useLocation, useNavigate } from 'react-router-dom';

import useAppStore from '../../store';

import './Header.scss';

const Header = () => {
    const navigate = useNavigate()
    const { state } = useLocation()
    const isScrolled = useAppStore(state => state.isScrolled)

    const onBack = () => navigate('/stores')

    const onLogout = async () => {
        try {
            localStorage.clear()
            navigate('/login')
        } catch (error) {
            console.error(error)
        }
    }

    const renderContactEle = () => {
        let ele = <>
            <div className="col-lg-2 offset-lg-1 col-xs-12 ps-0 call-us-container">
                <p className={isScrolled ? 'd-none' : ''}>Call us</p>
                <p>+919632546670</p>
            </div>
            <div className="col-lg-6 col-xs-12">
                <p className={isScrolled ? 'd-none' : ''}>Write to us</p>
                <p>jogi@aisthetic.co</p>
            </div>
        </>

        if (isMobileDevice && !isScrolled) {
            return ele
        } else if (!isMobileDevice) {
            return ele
        } else return null
    }

    const isStoreDetailsPage = Object.keys(state || {}).length

    const isMobileDevice = window.innerWidth === 390

    return (
        <header
            className={
                `container-fluid ${isStoreDetailsPage ? 'header-on-store-details' : isScrolled ? 'header-scrolled' : ''}`
            }>
            <section className='container h-100'>
                <div className="row h-100 align-items-center">
                    {isStoreDetailsPage
                        ? <div className='col-lg-8 col-6 offset-lg-1 ps-0'>
                            <p className='go-back' onClick={onBack}><GoChevronLeft /> Back to All store</p>
                        </div>
                        : renderContactEle()
                    }
                    <div className={`col-lg-3 ${isStoreDetailsPage ? 'col-6 pe-0' : 'col-xs-12'} book-an-appointment-text-container`}>
                        <p className='book-an-appointment-text' onClick={onLogout}>Book an appointment</p>
                    </div>
                </div>
            </section>
        </header>);
}

export default Header;