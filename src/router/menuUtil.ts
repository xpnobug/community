import { clearMenuItem } from "@ant-design-vue/pro-layout";
import { useRouter } from 'vue-router';

const formatRelativePath = (routes, breadcrumb, parent) => {
    return routes.map((route) => {
        const hasRelativePath = route.path.startsWith("/");
        if (!hasRelativePath) {
            if (parent) {
                route.path = `${parent.path || ""}/${route.path}`;
            } else {
                route.path = `/${route.path}`;
            }
        }
        route.path = route.path.replace("//", "/");
        if (route.children && route.children.length > 0) {
            route.children = formatRelativePath(route.children, breadcrumb, route);
        }
        breadcrumb[`${route.path}`] = route;
        return route;
    });
};

const getMenuData = () => {
    const router = useRouter();
    const routes = clearMenuItem(router.getRoutes());
    const childrenRoute = routes.find((route) => route.path === "/admin");
    const breadcrumb = {};
    return {
        menuData: formatRelativePath((childrenRoute == null ? void 0 : childrenRoute.children) || [], breadcrumb),
        breadcrumb
    };
};

export default getMenuData;
