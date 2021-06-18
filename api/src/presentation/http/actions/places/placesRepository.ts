import {connect} from "../../../../config/database/database";

async function connection(){
     return await connect();
}

export async function getAll(){
    return connection()
        .then(
            (connection)=> {
                return connection.query('select * from places');
        });
}
