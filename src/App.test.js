import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Items from './Items';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<Items />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly when there are only one item', () => {
  const items = ['one','Two'];
  const tree = renderer.create(<Items items={items} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it.skip('renders correctly when there are multiple items', () => {
  const items = ['one', 'two', 'three'];
  const tree = renderer.create(<Items />).toJSON();
  expect(tree).toMatchSnapshot();
});
