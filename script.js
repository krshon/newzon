document.addEventListener("DOMContentLoaded", () => {
    const newsContainer = document.querySelector("main");

    // Sample news data with bias levels
    const newsArticles = [
        {
            title: "Breaking: Government Announces New Policy",
            description: "The government has introduced a new policy affecting citizens.",
            biasLeft: 60,
            biasCenter: 30,
            biasRight: 10
        },
        {
            title: "Economy Report: Market Trends This Year",
            description: "A neutral look at this year's market trends and economic policies.",
            biasLeft: 30,
            biasCenter: 50,
            biasRight: 20
        },
        {
            title: "Opinion: The Future of Technology",
            description: "Tech innovations and their impact on future jobs.",
            biasLeft: 20,
            biasCenter: 30,
            biasRight: 50
        }
    ];

    // Function to create a news article element
    function createNewsArticle(article) {
        const articleElement = document.createElement("article");
        articleElement.classList.add("news-article");

        articleElement.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <div class="bias-bar-container">
                <div class="bias-bar bias-left" style="width: ${article.biasLeft}%;">${article.biasLeft}%</div>
                <div class="bias-bar bias-center" style="width: ${article.biasCenter}%;">${article.biasCenter}%</div>
                <div class="bias-bar bias-right" style="width: ${article.biasRight}%;">${article.biasRight}%</div>
            </div>
            <div class="bias-breakdown"></div>
        `;

        // Event listener to show bias breakdown when article is clicked
        articleElement.addEventListener("click", () => {
            const biasBreakdown = articleElement.querySelector(".bias-breakdown");
            biasBreakdown.innerHTML = `
                <p><strong>Bias Breakdown:</strong></p>
                <div class="bias-bar-container">
                    <div class="bias-bar bias-left" style="width: ${article.biasLeft}%;">Left: ${article.biasLeft}%</div>
                    <div class="bias-bar bias-center" style="width: ${article.biasCenter}%;">Center: ${article.biasCenter}%</div>
                    <div class="bias-bar bias-right" style="width: ${article.biasRight}%;">Right: ${article.biasRight}%</div>
                </div>
            `;
            biasBreakdown.style.display = "block"; // Show the bias breakdown
        });

        return articleElement;
    }

    // Render news articles
    newsArticles.forEach(article => {
        const articleElement = createNewsArticle(article);
        newsContainer.appendChild(articleElement);
    });
});
