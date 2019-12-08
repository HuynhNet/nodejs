describe('API Learning', ()=>{
    it('Set value to a text box', ()=>{
        browser.url('https://the-internet.herokuapp.com/login');
        browser.pause(3000);

        let usernameSelector = '#username';
        $(usernameSelector).setValue("Huynh Net");
        browser.pause(2000);
    });
});