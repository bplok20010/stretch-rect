export type IDirection =
  | "top"
  | "right"
  | "bottom"
  | "left"
  | "topRight"
  | "bottomRight"
  | "bottomLeft"
  | "topLeft";

export interface IOffset {
  left: number;
  top: number;
}

export interface IRect {
  left: number;
  top: number;
  width: number;
  height: number;
  rotate?: number;
}

export interface IStretchRectOpts {
  lockAspectRatio?: boolean;
}
