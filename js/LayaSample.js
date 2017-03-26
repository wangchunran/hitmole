(function(LayaSample){
    (function(){
        //初始化引擎
        Laya.init(800,600);
        Laya.stage.scaleMode = Laya.Stage.SCALE_NOSCALE;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
        //设置背景颜色
        Laya.stage.bgColor = "#ffcccc";
        //加载资源
        Laya.loader.load("res/atlas/comp.json",Laya.Handler.create(this,onLoaded),null,Laya.Loader.ATLAS)
    })();
    function onLoaded(){
        //实例化
        LayaSample.gameStart = new GameStart();
        Laya.stage.addChild(LayaSample.gameStart);
        //var game = new Game(); 
        //Laya.stage.addChild(game);
    }
})(window.LayaSample || (window.LayaSample = {}));

          
          
