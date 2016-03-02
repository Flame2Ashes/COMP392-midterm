/// <reference path="../../typings/tsd.d.ts"/>

module objects {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    export class Control { 
        
        //PUBLIC INSTANCE VARIABLES
        public rotateBaseCube:number;
        public rotateCube2:number;
        public rotateCube3:number;
        public rotateCube4:number;
        public rotateCube5:number;
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(rotateBaseCube:number, rotateCube2:number, rotateCube3:number, rotateCube4:number, rotateCube5:number) {
            this.rotateBaseCube = rotateBaseCube;
            this.rotateCube2 = rotateCube2;
            this.rotateCube3 = rotateCube3;
            this.rotateCube4 = rotateCube4;
            this.rotateCube5 = rotateCube5;
            
        }
        
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
    }
}
