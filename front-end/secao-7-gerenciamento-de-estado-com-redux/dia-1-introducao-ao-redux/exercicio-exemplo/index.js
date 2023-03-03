import { legacy_createStore as creteStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

// 1 - criando reducer com estado inicial
const INITIAL_STATE = { count: 0 };

const reducer = (state = INITIAL_STATE, action) => {
    if (action.type === "INCREMENT_COUNTER") {
        return { count: state.count + 1 };
    }
    return state;
};

// 2 - criando a store com redux dev tools
const store = creteStore(reducer, composeWithDevTools());

// 3- - criando a action
const action = { type: "INCREMENT_COUNTER" };

// 4 - disparando a nossa action
const incrementButton = document.querySelector("button");
incrementButton.addEventListener("click", () => {
    store.dispatch(action);
});

// 5 - lendo as alterações do estado e atualizando na tela (atualizando o html automaticamente)
store.subscribe(() => {
    const globalState = store.getState();

    const counterElement = document.querySelector("h2");
    counterElement.innerHTML = globalState.count;

});