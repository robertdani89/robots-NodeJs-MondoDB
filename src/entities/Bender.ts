import {Robot} from "./Robot";

export class Bender extends Robot{
    currentAngle: number;
    speedWhenEmptyInAnglesPerSecond: number;
    targetAngle: number;
    startingAngle: number;
    bendingSpeedInAnglesPerSeconds: number;

    constructor(id: number, name: string, model: number, description: string, currentAngle: number, speedWhenEmptyInAnglesPerSecond: number, targetAngle: number, startingAngle: number, bendingSpeedInAnglesPerSeconds: number) {
        super(id, name, model, description);
        this.currentAngle = currentAngle;
        this.speedWhenEmptyInAnglesPerSecond = speedWhenEmptyInAnglesPerSecond;
        this.targetAngle = targetAngle;
        this.startingAngle = startingAngle;
        this.bendingSpeedInAnglesPerSeconds = bendingSpeedInAnglesPerSeconds;
    }
}
