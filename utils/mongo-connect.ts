import { connect, connection } from "mongoose"
import { MONGOOSE_STRING } from '../pages/config/constants/mongoose.constant';


const connectionObject = {
    isConnected: false,
};

export const mongooseConnect = async () => {

    if (connectionObject.isConnected) return;

    const dataBase = await connect(MONGOOSE_STRING);

    connectionObject.isConnected = !!dataBase.connections[0].readyState;
    console.log(dataBase.connection.db.databaseName);
}

connection.on("connected", () => {
    console.log('Database Connected!');
});

connection.on("error", (error) => {
    console.log(`Database error:`,error);
});