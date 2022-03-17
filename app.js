document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'rocket',
            img: 'images/rocket.png'
        },
        {
            name: 'rocket',
            img: 'images/rocket.png'
        },
        {
            name: 'police',
            img: 'images/police.png'
        },
        {
            name: 'police',
            img: 'images/police.png'
        },
        {
            name: 'racing-car',
            img: 'images/racing-car.png'
        },
        {
            name: 'racing-car',
            img: 'images/racing-car.png'
        },
        {
            name: 'airplane',
            img: 'images/airplane.png'
        },
        {
            name: 'airplane',
            img: 'images/airplane.png'
        },
        {
            name: 'blimp',
            img: 'images/blimp.png'
        },
        {
            name: 'blimp',
            img: 'images/blimp.png'
        },
        {
            name: 'submarine',
            img: 'images/submarine.png'
        },
        {
            name: 'submarine',
            img: 'images/submarine.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'images/checkered.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        
        if (optionOneId === optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/flags.png')
            cards[optionTwoId].setAttribute('src', 'images/flags.png')
            alert('You have clicked the same image')
        }
        
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/flags.png')
            cards[optionTwoId].setAttribute('src', 'images/flags.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        }
        else {
            cards[optionOneId].setAttribute('src', 'images/checkered.png')
            cards[optionTwoId].setAttribute('src', 'images/checkered.png')
            alert('Sorry, try again')            
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
        
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }

    }

    createBoard()
})