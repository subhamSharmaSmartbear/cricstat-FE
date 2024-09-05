CRICSTAT-FE/
│
├── node_modules/          # All node modules for dependencies
├── public/
│   └── assets/            # Public assets like images, icons, etc.
│
├── src/                   # Main source folder for the application
│   ├── components/        # Reusable UI components for the app
│   │   ├── Matches/
│   │   │   ├── LiveMatches.js
│   │   │   ├── Matches.js
│   │   │   ├── PastMatches.js
│   │   │   ├── UpcomingMatches.js
│   │   │   ├── LiveMatches.stories.jsx
│   │   │
│   │   ├── Modal/         # Modals for various functionalities
│   │   │   ├── BallScoreModal.js
│   │   │   ├── CreateTeamModal.js
│   │   │   ├── CreateTournamentModal.js
│   │   │   ├── ManageTeamModal.js
│   │   │
│   │   ├── Stats/         # Components for displaying statistics
│   │   │   ├── BallingStats.js
│   │   │   ├── BallingTable.js
│   │   │   ├── BattingStats.js
│   │   │   ├── BattingTable.js
│   │   │   ├── PlayerBallingTable.js
│   │   │   ├── PlayerBattingTable.js
│   │   │   └── Statistics.js
│   │   │
│   │   ├── Teams/         # Components related to teams
│   │   │   ├── AllTeams.js
│   │   │   ├── MyTeams.js
│   │   │   ├── Squad.js
│   │   │   ├── MyTeams.stories.jsx
│   │   │
│   │   ├── Tournament/    # Components related to tournaments
│   │   │   ├── Finals.js
│   │   │   ├── Group1.js
│   │   │   ├── Group2.js
│   │   │   ├── AllTournaments.js
│   │   │   ├── MyTournaments.js
│   │   │   ├── Tournaments.js
│   │   │   ├── MyTournaments.stories.jsx
│   │   │
│   │   └── Utilities/     # Utility components for reusable code
│   │       ├── CurrentDateTime.js
│   │       ├── CustomSelect.tsx
│   │       └── Error.js
│   │
│   ├── pages/             # Page components for different routes
│   │   ├── Edit.js
│   │   ├── Login.js
│   │   ├── Match.js
│   │   ├── Matches.js
│   │   ├── Player.js
│   │   ├── Players.js
│   │   ├── Register.js
│   │   ├── Team.js
│   │   ├── Teams.js
│   │   ├── Tournament.js
│   │   ├── Tournaments.js
│   │
│   ├── App.js             # Main app component
│   ├── index.js           # Main entry point for the React app
│   └── index.css          # Global CSS file
│
├── .env                   # Environment variables
├── .gitignore             # Files and directories to ignore in Git
├── package.json           # Project metadata and dependencies
├── package-lock.json      # Lockfile for dependencies
├── tailwind.config.js     # Configuration for Tailwind CSS
└── README.md              # Project documentation
