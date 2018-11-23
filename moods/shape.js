exports.shape = function () {
    let shapeInput = process.argv[4] 

    if(shapeInput == 'shp1') {
        return 0
    } else if(shapeInput == 'shp2') {
        return 1
    } else {
        return 2
    }
}