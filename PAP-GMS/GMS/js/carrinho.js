
// Verificação de login
if (!localStorage.getItem('isLoggedIn')) {
    alert('Precisas de iniciar sessão para aceder ao carrinho.');
    window.location.href = 'login.html';
}


const carrinhoLista = document.getElementById('carrinho-lista');
const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
carrinho.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  carrinhoLista.appendChild(li);
});
