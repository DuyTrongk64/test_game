import { _decorator, Component, Node, instantiate, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Game')
export class Game extends Component {
    
   @property(Prefab)
   bulletPrefab: Prefab = null;

   @property(Node)
   player: Node = null;

    spawnBullet(){
        var newBullet = instantiate(this.bulletPrefab);

        this.node.addChild(newBullet);

        newBullet.setPosition(this.player.getPosition());

        //newBullet.getComponent('bullet'). = this;
    }
    
    update(deltaTime: number) {
        
    }
}


