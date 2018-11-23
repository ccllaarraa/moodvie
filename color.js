exports.color = function () {
    let colorInput = process.argv[2] //front-end define the color choice as 'color' then we can request it here
    if(colorInput == 'yellow' || colorInput == 'orange'){
        return 1
    } else if(colorInput == 'brown' || colorInput == 'purple'){
        return 0
    } else {
        return 2
    }
}