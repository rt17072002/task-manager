const {createTask, getTasks, updateTask, deleteTask} = require('../controllers/taskController');

const router = require("express").Router();

router.get("/", getTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;