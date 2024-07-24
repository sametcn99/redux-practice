import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * Represents a single todo item.
 * @typedef {Object} Todo
 * @property {number} id - Unique identifier for the todo item.
 * @property {string} text - Description of the todo item.
 * @property {boolean} completed - Status of the todo item, true if completed.
 */
type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

/**
 * Represents the state structure for todos in the Redux store.
 * @typedef {Object} TodoState
 * @property {Todo[]} list - Array of todo items.
 */
type TodoState = {
  list: Todo[];
};

/**
 * The initial state of the todo list in the Redux store.
 * @type {TodoState}
 */
const initialState: TodoState = {
  list: [],
};

/**
 * Slice for handling todo-related actions and state changes.
 */
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    /**
     * Adds a new todo item to the list.
     * @param {TodoState} state - The current state of the todo list.
     * @param {PayloadAction<Todo>} action - The action payload containing the new todo item.
     */
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.list.push(action.payload);
    },

    /**
     * Removes a todo item from the list by its id.
     * @param {TodoState} state - The current state of the todo list.
     * @param {PayloadAction<number>} action - The action payload containing the id of the todo to be removed.
     */
    removeTodo: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },

    /**
     * Toggles the 'completed' status of a todo item by its id.
     * @param {TodoState} state - The current state of the todo list.
     * @param {PayloadAction<number>} action - The action payload containing the id of the todo whose 'completed' status should be toggled.
     */
    toggleComplete: (state, action: PayloadAction<number>) => {
      const todo = state.list.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;
