import { _decorator, Component, Node, systemEvent, SystemEvent, KeyCode, EventKeyboard, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('player')
export class player extends Component {

    private speed: number;
    private goLeft: boolean;
    private goRight: boolean;
    private goUp: boolean;
    private goDown: boolean;

    onKeyDown(event: EventKeyboard) {
        // set a flag when key pressed
        switch(event.keyCode) {
            case KeyCode.KEY_A:
                this.goLeft = true;
                break;
            case KeyCode.KEY_D:
                this.goRight = true;
                break;
            case KeyCode.KEY_W:
                this.goUp = true;
                break;
            case KeyCode.KEY_S:
                this.goDown = true;
                break;
        }
    }

    onKeyUp(event: EventKeyboard) {
        // unset a flag when key released
        switch(event.keyCode) {
            case KeyCode.KEY_A:
                this.goLeft = false;
                break;
            case KeyCode.KEY_D:
                this.goRight = false;
                break;
            case KeyCode.KEY_W:
                this.goUp = false;
                break;
            case KeyCode.KEY_S:
                this.goDown = false;
                break;
        }
    }

    start() {

        this.goLeft = false;
        this.goRight = false;
        this.goUp = false;
        this.goDown = false;

        this.speed = 200;

        systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);

        systemEvent.on(SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    onDestroy() {
        systemEvent.off(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        systemEvent.off(SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    update(deltaTime: number) {
        let direction = new Vec3(0, 0, 0);
        if (this.goLeft) {
            direction.x -= 1;
        } 
        if (this.goRight) {
            direction.x += 1;
        }
        if (this.goUp) {
            direction.y += 1;
        }
        if (this.goDown) {
            direction.y -= 1;
        }
        if (direction.magSqr() > 0) {
            direction.normalize();
            let newPosition = this.node.position.add(direction.multiplyScalar(this.speed * deltaTime));
            this.node.setPosition(newPosition);
        }
    }
}