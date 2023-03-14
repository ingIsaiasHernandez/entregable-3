const Tasks = require('../models/task.models');
// Importing the 'Task' model from the '../models/task.models' file to use it in this file

class TasksServices{
    // A class that contains functions that can be used for interacting with the 'Task' model.

    static async create(newTask){
        // A function that creates a new task by passing a new task object (newTask) as an argument.
        
        try {
            const result = await Tasks.create(newTask);
            // 'Tasks.create()' function creates an instance in the 'Task' model with the 'newTask' object.
            return result;
            // Returns the created task to the calling function.
        } catch (error) {
            throw error;
            // If there is any error while creating the task, then it throws the error.
        }
    }

    static async create(taskId){
        // A function that updates a specific task by passing its ID (taskId) as an argument.
        
        try {
            const result = await Tasks.update(taskId);
            // 'Tasks.update()' function updates a specific instance in the 'Task' model based on the provided ID.
            return result;
            // Returns the updated task to the calling function.
        } catch (error) {
            throw error;
            // If there is any error while updating the task, then it throws the error.
        }
    }

    static async create(taskId){
        // A function that deletes a specific task by passing its ID (taskId) as an argument.
        try {
            const result = await Tasks.delete(taskId);
            // 'Tasks.delete()' function deletes a specific instance in the 'Task' model based on the provided ID.
            return result;
            // Returns the deleted task to the calling function.
        } catch (error) {
            throw error;
            // If there is any error while deleting the task, then it throws the error.
        }
    }
   }

 module.exports = TasksServices;
 // Exporting the 'TasksServices' class so that other files can import and use its functions.
