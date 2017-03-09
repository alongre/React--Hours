'use strict';
import h from 'react-hyperscript';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
 import { Table, FormControl } from 'react-bootstrap';
import Day from '../day/day';


 var products = [{
      id: 1,
      name: "Product1",
      price: 120
  }, {
      id: 2,
      name: "Product2",
      price: 80
  }];


class Month extends React.Component {
    constructor(props) {
        super(props);
        this.getDaysInMonth = this.getDaysInMonth.bind(this);
        debugger;

    }
   
    getDaysInMonth() {
        debugger;
        const date = new Date();
        const month = date.getMonth();
        const year = date.getFullYear();
        const days = new Date(year,month + 1,0).getDate();
        var array = new Array(days);
        var index = 1;
        for (var i =0 ;i < days ; i++){
            array[i] = (i+1) + '.' + (month+1) + "." + year; 
        }
        // array.forEach(function(element) {
            
        //     element = (index++) + '.' + month + "." + year; 
        // }, this);
        debugger;
        return array;

    }
    render() {
        return (
            h('.month',[
               h(Table,{ striped: true, bordered: true, condensed:true, hover: true}, [
                   h('thead', [
                       h('tr', [
                          h('th' ,{ width: '50px'}, 'Date'),
                          h('th', { width: '50px'}, 'Start'),
                          h('th', { width: '50px'}, 'End'),
                          h('th', 'Total'),
                       ])
                    ]),
                    h('tbody',[ this.getDaysInMonth().map(day=>
                        h('tr', [
                            h('td', day),
                            h('td', [
                               h(FormControl, { type: 'time', defaultValue: '08:00', bsSize: 'md' }),
                               ]),
                            h('td', [
                                h(FormControl, { type: 'time', defaultValue: '17:00', bsSize: 'md' }),
                            ]),
                            h('td', '9:00'),
                        ]))
                    ])
                   ])
               ])     
        )
    };
}

Month.propTypes = {
    Days: PropTypes.arrayOf(Day).isRequired,
}

const mapStateToProps = (state, ownProps) => {
    debugger;
    return {
        Days: state.data.Days,
    }
}

export default connect(mapStateToProps)(Month);
