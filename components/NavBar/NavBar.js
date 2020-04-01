/* styles */
import style from './navbar.scss';

/* components */
import Head from '../common/Head/index';

const Navbar = () => {
    return (
        <div className={(style.root)}>
            <ul>
                <li><a href="/root/index">Home</a></li>
                <li><a href="/root/about">About</a></li>
            </ul>
        </div>
    );
}


export default Navbar;