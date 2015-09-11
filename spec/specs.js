describe('findReplace', function(){
    it("displays the input as the output", function(){
        expect(findReplace("Hello world", "world", "universe")).to.equal("Hello world");
    });
});
