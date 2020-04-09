import SignIn from '../components/user/singin/singin.component'; 
import Home from '../components/home/home.component'; 

import SigninIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
const appRoutes = [
  {
    path: 'signin',
    name: 'Iniciar Sesión',
    icon: SigninIcon,
    component: SignIn,
    layout: '/',
  },
  {
    path: 'home',
    name: 'Home',
    icon: HomeIcon,
    component: Home,
    layout: '/',
  },
];
export default appRoutes; 