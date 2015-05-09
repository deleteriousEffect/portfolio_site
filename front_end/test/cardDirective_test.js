
describe('headerDirective', function () {

    beforeEach(module('cardDirective'));
    beforeEach(module('app/shared/cards/cardView.html'));
    var $httpBackend;

    var element,
        scope;

    beforeEach(inject(function($compile, $rootScope) {
        scope = $rootScope.$new();
        element = $compile('<card></card>')(scope);
    }));

    it('has the correct heading', function () {
        scope.$digest();
        expect(element.find('h2').text()).to.equal('test card, please ignore');
    });

    it('has the correct li text', function () {
        scope.$digest();
        expect(element.find('li').text()).to.equal('here is a listhere is a listhere is a list');
    });
});
