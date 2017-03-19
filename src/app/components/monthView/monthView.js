import h from 'react-hyperscript';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Table, FormControl } from 'react-bootstrap';
import { Day } from '../dayView/day';
import { Month } from './month';


class MonthView extends React.Component {
  constructor(props) {
    super(props);
    debugger;
  }
  render() {
    debugger;
    return (
            h('.month', [
              h(Table, { striped: true, bordered: true, condensed: true, hover: true }, [
                h('thead', [
                  h('tr', [
                    h('th', { width: '50px' }, 'Date'),
                    h('th', { width: '50px' }, 'Day'),
                    h('th', { width: '50px' }, 'Start'),
                    h('th', { width: '50px' }, 'End'),
                    h('th', 'Total'),
                  ]),
                ]),
                h('tbody', [this.props.Days.map(obj =>
                        h('tr', [
                          h('td', obj.day.dateToString),
                          h('td', obj.day.dayName),
                          h('td', [
                            h(FormControl, { type: 'time', defaultValue: '08:00', bsSize: 'md' }),
                          ]),
                          h('td', [
                            h(FormControl, { type: 'time', defaultValue: '17:00', bsSize: 'md' }),
                          ]),
                          h('td', '9:00'),
                        ])),
                    ]),
              ]),
            ])
        );
  }
}

MonthView.propTypes = {
  Days: PropTypes.arrayOf(Day),
  Month: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    Month: state.data.Month[0],
    Days: state.data.Month[0].Days,
  };
};

export default connect(mapStateToProps)(MonthView);
