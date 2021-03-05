const express = require('express');
const router = new express.Router();
const Project = require('../models/project');

router.post('/project', async (req, res) => {
    const project = new Project({
        ...req.body
    })

    try {
        await project.save()
        res.status(201).send(project)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/project', async (req, res) => {
    // res.status(200).send(req)
    const project = await Project.find({}).exec()
    try {
        res.status(200).send(project)
    } catch (error) {
        res.status(400).send(error)
    }
})


router.get('/project/:id', async (req, res) => {
    const _id = req.params.id
    console.log(req.params)

    try { 
        const project = await Project.findById(_id);
        if (!project) {
            res.status(404).send('who are u noob')
        }
        res.send(project)
    } catch (error) { 
        res.status(500).send('cannot found all projects')
    }
    
})

router.patch('/project/:id', async (req, res) => {
    const _id = req.params.id
    console.log(req.body)
    const updates = Object.keys(req.body)
    const allowedUpdates = ['topic', 'customTopic', 'progress', 'deadline', 'start'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update))
    if(!isValidOperation) {
        res.status(400).send({error: 'Ivalid keys are responce'})
    }


    try {
        const project = await Project.findById(_id);
        if (!project) {
            res.status(404).send('who are u noob')
        }
        updates.forEach(update => project[update] = req.body[update])
        await project.save()
        debugger;
        res.status(200).send(project)

    } catch {
        res.status(500).send('cannot found all projects')
    }
})

router.delete('/project/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const project = await Project.findByIdAndDelete(_id);

        if (!project) {
            res.status(404).send('who are u noob')
        }
        // debugger; 
        res.status(204).send(project)
    } catch {
        res.status(500).send('cannot found all projects')
    }
})

module.exports = router 