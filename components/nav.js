/* styles */


/* components */
import Head from './common/Head/index';

const Nav = () => {
    return (
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    );
}

export default Nav