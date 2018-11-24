auto();

var alertmsg = '1. 先在手机「设置」中设置本 app 以下权限：\n';
alertmsg += 'a. 无障碍服务 \n';
alertmsg += 'b. 悬浮窗权限 \n';
alertmsg += '2. 点击「确定」开始运行脚本'

alert(alertmsg);

var number = dialogs.rawInput("输入评论次数","5");
app.launchPackage("com.ss.android.ugc.aweme");
waitForActivity("com.ss.android.ugc.aweme.main.MainActivity", [period = 200]);

console.show();
print('脚本准备中，即将开始进行 ' + number + ' 个评论');
text("推荐").waitFor();
text("同城").waitFor();
sleep(5000)

setScreenMetrics(1080,2280);
for (i = 0; i < number; i++) {
    sleep(1000);
    click(1000, 1600); //点击评论的图标
    sleep(1000);
    id("a25").findOne().click(); //点击评论区域
    sleep(1000);    
    var a = http.get("http://word.rainss.cn/api_system.php?type=txt").body.string();
    sleep(1000);
    id("a25").findOne().setText(a);//评论区域输入内容
    sleep(1000)
    id("a28").findOne().click(); //点击发布评论按钮
    sleep(1000);    
    if(id("k1").exists()){
        id("k1").findOne().click(); //点击关闭评论
    }
    if(id("amq").exists()){
        id("amq").findOne().click(); //点击关闭评论
    }
    print('评论：' + i)
    sleep(1000);    
    swipe(500,1500,500,500,1000);
}

print("评论了 "+ number +" 个抖音");