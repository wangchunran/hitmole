var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var GameOverUI=(function(_super){
		function GameOverUI(){
			
		    this.restartBtn=null;
		    this.scoreNums=null;

			GameOverUI.__super.call(this);
		}

		CLASS$(GameOverUI,'ui.GameOverUI',_super);
		var __proto__=GameOverUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameOverUI.uiView);
		}

		STATICATTR$(GameOverUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":500,"height":400},"child":[{"type":"Image","props":{"y":0,"x":0,"width":500,"skin":"comp/overBg.png","height":400,"sizeGrid":"26,20,22,17"},"child":[{"type":"Image","props":{"y":41,"x":26,"skin":"comp/total Score.png"}},{"type":"Button","props":{"y":285,"x":161,"var":"restartBtn","stateNum":"2","skin":"comp/btn_restart.png","name":"restartBtn"}},{"type":"Box","props":{"y":188,"x":160,"var":"scoreNums"},"child":[{"type":"Clip","props":{"skin":"comp/clip_number.png","name":"item0","clipX":10}},{"type":"Clip","props":{"x":18,"skin":"comp/clip_number.png","name":"item1","clipX":10}},{"type":"Clip","props":{"x":36,"skin":"comp/clip_number.png","name":"item2","clipX":10}},{"type":"Clip","props":{"x":54,"skin":"comp/clip_number.png","name":"item3","clipX":10}},{"type":"Clip","props":{"x":72,"skin":"comp/clip_number.png","name":"item4","clipX":10}},{"type":"Clip","props":{"x":90,"skin":"comp/clip_number.png","name":"item5","clipX":10}},{"type":"Clip","props":{"x":108,"skin":"comp/clip_number.png","name":"item6","clipX":10}},{"type":"Clip","props":{"x":126,"skin":"comp/clip_number.png","name":"item7","clipX":10}},{"type":"Clip","props":{"x":144,"skin":"comp/clip_number.png","name":"item8","clipX":10}},{"type":"Clip","props":{"x":162,"skin":"comp/clip_number.png","name":"item9","clipX":10}}]}]}]};}
		]);
		return GameOverUI;
	})(View);
var GameStartUI=(function(_super){
		function GameStartUI(){
			
		    this.startBtn=null;

			GameStartUI.__super.call(this);
		}

		CLASS$(GameStartUI,'ui.GameStartUI',_super);
		var __proto__=GameStartUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameStartUI.uiView);
		}

		STATICATTR$(GameStartUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":55,"x":38,"skin":"comp/help.png"}},{"type":"Button","props":{"y":430,"x":311,"var":"startBtn","stateNum":"2","skin":"comp/btn_start.png"}}]};}
		]);
		return GameStartUI;
	})(View);
var HammerUI=(function(_super){
		function HammerUI(){
			
		    this.hit=null;

			HammerUI.__super.call(this);
		}

		CLASS$(HammerUI,'ui.HammerUI',_super);
		var __proto__=HammerUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(HammerUI.uiView);
		}

		STATICATTR$(HammerUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":100,"height":100},"child":[{"type":"Image","props":{"y":64,"x":61,"width":98,"skin":"comp/hammer.png","rotation":-20,"pivotY":47,"pivotX":55,"height":77},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"rotation":[{"value":-20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":0},{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":1},{"value":-20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":5}]}}],"name":"hit","id":1,"frameRate":24,"action":0}]};}
		]);
		return HammerUI;
	})(View);
