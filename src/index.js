import app from "./app.js";
import { sequelize } from "./database/dataBase.js";


const main = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión a la base de datos establecida correctamente.')
        await sequelize.sync({force: false});
        app.listen(3001, () => console.log("server listening on port", 3001));
    } catch (error) {
        console.log('unable to connect to the database:', error) 
    }
}


main()