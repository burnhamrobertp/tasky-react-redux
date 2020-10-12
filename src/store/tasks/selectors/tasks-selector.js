import { createSelector } from '@reduxjs/toolkit'

const getTasks = state => state.tasks.order

const tasksSelector = createSelector([getTasks], tasks => tasks)

export default tasksSelector;
