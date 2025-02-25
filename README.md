# PolyQuant
# Polymarket Trading Bot

This project is a trading bot for Polymarket, designed to retrieve market data, analyze it, and provide insights for trading decisions. The application is structured into a backend and a frontend, allowing for a comprehensive trading experience.

## Project Structure

- **backend/**: Contains the server-side application.
  - **src/**: Source code for the backend.
    - **api/**: API client and Polymarket API interaction.
    - **config/**: Configuration settings for the application.
    - **database/**: MongoDB database models and connection handling.
    - **algorithms/**: Market analysis and trading strategy implementation.
    - **utils/**: Utility functions for various tasks.
    - **main.py**: Entry point for the backend application.
  - **requirements.txt**: Python dependencies for the backend.
  - **Dockerfile**: Docker instructions for the backend application.

- **frontend/**: Contains the client-side application.
  - **public/**: Public assets, including the main HTML file.
  - **src/**: Source code for the frontend.
    - **components/**: React components for the user interface.
    - **services/**: API and authentication services.
    - **styles/**: CSS styles for the application.
    - **App.js**: Main application component.
    - **index.js**: Entry point for the frontend application.
  - **package.json**: npm configuration for the frontend.
  - **Dockerfile**: Docker instructions for the frontend application.

- **docker-compose.yml**: Defines services for the application, including backend and frontend.

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd polymarket-trading-bot
   ```

2. **Backend Setup**:
   - Navigate to the backend directory:
     ```
     cd backend
     ```
   - Install dependencies:
     ```
     pip install -r requirements.txt
     ```
   - Configure your settings in `src/config/settings.py` (API keys, database connection strings, etc.).
   - Run the backend:
     ```
     python src/main.py
     ```

3. **Frontend Setup**:
   - Navigate to the frontend directory:
     ```
     cd frontend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Run the frontend:
     ```
     npm start
     ```

4. **Docker Setup** (optional):
   - To build and run the application using Docker, use the following command in the root directory:
     ```
     docker-compose up --build
     ```

## Usage

- Access the frontend application in your web browser at `http://localhost:3000`.
- The backend API will be available at `http://localhost:5000`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
