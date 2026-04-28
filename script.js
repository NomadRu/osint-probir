// Ждём загрузки страницы
document.addEventListener('DOMContentLoaded', async () => {
    const articlesList = document.getElementById('articles-list');
    
    // Список статей, которые мы знаем (можно обновлять вручную при добавлении)
    // Или можно попросить GitHub API, но проще — вести список руками
    const articles = [
        { file: "01-istoriya-poselka.html", title: "История нашего посёлка", date: "28.04.2025" },
        { file: "02-subbotnik-2025.html", title: "Субботник 2025 — как это было", date: "27.04.2025" },
        { file: "03-noviy-skver.html", title: "Открыли новый сквер", date: "25.04.2025" }
        // Когда добавляете новую статью — просто дописывайте сюда строчку
    ];
    
    if (articles.length === 0) {
        articlesList.innerHTML = '<p>Пока нет статей. Напишите первую!</p>';
        return;
    }
    
    // Рисуем список
    articlesList.innerHTML = articles.map(article => `
        <div class="article-item">
            <a href="articles/${article.file}">📄 ${article.title}</a>
            <div style="font-size: 0.85rem; color: #666; margin-top: 5px;">${article.date}</div>
        </div>
    `).join('');
});
