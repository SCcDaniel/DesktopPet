#version 310 es

#define HLSLCC_DX11ClipSpace 1
#define CODE_TEST 1


#ifdef GL_EXT_texture_cube_map_array
#extension GL_EXT_texture_cube_map_array : enable

#endif

#ifdef UE_EXT_shader_framebuffer_fetch
#extension GL_EXT_shader_framebuffer_fetch : enable
#define EXT_shader_framebuffer_fetch_enabled 1
#endif

#ifdef GL_ARM_shader_framebuffer_fetch
#extension GL_ARM_shader_framebuffer_fetch : enable
#endif
// end extensions
precision mediump float;
precision highp int;

void compiler_internal_AdjustInputSemantic(inout vec4 TempVariable)
{
#if HLSLCC_DX11ClipSpace
	TempVariable.y = -TempVariable.y;
	TempVariable.z = ( TempVariable.z + TempVariable.w ) / 2.0;
#endif
}

void compiler_internal_AdjustOutputSemantic(inout vec4 Src)
{
#if HLSLCC_DX11ClipSpace
	Src.y = -Src.y;
	Src.z = ( 2.0 * Src.z ) - Src.w;
#endif
}

bool compiler_internal_AdjustIsFrontFacing(bool isFrontFacing)
{
#if HLSLCC_DX11ClipSpace
	return !isFrontFacing;
#else
	return isFrontFacing;
#endif
}
uniform mediump sampler2D ps0;
layout(location=3) in highp vec4 in_TEXCOORD0;
layout(location=0) out highp vec4 out_Target0;
void main()
{
	if (((-1.333000e-01+texture(ps0,in_TEXCOORD0.xy).w)<0.000000e+00)) discard;
	out_Target0.xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00);
}

// Compiled by HLSLCC 0.73
// @Inputs: f4;3:in_TEXCOORD0
// @Outputs: f4;0:out_Target0
// @Samplers: Material_Texture2D_1(0:1[Material_Texture2D_1Sampler])

//M_Grass/FLocalVertexFactory/TShadowDepthPSPixelShadowDepth_NonPerspectiveCorrectfalse/0_041bd29a199b4272

/*
Mali Offline Compiler v7.5.0 (Build 30e352)
Copyright 2007-2022 Arm Limited, all rights reserved

Usage: 

   C:/Project_Trunk/TDAllArt/TheDivision_Engine/Engine/Binaries/ThirdParty/
                                        mali_offline_compiler/malioc.exe 
                                        [--vertex|--tessellation_control
                                        |--tessellation_evaluation
                                        |--geometry|--fragment|--compute
                                        |--kernel|--list|--info]
                                        [--opengles|--vulkan|--opencl
                                        <VER>] [--format <text|json>] [-n
                                        <NAME>] [-c <CORE>] [-D
                                        <NAME[=VALUE]>] ...  [-o <FILE>]
                                        [--spirv] [--] [--version] [-h]
                                        <input files> ...

Where: 

   No shader type flag
     Infer shader type from input file extensions, where:
       .vert - Source vertex shader
       .tesc - Source tessellation control shader
       .tese - Source tessellation evaluation shader
       .geom - Source geometry shader
       .frag - Source fragment shader
       .comp - Source compute shader
       .vert.spv - SPIR-V binary vertex shader
       .tesc.spv - SPIR-V binary tessellation control shader
       .tese.spv - SPIR-V binary tessellation evaluation shader
       .geom.spv - SPIR-V binary geometry shader
       .frag.spv - SPIR-V binary fragment shader
       .comp.spv - SPIR-V binary compute shader
       .cl - OpenCL compute kernel
   -v,  --vertex
     Compile a vertex shader.
   -t,  --tessellation_control
     Compile a tessellation control shader.
   -e,  --tessellation_evaluation
     Compile a tessellation evaluation shader.
   -g,  --geometry
     Compile a geometry shader.
   -f,  --fragment
     Compile a fragment shader.
   -C,  --compute
     Compile a compute shader.
   -k,  --kernel
     Compile an OpenCL kernel.
   -l,  --list
     Report the supported Mali GPU cores.
   -i,  --info
     Report the supported API capabilities for a specific core.

   --opengles
     Target the OpenGL ES API.
   --vulkan
     Target the Vulkan API.
   --opencl <VER>
     Target the OpenCL API (1.1, 1.2, 2.0, or 3.0).

   --format <text|json>
     Specify the report output format.

   -n <NAME>,  --name <NAME>
     Name the program entrypoint.

   -c <CORE>,  --core <CORE>
     Name the target Mali GPU.

   -D <NAME[=VALUE]>,  --define <NAME[=VALUE]>  (accepted multiple times)
     Define a preprocessor macro.

   -o <FILE>,  --output <FILE>
     Name of output file for report data (stdout by default). Any required
     intermediate directories must exist; they will not be created
     automatically.

   --spirv
     Compile a SPIR-V binary module.

   --,  --ignore_rest
     Ignores the rest of the labeled arguments following this flag.

   --version
     Displays version information and exits.

   -h,  --help
     Displays usage information and exits.

   <input files>  (accepted multiple times)
     List of input files to compile. If the input files are source files
     the contents are concatenated together in the order they were
     specified. If the input is a SPIR-V binary module only a single input
     file is allowed. Specify '-' to read from stdin.

   

*/


