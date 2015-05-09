
describe('footerDirective', function () {

    beforeEach(module('footerDirective'));
    beforeEach(module('app/components/footer/footerView.html'));
    var $httpBackend;

    var element,
        scope;

    beforeEach(inject(function($compile, $rootScope) {
        scope = $rootScope.$new();
        element = $compile('<portfolio-footer></portfolio-footer>')(scope);
    }));

    it('has the correct heading', function () {
        scope.$digest();
        expect(element.find('h2').text()).to.equal('Contact me');
    });
});
