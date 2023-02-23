function main() {
    // 获取 update.json 文件中的软件版本
    ui.registeH5Function("getVersion", function () {
        return "V " + JSON.parse(readIECFileAsString("update.json")).version
    })
    ui.layout("参数设置", "main.html");
}

main();