module.exports = (app) => {
    const students = require('../controllers/student.controller')
    
    let router = require('express').Router()

    router.get('/', students.findAll)//get all student

    router.get('/edit-student/:id', students.findOne)//find just one

    router.post('/create-student', students.create)//create student

    router.put('/update-student/:id', students.update)//update student with id

    router.delete('/delete-student/:id', students.delete)//delete student with id

    app.use('/students', router)
}