/* styles */
import style from './index.scss';

/* components */
import Head from '../common/Head/index';

const Navbar = () => {
    return (
        <div className={(style.root)}>
            <ul>
                <li><a href="/root/index">Home</a></li>
                <li><a href="/root/blog">Blog</a></li>
            </ul>
        </div>
    );
}


export default Navbar;