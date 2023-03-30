import classNames from 'classnames/bind';
import style from './about.module.scss';

const cx = classNames.bind(style);

function About() {
    return (
        <div className={cx('wrapper')}>
            <h1>About me</h1>
        </div>
    );
}

export default About;
