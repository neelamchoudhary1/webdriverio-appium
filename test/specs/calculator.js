const { isExportDeclaration } = require("typescript");

describe('calculator addition',  ()=> {
    it('add', async()=> {

        const appOpen= await $('~App');  //accessibility id of app
        await appOpen.click();  //open app

        //add 2+7=9
        await $('~2').click();
        await $('~plus').click();
        await $('~7').click();

        const sum=await $('~equal').click();
        await isExportDeclaration(sum).toBe(9);        
     
    });
  });