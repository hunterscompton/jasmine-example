describe("utility functions", function () {
  describe("fullName()", function() {
    it("Concatenates two name parts with a space", function() {
      expect(fullName("Billy", "Bob")).toEqual("Billy Bob");
    });
  });
});
