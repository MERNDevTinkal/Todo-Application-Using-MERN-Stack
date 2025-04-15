import TodoModel from "../models/todo.js";

export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const todo = new TodoModel({ title, description });
    await todo.save();

    return res.status(201).json({
      success: true,
      message: "Todo created",
      todo,
    });
  } catch (error) {
    console.log("Error in createTodo", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getAllTodos = async (req, res) => {
  try {
    const todos = await TodoModel.find();
    // console.log(todos);
    return res.status(200).json({
      success: true,
      todos,
    });
  } catch (error) {
    console.log("Error in getAllTodos", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const todoId = req.params.todoId.trim();
   // const todoId = req.params.todoId;
    const { title, description } = req.body;

    const todo = await TodoModel.findByIdAndUpdate(
      todoId,
      { title, description },
      { new: true }
    );

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Todo Updated Successfully",
      todo,
    });
  } catch (error) {
    console.log("Error in update todosID", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


export const deleteTodo = async (req, res) => {
  try {
    const todoID = req.params.todoId;

    const todo = await TodoModel.findByIdAndDelete(todoID); 

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Todo deleted",
    });

  } catch (error) {
    console.log("Error in delete todo", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
