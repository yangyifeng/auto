auto();

//保存路径
var path = files.getSdcardPath();
path += '/1/' + Date.parse(new Date()) + ".csv";

//数组：保存
var text = [];
//数组：识别
var textRead = [];

//是否还能翻页
var canRead = true;

console.show();
sleep(1000);

//创建文件
var canCreate = files.createWithDirs(path);

//无法创建则退出
if(!canCreate){
    print('无法创建文件：' + path);
    exit();
}
else{
    print('创建文件：' + path);
    print('每获取10个号码则自动保存一次')
}

//用来识别的：去重
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

while(canRead){
    //随机翻页，避免被认为机器人
    sleep(random(1,3)*1000);
    
    id("list_view").findOne().children().forEach((child,index) => {
        var tphone = child.findOne(id("tv_contact_title")).text();
        var c = child.find(id("tv_ding_nick"))
        if(!c.empty()){
            if(arrayDis(c[0].text().split("昵称:")[1] + ',' + tphone)){
                print("[新增]" + c[0].text().split("昵称:")[1] + ',' + tphone)
            }
            else{
                print("[重复]" + c[0].text().split("昵称:")[1] + ',' + tphone)
            }
        }

    });

    canRead = scrollDown();

    if(text.length >= 10){
        files.append(path, text.join('\n'), 'GBK');
        text.length = 0;
    }

    if(!canRead){
        if(text.length > 0){
            files.append(path, text.join('\n'), 'GBK');
        }
        console.hide();
        alert("完成。保存在" + path)
    }
}
