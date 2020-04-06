/* styles */
import style from './navbar.scss';

/* components */
import Head from '../common/Head/index';

const Navbar = () => {
    return (
        <div className={(style.root)}>
            <ul>
                <li><a href="https://next-blog-phi.now.sh">Posts</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </div>
    );
}


export default Navbar;