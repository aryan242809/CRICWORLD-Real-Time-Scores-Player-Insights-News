async function fetchCricketNews() {
    const apiKey = 'f725a234111b97b51fe46842ecfcfa7c';
    const url = `https://gnews.io/api/v4/search?q=cricket&lang=en&country=in&max=5&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Clear previous news
        document.querySelector(".main").innerHTML = "";

        // Add each article as a news section
        data.articles.forEach(article => {
            addnews(
                article.source.name || "Cricket News",
                article.title,
                article.description || "Click to read more.",
                article.image || "https://via.placeholder.com/400x250.png?text=No+Image"
            );
        });
    } catch (error) {
        console.error("Error fetching cricket news:", error);
    }
}

function addnews(sub, title, des, img) {
    let html = ` <section id="about">
        <div class="section-box">
            <div class="content-grid">
                <div class="left-grid">
                    <h3 class="section-sub">${sub}</h3>
                    <h2 class="section-title">${title}</h2>
                    <p>${des}</p>
                </div>
                <div class="right-grid">
                    <img src="${img}" class="about-img">
                </div>
            </div>
        </div>
    </section>`;
    document.querySelector(".main").insertAdjacentHTML("beforeend", html);
}

// Initial load
fetchCricketNews();

// Auto-refresh every 5 minutes (300000 ms)
setInterval(fetchCricketNews, 300000);
