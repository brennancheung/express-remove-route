import type { Application, IRoute } from 'express';

declare function removeRoute(app: Application, path: string, method?: string): boolean;

declare namespace removeRoute {
    export function findRoute(app: Application, path: string): Array<IRoute>;
}

export = removeRoute;