import config from '~/config';

//page
import About from '~/page/About';
import HomePage from '~/page/HomePage';
import ProjectPage from '~/page/ProjectPage';

//public routes

const publicRoutes = [
    { page: config.routes.home, component: HomePage, title: config.titlePages.home },
    { page: config.routes.myProject, component: ProjectPage, title: config.titlePages.myProject },
    { page: config.routes.about, component: About, title: config.titlePages.about },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
