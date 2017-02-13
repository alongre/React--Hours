import h from 'react-hyperscript';
import { Hours } from '../hours/hours';

export const App = () => {
  return h('.app', [
    h('h1', 'React-Redux-Boilerplate'),
    h(Hours, {
      Shift: [
        { Start: '08:00', End: '13:00', id: 1 },
        { Start: '14:00', End: '18:00', id: 2 },
      ],
    }),
  ]);
};

