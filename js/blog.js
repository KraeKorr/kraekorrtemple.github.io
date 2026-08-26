fetch("data/articles.json")
    .then(response => response.json())
    .then(articles => {

        const zone = document.getElementById("articles");

        articles.forEach(article => {

            const bloc = document.createElement("article");

            bloc.innerHTML = `
                <h2>${article.titre}</h2>
                <p>${article.date}</p>
                <p>${article.resume}</p>
                <a href="${article.lien}">Lire l'article →</a>
            `;

            zone.appendChild(bloc);
        });

    });
