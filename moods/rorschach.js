exports.rorschach = function () {
    let rorschachInput = req.body.rorschach 

    if(rorschachInput == 'img1') {
        return 0
    } else if(rorschachInput == 'img2') {
        return 1
    } else {
        return 2
    }
}