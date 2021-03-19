// 生产环境
export const ENV = {
    domain: 'http://127.0.0.1',
    casDomain: 'http://127.0.0.1:8082/user-login-cas-web', //cas服务
    userBaseWeb: 'http://127.0.0.1:8881/simple-user-center/v1.0',
    pushBaseWeb: 'http://127.0.0.1:8881/simple-notice-center/v1.0',
    webHomePage: '/wgms-base-web', //cas跳转地
};
// @ts-ignore
window.USERENV = ENV;
