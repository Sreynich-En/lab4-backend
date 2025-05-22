import express from 'express';
import { articles } from './models/data.js';
import articleRoutes from './routes/articleRoutes.js';
import logger from './middleware/logger.js';
import journalistRoutes from './routes/journalistRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';

const app = express();
app.use(express.json());
app.use(logger);
app.use('/articles', articleRoutes); // Use article routes
app.use('/journalists', journalistRoutes); // Use journalist routes
app.use('/categories', categoryRoutes); // Use category routes

const PORT = 3000;

// app.get('/', (req, res) => {
//     res.json(articles)
// });

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});