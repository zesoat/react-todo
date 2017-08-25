let expect = require('expect');
let df = require('deep-freeze-strict');

let reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      let action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      let res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      let action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };
      let res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      let action = {
        type: 'ADD_TODO',
        text: 'Walk the dog'
      };
      let res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle todo', () => {
      let todos = [
        {
          id: '1',
          text: 'Walk the dog',
          completed: false,
          createdAt: 123,
          completedAt: undefined
        }, {
          id: '2',
          text: 'Walk the cat',
          completed: true,
          createdAt: 124,
          completedAt: 457
        }
      ];
      let action = {
        type: 'TOGGLE_TODO',
        id: '2'
      };

      let res = reducers.todosReducer(df(todos), df(action));

      expect(res.length).toEqual(2);
      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
      expect(res[1].completed).toEqual(false);
      expect(res[1].completedAt).toEqual(undefined);
    });
  });
});
