console.log(React);
console.log(ReactDOM);

const state = `Hello`;

const h1 = React.createElement('h1', {}, `${state}, React!`);
const root = document.querySelector('#root');
ReactDOM.render(h1, root);

const component = (data) => {
    const h2 = React.createElement('h2', {}, 'wefwefwe')
    const p = React.createElement('p', {}, 'regewrgegergwe')

    return React.createElement('div', {}, `Hello, ${data.heading}`, h2, p);
}

const elem = React.createElement(component, {heading: 'Text'}, `${state}, React!`);
const elem2 = React.createElement(component, {heading: 'React'}, `${state}, React!`);
const elem3 = React.createElement(component, {heading: 'Ann'}, `${state}, React!`);
const elem4 = React.createElement(component, {heading: 'Tom'}, `${state}, React!`);
const elem5 = React.createElement(component, {heading: 'React'}, `${state}, React!`);

const fragment = React.createElement('div', {}, elem, elem2, elem3, elem4, elem5);



ReactDOM.render(fragment, root);

