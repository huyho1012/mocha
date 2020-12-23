describe('API Learning', () => {
    it('Login', () => { 
        browser.url("http://the-internet.herokuapp.com/login");
        browser.pause(2000);
        let userName =  "#username_+";
        $(userName).setValue("Huy Hồ");
        browser.pause(2000);
        browser.pause(2000);
    });
})