window.onload = () => {
    acquire()
    user = document.getElementById('user')
    pass = document.getElementById('pass')
    input = document.getElementsByClassName('input')
    go = document.getElementById('go')
    show = document.getElementsByClassName('show')

    for (i=0; i<input.length; i++) {
        input[i].addEventListener('keyup', () => {
            if (user.value!='' && pass.value.length>7) {
                go.style.backgroundColor = '#54d152'
                go.className = 'elem go'
            }
            else {
                go.style.backgroundColor = '#efefef'
                go.className = 'elem'
            }
        })
    }

    show[0].addEventListener('click', () => {
        if (pass.type == 'password') {
            pass.type = 'text'
        }
        else {
            pass.type = 'password'
        }
    })

    go.addEventListener('click', () => {
        if (go.style.backgroundColor == '#efefef') {

        }
        else {
            for (i=0; i<names.length; i++) {
                if (names[i]!=user.value) {
                    console.log(names[i])
                }
                else {
                    console.log('go on')
                    if (passes[i]!=pass.value) {
                        alert('Password is wrong')
                    }
                    else {
                        f = open('Flap.html')
                        f.localStorage.setItem('id', i)
                        f.close()
                        open('Flap.html', '_parent')
                    }
                    break
                }
            }
        }
    })
}