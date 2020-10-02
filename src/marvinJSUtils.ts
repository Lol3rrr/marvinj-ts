export function createMatrix2D(
  rows: number,
  cols: number,
  value?: unknown
): Array<Array<unknown>> {
  const arr = new Array<Array<unknown>>(rows);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array<unknown>(cols);
    arr[i].fill(value);
  }
  return arr;
}

export function createMatrix3D(
  rows: number,
  cols: number,
  depth: number,
  value: unknown
) {
  const arr = new Array<Array<Array<unknown>>>(rows);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(cols);
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = new Array(depth);
      arr[i][j].fill(value);
    }
  }
  return arr;
}

export function createMatrix4D(
  rows: number,
  cols: number,
  depth: number,
  another: number,
  value: unknown
) {
  const arr = new Array<Array<Array<Array<unknown>>>>(rows);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(cols);
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = new Array(depth);
      for (let w = 0; w < arr[i][j].length; w++) {
        arr[i][j][w] = new Array(another);
        arr[i][j][w].fill(value);
      }
    }
  }
  return arr;
}
