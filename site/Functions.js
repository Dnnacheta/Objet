function acquire(opened=false) {
    if (opened == false) {
        f = open('Flap.html')
    }
    names = array('username')
    passes = array('password')
    highscores = array('highscore', '0')
    if ((id=localStorage.getItem('id')) === null || (id=localStorage.getItem('id')) === undefined) {
        localStorage.setItem('id', 0)
        id = localStorage.getItem('id')
    }
    id = eval(id)
    try {f.close()} catch{}
    return(names, passes, highscores, id)
}

function array(key, value='') {
    if ((k=localStorage.getItem(key)) === null || (k=localStorage.getItem(key)) === undefined || (k=localStorage.getItem(key)) == '') {
        localStorage.setItem(key, value)
        k=localStorage.getItem(key)
    }
    temp0=''
    keys=[]
    for (i=0; i<k.length; i++) {
        if (k[i]!=',') {
            temp0 = temp0+k[i]
        }
        else if (k[i]==',') {
            keys[keys.length] = temp0
            temp0 = ''
        }
    }
    keys.push(temp0)
    return(keys)
}