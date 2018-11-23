exports.shape = function () {
    let shapeInput = req.body.shape 

    if(shapeInput == 'shp1') {
        return 0
    } else if(shapeInput == 'shp2') {
        return 1
    } else {
        return 2
    }
}