// Ждём загрузки страницы
document.addEventListener('DOMContentLoaded', async () => {
    const articlesList = document.getElementById('articles-list');
    
    // Список статей, которые мы знаем (можно обновлять вручную при добавлении)
    // Или можно попросить GitHub API, но проще — вести список руками
    const articles = [
        { file: "test.html", title: "Первая статья", date: "28.04.2026" }
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
