import renderHook from "@testing-library/react";
import useImgId from "./useImgId";

describe("useImgId", () => {
  it("should return imgId", () => {
    let url = "https://pokeapi.co/api/v2/pokemon/6/";
    let imgId = useImgId(url);
    expect(imgId).toBe("6");
  });
});
