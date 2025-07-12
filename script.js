const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe'); 

let isGameOver = false;
let loop;

const jump = () => {
    if (!isGameOver) {
        mario.classList.add('jump');
        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }
}

const startGameLoop = () => {
    loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = '80px'; 

            mario.src = 'game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';

            clearInterval(loop);
            isGameOver = true;
        }
    }, 10);
};

const restartGame = () => {
    isGameOver = false;

    // Reinicia visuais e posições
    mario.src = '';
setTimeout(() => {
  mario.src = 'mario.gif';
}, 50);

    mario.style.width = '150px';
    mario.style.marginLeft = '0';
    mario.style.bottom = '0';
    mario.style.animation = '';
    
    pipe.style.left = '';
    pipe.style.animation = 'pipe-animation 1.5s infinite linear';

    startGameLoop();
};

// Escuta a tecla W
document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 'w') {
        if (isGameOver) {
            restartGame();
        } else {
            jump();
        }
    }
});

// Inicia o jogo pela primeira vez
startGameLoop();









