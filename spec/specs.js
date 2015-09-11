describe('findReplace', function(){

    it("displays the input as the output", function(){
        expect(string("Hello world", "world", "universe")).to.equal("Hello world");
    });

    it("does what it is supposed to because this code review is way to easy", function(){
        expect(findReplace("Hello world", "world", "universe")).to.equal("Hello universe");
    });

});
