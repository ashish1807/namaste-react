const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'This is h1'),
    React.createElement('h2', { id: 'h31', 'value-abc': 'abc' }, 'This is h2'),
  ])
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);