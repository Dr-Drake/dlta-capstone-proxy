import * as dotenv from 'dotenv';
dotenv.config();
import express, { Express } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import morgan from 'morgan';
import * as path from 'path';
import cors from 'cors';

/**
 * References:
 * https://dev.to/tirthpatel/node-js-express-app-on-vercel-develop-run-deploy-524a
 */

// Express app initialization
const app: Express = express();

// Port and other configuration
const port = process.env.PORT || 3333;
const targetUrl = process.env.TARGET_URL;

// CORS
app.use(cors())

// Request Logger
app.use(morgan('combined'))

// Serves static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Setup reverse proxy
app.use('', createProxyMiddleware({ 
    target: targetUrl,
    changeOrigin: true,
    // pathRewrite: {
    //     '^/api': '/', // rewrite /api to /
    // },
    // onProxyReq: (proxyReq) => {

    //     // Add Basic Authentication header
    //     //const basicAuth = Buffer.from(`${username}:${accessToken}`).toString('base64'); // replace 'username:password' with your actual username and password
    //     proxyReq.setHeader('Authorization', `Bearer ${accessToken}`);
    // },
}));

// Listen for incoming HTTP requests on specified PORT
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});