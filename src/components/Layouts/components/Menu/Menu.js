import classNames from 'classnames/bind';
import style from './menu.module.scss';
import Button from '~/components/Button';
import config from '~/config';
const cx = classNames.bind(style);
function Menu() {
    const Menu_Item = [
        {
            title: 'Home Page',
            to: '/',
        },
        {
            title: 'Project',
            to: '/my-project',
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <Button to={config.routes.home} lineRight>
                Home Page
            </Button>
            <Button to={config.routes.myProject} lineRight>
                {' '}
                My Project
            </Button>
            <Button to={config.routes.about}>About Me</Button>
        </div>
    );
}

export default Menu;
