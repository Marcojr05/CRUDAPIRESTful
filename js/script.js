const apiUrl = 'https://dummyjson.com/products';

// Função para carregar todos os produtos
async function loadProducts() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const table = document.getElementById('product-table');
    table.innerHTML = '';

    data.products.forEach(product => {
        const row = `
            <tr>
                <td>${product.id}</td>
                <td>${product.title}</td>
                <td>${product.price}</td>
                <td>
                    <button class="btn btn-warning" onclick="openEditModal(${product.id})">Editar</button>
                    <button class="btn btn-danger" onclick="deleteProduct(${product.id})">Excluir</button>
                </td>
            </tr>
        `;
        table.innerHTML += row;
    });
}

// Função para pesquisar produtos
async function searchProduct() {
    const searchInput = document.getElementById('search-input').value;
    const response = await fetch(`${apiUrl}/search?q=${searchInput}`);
    const data = await response.json();
    const table = document.getElementById('search-table');
    table.innerHTML = '';

    data.products.forEach(product => {
        const row = `
            <tr>
                <td>${product.id}</td>
                <td>${product.title}</td>
                <td>${product.price}</td>
                <td>
                    <button class="btn btn-warning" onclick="openEditModal(${product.id})">Editar</button>
                    <button class="btn btn-danger" onclick="deleteProduct(${product.id})">Excluir</button>
                </td>
            </tr>
        `;
        table.innerHTML += row;
    });
}

// Função para ordenar produtos
async function loadSortedProducts() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const sortedProducts = data.products.sort((a, b) => a.title.localeCompare(b.title));
    const table = document.getElementById('sorted-table');
    table.innerHTML = '';

    sortedProducts.forEach(product => {
        const row = `
            <tr>
                <td>${product.id}</td>
                <td>${product.title}</td>
                <td>${product.price}</td>
                <td>
                    <button class="btn btn-warning" onclick="openEditModal(${product.id})">Editar</button>
                    <button class="btn btn-danger" onclick="deleteProduct(${product.id})">Excluir</button>
                </td>
            </tr>
        `;
        table.innerHTML += row;
    });
}

// Função para filtrar produtos por categoria
async function filterByCategory() {
    const category = document.getElementById('category-select').value;
    const response = await fetch(`${apiUrl}/category/${category}`);
    const data = await response.json();
    const table = document.getElementById('category-table');
    table.innerHTML = '';

    data.products.forEach(product => {
        const row = `
            <tr>
                <td>${product.id}</td>
                <td>${product.title}</td>
                <td>${product.price}</td>
                <td>
                    <button class="btn btn-warning" onclick="openEditModal(${product.id})">Editar</button>
                    <button class="btn btn-danger" onclick="deleteProduct(${product.id})">Excluir</button>
                </td>
            </tr>
        `;
        table.innerHTML += row;
    });
}

// Função para excluir produto
async function deleteProduct(id) {
    await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
    });
    loadProducts();
}

// Função para abrir modal de edição (não implementada)
function openEditModal(id) {
    // Lógica para abrir um modal e carregar os dados do produto
}

// Função para abrir modal de criação (não implementada)
function openCreateModal() {
    // Lógica para abrir um modal para adicionar um novo produto
}

// Carrega os produtos na página inicial
loadProducts();
