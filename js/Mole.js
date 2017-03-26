/*
* name;
*/
var Mole = (function () {
    function Mole(nomalState,hitState,downY,hitCallBackHd,scoreImg) {
        this.nomalState = nomalState;
        this.hitState = hitState;
        this.downY = downY;
        this.upY = this.nomalState.y;
        this.hitCallBackHd = hitCallBackHd;
        this.scoreImg = scoreImg;
        this.scoreY = this.scoreImg.y;
        this.reset();
        this.nomalState.on(Laya.Event.CLICK,this,this.hit);
    };
    var _proto = Mole.prototype;
    // 重置
    _proto.reset = function(){
        this.isActive = false;
        this.isShow = false;
        this.isHit = false;
        this.scoreImg.visible = false;
        this.nomalState.visible = false;
        this.hitState.visible = false;
    }
    // 显示
    _proto.show = function(){
        if(this.isActive)return;
        this.isActive = true;
        this.isShow = true;
        this.type = Math.random()<0.3?1:2;
        this.nomalState.skin = "comp/mouse_normal_" + this.type + ".png";
        this.hitState.skin = "comp/mouse_hit_" + this.type + ".png";
        this.scoreImg.skin = "comp/score_" + this.type + ".png";
        this.nomalState.y = this.downY;
        this.nomalState.visible = true;
        Laya.Tween.to(this.nomalState,{y:this.upY},500,Laya.Ease.backOut,Laya.Handler.create(this,this.showColpe))
    }
    //停留
    _proto.showColpe = function(){
        if(this.isShow && !this.isHit){
            Laya.timer.once(2000,this,this.hide);
        }
    }
    //消失
    _proto.hide = function(){
        if(this.isShow && !this.isHit){
            this.isShow = false;
            Laya.Tween.to(this.nomalState,{y:this.downY},300,Laya.Ease.backIn,Laya.Handler.create(this,this.reset));
        }
    }
    //受击
    _proto.hit = function(){
        if(this.isShow && !this.isHit){
            this.isShow = true;
            this.isHit = true;
            this.nomalState.visible = false;
            this.hitState.visible = true;
            this.hitCallBackHd.runWith(this.type);
            Laya.timer.clear(this,this.hide);
            Laya.timer.once(500,this,this.reset);
            this.showScore();
        }
    }
    _proto.showScore = function(){
        this.scoreImg.y = this.scoreY + 30;
        this.scoreImg.scale(0,0);
        this.scoreImg.visible = true;
        Laya.Tween.to(this.scoreImg,{y:this.scoreY,scaleX:1,scaleY:1},300,Laya.Ease.backOut);
    }

    return Mole;
}());