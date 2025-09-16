document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: "Cenouras Orgânicas",
            description: "Cultivadas sem pesticidas.",
            price: "R$ 6,50",
            image: "cenoura.avif",
            category: "vegetais"
        },
        {
            name: "Morango Orgânico",
            description: "Frescos e doces da colheita diária.",
            price: "R$ 9,00",
            image: "Morango Orgânico.webp",
            category: "frutas"
        },
        {
            name: "Mirtilo e Framboesa",
            description: "Uma mistura de sabores azedos e doces.",
            price: "R$ 12,00",
            image: "Mirtilo e Framboesa.avif",
            category: "frutas"
        },
        {
            name: "Alface Manteiga",
            description: "Folhas tenras e colheita a noite.",
            price: "R$ 6,50",
            image: "Alface Manteiga.webp",
            category: "vegetais"
        },
        {
            name: "Tomate Orgânico",
            description: "Tomates maduros e saborosos.",
            price: "R$ 8,00",
            image: "Tomate Orgânico.jpg",
            category: "vegetais"
        },
        {
            name: "Banana Nanica",
            description: "Doce e ideal para lanches.",
            price: "R$ 4,50",
            image: "Banana Nanica.jpg",
            category: "frutas"
        },
        {
            name: "Feijão Preto",
            description: "Pacote de 1kg. Grãos selecionados.",
            price: "R$ 15,00",
            image: "Feijão Preto.webp",
            category: "graos"
        },
        {
            name: "Queijo Minas",
            description: "Saboroso e perfeito para o café.",
            price: "R$ 25,00",
            image: "Queijo Minas.jpg",
            category: "laticinios"
        }
    ];

    const productList = document.getElementById('product-list');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('search-product');

    function renderProducts(filteredProducts) {
        productList.innerHTML = '';
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.dataset.category = product.category;
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="product-price">${product.price} / kg</div>
                    <div class="product-actions">
                        <button class="buy-btn">Comprar</button>
                        <button class="details-btn">Ver Detalhes</button>
                    </div>
                </div>
            `;
            productList.appendChild(productCard);
        });
    }

    // Filtra produtos ao clicar nos botões de categoria
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filterCategory = btn.dataset.filter;
            const filteredProducts = products.filter(product => {
                if (filterCategory === 'all') {
                    return true;
                }
                return product.category === filterCategory;
            });
            renderProducts(filteredProducts);
        });
    });

    // Filtra produtos ao digitar na barra de pesquisa
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
        
        const filteredProducts = products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm);
            const matchesCategory = activeFilter === 'all' || product.category === activeFilter;
            return matchesSearch && matchesCategory;
        });
        renderProducts(filteredProducts);
    });

    // Renderiza todos os produtos na carga inicial
    renderProducts(products);
});