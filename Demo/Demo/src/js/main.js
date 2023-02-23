/**
 * @Author Yves Yu
 * @Date 2023/2/2 21:35
 * @Email service@yvesyu.com
 * @Desc 模板
 */

function init() {
    for (let i = 0; i < 3; i++) {
        logd("第" + i + "次启动服务结果: " + startEnv());
        if (isServiceOk()) {
            daemonEnv(true)
            return true;
        }
    }
    logw("自动化服务启动失败")
    exit();
}

function main() {
    // 自动化服务初始化
    init();
    // 开始脚本执行
    toast("开始执行脚本");
    // 获取前台输入的数据
    let config = JSON.parse(readConfigString("config"));
    logd(config["flag"]);
    // 继续后续逻辑
    // TODO
}

main();