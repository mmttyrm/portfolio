import classNames from 'classnames/bind';

import style from './homePage.module.scss';

const cx = classNames.bind(style);
function HomePage() {
    return (
        <div className={cx('wrapper')}>
            <h1>Home Page</h1>
        </div>
    );
}

export default HomePage;
