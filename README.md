# PulseFit.AI - AI-Powered Fitness Platform

PulseFit.AI is a comprehensive fitness platform that combines artificial intelligence with personalized nutrition and fitness tracking to help users achieve their health goals.

## Features

- **AI-Powered Workout Plans**: Personalized workout recommendations based on user goals and progress
- **Advanced Nutrition Tracking**: Smart meal planning and macro tracking
- **Progress Analytics**: Detailed progress tracking and analytics dashboard
- **Community Support**: Connect with other fitness enthusiasts
- **Mobile App Access**: Available on iOS and Android
- **Priority Support**: Dedicated support for pro users

## Tech Stack

### Frontend
- HTML5, CSS3, JavaScript
- Font Awesome for icons
- Chart.js for analytics
- Responsive design

### Backend
- Node.js with Express.js
- MongoDB for database
- JWT for authentication
- PayPal API for payments

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/PulseFit.AI.git
cd PulseFit.AI
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Edit `.env` with your configuration:
```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret
```

4. Start the development server:
```bash
npm run dev
```

## Project Structure

```
PulseFit.AI/
├── frontend/
│   ├── public/
│   │   ├── images/
│   │   ├── videos/
│   │   └── styles/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── utils/
│   └── index.html
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
├── .env.example
├── package.json
└── README.md
```

## API Documentation

### Authentication
- POST `/api/auth/signup` - User registration
- POST `/api/auth/login` - User login
- POST `/api/auth/logout` - User logout

### User Profile
- GET `/api/users/profile` - Get user profile
- PUT `/api/users/profile` - Update user profile

### Workout Plans
- GET `/api/workouts` - Get workout plans
- POST `/api/workouts` - Create workout plan
- PUT `/api/workouts/:id` - Update workout plan

### Nutrition
- GET `/api/nutrition` - Get nutrition plans
- POST `/api/nutrition` - Create nutrition plan
- PUT `/api/nutrition/:id` - Update nutrition plan

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- Website: [pulsefit.ai](https://pulsefit.ai)
- Facebook: [@pulsefit.ai](https://www.facebook.com/profile.php?id=61574953836711)
- YouTube: [@pulseffit](https://www.youtube.com/@pulseffit)

## Acknowledgments

- Font Awesome for icons
- Chart.js for analytics
- PayPal for payment processing 