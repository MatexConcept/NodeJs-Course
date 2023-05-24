const express = require('express');
const router = express.Router()
const path = require('path');
const { getAllStudents, createNewStudent, updateStudent, deleteStudent } = require('../../controllers/studentController');



router.route('/')

.get(getAllStudents)


.post(createNewStudent)


.put(updateStudent)



.delete(deleteStudent)

router.route('/:id')
.get()

module.exports = router;