var gameUI=(function(_super){
		function gameUI(){
			
		    this.timeBar=null;
		    this.scoreNums=null;

			gameUI.__super.call(this);
		}

		CLASS$(gameUI,'ui.gameUI',_super);
		var __proto__=gameUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(gameUI.uiView);
		}

		STATICATTR$(gameUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":775,"height":575},"child":[{"type":"Image","props":{"y":25,"x":25,"skin":"comp/back.png"}},{"type":"Box","props":{"y":188,"x":148,"name":"item0"},"child":[{"type":"Image","props":{"x":8,"skin":"comp/mouse_normal_1.png","name":"nomal"}},{"type":"Image","props":{"y":14,"x":10,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"skin":"comp/mask-01.png"}},{"type":"Image","props":{"y":-3,"x":68,"skin":"comp/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":189,"x":338,"name":"item1"},"child":[{"type":"Image","props":{"x":8,"skin":"comp/mouse_normal_1.png","name":"nomal"}},{"type":"Image","props":{"y":14,"x":10,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"skin":"comp/mask-02.png"}},{"type":"Image","props":{"y":0,"x":70,"skin":"comp/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":194,"x":537,"name":"item2"},"child":[{"type":"Image","props":{"x":8,"skin":"comp/mouse_normal_1.png","name":"nomal"}},{"type":"Image","props":{"y":14,"x":10,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"skin":"comp/mask-03.png"}},{"type":"Image","props":{"y":-2,"x":66,"skin":"comp/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":286,"x":129,"name":"item3"},"child":[{"type":"Image","props":{"x":8,"skin":"comp/mouse_normal_1.png","name":"nomal"}},{"type":"Image","props":{"y":14,"x":10,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"skin":"comp/mask-04.png"}},{"type":"Image","props":{"y":6,"x":69,"width":86,"skin":"comp/score_2.png","pivotY":17,"pivotX":41,"name":"scoreImg","height":30}}]},{"type":"Box","props":{"y":282,"x":345,"name":"item4"},"child":[{"type":"Image","props":{"x":8,"skin":"comp/mouse_normal_1.png","name":"nomal"}},{"type":"Image","props":{"y":14,"x":10,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"skin":"comp/mask-05.png"}},{"type":"Image","props":{"y":6,"x":68,"skin":"comp/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":284,"x":544,"name":"item5"},"child":[{"type":"Image","props":{"x":8,"skin":"comp/mouse_normal_1.png","name":"nomal"}},{"type":"Image","props":{"y":14,"x":10,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"skin":"comp/mask-06.png"}},{"type":"Image","props":{"y":3,"x":70,"skin":"comp/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":383,"x":122,"name":"item6"},"child":[{"type":"Image","props":{"x":8,"skin":"comp/mouse_normal_1.png","name":"nomal"}},{"type":"Image","props":{"y":14,"x":10,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"skin":"comp/mask-07.png"}},{"type":"Image","props":{"y":2,"x":68,"skin":"comp/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":386,"x":342,"name":"item7"},"child":[{"type":"Image","props":{"x":8,"skin":"comp/mouse_normal_1.png","name":"nomal"}},{"type":"Image","props":{"y":14,"x":10,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"skin":"comp/mask-08.png"}},{"type":"Image","props":{"y":2,"x":69,"skin":"comp/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":386,"x":566,"name":"item8"},"child":[{"type":"Image","props":{"x":8,"skin":"comp/mouse_normal_1.png","name":"nomal"}},{"type":"Image","props":{"y":14,"x":10,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"skin":"comp/mask-09.png"}},{"type":"Image","props":{"y":0,"x":62,"skin":"comp/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"ProgressBar","props":{"y":9,"x":2,"var":"timeBar","value":1,"skin":"comp/progress_time.png"}},{"type":"Box","props":{"y":40,"x":28,"var":"scoreNums"},"child":[{"type":"Clip","props":{"skin":"comp/clip_number.png","name":"item0","clipX":10}},{"type":"Clip","props":{"x":18,"skin":"comp/clip_number.png","name":"item1","clipX":10}},{"type":"Clip","props":{"x":36,"skin":"comp/clip_number.png","name":"item2","clipX":10}},{"type":"Clip","props":{"x":54,"skin":"comp/clip_number.png","name":"item3","clipX":10}},{"type":"Clip","props":{"x":72,"skin":"comp/clip_number.png","name":"item4","clipX":10}},{"type":"Clip","props":{"x":90,"skin":"comp/clip_number.png","name":"item5","clipX":10}},{"type":"Clip","props":{"x":108,"skin":"comp/clip_number.png","name":"item6","clipX":10}},{"type":"Clip","props":{"x":126,"skin":"comp/clip_number.png","name":"item7","clipX":10}},{"type":"Clip","props":{"x":144,"skin":"comp/clip_number.png","name":"item8","clipX":10}},{"type":"Clip","props":{"x":162,"skin":"comp/clip_number.png","name":"item9","clipX":10}}]}]};}
		]);
		return gameUI;
	})(View);
