import h from 'react-hyperscript';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Table, FormControl, Checkbox, Label, Pager } from 'react-bootstrap';

import { Day } from '../dayView/day';
import './monthView.scss';


class MonthView extends React.Component {
  constructor(props) {
    super(props);
    this.grayOffDays = this.grayOffDays.bind(this);
    debugger;
  }
  render() {
    debugger;
    return (
            h('.month', [
              h(Table, { striped: false, bordered: true, condensed: true, hover: false }, [
                h('thead', { className: 'table-title' }, [
                  h('tr', [
                    h('th', { width: '50px' }, 'Date'),
                    h('th', { width: '50px' }, 'Day'),
                    h('th', { width: '50px' }, 'Start'),
                    h('th', { width: '50px' }, 'End'),
                    h('th', { width: '50px' }, 'Start'),
                    h('th', { width: '50px' }, 'End'),
                    h('th', { width: '50px' }, 'Start'),
                    h('th', { width: '50px' }, 'End'),
                    h('th', { width: '350px' }, 'Comment'),
                    h('th', 'Total'),
                  ]),
                ]),
                h('tbody', [this.props.Days.map(obj =>
                        h('tr', { className: this.grayOffDays(obj.day) }, [
                          h('td', [
                            h(Checkbox, [
                              h(Label, { className: 'Label' }, obj.day.dateToString),
                            ]),
                          ]),
                          h('td', [
                            h(Label, { className: 'Label' }, obj.day.dayName),
                          ]),
                          h('td', [
                            h(FormControl, { type: 'time', defaultValue: `${obj.day.Shifts[0].start}`, bsSize: 'md', disabled: !obj.day.isWorkingDay }),
                          ]),
                          h('td', [
                            h(FormControl, { type: 'time', defaultValue: `${obj.day.Shifts[0].end}`, bsSize: 'md', disabled: !obj.day.isWorkingDay }),
                          ]),
                          h('td', [
                            h(FormControl, { type: 'time', defaultValue: '', bsSize: 'md', disabled: !obj.day.isWorkingDay }),
                          ]),
                          h('td', [
                            h(FormControl, { type: 'time', defaultValue: '', bsSize: 'md', disabled: !obj.day.isWorkingDay }),
                          ]),
                          h('td', [
                            h(FormControl, { type: 'time', defaultValue: '', bsSize: 'md', disabled: !obj.day.isWorkingDay }),
                          ]),
                          h('td', [
                            h(FormControl, { type: 'time', defaultValue: '', bsSize: 'md', disabled: !obj.day.isWorkingDay }),
                          ]),
                          h('td', [
                            h(FormControl, { type: 'input', bsSize: 'md', disabled: !obj.day.isWorkingDay }),
                          ]),
                          h('td', '9:00'),
                        ])),
                    ]),
              ]),
            ])
        );
  }
  grayOffDays(day) {
    if (day.isWorkingDay) {
      return 'table-row-work-days';
    }
    return 'table-row-off-days';
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
