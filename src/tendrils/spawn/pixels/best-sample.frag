/**
 * Tries a number of times to randomly select a pixel scored highest by a given
 * function.
 */

#pragma glslify: import(./frag/head)

#pragma glslify: applier = require(./apply/color, time = time)
// #pragma glslify: applier = require(./apply/brightest)
#pragma glslify: vignette = require(../../filter/pass/vignette)
#pragma glslify: apply = require(./apply/compose-filter, apply = applier, pass = vignette)

// #pragma glslify: apply = require(./apply/color, time = time)
// #pragma glslify: apply = require(./apply/brightest)

#pragma glslify: test = require(./test/particles)

const float samples = 5.0;

#pragma glslify: import(./frag/best-sample.main)
