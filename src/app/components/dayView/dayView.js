
// import h from 'react-hyperscript';
// import React, { PropTypes } from 'react';
// import * as actions from '../../../data/actions';
// import { connect } from 'react-redux';
// import { Form, FormGroup, Label, FormControl, Accordion, Panel, Col, Row, Button, ButtonGroup, Checkbox } from 'react-bootstrap';
// import './day.scss';

// class Day extends React.Component {
//   constructor(props) {
//     super(props);
//     this.addShift = this.addShift.bind(this);
//     this.random = this.random.bind(this);
//    // let Shift = this.props.Shift;
//     //let shift = this.props.Shift;
//     debugger;
  

//   }
     
  
  
//   render() {
//     return (
//       h(Accordion, [
//         h(Panel, { bsStyle: 'success', header: '13.2.2017: 9:05 hours', eventKey: '1' }, [
//           h('.time', [this.props.Shifts.map(shift =>
//             h(Form, { inline: true, key: shift.id }, [
//               h(Row, [
//                 h(Col, { sm: 12 }, [
//                   h(Checkbox),
//                   h(FormGroup, { controlId: '1' }, [
//                     h(Col, [
//                       h(Label, { bsStyle: 'primary', className: 'labels' }, 'Start:'),
//                     ]),
//                     h(Col, [
//                       h(FormControl, { type: 'time', defaultValue: shift.Start, bsSize: 'md' }),
//                     ]),
//                   ]),
//                   h(Label, { className: 'label_transparent' }, ' '),
//                   h(FormGroup, { controlId: '2' }, [
//                     h(Col, [
//                       h(Label, { bsStyle: 'primary', className: 'labels' }, 'End:'),
//                     ]),
//                     h(Col, [
//                       h(FormControl, { type: 'time', defaultValue: shift.End, bsSize: 'md' }),
//                     ]),
//                   ]),
//                   h(Label, { className: 'label_transparent' }, ' '),
//                   h(FormGroup, { controlId: '3' }, [
//                     h(Col, [
//                       h(Label, { bsStyle: 'primary', className: 'labels' }, 'Comments:'),
//                     ]),
//                     h(Col, [
//                       h(FormControl, { type: 'text', label: 'Comments', bsSize: 'lg' }),
//                     ]),
//                   ]),
//                 ]),
//               ]),
//             ])
//           )]),
//           h(ButtonGroup, [
//             h(Button, { className: 'buttonAdd', onClick: this.addShift }, '+'),
//             h(Button, { className: 'buttonAdd', disabled: true }, '-'),
//           ]),
//         ]),
//       ]));
//   };

//   addShift(){
//     debugger;
//     //this.props.Shift.push()

//     this.props.AddShift({ Start: '08:00', End: '13:00', id: this.random() });
//   }
//   random() {
//     return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
//   }
// };

// Day.propTypes = {
//   Shift: PropTypes.arrayOf(PropTypes.shape({
//     Start: PropTypes.string.isRequired,
//     End: PropTypes.string.isRequired,
//   }).isRequired),

//   AddShift: PropTypes.func.isRequired,
// };


// const mapStateToProps = (state) => {
//   // debugger;
//   // return {
//   //   Shift: state.data.Shifts,
//   // }
// };


// const mapDispatchToProps =  ({
//   AddShift: actions.addShift
// })

// export default connect(mapStateToProps,mapDispatchToProps)(Day);