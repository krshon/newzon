document.addEventListener("DOMContentLoaded", () => {
  const newsContainer = document.querySelector("main");

  // Sample news data with bias levels
  const newsArticles = [
      {
          title: "Breaking: Government Announces New Policy",
          description: "The government has introduced a new policy affecting citizens.",
          bias: "left"
      },
      {
          title: "Economy Report: Market Trends This Year",
          description: "A neutral look at this year's market trends and economic policies.",
          bias: "center"
      },
      {
          title: "Opinion: The Future of Technology",
          description: "Tech innovations and their impact on future jobs.",
          bias: "right"
      }
  ];

  // Function to create a news article element
  function createNewsArticle(article) {
      const articleElement = document.createElement("article");
      articleElement.classList.add("news-article");

      articleElement.innerHTML = `
          <h2>${article.title}</h2>
          <p>${article.description}</p>
          <div class="bias-bar" data-bias="${article.bias}"></div>
      `;

      return articleElement;
  }

  // Render news articles
  newsArticles.forEach(article => {
      const articleElement = createNewsArticle(article);
      newsContainer.appendChild(articleElement);
  });
});