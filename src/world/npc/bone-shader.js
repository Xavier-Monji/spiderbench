// Same affine clip interpolation / crossfade / head-look math for vertex skinning and GPU pose baking.
export const GLSL_BONE_TRANSFORMS = /* glsl */`
#ifdef NPC_POSE_ATLAS
uniform highp sampler2D uPoseAtlas;
#endif
    mat4 bmRow(int row, int b) {
      ivec2 c = ivec2(b * 3, row);
      vec4 r0 = texelFetch(uAnim, c, 0), r1 = texelFetch(uAnim, c + ivec2(1, 0), 0), r2 = texelFetch(uAnim, c + ivec2(2, 0), 0);
      return mat4(r0.x, r1.x, r2.x, 0.0, r0.y, r1.y, r2.y, 0.0, r0.z, r1.z, r2.z, 0.0, r0.w, r1.w, r2.w, 1.0);
    }
    mat4 clipBone(vec4 C, int b) {
      float len = C.y;
      float fr = mod((uTime - C.w) * C.z * 30.0, len);
      if (fr < 0.0) fr += len;
      int f0 = int(floor(fr)); int f1 = f0 + 1; if (float(f1) >= len) f1 = 0;
      float t = fract(fr);
      int r = int(C.x + 0.5);
      return bmRow(r + f0, b) * (1.0 - t) + bmRow(r + f1, b) * t;
    }
    mat4 lookRot(vec3 p, float yaw, float pitch) {
      float cy = cos(yaw), sy = sin(yaw), cp = cos(pitch), sp = sin(pitch);
      mat4 Ry = mat4(cy, 0.0, -sy, 0.0, 0.0, 1.0, 0.0, 0.0, sy, 0.0, cy, 0.0, 0.0, 0.0, 0.0, 1.0);
      mat4 Rx = mat4(1.0, 0.0, 0.0, 0.0, 0.0, cp, sp, 0.0, 0.0, -sp, cp, 0.0, 0.0, 0.0, 0.0, 1.0);
      mat4 T = mat4(1.0); T[3] = vec4(p, 1.0);
      mat4 Ti = mat4(1.0); Ti[3] = vec4(-p, 1.0);
      return T * Ry * Rx * Ti;
    }
    mat4 boneM(int b, float w) {
      #ifdef NPC_POSE_ATLAS
      // iB.x is an atlas row after the CPU instance data has been copied to the small pose-input texture.
      ivec2 c = ivec2(b * 3, int(iB.x + 0.5));
      vec4 r0 = texelFetch(uPoseAtlas, c, 0), r1 = texelFetch(uPoseAtlas, c + ivec2(1, 0), 0), r2 = texelFetch(uPoseAtlas, c + ivec2(2, 0), 0);
      return mat4(r0.x, r1.x, r2.x, 0.0, r0.y, r1.y, r2.y, 0.0, r0.z, r1.z, r2.z, 0.0, r0.w, r1.w, r2.w, 1.0);
      #else
      mat4 m = clipBone(iA, b);
      if (w < 0.999) m = clipBone(iB, b) * (1.0 - w) + m * w;
      if (b == 4) m = m * lookRot(uHead, iX.y * 0.6, iX.z * 0.7);
      else if (b == 3) m = m * lookRot(uNeck, iX.y * 0.4, iX.z * 0.3);
      return m;
      #endif
    }
`;
