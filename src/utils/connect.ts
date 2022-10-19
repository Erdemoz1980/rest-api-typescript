import mongoose from "mongoose";
import config from 'config';


const connect = async () => {
  const dbUri = config.get<string>('dbUri');
  try {
    const conn = await mongoose.connect(dbUri);
    console.log(`MongoDb is connected @ ${conn.connection.host}`)
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connect;