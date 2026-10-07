const shader = /* glsl */ `
uniform float uTime;
uniform float uStretch;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {

    vUv = uv;
    vNormal = normalize(normalMatrix * normal);

    vec3 pos = position;

    // --------------------------
    // Stretch
    // --------------------------

    pos.y *= uStretch;

    float invStretch = inversesqrt(uStretch);

    pos.x *= invStretch;
    pos.z *= invStretch;

    // --------------------------
    // Teardrop Shape
    // --------------------------

    float t = clamp((pos.y + 0.2) * 0.8, 0.0, 1.0);

    // Make the upper half thinner
    float taper = mix(1.0, 0.55, t);

    pos.x *= taper;
    pos.z *= taper;

    // Bottom becomes slightly wider
    float bottom = smoothstep(-0.8, -0.1, pos.y);

    pos.x *= mix(1.08, 1.0, bottom);
    pos.z *= mix(1.08, 1.0, bottom);

    // --------------------------
    // Wobble
    // --------------------------

    float wobble =
        sin(uTime * 8.0 + position.y * 12.0) * 0.015;

    pos.x += wobble;

    pos.z +=
        cos(uTime * 7.0 + position.y * 10.0) * 0.015;

    // --------------------------
    // Tiny Pulse
    // --------------------------

    pos += normal *
        sin(uTime * 4.0) *
        0.003;

    vPosition = pos;

    gl_Position =
        projectionMatrix *
        modelViewMatrix *
        vec4(pos, 1.0);
}
`;

export default shader;