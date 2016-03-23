precision highp float;

uniform bool debug;

varying vec2 flow;

void main() {
    gl_FragColor = ((debug)?
            vec4(((flow*1000.0)+vec2(1.0))*0.5, 0.0, 1.0)
        :   vec4(flow, 1.0, 1.0));
}
