src/
│
├── assets/                  # Static files (images, icons, fonts)
│
├── components/              # GLOBAL reusable UI (pure components)
│   ├── ui/                  # Buttons, Inputs, Cards, Modals
│   ├── layout/              # Navbar, Footer, Sidebar
│   └── feedback/            # Loaders, Empty states, Alerts
│
├── modules/                 # FEATURE-BASED ARCHITECTURE
│
│   ├── public/              # No authentication required
│   │   ├── pages/
│   │   │   ├── LandingPage.jsx
│   │   │   ├── BrowsePage.jsx
│   │   │   ├── BookDetailPage.jsx
│   │   │   └── Auth/
│   │   │       ├── Login.jsx
│   │   │       └── Register.jsx
│   │   │
│   │   ├── components/      # Only used in public pages
│   │   │   ├── HeroSection.jsx
│   │   │   ├── FeaturedBooks.jsx
│   │   │   └── CategoryList.jsx
│   │   │
│   │   └── services/        # API calls related to public content
│   │       └── public.api.js
│
│   ├── user/                # Authenticated users
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── SavedBooks.jsx
│   │   │   └── ReadingPage.jsx
│   │   │
│   │   ├── components/
│   │   │   ├── UserStats.jsx
│   │   │   └── RecentActivity.jsx
│   │   │
│   │   └── services/
│   │       └── user.api.js
│
│   ├── admin/               # Admin-only features
│   │   ├── pages/
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── ManageBooks.jsx
│   │   │   └── Analytics.jsx
│   │   │
│   │   ├── components/
│   │   │   ├── KPIBox.jsx
│   │   │   ├── Chart.jsx
│   │   │   └── ContentTable.jsx
│   │   │
│   │   └── services/
│   │       └── admin.api.js
│
│   ├── shared/              # Cross-module logic (NOT UI)
│   │   ├── hooks/           # Custom hooks (useAuth, useFetch)
│   │   ├── utils/           # Helpers (formatDate, truncateText)
│   │   ├── constants/       # App-wide constants
│   │   └── context/         # Global state (AuthContext, Theme)
│
├── routes/                  # Central routing config
│   ├── AppRoutes.jsx
│   ├── ProtectedRoute.jsx
│   └── AdminRoute.jsx
│
├── services/                # Global API config
│   ├── axios.js             # Axios instance (baseURL, interceptors)
│   └── endpoints.js
│
├── styles/                  # Global styles (Tailwind, CSS)
│
├── App.jsx
└── main.jsx