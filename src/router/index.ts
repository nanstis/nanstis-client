import { Route } from '@assets/models/route';
import {
    HomeIcon,
    DocumentTextIcon,
} from '@heroicons/vue/24/outline'

const resolveComponent = (component: string) => {
    return () => import(`@Views/${component}.vue`)
}

export const routes: Route[] = [
    {
        path: '/',
        name: 'Completions',
        icon: HomeIcon,
        component: resolveComponent('CompletionPage'),
    },
    {
        path: '/audio',
        name: 'Transcriptions',
        icon: DocumentTextIcon,
        component: resolveComponent('TranscriptionPage'),
    },
];