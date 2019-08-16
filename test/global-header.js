
const { assert } = require('chai');

describe('General', function () {

      it('Global Header exists', function(){
        browser.url('/');
        assert.equal($(".custom-header").isVisible(), true);
    })

    it('Header has 100% width of the page.', function(){
        let widthPage = $('.site-content').getCssProperty('text-size-adjust');
        let widthHeader = $('.custom-header').getCssProperty('text-size-adjust');
        assert.equal((widthPage.value === widthHeader.value), true);
    });

    it('Get Header title', function(){
        let title = browser.getText('.custom-header span');
        browser.pause(5000);
        assert.equal(title, 'BugTracker', 'Title is incorrect');
    })
})


describe('Design', function () {

     it('Verify text size is 30px', function(){
         let textS = $('.custom-header span').getCssProperty('font-size');
         assert.equal(textS.value,'30px', 'Text size is incorrect');
     });


    it('Verify font family', function(){
        let fontFam = $('.custom-header').getCssProperty('font-family');
        assert.equal(fontFam.value,'segoe ui', 'Font family is incorrect');
    })

    it('Verify font weight', function(){
        let fontWeight = $('.custom-header').getCssProperty('font-weight');
        assert.equal(fontWeight.value,400, 'Font weight is incorrect');
    })

     it('Verify color', function(){
        let color = $('.custom-header').getCssProperty('color');
        assert.equal(color.parsed.hex,'#212529', 'Color is incorrect');
})
    it('Verify background color', function() {
        let backColor = $('.custom-header').getCssProperty('background-color');
        assert.equal(backColor.value,'rgba(0,0,0,0.125)', 'Background color is incorrect');
    })

    it('Verify Icon size', function() {
            const logo = $('.align-content-center')
            const size = logo.getElementSize()
           // console.log(size);
            //assert.equal(size.value,'30*30px', 'Icon size color is incorrect'); //почему не принимает value но тест проходит
    })


    it('Text with icon are center aligned', function(){
        assert.equal($(".align-content-center").isVisible(), true);
    })

})

