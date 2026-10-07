const shader = /* glsl */ `
uniform vec3 uColor;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {

    vec3 lightDir =
        normalize(vec3(1.0, 2.0, 1.0));

    float diffuse =
        max(dot(vNormal, lightDir), 0.0);

    float fresnel =
        pow(
            1.0 - abs(dot(vNormal, vec3(0.0,0.0,1.0))),
            4.0
        );

    vec3 color = uColor;

    color *= diffuse * 0.6 + 0.4;

    color += fresnel * vec3(0.9,0.95,1.0);

    float alpha =
        0.85 + fresnel * 0.15;

    gl_FragColor =
        vec4(color, alpha);
}
`;

export default shader;