document.addEventListener("DOMContentLoaded", function() {
    const githubUsername = 'ErbekovBobur';  // Ваш GitHub username
    const apiUrl = `https://api.github.com/users/${githubUsername}/repos?sort=created`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const projectsList = document.getElementById('projects-list');
            if (data.length === 0) {
                projectsList.innerHTML = '<p>Проекты не найдены.</p>';
            } else {
                data.forEach(repo => {
                    const repoCard = document.createElement('div');
                    repoCard.classList.add('project-card');
                    repoCard.innerHTML = `
                        <h3>${repo.name}</h3>
                        <p>${repo.description || 'Описание отсутствует'}</p>
                        <a href="${repo.html_url}" target="_blank">Посмотреть на GitHub</a>
                    `;
                    projectsList.appendChild(repoCard);
                });
            }
        })
        .catch(error => {
            console.error('Ошибка загрузки данных:', error);
        });
});
