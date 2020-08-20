export interface Props {}
export  interface RoutesInterface {
  path: string;
  component: any;
  id: string;
  authenticated: boolean;
  allowedRoles?: string[];
  showLayout?: boolean;
}
