import classNames from 'classnames/bind';
import style from './projectPage.module.scss';

const cx = classNames.bind(style);

function ProjectPage() {
    return (
        <div className={cx('wrapper')}>
            <h1>Project Page</h1>
        </div>
    );
}

export default ProjectPage;
