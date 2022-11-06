export function generateRandomColourHex(): string{
    let hexCode: string = ('00000'+(Math.random()*16777215).toString(16)).substr(-6)
    return "#" + hexCode ;
}