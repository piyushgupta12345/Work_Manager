import mongoose from "mongoose"
import { User } from "@/models/user";

export const connectdb = async () => {
    try {
        const {connection} = await mongoose.connect(process.env.MONGO_DB_URL,{
            dbName:"work_manager",
            
        })

        // testing
        // const papa =  new User({
        //     name:"Piyush",
        //     email:"agvj@gmail.com",
        //     password:"abcdef",
        //     telephone:736
        // })

        // await papa.save()
        // console.log(papa)
        
        console.log("Db connected successfully");
        console.log(connection)
        console.log(connection.host)

    } catch (error) {
        console.log("failed to connect with database")
        console.log(error)
    }
}