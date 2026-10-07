const shader = /* glsl */ `
/* glsl */

varying vec2 vUv;

uniform float uTime;
uniform vec2 uResolution;

uniform vec2 uImpact;
uniform float uImpactTime;

void main()
{
    vec2 uv = vUv;

    //------------------------------------------
    // Ripple Center
    //------------------------------------------

    vec2 center = uImpact;

    vec2 p = uv - center;
    p.x *= uResolution.x / uResolution.y;

    float dist = length(p);

    //------------------------------------------
    // Calm Water Movement
    //------------------------------------------

    float wave =
        sin(uv.x * 12.0 + uTime * 0.25) *
        sin(uv.y * 10.0 - uTime * 0.18);

    wave *= 0.008;

    //------------------------------------------
    // Ripple
    //------------------------------------------

    float ripple = 0.0;

    if(uImpactTime >= 0.0)
    {
        float elapsed = max(0.0, uTime - uImpactTime);

        float speed = 0.22;

        float radius = elapsed * speed;

        // First ripple
        {
            float x = dist - radius;

            ripple +=
                sin(55.0 * x)
                * exp(-180.0 * x * x);
        }

        // Second ripple
        {
            float r = max(radius - 0.18, -10.0);

            float x = dist - r;

            ripple +=
                sin(48.0 * x)
                * exp(-170.0 * x * x)
                * 0.55;
        }

        // Third ripple
        {
            float r = max(radius - 0.40, -10.0);

            float x = dist - r;

            ripple +=
                sin(42.0 * x)
                * exp(-160.0 * x * x)
                * 0.30;
        }

        // Fourth ripple
        {
            float r = max(radius - 0.70, -10.0);

            float x = dist - r;

            ripple +=
                sin(38.0 * x)
                * exp(-150.0 * x * x)
                * 0.10;
        }

        ripple *= exp(-radius * 0.40);
    }

    //------------------------------------------
    // Water Colors
    //------------------------------------------

    vec3 deep = vec3(
        0.008,
        0.015,
        0.035
    );

    vec3 light = vec3(
        0.05,
        0.13,
        0.24
    );

    vec3 color = mix(
        deep,
        light,
        uv.y
    );

    color += wave;

    //------------------------------------------
    // Ripple Shading
    //------------------------------------------

    color += ripple * vec3(
        0.04,
        0.05,
        0.06
    );

    //------------------------------------------
    // Crest Highlight
    //------------------------------------------

    float crest =
        smoothstep(
            0.15,
            0.5,
            ripple
        );

    color +=
        vec3(
            0.95,
            0.97,
            1.0
        )
        * crest
        * 0.18;

    //------------------------------------------
    // Impact Glow
    //------------------------------------------

    float glow =
        exp(-dist * 12.0);

    color +=
        vec3(
            0.02,
            0.03,
            0.05
        )
        * glow
        * (1.0 + ripple * 2.0);

    //------------------------------------------
    // Vignette
    //------------------------------------------

    float vignette =
        smoothstep(
            0.95,
            0.18,
            distance(
                uv,
                vec2(0.5)
            )
        );

    color *= vignette;

    gl_FragColor = vec4(color,1.0);
}
`;

export default shader;