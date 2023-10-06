acquire()
function toggle(i) {
    if (pass[i].type == 'password') {
        temp = pass[i].value
        pass[i].type = 'text'
        pass[i].value = temp
        show[i].textContent = 'Hide'
    }
    else {
        pass[i].type = 'password'
        show[i].textContent = 'Show'
    }
}

window.onload = () => {
    user = document.getElementById('user')
    pass = document.getElementsByClassName('pass')
    go = document.getElementById('go')
    hr = document.getElementsByTagName('hr')
    span = document.getElementsByTagName('span')
    show = document.getElementsByClassName('show')

    show[0].addEventListener('click', () => {
        toggle(0)
    })
    show[1].addEventListener('click', () => {
        toggle(1)
    })

    go.addEventListener('click', () => {
        usernanme = user.value
        if (pass[0].value != pass[1].value || pass[0].value.length<8 || pass[0].value.length>16) {
            msg1 = document.getElementById('msg1')
            msg2 = document.getElementById('msg2')

            if (pass[0].value != pass[1].value) {
                msg2.textContent = 'Passwords are different'
                msg0.textContent = ''
                msg1.textContent = ''
            }
            else if (pass[0].value.length<8 || pass[0].value.length>16) {
                msg1.textContent = 'Passwords must be 8-16 characters long'
                msg0.textContent = ''
                msg2.textContent = ''
            }
        }
        else if (user.value == '') {
            msg0 = document.getElementById('msg0')
            msg0.textContent = 'Please input username'
            msg1.textContent = ''
        }
        else {
            for (i=0; i<names.length; i++) {
                if (user.value == names[i]) {
                    move = false
                    break
                }
                else {move = true}
            }
            if (move == true) {
                names.push(user.value)
                passes.push(pass[0].value)
                highscores.push('0')
                f = open('Flap.html')
                f.localStorage.setItem('username', names)
                f.localStorage.setItem('password', passes)
                f.localStorage.setItem('id', names.length-1)
                f.localStorage.setItem('highscore', highscores)
                console.log(f.localStorage.getItem('username'))
                f.close()
                open('Flap.html', '_parent')
            }
            else {
                alert('An account with this username already exists')
            }
        }
    })
}