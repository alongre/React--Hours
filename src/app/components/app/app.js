import h from 'react-hyperscript';
import { Hours } from '../hours/hours'

export const App = () => {
  return h('.app', [
    h('h1', 'React-Redux-Boilerplate'),
    h(Hours),
  ]);
};
