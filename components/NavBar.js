/* styles */


/* components */
import Head from './common/Head/index';

const Navbar = () => {
    return (
        <div>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    );
}


export default Navbar;