document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Coletar dados do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Lógica para enviar os dados (por exemplo, para um servidor)
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Mensagem:', message);

    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');

    // Limpar o formulário após o envio
    document.getElementById('contact-form').reset();
});

function handleExit() {
    // Lógica para o botão "Sair"
    alert('Você clicou em Sair.');
    // Você pode redirecionar o usuário para outra página, por exemplo:
    // window.location.href = 'pagina-inicial.html';
}