from flask import Flask, request, jsonify
from services.news_service import fetch_news
from flask_cors import CORS 

app = Flask(__name__)
CORS(app)

@app.route('/news', methods=['GET'])
def get_news():
    query = request.args.get('query')
    if not query:
        return jsonify({"error": "Query parameter is required"}), 400

    news_articles = fetch_news(query)
    return jsonify(news_articles)

if __name__ == '__main__':
    app.run(debug=True)
