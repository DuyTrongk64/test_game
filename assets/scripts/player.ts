import { _decorator, Component, Node, Vec2,Vec3, systemEvent,SystemEvent, SystemEventType, KeyCode, EventKeyboard, v2, tween, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('player')
export class player extends Component {
    
    private _movementSpeed = 0;
    private _curPos = new Vec2();
    private _targetPos = new Vec2();
    private speed: number = 20;

    
    start() {
        systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    onDestroy() {
        systemEvent.off(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    }
    
    onKeyDown(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.KEY_A:
                tween(this.node).by(0.1,{ position: new Vec3(-this.speed, 0, 0) }).start();
                break;
            case KeyCode.KEY_D:
                tween(this.node).by(0.1,{ position: new Vec3(this.speed, 0, 0)}).start();
                break;
            case KeyCode.KEY_W:
                tween(this.node).by(0.1,{ position: new Vec3(0, this.speed, 0)}).start();
                break;
            case KeyCode.KEY_S:
                tween(this.node).by(0.1,{ position: new Vec3(0, -this.speed, 0)}).start();
                break;
            default:
                break;
        }
    }

    update(deltaTime: number) {
        
    }
}


