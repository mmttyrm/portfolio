import classNames from 'classnames/bind';

import style from './sidebar.module.scss';
const cx = classNames.bind(style);
function SideBar() {
    return <div className={cx('wrapper')}>sidebar</div>;
}

export default SideBar;
