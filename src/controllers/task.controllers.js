const TasksServices = require('../services/task.services.js');

const createTask = async (req,res) => {
    try {
        const newTask = req.body;
        // We use taskservices to create data by passing request data to it
        const post = await TasksServices.create(newTask);
        // Return result
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json(error); 
    }
};



// This helps find all the tasks which are associated with specific userID
const getTaskWithUser = async (req,res) => {
    try {
        const {userId} = req.params;   //extracting the userId parameter
        const getTasksWithUser = await TasksServices.findAll({ where: { userId } });
        res.json(getTasksWithUser); //returning list of tasks associated with a particular user id to client
    } catch (error) {
        res.status(400).json(error);  //returning error status if any error occurs
    }
};

const updateTask = async (req,res) => {
    try {
        const {taskId} = req.params; //get taskId parameter from the request parameter
        const updateTask = await TasksServices.update({where: {taskId}}); //updating matching taskId accordingly.
        res.json(updateTask); //sending response back to the client
    } catch (error) {
        res.status(400).json(error); //returning error status if any error occurs
    }
};


const deleteTask = async (req,res) => {
    try {
        const {taskId} = req.params; //get taskID paramter from request params into taskId variable
        const deleteTask = await TasksServices.delete({where: {taskId}}); //delete matching taskId accordingly.
        res.json(deleteTask);
        // sending response back to the client that task was deleted successfully or not as we have maintained error handling too.
    } catch (error) {
        res.status(400).json(error); //returning error status if any error occurs
    }
};





module.exports = {
    createTask,
    getTaskWithUser,
    updateTask,
    deleteTask
};