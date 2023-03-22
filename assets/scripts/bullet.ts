import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('bullet')
export class bullet extends Component {
    start() {
        this.node.active = false;
    }

    update(deltaTime: number) {
        
    }
}


