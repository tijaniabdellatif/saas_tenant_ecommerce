import { router } from "@inertiajs/react";

export function useTransition() {

    const navigateWithTransition = (
        destination: string,
        options?: {
            method?: 'get' | 'post' | 'put' | 'patch' | 'delete';
            data?: Record<string, any>;
            replace?: boolean;
            preserveState?: boolean | ((props: Record<string, any>) => boolean);
            preserveScroll?: boolean;
            only?: string[];
            headers?: Record<string, string>;
            onCancelToken?: (cancelToken: any) => void;
            onBefore?: () => void;
            onStart?: () => void;
            onProgress?: (progress: any) => void;
            onFinish?: () => void;
            onCancel?: () => void;
            onSuccess?: (page: any) => void | Promise<any>;
            onError?: (errors: Record<string, string>) => void | Promise<any>;
        }
    ) => {
        const transitionUrl = `/transition?destination=${encodeURIComponent(destination)}`;
        router.visit(transitionUrl, {
            ...options,
            
        });
    };

    return { navigateWithTransition };
}