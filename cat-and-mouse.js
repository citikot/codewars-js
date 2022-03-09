function catMouse(map, moves) {
    var res = "Caught!";

    if (map.indexOf("C") === -1 || map.indexOf("m") === -1) {
        res = "boring without two animals";
    } else {
        var matrix = map.split("\n");
        var i = 0;
        for (; i < matrix.length; i++) {
            if (matrix[i].indexOf("C") !== -1) {
                var catX = matrix[i].indexOf("C");
                var catY = i;
            }
            if (matrix[i].indexOf("m") !== -1) {
                var mouseX = matrix[i].indexOf("m");
                var mouseY = i;
            }

        }
        var distX = (catX - mouseX) > 0 ? catX - mouseX : mouseX - catX;
        var distY = (catY - mouseY) > 0 ? catY - mouseY : mouseY - catY;

        if ((distX + distY) > moves) res = "Escaped!"

    }
    return res;
}
