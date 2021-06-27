export const icon = {
    global: `  <icon></icon>`,
    home: `<home></home>`,
    button(x, y) {
        return `<button>${x}</button>`
    }
}


console.log(icon.global)
console.log(icon.home)

icon.button(4, 'x')


async function getInput(){
    
}