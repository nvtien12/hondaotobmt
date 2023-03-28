import Home from '../component/pages/Home/Home';

import Accord from '../component/pages/Followings/Accord/Accord'
import Crv from '../component/pages/Followings/Crv/Crv';
import Civic from '../component/pages/Followings/Civic/Civic';
import Hrv from '../component/pages/Followings/Hrv/Hrv';
import City from '../component/pages/Followings/City/City';
import CivicR from '../component/pages/Followings/Civic Type R/CivicR';
import Following from '../component/pages/Followings/Following';





const publicRoutes =[
    {path: '/', component: Home},
   {path: '/following', component: Following},
    {path: '/following/civicr', component: CivicR},
    {path: '/following/accord', component: Accord},
    {path: '/following/crv', component: Crv},
    {path: '/following/civic', component: Civic},
    {path: '/following/hrv', component: Hrv},
    {path: '/following/city', component: City},
 

]

const privateRoutes=[

]

export {privateRoutes, publicRoutes}