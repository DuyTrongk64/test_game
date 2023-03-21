import { _decorator, Component, Node, Vec2, systemEvent, SystemEventType, KeyCode } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('player')
export class player extends Component {
    
    private _movementSpeed = 0;
    private _curPos = new Vec2();
    private _targetPos = new Vec2();
    
    start() {
        systemEvent.on(SystemEventType.KEY_DOWN,this.keyPress(),this)
    }

    keyPress(event: KeyboardEvent){
        switch(event.keyCode){
            case KeyCode.KEY_W:
                moveBy(50,50);
                break;
            default:  `none`;
        }
    }
    update(deltaTime: number) {
        
    }
}


