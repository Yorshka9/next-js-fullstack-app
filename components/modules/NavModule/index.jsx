/* styles */
import style from './index.scss';

const NavModule = ({ url, name }) => {
    return (
        <div className={style.root}>
            <a href={url}>{name}</a>

        </div>
    );
};

export default NavModule;