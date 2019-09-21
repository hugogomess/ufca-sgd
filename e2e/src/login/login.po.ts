import { browser, by, element } from 'protractor';

export class LoginPage {
    // Campos do formulário de login
    usernameField =  element(by.name('username'));
    passwordField =  element(by.name('password'));
    loginButton =  element(by.name('btn-login'));

    // Navega até a página de login
    navigateTo() {
        return browser.get(browser.baseUrl + 'login') as Promise<any>;
    }

    // Retorna o container de login
    // Usado para verificar se o conteiner foi renderizado com sucesso
    loginContainer() {
        const loginContainer = element(by.id('login-container'));
        return loginContainer;
    }

    errorAlert() {
        const errorAlert = element(by.className('error'));
        return errorAlert;
    }

    // Pause a execução por X milisegundos
    sleep(ms: number) {
        return browser.sleep(ms);
    }

    // Retorna a url base do sistema
    getBaseUrl() {
        return browser.baseUrl;
    }

    // Retorna a url atual
    getCurrentUrl() {
        return browser.getCurrentUrl();
    }


}
