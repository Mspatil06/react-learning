import { createSlice } from '@reduxjs/toolkit'

const taskSlice = createSlice({

  name: 'tasks',

  initialState: {

    taskList: []

  },

  reducers: {

    addTask: (state, action) => {

      state.taskList.push({

        id: Date.now(),

        title: action.payload,

        completed: false

      })

    },

    toggleTask: (state, action) => {

      const task = state.taskList.find(

        task => task.id === action.payload

      )

      if (task) {

        task.completed = !task.completed

      }

    },

    deleteTask: (state, action) => {

      state.taskList = state.taskList.filter(

        task => task.id !== action.payload

      )

    }

  }

})

export const {

  addTask,

  toggleTask,

  deleteTask

} = taskSlice.actions

export default taskSlice.reducer
 