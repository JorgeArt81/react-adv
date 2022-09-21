interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent
    name: string;
    children?: Routes;
    data?: Data;
}
export declare type JSXComponent = () => JSX.Element;
export declare type Routes = Array<Route>;
export declare type Data = {
    [key: string | symbol]: any;
};