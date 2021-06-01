/**
 * created by WHASTEVER on 2021/6/1.
 */

class Tetris {
	constructor() {
		this.canvas = document.querySelector('#tetris_0895')
		this.ctx = this.canvas.getContext('2d')
		this.config={
			width:10,
			height:30,
			unit:10,
			moveUnit:2,
			brickPool:[
				{type:1,count:4,color:'#123123'},
				{type:2,count:4,color:'#123123'},
				{type:3,count:4,color:'#123123'},
				{type:4,count:4,color:'#123123'},
				{type:5,count:4,color:'#123123'},
			]
		}
		console.log(/Tetris:/,this.ctx);
	}

	creatBrick(){

	}

	// 基础元素
	baseElement(){

	}

	clear(){
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
}

window.onload= function (){
	console.log(111111);
	setTimeout(()=>{
		window._tetris = new Tetris()
	},100)
};
