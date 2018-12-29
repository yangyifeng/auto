auto();

var 状态 = true;

while(状态){
    sleep(200);
    if(!状态){
        swipe(300,800,300,200,500)
        状态=true;
        continue;
    }
    寻找可以点赞();
    状态=scrollDown();
}

function 寻找可以点赞(){
    var d = desc("评论").untilFind();
    log(d.length);
    d.forEach(child=>{
        sleep(200);
        log(child);
        child.click();
        click('赞');
    });
}