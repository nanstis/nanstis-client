import type { Component, FunctionalComponent, HTMLAttributes, VNodeProps } from "vue"

interface Route {
    name: string;
    path: string;
    component: Component;
    icon?: FunctionalComponent<HTMLAttributes & VNodeProps> | string
    // current: boolean;
}

export type { Route }

