const express = require('express')
const router = express.Router()
const { getTareas, createTareas, updateTareas, deleteTareas } = require('../controllers/tareaControllers')

router.route('/').get(getTareas).post(createTareas)
//router.get('/', getTareas)
//router.post('/', createTareas)

router.route('/:id').delete(deleteTareas).put(updateTareas)
//router.put('/:id', updateTareas)
//router.delete('/:id', deleteTareas)

module.exports = router