// ========== SCRIPTORIUM - Crear Artículo ==========
// En este archivo se agregará la lógica de guardado en pasos posteriores

const createArticleForm = document.getElementById('createArticleForm');

createArticleForm.addEventListener('submit', event => {
    event.preventDefault();
    const title = document.getElementById('articleTitle').value.trim();
    const category = document.getElementById('articleCategory').value;
    const excerpt = document.getElementById('articleExcerpt').value.trim();
    const body = document.getElementById('articleBody').value.trim();

    console.log('Guardar artículo:', {
        title,
        category,
        excerpt,
        body,
    });

    alert('Artículo listo para guardarse. Implementaremos la lógica de persistencia en el próximo paso.');
});
