auto();

var path = files.getSdcardPath();
path += '/1/' + Date.parse(new Date()) + ".csv";

var text = "";
var writenum = 0;

var canRead = true;

console.show();

while(canRead){

    sleep(500);
    
    id("list_view").findOne().children().forEach((child,index) => {
        var size = id("list_view").findOne().children().size()
        
        var tname = child.findOne(id("tv_contact_name"));
        var tphone = child.findOne(id("tv_contact_title"));
        
        var c = child.find(id("tv_ding_nick"))
        if(!c.empty()){
            text += c[0].text().split("昵称:")[1] +  "," + tphone.text() + "\n";
            writenum++;
        }

        print(tname.text() + "，目前找到" + writenum + "个号码");
    });

    canRead = scrollDown()
    if(!canRead){
        files.createWithDirs(path);
        files.append(path, text);
        console.hide();
        alert("读完了，一共写入" + writenum + "个号码，保存在" + path)
    }
}
