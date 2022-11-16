 
import React, { useState, useEffect, useContext, useReducer } from 'react'; 
import ReactDOM from "react-dom"; 
import Store from "./context";
import reducer from "./reducer"; 
import { usePersistedContext, usePersistedReducer } from "./usePersist";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Bookmark from "react-bookmark";   
import PropTypes from 'prop-types';
const href_bookmark_url = window.location.href;

  
export default function BookmarkForm() {
    const globalStore = usePersistedContext(useContext(Store), "state");

  // `todos` will be a state manager to manage state.
    const [state, dispatch] = usePersistedReducer(
        useReducer(reducer, globalStore),
        "state" // The localStorage key
    );

    return (
        <div className="bookmark-form-container">
            <Store.Provider value={{ state, dispatch }}>
                <TodoForm />
                {/* <TodoList /> */}
                {/* <Bookmark
                    className="coolClass"
                    href="/cool/path"
                    title="My Cool Website"
                /> */}
            </Store.Provider>
        </div>
    );
};