import './index.scss'
import { Link } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/'

const Layout = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img src={LogoSubtitle} alt="sniff" />
        </Link>
    </div>
)

export default Layout;

