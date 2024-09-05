# CRICKSTAT

## Overview

CricStat is a React-based web application designed to manage and display cricket statistics, matches, teams, and tournaments.

## Project Structure

Below is the structure of the project to help navigate through the codebase.
```
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
```


### Components Description

- **Matches**: Components for managing and displaying match information like upcoming, live, and past matches.
- **Modal**: Contains modals for creating teams, managing tournaments, and adding teams.
- **Stats**: Components to display player and team statistics (e.g., balling, batting stats).
- **Teams**: Components to handle the display and management of teams (e.g., `AllTeams.js`, `MyTeams.js`).
- **Tournament**: Components for handling tournaments, including group stages and finals.
- **Utilities**: Reusable utility components such as date and time display or custom select elements.

### Pages

- **Edit, Login, Register**: Pages for handling editing data, logging in, and user registration.
- **Match, Player, Team**: Detailed pages for match, player, and team views.
- **Tournaments**: Pages for displaying and managing tournaments.

## Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

## Route Structure

The following are the routes available in the CricStat frontend application:

- `/register`  
  Displays the `Register` component for user registration.

- `/matches`  
  Displays the `Matches` component showing all matches.

- `/match/:id`  
  Displays the `Match` component for a specific match, where `:id` is the match ID.

- `/teams`  
  Displays the `Teams` component showing all teams.

- `/team/:id`  
  Displays the `Team` component for a specific team, where `:id` is the team ID.

- `/tournaments`  
  Displays the `Tournaments` component showing all tournaments.

- `/tournament/:id`  
  Displays the `Tournament` component for a specific tournament, where `:id` is the tournament ID.

- `/players`  
  Displays the `Players` component showing all players.

- `/player/:id`  
  Displays the `Player` component for a specific player, where `:id` is the player ID.

- `/edit`  
  Displays the `Edit` component for editing.

- `*` (catch-all)  
  Redirects any unmatched routes to `/matches`.


### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/cricstat-fe.git
    ```
2. Navigate to the project directory:
    ```bash
    cd cricstat-fe
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application

To start the development server, run:

```bash
npm start
