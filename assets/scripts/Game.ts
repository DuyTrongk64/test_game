import { _decorator, Component, Node, instantiate } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Game')
export class Game extends Component {
    
    property: {
        bulletPrefab: {
            default: null,
            type: cPrefab
        },
        player: {
            default: null,
            type: Node
        },
    

    spawnBullet:function(){
        var newBullet = instantiate(this.bulletPrefab)
    }
}
    update(deltaTime: number) {
        
    }
}


