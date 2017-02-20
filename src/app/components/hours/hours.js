import h from 'react-hyperscript';
import { PropTypes } from 'react';
import { Form, FormGroup, Label, FormControl, Accordion, Panel, Col, Row, Button, ButtonGroup, Checkbox } from 'react-bootstrap';
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
                h(Label, { className: 'label_transparent' }, ' '),
                h(FormGroup, { controlId: '2' }, [
                  h(Col, [
                    h(Label, { bsStyle: 'primary', className: 'labels' }, 'End:'),
                  ]),
                  h(Col, [
                    h(FormControl, { type: 'time', defaultValue: shift.End, bsSize: 'md' }),
                  ]),
                ]),
                h(Label, { className: 'label_transparent' }, ' '),
                h(FormGroup, { controlId: '3' }, [
                  h(Col, [
                    h(Label, { bsStyle: 'primary', className: 'labels' }, 'Comments:'),
                  ]),
                  h(Col, [
                    h(FormControl, { type: 'text', label: 'Comments', bsSize: 'lg' }),
                  ]),
                ]),
              ]),
            ]),
          ])
        )]),
        h(ButtonGroup, [
          h(Button, { className: 'buttonAdd' }, '+'),
          h(Button, { className: 'buttonAdd', disabled: true }, '-'),
        ]),
      ]),
    ]));
};

Hours.propTypes = {
  Shift: PropTypes.arrayOf(PropTypes.shape({
    Start: PropTypes.string.isRequired,
    End: PropTypes.string.isRequired,
  }).isRequired),
};
