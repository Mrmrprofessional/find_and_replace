describe('findReplace', function(){

    it("displays the input as the output", function(){
        expect(string("Hello world", "world", "universe")).to.equal("Hello world");
    });

    it("does what it is supposed to because this code review is way to easy", function(){
        expect(caseFindReplace("Hello world", "world", "universe")).to.equal("Hello universe");
    });

    it("handles non-case-sensitive cases", function(){
        expect(findReplace("Hello World", "world", "universe")).to.equal("Hello universe");
    });

});