var TestPageUI=(function(_super){
		function TestPageUI(){
			
		    this.btn=null;
		    this.clip=null;
		    this.combobox=null;
		    this.tab=null;
		    this.list=null;
		    this.btn2=null;
		    this.check=null;
		    this.radio=null;
		    this.box=null;

			TestPageUI.__super.call(this);
		}

		CLASS$(TestPageUI,'ui.test.TestPageUI',_super);
		var __proto__=TestPageUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(TestPageUI.uiView);
		}

		STATICATTR$(TestPageUI,
		['uiView',function(){return this.uiView={"type":"View","child":[{"props":{"x":0,"y":0,"skin":"comp/bg.png","sizeGrid":"30,4,4,4","width":600,"height":400},"type":"Image"},{"props":{"x":41,"y":56,"skin":"comp/button.png","label":"点我赋值","width":150,"height":37,"sizeGrid":"4,4,4,4","var":"btn"},"type":"Button"},{"props":{"x":401,"y":56,"skin":"comp/clip_num.png","clipX":10,"var":"clip"},"type":"Clip"},{"props":{"x":220,"y":143,"skin":"comp/combobox.png","labels":"select1,select2,selecte3","selectedIndex":1,"sizeGrid":"4,20,4,4","width":200,"height":23,"var":"combobox"},"type":"ComboBox"},{"props":{"x":220,"y":96,"skin":"comp/tab.png","labels":"tab1,tab2,tab3","var":"tab"},"type":"Tab"},{"props":{"x":259,"y":223,"skin":"comp/vscroll.png","height":150},"type":"VScrollBar"},{"props":{"x":224,"y":223,"skin":"comp/vslider.png","height":150},"type":"VSlider"},{"type":"List","child":[{"type":"Box","child":[{"props":{"skin":"comp/label.png","text":"this is a list","x":26,"y":5,"width":78,"height":20,"fontSize":14,"name":"label"},"type":"Label"},{"props":{"x":0,"y":2,"skin":"comp/clip_num.png","clipX":10,"name":"clip"},"type":"Clip"}],"props":{"name":"render","x":0,"y":0,"width":112,"height":30}}],"props":{"x":452,"y":68,"width":128,"height":299,"vScrollBarSkin":"comp/vscroll.png","repeatX":1,"var":"list"}},{"props":{"x":563,"y":4,"skin":"comp/btn_close.png","name":"close"},"type":"Button"},{"props":{"x":41,"y":112,"skin":"comp/button.png","label":"点我赋值","width":150,"height":66,"sizeGrid":"4,4,4,4","labelSize":30,"labelBold":true,"var":"btn2"},"type":"Button"},{"props":{"x":220,"y":188,"skin":"comp/checkbox.png","label":"checkBox1","var":"check"},"type":"CheckBox"},{"props":{"x":220,"y":61,"skin":"comp/radiogroup.png","labels":"radio1,radio2,radio3","var":"radio"},"type":"RadioGroup"},{"type":"Panel","child":[{"props":{"skin":"comp/image.png"},"type":"Image"}],"props":{"x":299,"y":223,"width":127,"height":150,"vScrollBarSkin":"comp/vscroll.png"}},{"props":{"x":326,"y":188,"skin":"comp/checkbox.png","label":"checkBox2","labelColors":"#ff0000"},"type":"CheckBox"},{"type":"Box","child":[{"props":{"y":70,"skin":"comp/progress.png","width":150,"height":14,"sizeGrid":"4,4,4,4","name":"progress"},"type":"ProgressBar"},{"props":{"y":103,"skin":"comp/label.png","text":"This is a Label","width":137,"height":26,"fontSize":20,"name":"label"},"type":"Label"},{"props":{"y":148,"skin":"comp/textinput.png","text":"textinput","width":150,"name":"input"},"type":"TextInput"},{"props":{"skin":"comp/hslider.png","width":150,"name":"slider"},"type":"HSlider"},{"props":{"y":34,"skin":"comp/hscroll.png","width":150,"name":"scroll"},"type":"HScrollBar"}],"props":{"x":41,"y":197,"var":"box"}}],"props":{"width":600,"height":400}};}
		]);
		return TestPageUI;
	})(View);