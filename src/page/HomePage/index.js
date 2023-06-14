import classNames from 'classnames/bind';
import style from './homePage.module.scss';
import SideBar from '~/components/Layouts/components/SideBar/Sidebar';

const cx = classNames.bind(style);
function HomePage() {
    return (
        <div className={cx('wrapper')}>
            <h1>Home Page</h1>
            <div className={cx('l-2')}>
                <SideBar />
            </div>
        </div>
    );
}

export default HomePage;
