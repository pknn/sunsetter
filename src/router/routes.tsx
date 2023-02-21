import {RouteObject} from "react-router-dom";
import Presenter from '../Presenter';
import Publisher from '../Publisher';
import ThankYou from '../ThankYou';

export const routesObjects: RouteObject[] = [
    {
        path: '/',
        element: <Presenter/>,
    },
    {
        path: '/send-love',
        element: <Publisher/>,
    },
    {
        path: '/thank-you',
        element: <ThankYou/>
    }
];
