import config from '~/config';

//page
import About from '~/page/About';
import HomePage from '~/page/HomePage';
import ProjectPage from '~/page/ProjectPage';

//public routes

const publicRoutes = [
    { page: config.routes.home, component: HomePage },
    { page: config.routes.myProject, component: ProjectPage },
    { page: config.routes.about, component: About },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
