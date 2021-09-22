import type { IDirection, IOffset, IRect, IStretchRectOpts } from "./types";
import * as constants from "./constants";

export * from "./types";

export const version = "%VERSION%";

/**
 * 矩形拉伸
 */
export function stretchRect<T extends IRect = IRect>(
  rect: T,
  dir: IDirection,
  offset: IOffset,
  opts: IStretchRectOpts = {}
) {}

export function createStretchRect<T extends IRect = IRect>(
  rect: T,
  dir: IDirection,
  startCoord: [x: number, y: number],
  opts: IStretchRectOpts = {}
) {
  return (currentCoord: [x: number, y: number]) => {
    return { ...rect };
  };
}
