# PulseFit.AI Backend

Express.js backend server for the PulseFit.AI fitness platform.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/pulsefit-ai
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   PORT=3001
   ```

3. **Start MongoDB**
   - Local: `mongod` (if MongoDB is installed locally)
   - Cloud: Use MongoDB Atlas or another cloud service

4. **Start the server**
   ```bash
   # Development with auto-restart
   npm run dev
   
   # Production
   npm start
   ```

## 📡 API Endpoints

### Health Check
- `GET /api/health` - Server health status

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Workouts
- `GET /api/workouts` - Get user workouts
- `POST /api/workouts` - Create new workout
- `PUT /api/workouts/:id` - Update workout
- `DELETE /api/workouts/:id` - Delete workout

### Nutrition
- `GET /api/nutrition` - Get nutrition data
- `POST /api/nutrition` - Add nutrition entry
- `PUT /api/nutrition/:id` - Update nutrition entry
- `DELETE /api/nutrition/:id` - Delete nutrition entry

## 🔧 Configuration

### Port Configuration
The server automatically finds an available port starting from 3001. You can override this by setting the `PORT` environment variable.

### MongoDB Connection
The server will attempt to connect to MongoDB using the `MONGODB_URI` environment variable. If not provided, it defaults to `mongodb://localhost:27017/pulsefit-ai`.

### JWT Secret
Set a strong JWT secret in your environment variables for production use.

## 🐛 Troubleshooting

### Port Already in Use
The server automatically finds an available port. If you encounter port conflicts, the server will try the next available port.

### MongoDB Connection Issues
- Ensure MongoDB is running
- Check your `MONGODB_URI` environment variable
- Verify network connectivity for cloud MongoDB instances

### Common Issues
1. **"MongoDB connection error"** - MongoDB is not running or connection string is incorrect
2. **"JWT_SECRET not defined"** - Set the JWT_SECRET environment variable
3. **"Port already in use"** - Server will automatically find an available port

## 📝 Development

### Project Structure
```
backend/
├── middleware/          # Custom middleware
├── models/            # Mongoose models
├── routes/            # API routes
├── server.js          # Main server file
└── README.md          # This file
```

### Adding New Routes
1. Create route file in `routes/` directory
2. Import and use in `server.js`
3. Follow existing patterns for error handling

## 🚀 Production Deployment

1. Set production environment variables
2. Use a process manager like PM2
3. Set up proper logging
4. Configure reverse proxy (nginx)
5. Use MongoDB Atlas or managed MongoDB service

## 📄 License

MIT License - see LICENSE file for details
