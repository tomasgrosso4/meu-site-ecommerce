
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simulação de login simples
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        localStorage.setItem('isLoggedIn', 'true');
        alert('Sessão iniciada com sucesso!');
        window.location.href = 'index.html';
    } else {
        alert('Por favor, preenche todos os campos.');
    }
});
