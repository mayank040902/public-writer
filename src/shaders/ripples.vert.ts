const shader = `varying vec2 vUv;

void main()
{
    // Pass UV coordinates to the fragment shader
    vUv = uv;

    // Transform vertex from model space → camera space → clip space
    gl_Position =
        projectionMatrix *
        modelViewMatrix *
        vec4(position, 1.0);
} `

export default shader