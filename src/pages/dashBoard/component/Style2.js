const React = require('react');
require('../styles/Cycle2.css');

function Cycle2() {
  return (
    React.createElement('div', { className: 'CycleApp' },
      React.createElement('div', { className: 'tainer' },
        React.createElement('h2', null, 'my App'),
        React.createElement('h3', null, 'shop product'),
        React.createElement('h3', null, 'about Us'),
        React.createElement('h3', null, 'Period calculator'),
        React.createElement('h3', null, 'sign in'),
        React.createElement('h3', null, 'Register')
      ),
      React.createElement('div', { className: 'cycle' }),
      React.createElement('div', { className: 'down' },
        React.createElement('h3', null, '1. WHEN DID YOUR LAST PERIOD START?'),
        React.createElement('h3', null, '2. HOW MANY DAYS DO YOUR LAST PERIOD last?'),
        React.createElement('h3', null, 'HOW LONG IS YOUR CYCLE?')
      ),
      React.createElement('div', { className: 'input' },
        React.createElement('input', { name: 'input', type: 'text', value: 'enter a message' }),
        React.createElement('input', { name: 'input2', type: 'text', value: 'enter message' }),
        React.createElement('input', { name: 'input3', type: 'text', value: 'enter message' })
      )
    )
  );
}

module.exports = Cycle2;
