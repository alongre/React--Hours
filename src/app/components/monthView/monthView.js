import h from 'react-hyperscript';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Table, FormControl } from 'react-bootstrap';
import { Day } from '../dayView/day';
import { Month } from './month';


class MonthView extends React.Component {
  constructor(props) {
    super(props);
    this._month = this.props.Month;
    this.daysArray = this.props.Month._workDays;
    debugger;
  }
  render() {
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
                h('tbody', [this._month._workDays.map(day =>
                        h('tr', [
                          h('td', day.dateToString),
                          h('td', day.dayName),
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
  Month: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  debugger;
  return {
    Month: state.data.Month,
  };
};

export default connect(mapStateToProps)(MonthView);
