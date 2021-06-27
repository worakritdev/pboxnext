import chalk from "chalk";
import  mongoose, { connect } from "mongoose";

const connectDB = async () =>{
    try {
       const conn= await mongoose.connect(`${import.meta.env.VITE_MONGO_URI}`,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        })

        console.log(chalk.blue( `MONGODB Connected : ${conn.connection.host}`))
    } catch (error) {
        console.log(error);
        process.exit(1);
        
    }


        
}

export default connectDB