import React from "react";

// Store Context is the global context that is managed by reducers.

const Store = React.createContext({
  todos: [
    // Initial Data
    "Ask doctor about other treatment options",
    "Ask why recommending this treatment",
    "Will it reduce the risk of reoccurence?"
  ]
});

export default Store;
