import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('==================Connected succefully=========')
    } catch (error) {
        console.log('==Error=', error)
        throw new Error(error);
    }
};

export default connect;