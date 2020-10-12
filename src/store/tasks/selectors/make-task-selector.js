import { createSelector } from '@reduxjs/toolkit'

const getTask = (state, props) => state.tasks.lookup[props.id]

const makeTaskSelector = () => createSelector([getTask], task => task);

export default makeTaskSelector;
