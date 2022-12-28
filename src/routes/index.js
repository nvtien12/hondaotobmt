import Home from '../component/pages/Home/Home';
import Following from '../component/pages/Followings';
import Accord from '../component/pages/Followings/Accord/Accord'
import Crv from '../component/pages/Followings/Crv/Crv';
import Civic from '../component/pages/Followings/Civic/Civic';
import Hrv from '../component/pages/Followings/Hrv/Hrv';





const publicRoutes =[
    {path: '/', component: Home},
    {path: '/following', component: Following},
    {path: '/following/accord', component: Accord},
    {path: '/following/crv', component: Crv},
    {path: '/following/civic', component: Civic},
    {path: '/following/hrv', component: Hrv},

 

]

const privateRoutes=[

]

export {privateRoutes, publicRoutes}