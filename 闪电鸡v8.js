function delay(){
    //return random(30,60)*1000;
    return 60*3*1000;
}

function 闪电鸡(){
  if(id("tanxian_re").exists()){
      //切换到tab探险
      id("tanxian_re").findOne().click();
      sleep(delay());
      
      //从上向下拉屏幕: 回到页面顶部
      swipe(500, 300, 500, device.height-300, 500);
      sleep(delay());
      
      //再刷新一次
      swipe(500, 300, 500, device.height-300, 500);
      sleep(delay());
  }
  
  if(id("get_xiaoji_txt").exists()){
      //点击自动派鸡按钮
      id("get_xiaoji_txt").findOne().click();
      sleep(delay());
      
      //从下向上拉屏幕
      swipe(500, device.height-300, 500, 300, 1000);
      sleep(delay());
  }
  
  if(id("sell0").exists()){
      //出售小鸡
      id("sell0").findOne().click();
      sleep(delay());
  }
  
  if(id("dimis_txt").exists()){
    //出售小鸡之后点击确定
    id("dimis_txt").findOne().click();
    sleep(delay());
  }
  
  if(id("ege_re").exists()){
      //切换tab鸡蛋
      id("ege_re").findOne().click();
      sleep(delay());
  }
  
  if(id("get_xiaoji_txt").exists()){
    //收鸡蛋
    if(id("get_xiaoji_txt").findOne().text() != "没有小鸡可以收"){
        id("get_xiaoji_txt").findOne().click();
    }
  }
  sleep(delay());
  
  闪电鸡();
}

闪电鸡();