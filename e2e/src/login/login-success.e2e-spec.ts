import { LoginPage } from './login.po';

describe('SGD Login success', () => {
    let page: LoginPage;

    beforeEach(() => {
        page = new LoginPage();
    });

    // Tenta Navega até a página de login
    it('deve navegar até a página de login', () => {
        page.navigateTo();

        // Verifica se o conteiner de login existe
        // Caso sim o teste da sucesso, caso não da falha
        expect(page.loginContainer().isPresent()).toBe(true);
    });

    // Tenta Preenche o formulário
    it('deve preencher formulário de login', () => {
        page.usernameField.sendKeys('admin');
        page.passwordField.sendKeys('adminadmin');

        // Verifica se os campos estão corretamente preenchidos
        // Caso sim o teste da sucesso, caso não da falha
        expect(page.usernameField.getAttribute('value')).toEqual('admin');
        expect(page.passwordField.getAttribute('value')).toEqual('adminadmin');
    });

    // Tenta fazer login
    it('deve conseguir efetuar o login', () => {
        page.loginButton.click();
        page.sleep(10000);

        // Verifica se a url atual é a home, se o login for efetuado com sucesso redireciona para home
        // Caso sim o teste da sucesso, caso não da falha
        expect(page.getCurrentUrl()).toEqual(page.getBaseUrl());
    });

});
