let React = require('react');
let ReactDOM = require('react-dom');
let TestUtils = require('react-addons-test-utils');
let expect = require('expect');
let $ = require('jquery');

let TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should call onSearch with entered input text', () => {
    let searchText = 'Dog';
    let spy = expect.createSpy();
    let todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(false, 'Dog');
  });

  it('should call onSearch with proper checked value', () => {
    let showCompleted = true;
    let spy = expect.createSpy();
    let todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.refs.showCompleted.checked = showCompleted;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(showCompleted, '');
  });
});
