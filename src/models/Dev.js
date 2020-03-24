//Inportar o mongoose e as dependências do objeto
const { Schema, model } = require('mongoose');

//Criar a entidade
const DevSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    user: {
        type: String,
        required: true
    },

    bio: String,

    avatar: {
        type: String,
        required: true
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev'
    }],

    deslikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev'
    }],


}, {
    timestamps: true
});

//O timestamps criar automaticamente uma culunas em cada registro no banco: createdAt(armazena a hora da criação) e updateAt(armazena a data da ultima atualização)
//Exporta o model() com o nome do model, no caso, Dev + o model criado, no caso o DevSchema
module.exports = model('Dev', DevSchema);