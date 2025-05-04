const  express =require( 'express');
const  dotenv = require( 'dotenv');
import vehicleRoutes from './routes/vehicle.routes';
import healthRoutes from './routes/health.route';
import { swaggerDocs } from './docs/swagger';
import { errorHandler } from './middlewares/errorHandler';

dotenv.config();
const app = express();
app.use(express.json());


app.use('/', healthRoutes); // 👈 Add this line

app.use('/api/vehicles', vehicleRoutes);
app.use('/api-docs', ...swaggerDocs);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
