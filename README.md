# Redux Learning Project

This project is an example application created to learn the Redux library.

## Technologies Used

- Redux Toolkit
- React Redux
- Redux Slices
- React
- TypeScript

## Project Structure

The project utilizes the fundamental principles of Redux, including store, actions, and reducers. Different state portions are organized into slices and combined into a single root reducer.

- `store.ts`: Configures the Redux store.
- `rootReducer.ts`: Defines the root reducer that combines all slices.
- `slices`: Contains individual slices for each feature.
  - `counterSlice`: Manages the counter.
  - `userSlice`: Stores user information.
  - `todoSlice`: Manages the todo list.
  - `searchSlice`: Holds state for the search feature.
  - `timeSlice`: Keeps track of time information.
  - `sortedSlice`: Used for sorting data.

## Learned Concepts

- Redux state management and data flow
- Usage of actions, reducers, and slices
- Simplified Redux usage with Redux Toolkit
- Integration of Redux with React
- Data access using selectors
- Memoization with Reselect
- Utilization of Redux DevTools

## Results

This project serves as a valuable resource for learning the fundamentals of Redux. It provides experience in modular state management, data flow control, the action/reducer pattern, and integration of Redux with React.
