import h from 'react-hyperscript';

export default const Hours = () => {
    return h('h6','Start',[
      h('input', { type:text }),
      h('h6','End',[
        h('input', { type:text }),
        ])
      ])
};
