function 新闻列表单屏(line){

    //从上一个任务结束后开始，等待1秒
    sleep(1000)

    //可视区域为 id('p4')
    //单屏内的条目为 children
    var t = id('p4').findOne().children();
    
    //不看广告，存在 a1h 则非广告
    //不看视频，视频的 返回按钮 格式很多，抓取困难
    if(t[line].findOne(id('a1h')) != null && t[line].findOne(id('ah3')) == null) {
        //点击进去
        t[line].findOne(id('a1h')).parent().click()
        //等待 5秒 新闻刷新出来
        sleep(5000)

        //纯图片新闻
        if(id('ii').exists()) {
            //滚动查看图集：28秒
            for(var i=0; i<4; i++){
                swipe(device.width-50, 500, 50, 500, 500)
                sleep(3000)
                swipe(50, 500, device.width-50, 500, 500)
                sleep(3000)
            }
            //图集关闭
            id('ii').findOne().click()
        }

        //图文新闻
        if(id('g6').exists()) {
            //滚动查看文字新闻：35秒
            for(var i=0; i<5; i++){
                swipe(500, device.height-300, 500, 300, 500)
                sleep(3000)
                swipe(500, 300, 500, device.height-300, 500)
                sleep(3000)
            }
            //新闻关闭
            id('g6').findOne().click()
        }
    }

    //从新闻内页点击返回后，等待 1秒 再读取新闻列表
    sleep(1000)
    //下一条
    line++;

    //滚屏
    if(line >= t.length) {
        swipe(500, device.height-300, 500, 300, 800)
        swipe(500, device.height-300, 500, 300, 800)
        新闻列表单屏(0);
    } else {
        新闻列表单屏(line);
    }

}

新闻列表单屏(0);