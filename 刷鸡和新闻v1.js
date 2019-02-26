//看头条新闻的数量
var readNewsNum = 1;

function tab_视频() {
    //切换
    id('kv').findOne().click()
    sleep(500)
    //刷新
    id('kv').findOne().click()
    sleep(2000)
    //点击
    click(device.width / 2, device.height / 2)
    sleep(1000)
    click(device.width / 2, device.height / 2)
    //看视频 30秒
    sleep(30 * 1000)

    //看头条
    点击头条并刷新()
}

function tab_小视频() {
    //切换
    id('kw').findOne().click()
    sleep(500)
    //刷新
    id('kw').findOne().click()
    sleep(3500)
    //滚动看 33 秒
    for(var i=0; i<6; i++){
        swipe(500, device.height-300, 500, 300, 500)
        sleep(5 * 1000)
    }

    //看头条
    点击头条并刷新()
}

function 点击头条并刷新() {
    //看头条
    id('kt').findOne().click()
    sleep(500)
    //刷新
    id('kt').findOne().click()
    sleep(2000)

    tab_头条(0)
}

function tab_头条(line){
    //可视区域为 id('p4')
    //单屏内的条目为 children
    var t = id('p4').findOne().children();
    
    //每看5个新闻就去看一次视频
    if(readNewsNum % 5 == 0) {
        readNewsNum++
        //随机去看 「视频」 或者 「小视频」
        var r = random(1,10)
        if(r > 5) {
            tab_视频()
        } else {
            tab_小视频()
        }
    } else if(readNewsNum % 11 == 0) {
        //每看10个新闻就去收一次鸡
        readNewsNum++
        app.launchPackage("com.sandianji.sdjandroid")
        sleep(2000)
        闪电鸡()
    } else {
        //只看普通新闻: 有 title a1j，有评论数 aha，有时间 ahb，没有 ah9(置顶、视频)
        if(t[line].findOne(id('a1j')) != null 
            && t[line].findOne(id('aha')) != null 
            && t[line].findOne(id('ahb')) != null 
            && t[line].findOne(id('ah9')) == null) {
            //点击进去
            t[line].findOne(id('a1j')).parent().click()
            //等待 5秒 新闻刷新出来
            sleep(5000)

            //已看新闻返回
            if(id("cheat-popup-box").exists()) {
                //关闭提示框
                id("cheat-popup-box").findOne().click();
                //返回
                if(className("android.widget.RelativeLayout").exists()) {
                    className("android.widget.RelativeLayout").findOne().click()
                } else if(id('ii').exists()) {
                    id('ii').findOne().click()
                } else if(id('g6').exists()) {
                    id('g6').findOne().click()
                } else {
        
                }
            } else {
                //纯图片新闻 5+28秒
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
                } else if(id('g6').exists()) {
                    //图文新闻 5+35秒
                    //滚动查看文字新闻：35秒
                    for(var i=0; i<5; i++){
                        swipe(500, device.height-300, 500, 300, 500)
                        sleep(3000)
                        swipe(500, 300, 500, device.height-300, 500)
                        sleep(3000)
                    }
                    //新闻关闭
                    id('g6').findOne().click()
                } else if(className("android.widget.RelativeLayout").exists()){
                    //视频 5+30秒
                    //看视频30秒
                    sleep(35*1000)
                    className("android.widget.RelativeLayout").findOne().click()
                } else {
                    //
                }

                //看新闻+1
                readNewsNum++
            }
        }

        //从新闻内页点击返回后，等待 1秒 再读取新闻列表
        sleep(1000)
        //下一条
        line++
        
        //滚屏
        if(line >= t.length) {
            swipe(500, device.height-300, 500, 300, 800)
            swipe(500, device.height-300, 500, 300, 800)
            tab_头条(0);
        } else {
            tab_头条(line);
        }
    }
}

function 闪电鸡(){      
      
    //切换到tab探险
    id("tanxian_re").findOne().click();
    sleep(5000);

    //从上向下拉屏幕 2 次
    for(var i = 0; i < 2; i++){
        swipe(500, 300, 500, device.height-300, 500);
        sleep(5 * 1000);
    }

    //重置自动探险时间
    if(id("get_xiaoji_txt").exists()){
        id("get_xiaoji_txt").findOne().click();
        sleep(5000);
    }

    //从下向上拉屏幕
    for(var i=0; i < 2; i++){
        swipe(500, device.height-300, 500, 300, 1000);
        sleep(5000);
    }
    
    //出售小鸡
    if(id("sell0").exists()){
        id("sell0").findOne().click();
        sleep(5000);
    }

    //出售小鸡之后点击确定
    if(id("dimis_txt").exists()){
        id("dimis_txt").findOne().click();
        sleep(5000);
    }

    //收鸡蛋
    if(id("eggsell0").exists()){
        id("eggsell0").findOne().click();
        sleep(5000)
    }

    //收鸡蛋之后点击确定
    if(id("dimis_txt").exists()){
        id("dimis_txt").findOne().click();
        sleep(5000);
    }
    
    //切换tab鸡蛋
    if(id("ege_re").exists()){
        id("ege_re").findOne().click();
        sleep(5000);
    }
    
    //收鸡蛋
    if(id("get_xiaoji_txt").exists()){
      if(id("get_xiaoji_txt").findOne().text() != "没有小鸡可以收"){
          id("get_xiaoji_txt").findOne().click();
          sleep(5000);
      }
    }

    app.launchPackage("com.jifen.qukan")
    sleep(2000)
    点击头条并刷新()
 }

//切换
点击头条并刷新()