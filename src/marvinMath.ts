import { createMatrix2D } from "./marvinJSUtils";

export function euclideanDistance2D(
  x1: number,
  y1: number,
  x2: number,
  y2: number
) {
  const dx = x1 - x2;
  const dy = y1 - y2;
  return Math.sqrt(dx * dx + dy * dy);
}

export function euclideanDistance3D(
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number
) {
  const dx = x1 - x2;
  const dy = y1 - y2;
  const dz = z1 - z2;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

export function getTrueMatrix(rows: number, cols: number) {
  const ret = createMatrix2D(rows, cols);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      ret[i][j] = true;
    }
  }
  return ret;
}

export function scaleMatrix(matrix: Array<Array<number>>, scale: number) {
  const ret = createMatrix2D(matrix.length, matrix.length);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      ret[i][j] = matrix[i][j] * scale;
    }
  }
  return ret;
}

export function euclideanDistance(
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5?: number,
  p6?: number
) {
  if (p5 != undefined && p6 != undefined) {
    return euclideanDistance3D(p1, p2, p3, p4, p5, p6);
  } else {
    return euclideanDistance2D(p1, p2, p3, p4);
  }
}
