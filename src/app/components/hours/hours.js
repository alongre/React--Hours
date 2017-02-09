import h from 'react-hyperscript';
import { Form, FormGroup, Label, FormControl, ControlLabel } from 'react-bootstrap';
import './hours.scss';



export const Hours = () => {
  return  (
    h(Form,{ inline: true}, [
    h(FormGroup,{ bsSize:'sm'}, [
      h('h3', [
      h(Label, {bsStyle: 'primary'}, 'Start:'),
      h(Label, { className: 'empty_label'},' '),
      h(FormControl, { type: 'time', defaultValue: '08:00'}),
      h(Label, { className: 'empty_label'},' '),
      h(Label, {bsStyle: 'primary'}, 'End:'),
      h(FormControl, { type: 'time', defaultValue: '17:00'}),
      ]),
  ])
  ]));
};
