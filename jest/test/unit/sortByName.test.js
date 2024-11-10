const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = [
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
    ];

    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];

    const output = sorting.sortByName(input);

    expect(output).toEqual(expected);
  });

  it("Books names can be an empty array", () => {
    const input = [];
    const expected = [];
    const output = sorting.sortByName(input);
    expect(output).toEqual(expected);
  });

  it("Books names can be a single item array", () => {
    const input = [
      "Гарри Поттер"
    ];
    const expected = [
      "Гарри Поттер"

    ];
    const output = sorting.sortByName(input);
    expect(output).toEqual(expected);
  });

  it("Books names can be an array with duplicate items", () => {
    const input = [
      "Гарри Поттер", 
      "Гарри Поттер"
    ];
    const expected = [
      "Гарри Поттер", 
      "Гарри Поттер"

    ];
    const output = sorting.sortByName(input);
    expect(output).toEqual(expected);
  });

  it("Should return Error if input is empty", () => {
    expect(() => sorting.sortByName()).toThrow(TypeError);
  });
});