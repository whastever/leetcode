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

	drawGrid(position=[]){
		position.forEach(i=>{
			this.ctx.fillRect(i[0],i[1],i[2],i[3])
		})
	}

	// 基础元素
	baseElement(x,y,type){
		// const fillRect = this.ctx.fillRect;
		const { unit } = this.config;
		switch (type){
			case 1:{
				this.drawGrid([[x,y,unit,unit*3],[x+unit,y+unit,unit,unit]]);
				break;
			}
			case 2:{
				this.drawGrid([[x,y,unit*2,unit*2]]);
				break;
			}
			case 3:{
				this.drawGrid([[x,y,unit*3,unit],[x+unit*2,y+unit,unit,unit]]);
				break;
			}
			case 4:{
				this.drawGrid([[x,y,unit*3,unit],[x,y+unit,unit,unit]]);
				break;
			}
			case 5:{
				this.drawGrid([[x,y,unit*2,unit],[x+unit,y+unit,unit*2,unit]]);
				break;
			}
			case 6:{
				this.drawGrid([[x,y,unit*2,unit],[x-unit,y+unit,unit*2,unit]]);
				break;
			}
		}


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
