function 新闻列表一页(page){
    var c = id('p4').find();
    log(c.length + ',' + page)
    if(c.length == 0 || page >= c.length){
        sleep(1000);
        swipe(500, device.height-300, 500, 300, 500)
        sleep(1000);
        swipe(500, device.height-300, 500, 300, 500)
        sleep(1000);
        新闻列表一页(0);
    }
    else{        
        log('进来')
        c[page].children().findOne(id('a1h')).click();

        //不看全图片新闻，滚动麻烦
        var back3 = id('ii').find();
        if(!back3.empty()){
            id('ii').findOne().click();
        }
        else{
            sleep(3000);
            swipe(500, device.height-300, 500, 300, 500)
            sleep(3000);
            swipe(500, 300, 500, device.height-300, 500);
            sleep(3000);
            swipe(500, device.height-300, 500, 300, 500)
            sleep(3000);
            swipe(500, 300, 500, device.height-300, 500);
            sleep(3000);
            swipe(500, device.height-300, 500, 300, 500)
            sleep(3000);
            swipe(500, 300, 500, device.height-300, 500);
            sleep(3000);
            swipe(500, device.height-300, 500, 300, 500)
            sleep(3000);
            swipe(500, 300, 500, device.height-300, 500);
            sleep(3000);
            swipe(500, device.height-300, 500, 300, 500)
            sleep(3000);
            swipe(500, 300, 500, device.height-300, 500);
            sleep(3000);
            swipe(500, device.height-300, 500, 300, 500)
            sleep(3000);
            swipe(500, 300, 500, device.height-300, 500);
            sleep(3000);
            swipe(500, device.height-300, 500, 300, 500)
            sleep(3000);
            swipe(500, 300, 500, device.height-300, 500);
            sleep(3000);
            swipe(500, device.height-300, 500, 300, 500)
            sleep(3000);
            swipe(500, 300, 500, device.height-300, 500);
            sleep(3000);
            swipe(500, device.height-300, 500, 300, 500)
            sleep(3000);
            swipe(500, 300, 500, device.height-300, 500);
            sleep(3000);
            swipe(500, device.height-300, 500, 300, 500)
            sleep(3000);
            swipe(500, 300, 500, device.height-300, 500);
            sleep(3000);
            swipe(500, device.height-300, 500, 300, 500)
            sleep(3000);
            swipe(500, 300, 500, device.height-300, 500);
            sleep(3000);
            swipe(500, device.height-300, 500, 300, 500)
            sleep(3000);
            swipe(500, 300, 500, device.height-300, 500);
            sleep(3000);
            swipe(500, device.height-300, 500, 300, 500)
            sleep(3000);
            swipe(500, 300, 500, device.height-300, 500);
            sleep(3000);

            var back1 = id('g6').find();
            var back2 = id('nm').find();
            if(!back1.empty()){
                id('g6').click();
            }
            if(!back2.empty()){
                id('nm').findOne().parent().click();
            }
        }
        
        sleep(1000);
        新闻列表一页(page+1);
    }
}

新闻列表一页(0);