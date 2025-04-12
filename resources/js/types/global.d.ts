import { AxiosInstance } from 'axios';
import { route as ziggyRoute } from 'ziggy-js';

declare global {
    interface Window {
        axios: AxiosInstance;
        scrollTimeout:ReturnType<typeof setTimeout>
    }

    var route: typeof ziggyRoute;
}


