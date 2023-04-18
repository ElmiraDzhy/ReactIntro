console.log(React);
console.log(ReactDOM);

const h1 = React.createElement('h1', {}, 'Hello React!');


const root = document.querySelector('#root');

ReactDOM.render(h1, root);