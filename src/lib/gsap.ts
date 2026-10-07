import gsap from "gsap";

import { useGSAP } from "@gsap/react";

// plugins
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { Physics2DPlugin } from "gsap/Physics2DPlugin"
import { EaselPlugin } from "gsap/EaselPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";


gsap.registerPlugin(
    ScrollTrigger,
    SplitText,
    Observer,
    ScrollToPlugin,
    TextPlugin,
    EaselPlugin,
    DrawSVGPlugin,
    MotionPathPlugin,
    MorphSVGPlugin,
    Physics2DPlugin,
    PixiPlugin
);

export {
    useGSAP,
    gsap,
    ScrollTrigger,
    SplitText,
    Observer,
    ScrollToPlugin,
    TextPlugin,
    EaselPlugin,
    DrawSVGPlugin,
    MotionPathPlugin,
    MorphSVGPlugin,
    Physics2DPlugin,
    PixiPlugin
};