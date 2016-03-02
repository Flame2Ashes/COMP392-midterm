/// <reference path="../../typings/tsd.d.ts"/>
//Filename: control.ts
//Author: Angelina Gutierrez
//Last Modified: 03/02/2016
//Description: Allows rotation of individual cubes
var objects;
(function (objects) {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    var Control = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Control(rotateBaseCube, rotateCube2, rotateCube3, rotateCube4, rotateCube5) {
            this.rotateBaseCube = rotateBaseCube;
            this.rotateCube2 = rotateCube2;
            this.rotateCube3 = rotateCube3;
            this.rotateCube4 = rotateCube4;
            this.rotateCube5 = rotateCube5;
        }
        return Control;
    }());
    objects.Control = Control;
})(objects || (objects = {}));

//# sourceMappingURL=control.js.map
