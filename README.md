# Todo List Application

The Todo List application allows users to manage their tasks by adding, editing, marking as completed, and deleting them.

## How to Run

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>

   ```

2. Navigate to the project directory:
   cd todo-list

3. Install dependencies:
   npm install

4. Start the development server:
   npm start

5. Open http://localhost:3000 in your browser.

# Folder Structure

todo-list/
│
├── src/
│ ├── components/
│ │ ├── TodoList.js
│ │ └── ...
│ ├── redux/
│ │ ├── store.js
│ │ ├── todoSlice.js
│ │ └── ...
│ ├── App.js
│ ├── index.js
│ └── ...
│
└── README.md

# Interacting with the Application

- To add a new task, enter the task title and description in the input fields and click "Add Todo."
- To edit a task, click the "Edit" button next to the task, make your changes, and click "Save."
- To mark a task as completed, click the checkbox next to the task.
- To delete a task, click the "Delete" button next to the task.
- To clear all completed tasks, click the "Clear Completed" button.
