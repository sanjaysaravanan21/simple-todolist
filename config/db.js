import mongoose from 'mongoose';

// Function to connect to the database using async/await
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Connection Error: ${error.message}`);
        // Exit process with failure
        process.exit(1);
    }
};

export default connectDB;
