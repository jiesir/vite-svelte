
import basicRoutes from 'router-inject';

const routeObj: any = {
  '/': basicRoutes[0].component
};

basicRoutes.forEach((ele: any) => {
  routeObj[ele.path] = ele.component;
});

export const routes = routeObj;