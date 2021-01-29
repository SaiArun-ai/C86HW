var canvas = new fabric.Canvas('myCanvas');
biw = 30;
bih = 30;
px = 10;
py = 10;
po = '';
bo = '';
function player_Update(){
    fabric.Image.fromURL("player.png",function(Img){
    po = Img;
    po.scaleToWidth("100");
    po.scaleToHeight("120");
    po.set({
        top:py,
        left:px
        });
        
    });
    canvas.add(po);
}
function block_Update(getImage){
    fabric.Image.fromURL(getImage,function(Img){
    bo = Img;
    bo.scaleToWidth(biw);
    bo.scaleToHeight(bih);
    bo.set({
        top:py + 12,
        left:px + 12
        });
        
    });
    canvas.add(bo);
}
