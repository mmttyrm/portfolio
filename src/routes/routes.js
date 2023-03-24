import config from '~/config';

//page
import HomePage from '~/page/HomePage';
import ProjectPage from '~/page/ProjectPage';

//public routes

const publicRoutes = [
    { page: config.routes.home, component: HomePage },
    { page: config.routes.myProject, component: ProjectPage },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
