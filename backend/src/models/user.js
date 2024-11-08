const Sequelize = require('sequelize')
import { sequelize }  from '../database/connectDB.js'

const report = sequelize.define("users", {
    id: { 
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    id_user: Sequelize.TEXT,
    rol: Sequelize.TEXT,
    token : Sequelize.TEXT,
    password : Sequelize.TEXT
});


export default  report