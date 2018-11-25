auto();

var path = files.getSdcardPath();
path += '/1/' + Date.parse(new Date()) + ".csv";

//用于保存
var text = [];
//用户重复校验
var textRead = [];

var canRead = true;

console.show();
sleep(2000);

function onepage(order){
    var all = id("list_view").findOne().children();
    if(!all[order].find(id("ll_name_mobile")).empty()){
        all[order].click();
        //随机翻页，避免被认为机器人
        sleep(random(1,3)*1000);
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
        //随机翻页，避免被认为机器人
        sleep(random(1,3)*1000);
        canRead = scrollDown()
        print("下一屏幕");
        if(text.length >= 10){
            files.append(path, text.join('\n'), 'GBK');
            text.length = 0;
        }
        if(!canRead){
            if(text.length > 1){
                files.append(path, text.join('\n'), 'GBK');
            }
            console.hide();
            alert("完成。保存在" + path)
        }
        else{
            //随机翻页，避免被认为机器人
            sleep(random(1,3)*1000);
            onepage(0);
        }
    }
}

function arrayDis(chil){
    if(textRead.indexOf(chil) == -1){
        textRead.push(chil);
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
    print('创建文件：' + path);
    print('每获取10个号码则自动保存一次');
    onepage(0);
}
else{
    print('无法创建文件：' + path)
}