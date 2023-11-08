import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';
import vehicleRoutes from './routes/vehicles.routes.js';
import customerRoutes from './routes/customers.routes.js';
import servicesRoutes from './routes/services.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", vehicleRoutes);
app.use("/api", customerRoutes);
app.use("/api", servicesRoutes);

export default app;