import classNames from 'classnames/bind';
import style from './Header.module.scss';
import image from '~/assets/index';
import Menu from '~/components/Layouts/components/Menu';
import { Link } from 'react-router-dom';
import config from '~/config';
const cx = classNames.bind(style);
function Header() {
    return (
        <div className={cx('wrapper')}>
            <Link to={config.routes.home} className={cx('logo')}>
                <img src={image.logoMiddle.src} alt={image.logoMiddle.name} />
            </Link>
            <Menu className={cx('menu')} />
        </div>
    );
}

export default Header;
