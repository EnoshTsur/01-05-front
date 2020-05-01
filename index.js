const baseStyle = {
    fontFamily: 'Lobster , cursive',
    padding: '1rem',
    textShadow: '0 2rem 3rem black'
}

const errorStyle = {
    ...baseStyle,
    color: 'red',
    fontWeight: 700,
}

const successStyle = {
    ...baseStyle,
    color: 'green',
    fontWeight: 500,
}

function clickHandler() {
    const nameValue = document.getElementById('name').value
    const greetingsValue = document.getElementById('greetings').value
    const text = `${greetingsValue}, ${nameValue}!`
    const header  = document.getElementById('header')

    header.innerText = text

    const style = nameValue === 'enosh' ? successStyle : errorStyle

    // for(const [key, value] of Object.entries(style)) {
    //     header.style[key] = value
    // }

    Object.entries(style)
    .forEach(([key, value]) => header.style[key] = value)
}

// function changeHandler() {
//     const nameValue = document.getElementById('name').value
//     const greetingsValue = document.getElementById('greetings').value
//     const text = `${greetingsValue}, ${nameValue}!`
//     document.getElementById('header').innerText = text
// }