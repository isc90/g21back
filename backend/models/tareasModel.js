const mongoose = require('mongoose')

const tareaSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    texto: {
        type: String,
        required: [true, 'Por favor teclea una descripción a la Tarea']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Tarea', tareaSchema)