![Thumbnail](./public/thumbnail.png)

# 🛍️ Travelo - AI Trip Planner Web App

**Travelo** is a web-based travel planning application powered by AI that helps users automatically generate personalized and intelligent travel itineraries in just seconds.

## ✨ Short Description

Travelo allows users to select their travel preferences (departure location, destination, duration, budget, etc.) and generates a full-day itinerary that includes activities, transportation, hotel recommendations, and travel tips. The app is built using AI (Gemini), Firebase, and the React ecosystem.

## 🚀 Main Features

- 🔐 Google login (Firebase Auth)
- 📍 Departure & destination city selection
- 🧠 AI-generated itinerary
- 🏨 Hotel & daily activity recommendations
- 🔖 Save and view detailed trip plans
- 🌙 Light/Dark mode toggle
- 🗑️ Delete trip plans with confirmation
- 📱 Responsive and user-friendly interface

## ⚙️ Tech Stack

### Frontend

- React with Typescript
- React Router
- Zustand (State Management)
- Framer Motion (Animations)
- TailwindCSS (Styling)
- ShadCN UI / Headless UI (for Dialog components)

### Backend / Services

- Firebase Firestore
- Firebase Auth (Google Login)
- Gemini API (Google)
- Geoapify API (for location)

## 🧰 Installation and Setup

Follow these steps to run the project locally:

1. Clone the repository:


```
git clone https://github.com/fiqrioemry/ai_travel_planner_web_app.git
cd ai_travel_planner_web_app
```

2. Install dependencies:

```
npm install
```

3. Start the development server:

```
npm rum
```

App will be running on http://localhost:5173

## 📁 Folder Structure

```
├── src/
│   ├── api/               # Koneksi API: Firebase, Gemini, Geoapify
│   ├── components/        # Reusable UI components (Button, Dialog, Badge, dsb)
│   ├── hooks/             # Custom React hooks (theme, scrollToTop)
│   ├── pages/             # Halaman utama (Home, CreateTrip, SavedTrip, DetailTrip)
│   ├── store/             # Zustand store (useTripStore, useAuthStore)
│   ├── config/            # State, constant, emojiMap, prompt templates
│   ├── App.tsx            # Root routing dengan React Router
│   └── main.tsx           # Entry point React
```

## 🧪 How to Use

1. **Login**
   - Click the “Get Started” button on the homepage and log in with Google.

2. **Create a Trip**
   - Go to `/create-trip`, fill out all trip preferences via a step-by-step UI, and click "Generate Trip".

3. **Save & View Trip Details**
   - Successfully generated trips will be stored in Firebase and can be revisited at `/my-trips`. Click on a card to view full details.

4. **Delete a Trip**
   - Click the 🖑 icon at the top-right of a trip card. A confirmation dialog will appear before deletion.

## 🔐 Environment Configuration (.env)


```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_GEMINI_API_KEY=your_gemini_key
VITE_GEOAPIFY_KEY=your_geoapify_key
```

## ☁️ Deployment

This project is hosted using a web hosting provider, but you can also deploy it to SaaS platforms such as **Vercel** or **Netlify**:

- Connect your Git repository
- Add environment variables in the dashboard
- Set build command:

```
  npm run build
```


- Output directory: `dist`

## 🤝 Contribution

Open for contributions to improve features:

- Fork the repository
- Create a new branch: `git checkout -b your-feature`
- Commit changes: `git commit -m 'feat: your feature'`
- Push your branch: `git push origin your-feature`
- Open a Pull Request

## 🪪 License

**MIT License**

## 👤 Developer - Author

- Name: Ahmad Fiqri Oemmry  
- 📧 Email: fiqrioemry@gmail.com  
- 🌐 LinkedIn: [linkedin.com/in/ahmadfiqrioemry](https://www.linkedin.com/in/ahmadfiqrioemry)

## 🖼️ Preview

Below are some previews of the AI travel planner web pages:

**Homepage**  
**Create Trip**  
**Trip Details**  
**My Trip List**

![Preview1](./public/preview1.png)  
![Preview2](./public/preview2.png)  
![Preview3](./public/preview3.png)  
![Preview4](./public/preview4.png)


