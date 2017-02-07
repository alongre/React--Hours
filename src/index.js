import h from 'react-hyperscript';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import router from './routes';
import store from './store';

const rootComponent = h(Provider, { store }, router);
const rootElement = document.querySelector('#app-root');

render(rootComponent, rootElement);
