const mongoose = require('mongoose')


const judokaSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    championnat_du_monde: {
        type: Number,
        required: true
    },
    olympics: {
        type: Number,
        required: true
    }
    
},
{
    timestamp:{ currentTime: () => Math.floor(Date.now() / 1000) } 
})


const Judoka = mongoose.model('judoka', judokaSchema);


module.exports = Judoka;