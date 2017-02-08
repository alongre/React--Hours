import h from 'react-hyperscript';
import { Form, FormGroup, Label, FormControl, ControlLabel } from 'react-bootstrap';


export const Hours = () => {
  return  (
    h(FormGroup, [
      h(ControlLabel, {'bsStyle': 'primary'}, ['Start']),
      h(Label,' '),
      h(FormControl, { type: 'time', defaultValue: '08:00'}),
      h(Label,' '),
      h(Label,'End:'),
      h(Label,' '),
      h(FormControl, { type: 'time', defaultValue: '17:00'})
  ]));
};
