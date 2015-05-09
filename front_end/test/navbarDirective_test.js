describe('navbarDirective', function () {

    beforeEach(module('navbarDirective'));
    beforeEach(module('app/components/navbar/navbarView.html'));
    var $httpBackend;

    var element,
        scope;

    beforeEach(inject(function($compile, $rootScope) {
        scope = $rootScope.$new();
        element = $compile('<portfolio-navbar></portfolio-navbar>')(scope);
    }));

    it('has the correct heading', function () {
        scope.$digest();
        expect(element.find('a').text()).to.equal('ProjectsTechnologiesWorkEducation');
    });
});
