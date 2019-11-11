import { LoginPage } from './login.po';

describe('SGD Login failure', () => {
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
        page.usernameField.sendKeys('usuárioInexistente');
        page.passwordField.sendKeys('senhaAleatórioInexistente');

        // Verifica se os campos estão corretamente preenchidos
        // Caso sim o teste da sucesso, caso não da falha
        expect(page.usernameField.getAttribute('value')).toEqual('usuárioInexistente');
        expect(page.passwordField.getAttribute('value')).toEqual('senhaAleatórioInexistente');
    });

    // Tenta fazer login
    it('deve ser mostrada uma mensagem de usuário ou senha incorretos', () => {
        page.loginButton.click();
        page.sleep(10000);

        // Verifica se o alert com a msg de error existe
        // Caso sim o teste da sucesso, caso não da falha
        expect(page.errorAlert().isPresent()).toBe(true);
    });

});
