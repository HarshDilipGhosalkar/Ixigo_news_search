
# Ixigo Task
### Demo Video:
You can watch the demo of the project here:






[![Video Thumbnail](https://github.com/user-attachments/assets/85bfa761-9610-4b4b-b7d2-8b949d3141e3)](https://github.com/user-attachments/assets/85bfa761-9610-4b4b-b7d2-8b949d3141e3)

## Project Overview

Welcome to the Ixigo Task project! This project involves creating a news aggregator that fetches articles from multiple sources, including NewsAPI and Google News, based on user-provided keywords. The project is built with a Python backend using Flask and a React frontend using Next.js, styled with Tailwind CSS. 

## Features

- **Multi-source News Fetching**: Aggregates news articles from both NewsAPI and Google News.
- **User-friendly Interface**: Provides an intuitive and aesthetically pleasing UI with responsive design.
- **Keyword-based Search**: Users can search for news articles by entering specific keywords.

---

## Setup Instructions

### Backend Setup (Flask)

1. **Clone the Repository**
   ```bash
   git clone https://github.com/HarshDilipGhosalkar/Ixigo_news_search.git
   cd news_reader_backend
   ```

2. **Create a Virtual Environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Flask Server**
   ```bash
   flask run
   ```

### Frontend Setup (Next.js)

1. **Navigate to the Frontend Directory**
   ```bash
   cd form-builder-frontend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Next.js Server**
   ```bash
   npm run dev
   ```

---

## API Keys Configuration

Ensure you have the following API keys set up:

- **NewsAPI**
- **Google News API**

Configure these keys in the `news_services.py` file.

---

## Usage Instructions

1. **Open the Frontend**
   - Navigate to `http://localhost:3000` in your browser.

2. **Search for News**
   - Enter a keyword in the search bar and click "Search".

3. **View Articles**
   - Browse through the fetched articles displayed on the page.

---

## Technologies Used

- **Backend**: Flask, Python
- **Frontend**: Next.js, Tailwind CSS
- **APIs**: NewsAPI, Google News API

---

## Screenshots

![Search Page](https://via.placeholder.com/800x400)
![Results Page](https://via.placeholder.com/800x400)

---

## Contributors

- **Your Name**: [Harsh Ghosalkar](https://github.com/HarshDilipGhosalkar)

---



