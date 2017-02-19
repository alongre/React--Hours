import h from 'react-hyperscript';
import { PropTypes } from 'react';
import { Form, FormGroup, Label, FormControl, Accordion, Panel, Col, Row, Button, Checkbox } from 'react-bootstrap';
import './hours.scss';

export const Hours = ({ Shift }) => {
  return (
    h(Accordion, [
      h(Panel, { bsStyle: 'success', header: '13.2.2017: 9:05 hours', eventKey: '1' }, [
        h('.time', [Shift.map(shift =>
          h(Form, { inline: true, key: shift.id }, [
            h(Row, [
              h(Col, { sm: 12 }, [
                h(Checkbox),
                h(FormGroup, { controlId: '1' }, [
                  h(Col, [
                    h(Label, { bsStyle: 'primary', className: 'labels' }, 'Start:'),
                  ]),
                  h(Col, [
                    h(FormControl, { type: 'time', defaultValue: shift.Start, bsSize: 'md' }),
                  ]),
                ]),
                h(FormGroup, { controlId: '2' }, [
                  h(Col, { sm: 12 }, [
                    h(Label, { bsStyle: 'primary', className: 'labels' }, 'End:'),
                  ]),
                  h(Col, { sm: 12 }, [
                    h(FormControl, { type: 'time', defaultValue: shift.End, bsSize: 'md' }),
                  ]),
                ]),
              ]),
            ]),
          ])
        )]),
        h(Button, { className: 'buttonAdd' }, 'Add'),
      ]),
    ]));
};

Hours.propTypes = {
  Shift: PropTypes.arrayOf(PropTypes.shape({
    Start: PropTypes.string.isRequired,
    End: PropTypes.string.isRequired,
  }).isRequired),
};
