for(var i=0; i< 3; i++){

    app.launchPackage("com.sandianji.sdjandroid");
    console.log('come in')
    sleep(2000)

    id("tanxian_re").findOne().click();
    sleep(1000)
    var k = id("get_xiaoji_txt").findOne().text();
    console.log(k)
    sleep(5000)

    app.launchPackage("com.jifen.qukan")
    console.log('come in')

    var t = id('p4').findOne().children();
    console.log('=====> ' + t.length)
    sleep(5000)

}