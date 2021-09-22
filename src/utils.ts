/**
 * 坐标系旋转变换函数
 * @param x 旋转前x坐标
 * @param y 旋转前y坐标
 * @param cx 旋转中心坐标x
 * @param cy 旋转中心坐标y
 * @param deg 旋转角度
 * @return [x2,y2]  返回旋转后的新坐标
 * @example: coordinateRotation(100,100, 150,150, 30)
 */
export function coordinateRotation(x: number, y: number, cx: number, cy: number, deg: number) {
  // 角度转弧度
  const rad = deg * (Math.PI / 180);
  // 转化相对中心点cx,cy的坐标
  const x1 = x - cx;
  const y1 = y - cy;

  // 旋转后相对中心点坐标
  const x2 = x1 * Math.cos(rad) - y1 * Math.sin(rad);
  const y2 = x1 * Math.sin(rad) + y1 * Math.cos(rad);

  // 还原回原始坐标系坐标
  return [x2 + cx, y2 + cy];
}

/**
 * 投影距离公式，返回投影点到x1,y1距离
 * 固定坐标点，既缩放的固定点(x1,y1)
 * 缩放拖动点，既拖动点(x0,y0)
 * 鼠标拖动移动坐标(x2,y2)
 * @param x1
 * @param y1
 * @param x0
 * @param y0
 * @param x2
 * @param y2
 * @return number
 */
export function getProjectionDist(
  x1: number,
  y1: number,
  x0: number,
  y0: number,
  x2: number,
  y2: number
) {
  return (
    ((x2 - x1) * (x0 - x1) + (y2 - y1) * (y0 - y1)) /
    Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y1 - y0, 2))
  );
}
