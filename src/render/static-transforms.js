// Preserve Object3D's mutable transform API, but do not compose an identical static city/root matrix
// every renderer pass (which also dirties matrixWorld and forces all descendants to multiply again).
const cached = new WeakSet();
export function cacheStaticTransform(object) {
  if (cached.has(object)) return;
  cached.add(object);
  const original = object.updateMatrix, previous = new Float64Array(10).fill(NaN);
  object.updateMatrix = function () {
    const p=this.position,q=this.quaternion,s=this.scale;
    if(previous[0]===p.x&&previous[1]===p.y&&previous[2]===p.z&&previous[3]===q.x&&previous[4]===q.y&&previous[5]===q.z&&previous[6]===q.w
      &&previous[7]===s.x&&previous[8]===s.y&&previous[9]===s.z)return;
    original.call(this);previous[0]=p.x;previous[1]=p.y;previous[2]=p.z;previous[3]=q.x;previous[4]=q.y;previous[5]=q.z;previous[6]=q.w;previous[7]=s.x;previous[8]=s.y;previous[9]=s.z;
  };
}
