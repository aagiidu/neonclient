//import { withNavigationWatcher } from './context/navigation';
import { 
    FrontPage, HomePage, LoginPage,
    AdminLogin, AdminRegister, MovieForm, MovieList, SeasonForm, SeasonList, EpisodeForm, EpisodeList,
} from './pages/index';

export const userRoutes = [
    { path: '/', component: <FrontPage /> },
    { path: '/home', component: <HomePage /> },
    { path: '/login', component: <LoginPage /> },
    { path: '/admin/login', component: <AdminLogin /> },
];

export const adminRoutes = [
    { path: '/admin/register', component: <AdminRegister /> },
    { path: '/admin/movie/form', component: <MovieForm /> },
    { path: '/admin/movie/list', component: <MovieList /> },
    { path: '/admin/season/form', component: <SeasonForm /> },
    { path: '/admin/season/list', component: <SeasonList /> },
    { path: '/admin/episode/form', component: <EpisodeForm /> },
    { path: '/admin/episode/list', component: <EpisodeList /> },
];

/* export default routes.map(route => {
  return {
    ...route,
    component: withNavigationWatcher(route.component)
  };
}); */
