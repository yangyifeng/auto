function 闪电鸡(){      
      
    //切换到tab探险
    id("tanxian_re").findOne().click();
    sleep(5000);

    //从上向下拉屏幕: 刷新
    //10秒刷新一次，刷30分钟  
    for(var i = 0; i < 6 * 30; i++){
        swipe(500, 300, 500, device.height-300, 500);
        sleep(10 * 1000);
    }

    //重置自动探险时间
    if(id("get_xiaoji_txt").exists()){
        id("get_xiaoji_txt").findOne().click();
        sleep(5000);
    }

    //从下向上拉屏幕
    swipe(500, device.height-300, 500, 300, 1000);
    sleep(5000);
    swipe(500, device.height-300, 500, 300, 1000);
    sleep(5000);
    
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

    闪电鸡()
  
 }
 
 闪电鸡()
  
  