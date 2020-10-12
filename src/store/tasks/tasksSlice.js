import { createSlice } from '@reduxjs/toolkit'

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    order: [],
    lookup: {},
  },
  reducers: {
    add: (state, action) => {
      const { task } = action.payload
      state.order.push(task.id)
      state.lookup[task.id] = task
    },
    remove: (state, action) => {
      const { id } = action.payload;
      state.order = state.order.filter(taskId => taskId !== id)
      delete state.lookup[id]
    },
    complete: (state, action) => {
      const { id, complete } = action.payload;
      state.lookup[id].complete = complete
    },
  },
})

export default tasksSlice
