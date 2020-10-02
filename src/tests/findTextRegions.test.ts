import { MarvinImage, FindTextRegions, MarvinSegment } from "../marvinj";

test("Find Text Regions", () => {
  const width = 100;
  const height = 100;
  const inMaxWhiteSpace = 10;
  const inMaxFontLineWidth = 15;
  const inMinTextWidth = 12;
  const inGrayScaleThreshold = 80;

  let inputImageData = new Uint8ClampedArray(width * height * 4);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const startIndex = (y * width + x) * 4;
      inputImageData[startIndex + 0] = (y * 2 + x * 3) % 255;
      inputImageData[startIndex + 1] = (y * 4 + x * 2) % 255;
      inputImageData[startIndex + 2] = (y * 3 + x * 5) % 255;
      inputImageData[startIndex + 3] = 255;
    }
  }

  let result: Array<MarvinSegment> = [];
  result.push(new MarvinSegment(16, 0, 41, 10));
  result.push(new MarvinSegment(0, 0, 24, 23));
  result.push(new MarvinSegment(39, 29, 99, 69));
  result.push(new MarvinSegment(0, 21, 99, 70));
  result.push(new MarvinSegment(59, 84, 99, 98));
  result.push(new MarvinSegment(57, 99, 82, 99));

  const inputImage = new MarvinImage();
  inputImage.data = inputImageData;
  inputImage.width = width;
  inputImage.height = height;
  let output = new FindTextRegions(
    inMaxWhiteSpace,
    inMaxFontLineWidth,
    inMinTextWidth,
    inGrayScaleThreshold
  ).process(inputImage);

  expect(output).toStrictEqual(result);
});
