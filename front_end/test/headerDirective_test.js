describe('headerDirective', function () {

    beforeEach(module('headerDirective'));
    beforeEach(module('app/components/header/headerView.html'));
    var $httpBackend;

    var element,
        scope;

    beforeEach(inject(function($compile, $rootScope) {
        scope = $rootScope.$new();
        element = $compile('<portfolio-header></portfolio-header>')(scope);
    }));

    it('has the correct heading', function () {
        scope.$digest();
        expect(element.find('h1').text()).to.equal('Hayley Swimelar is a web developer');
    });

    it('has the correct paragraph text', function () {
        scope.$digest();
        expect(element.find('p').text()).to.equal('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
    });
});
