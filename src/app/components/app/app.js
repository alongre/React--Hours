import h from 'react-hyperscript';
import React from 'react';
import MonthView from '../monthView/monthView';

export class App extends React.Component {
  render() {
    return h('.app', [
      h('h1', 'React-Hours'),
      h(MonthView),
    ]);
  };
};


// const mapStateToProps = (state) => {
//   console.log(state);
//   return {

//     Shift: state.data.shifts,
//   }
// }

// export default connect(mapStateToProps)(App)



