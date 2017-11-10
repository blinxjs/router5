import element from 'virtual-element';
import { routeNode } from 'deku-router5';
import Inbox from './Inbox';
import Compose from './Compose';
import NotFound from './NotFound';

const components = {
    'inbox':   Inbox,
    'compose': Compose
};

const Main = {
    render({ props }) {
        const { route } = props;
        const segment = route ? route.name.split('.')[0] : undefined;

        return element(components[segment] || NotFound);
    }
};

export default routeNode('')(Main);
