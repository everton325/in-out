function criarConfete() {
    const cores = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
    const confete = document.createElement('div');
    confete.className = 'confetti';
    confete.style.left = Math.random() * 100 + 'vw';
    confete.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
    document.body.appendChild(confete);
    
    setTimeout(() => {
        confete.remove();
    }, 3000);
}

function darBoasVindas() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const mensagem = document.getElementById('mensagem');

    if (!nome || !idade) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    const hora = new Date().getHours();
    let saudacao = '';
    
    if (hora < 12) {
        saudacao = 'Bom dia';
    } else if (hora < 18) {
        saudacao = 'Boa tarde';
    } else {
        saudacao = 'Boa noite';
    }

    const emojis = ['🌟', '✨', '🎉', '🎈', '🎊', '🎨', '🎭', '🎪'];
    const emojiAleatorio = emojis[Math.floor(Math.random() * emojis.length)];

    let mensagemPersonalizada = '';
    if (idade < 18) {
        mensagemPersonalizada = `Que legal ver um jovem explorador por aqui!`;
    } else if (idade < 30) {
        mensagemPersonalizada = `É ótimo ter você aqui, jovem adulto!`;
    } else if (idade < 50) {
        mensagemPersonalizada = `Que bom ter sua experiência por aqui!`;
    } else {
        mensagemPersonalizada = `É uma honra ter sua sabedoria conosco!`;
    }

    mensagem.innerHTML = `
        <div class="emoji">${emojiAleatorio}</div>
        <p>${saudacao}, ${nome}! ${mensagemPersonalizada}</p>
        <p>Seja muito bem-vindo(a) ao nosso portal mágico!</p>
    `;
    mensagem.style.opacity = '1';

    // Criar efeito de confete
    for (let i = 0; i < 50; i++) {
        setTimeout(criarConfete, i * 100);
    }
}

// Permitir enviar com Enter
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        darBoasVindas();
    }
}); 