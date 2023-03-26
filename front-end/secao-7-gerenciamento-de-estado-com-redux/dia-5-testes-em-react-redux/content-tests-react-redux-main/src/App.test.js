import React from 'react'
import { Provider } from 'react-redux';
import { combineReducers, legacy_createStore as createStore } from 'redux';
import { render, screen } from '@testing-library/react';

import App from '../App';
import counterReducer from '../src/redux/reducers/counterReducer';

const renderWithRedux = (
    component,
    {
        initialState,
        store = createStore(combineReducers({ counterReducer }), initialState)
    } = {}) => ({
        ...render(<Provider store={store}>{component}</Provider>),
        store
    })


test("A página deve renderizar dois botões e o número 0", () => {
    renderWithRedux(<App />);

    const buttons = screen.getAllByRole('button');

    expect(buttons).toHaveLength(2);
    expect(screen.getByText("0")).toBeInTheDocument();
})




