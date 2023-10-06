acquire()

window.onload = () => {
    score = document.getElementById('score')
    highscore = document.getElementById('highscore')
    again = document.getElementById('again')

    score.textContent = 'Score: '+localStorage.getItem('score')
    highscore.textContent = 'Highscore: '+highscores[id]
}