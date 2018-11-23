exports.rorschach = function () {
    let rorschachInput = process.argv[3]  

    if(rorschachInput == 'img1') {
        return 0
    } else if(rorschachInput == 'img2') {
        return 1
    } else {
        return 2
    }
}