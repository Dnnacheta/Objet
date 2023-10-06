function x() {
    dis = true
    //**************h0**************\\
    h0.style.animationName = 'x0'
    h0.style.transform = 'rotateZ(45deg)'
    h0.style.width = '42.4264068px'
    h0.style.top = '15px'
    h0.style.left = '-5px'
    h0.style.position = 'fixed'

    //**************h1**************\\
    h1.style.animationName = 'x1'
    h1.style.opacity = 0

    //**************h2**************\\
    h2.style.position = 'fixed'
    h2.style.animationName = 'x2'
    h2.style.transform = 'rotateZ(-45deg)'
    h2.style.width = '42.4264068px'
    h2.style.top = '15px'
    h2.style.left = '-5px'
}

function y() {
    dis = false

    //**************h0**************\\
    h0.style.animationName = 'y0'
    h0.style.transform = 'rotateZ(0deg)'
    h0.style.width = '30px'
    h0.style.top = '0px'
    h0.style.left = '0px'
    h0.style.position = 'relative'
    console.log('done')

    //**************h1**************\\
    h1.style.animationName = 'y1'
    h1.style.opacity = 1

    //**************h2**************\\
    h2.style.position = 'relative'
    h2.style.animationName = 'y2'
    h2.style.transform = 'rotateZ(0deg)'
    h2.style.width = '30px'
    h2.style.top = '0px'
    h2.style.left = '0px'
}

window.onload = () => {
    dis = false
    h0 = document.querySelector('#hr0')
    h1 = document.querySelector('#hr1')
    h2 = document.querySelector('#hr2')
    hr = document.querySelector('.hr')
    accs = document.querySelector('#accs')

    accs.addEventListener('click', () => {
        if (dis == false) {
            x()
        }
        else {
            y()
        }
    })
}