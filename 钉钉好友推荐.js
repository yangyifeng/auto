auto();

var alertmsg = '1. 先在手机「设置」中设置本 app 以下权限：\n';
alertmsg += 'a. 无障碍服务 \n';
alertmsg += 'b. 悬浮窗权限 \n';
alertmsg += '2. 打开 xx 并进去 xxx 之后，回到本 app \n';
alertmsg += '3. 点击「确定」开始运行脚本'

alert(alertmsg);

app.launchPackage("com.alibaba.android.rimet");

var path = files.getSdcardPath();
path += '/1/' + Date.parse(new Date()) + ".csv";

var text = [];

var canRead = true;

console.show();
sleep(2000);

function onepage(order){
    var all = id("list_view").findOne().children();
    if(!all[order].find(id("ll_name_mobile")).empty()){
        all[order].click();
        sleep(1500);
        id("user_info_tip_tv").untilFind();
        var tname = id("user_header_full_name").findOne().text();
        var tphone = "";
        if(id("user_mobile_info_content_tv").exists()){
            tphone = id("user_mobile_info_content_tv").findOne().text();
            var canPrint = arrayDis(tname + ',' + tphone);
            if(canPrint){
                print("[新增]" + tname + ":" + tphone)
            }
            else{
                print("[重复]" + tname + ":" + tphone)
            }
        }
        className("android.widget.ImageButton").findOne().click();
    }
    
    if(order + 1 < all.size()){
        onepage(order+1);
    }
    else{
        sleep(1000);
        canRead = scrollDown()
        print("下一屏幕")
        if(!canRead){
            files.append(path, text.join('\n'), 'GBK');
            console.hide();
            alert("读完了，一共写入" + text.length + "个号码，保存在" + path)
        }
        else{
            sleep(1000);
            onepage(0);
        }
    }
}

function arrayDis(chil){
    if(text.indexOf(chil) == -1){
        text.push(chil);
        return true;
    }
    else{
        return false;
    }
}


var canCreate = files.createWithDirs(path);
print('创建文件：' + canCreate);

if(canCreate){
    onepage(0);
}
else{
    print('无法创建文件：' + path)
}