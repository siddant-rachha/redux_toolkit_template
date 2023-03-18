
# How to setup Redux Toolkit in project




## Reference

 - [Redux Toolkit](https://redux-toolkit.js.org/tutorials/quick-start)


## Install Redux Toolkit and React-Redux

Start by installing packages, see reference links\
npm install @reduxjs/toolkit react-redux


## Create a Redux Store

-create a store folder, with index.js and configure store with hook configureStore


## Provide the Redux Store to React

-using Provider component provide store in index.js file


## Create a Redux State Slice

-create a state slice in store folder like counterSlice.js and add reducers, actions are automatically create for provided reducers

## Add Slice Reducers to the Store

-configure the reducer in configureStore by importing reducers, can import and configure multiple reducers like counterSlice and 
alphabetSlice

-and then import the reducer in store and configure it


## Use Redux State and Actions in React Components

-import the actions from specific sliceStore to dispatch actions

-use useSelector to use the state slice name which is written in configureStore


# ASYNC REDUCERS

-the redux middleware thunk is prebuilt is redux toolkit

-create the slicestore same as above steps

## CREATE AN ACTION CREATORS 

-create a async dispatch functions which returns a functions in the same file below, like in thunkSlide.js

-do async tasks and dispatch the actions

## IMPORT ACTION CREATOR in React Components

-import the action creators in the component required and dispatch it








