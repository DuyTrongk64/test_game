import { _decorator, Component, Node, input, Input, EventMouse } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('pl_bullet')
export class bullet extends Component {
    @property
    speed: number = 0;

    private ammor: number;

    onMouseUp(event: EventMouse){
        if(event.getButton()){
            this.
            this.ammor++;
        }
    }
    start() {
        this.ammor = 0;
        this.speed = 100;
        this.node.active = false;

        input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
    }


    update(deltaTime: number) {
        
    }
}


