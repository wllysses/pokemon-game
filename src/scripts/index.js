const pikachu = document.querySelector('.pikachu')
const equipeRocket = document.querySelector('.rocket')
const startButton = document.querySelector('.start-btn')
const restartButton = document.querySelector('.restart-btn')
const gameOver = document.querySelector('.game-over')

function startGame() {
    equipeRocket.classList.add('rocket-animation')
    startButton.style.display = 'none'
}

function restartGame() {
    gameOver.style.display = 'none'
    equipeRocket.style.left = ''
    equipeRocket.style.right = '0'

    pikachu.src = 'src/imgs/pikachu.gif'
    startButton.style.display = 'none'

    startGame()
}

function jump() {
    pikachu.classList.add('jump')

    setTimeout(() => {
        pikachu.classList.remove('jump')
    }, 800)
}

function loop() {
    setInterval(() => {
        const rocketPosition = equipeRocket.offsetLeft
        const pikachuPosition = window.getComputedStyle(pikachu).bottom.replace('px', ' ')

        if(rocketPosition <= 120 && rocketPosition > 0 && pikachuPosition < 80) {
            equipeRocket.classList.remove('rocket-animation')
            equipeRocket.style.left = `${rocketPosition}px`

            pikachu.classList.remove('jump')
            pikachu.style.bottom = `${pikachuPosition}px`
            pikachu.src = 'src/imgs/pikachu-sad.gif'
            
            gameOver.style.display = 'flex'
            clearInterval(loop)
        }
    }, 10)
}

loop()

document.addEventListener('keyup', (e) => {
    const spaceKey = e.key
    if(spaceKey === ' ') {
        jump()
    }
})