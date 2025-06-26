
const produtos = [
  { id: 1, nome: 'T-Shirt Básica', preco: '€19,99', img: 'img/tshirt1.jpg' },
  { id: 2, nome: 'T-Shirt Oversized', preco: '€24,99', img: 'img/tshirt2.jpg' },
  { id: 3, nome: 'T-Shirt Estampada', preco: '€22,50', img: 'img/tshirt3.jpg' }
];
const params = new URLSearchParams(window.location.search);
const produto = produtos.find(p => p.id == params.get('id'));
if (produto) {
  const el = document.getElementById('product-detail');
  el.innerHTML = `
    <img src="${produto.img}" alt="${produto.nome}" style="max-width: 400px;"><br>
    <h2>${produto.nome}</h2>
    <p>${produto.preco}</p>
    <button onclick="adicionarAoCarrinho('${produto.nome}')">Adicionar ao Carrinho</button>
  `;
}
function adicionarAoCarrinho(nome) {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.push(nome);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  alert('Produto adicionado ao carrinho!');
}
