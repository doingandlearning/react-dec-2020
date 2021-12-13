import React from 'react'

// Create a "context" that a parent component can populate, and a child component can access.
export const MyReduxStoreContext = React.createContext({})

// Create a "provider", this is like a factory that creates and populates a "context".
export const MyReduxStoreProvider = MyReduxStoreContext.Provider
