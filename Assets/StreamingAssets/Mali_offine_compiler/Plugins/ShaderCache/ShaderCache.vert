#version 310 es

#define HLSLCC_DX11ClipSpace 1
#define CODE_TEST 1


#ifdef GL_EXT_texture_cube_map_array
#extension GL_EXT_texture_cube_map_array : enable

#endif
// end extensions

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
uniform highp vec4 vc0_h[1];
uniform highp vec4 vc1_h[55];
uniform uvec4 vu_u[1];
uniform highp vec4 vu_h[1];
layout(location=0) in highp vec4 in_ATTRIBUTE0;
layout(location=2) in highp vec4 in_ATTRIBUTE2;
layout(location=8) in highp vec4 in_ATTRIBUTE8;
layout(location=9) in vec4 in_ATTRIBUTE9;
layout(location=10) in vec4 in_ATTRIBUTE10;
layout(location=11) in vec4 in_ATTRIBUTE11;
layout(location=0) out highp float var_TEXCOORD6;
layout(location=1) out highp vec3 var_TEXCOORD7;
void main()
{
	uint u0;
	u0 = vu_u[0].x;
	highp float f1;
	f1 = vu_h[0].x;
	highp float f2;
	f2 = vc1_h[6].x;
	highp float f3;
	f3 = vc1_h[5].x;
	highp vec4 v4;
	highp vec4 v5;
	v5.w = 0.000000e+00;
	highp vec3 v6;
	v6.xyz = in_ATTRIBUTE9.xyz;
	v5.xyz = v6;
	highp vec4 v7;
	v7.w = 0.000000e+00;
	highp vec3 v8;
	v8.xyz = in_ATTRIBUTE10.xyz;
	v7.xyz = v8;
	highp vec4 v9;
	v9.w = 0.000000e+00;
	highp vec3 v10;
	v10.xyz = in_ATTRIBUTE11.xyz;
	v9.xyz = v10;
	highp vec4 v11;
	v11.w = 1.000000e+00;
	v11.xyz = ((((in_ATTRIBUTE8.xyz+(v5.xyz*in_ATTRIBUTE0.xxx))+(v7.xyz*in_ATTRIBUTE0.yyy))+(v9.xyz*in_ATTRIBUTE0.zzz))+vc0_h[0].xyz);
	highp vec4 v12;
	v12.w = 0.000000e+00;
	highp vec3 v13;
	v13.xyz = in_ATTRIBUTE9.xyz;
	v12.xyz = v13;
	highp vec4 v14;
	v14.w = 0.000000e+00;
	highp vec3 v15;
	v15.xyz = in_ATTRIBUTE10.xyz;
	v14.xyz = v15;
	highp vec4 v16;
	v16.w = 0.000000e+00;
	highp vec3 v17;
	v17.xyz = in_ATTRIBUTE11.xyz;
	v16.xyz = v17;
	highp vec4 v18;
	v18.xyzw = ((v16*in_ATTRIBUTE2.zzzz)+((v14*in_ATTRIBUTE2.yyyy)+(v12*in_ATTRIBUTE2.xxxx)));
	highp vec4 v19;
	v19.w = 0.000000e+00;
	highp vec3 v20;
	v20.xyz = in_ATTRIBUTE9.xyz;
	v19.xyz = v20;
	highp vec4 v21;
	v21.w = 0.000000e+00;
	highp vec3 v22;
	v22.xyz = in_ATTRIBUTE10.xyz;
	v21.xyz = v22;
	highp vec4 v23;
	v23.w = 0.000000e+00;
	highp vec3 v24;
	v24.xyz = in_ATTRIBUTE11.xyz;
	v23.xyz = v24;
	highp vec3 v25;
	v25.xyz = (((v19.xyz*v18.xxx)+(v21.xyz*v18.yyy))+(v23.xyz*v18.zzz));
	uint u26;
	u26 = uint(vc1_h[1].y);
	highp vec4 v27;
	highp vec4 v28;
	highp vec4 v29;
	highp vec4 v30;
	v27.xyzw = vc1_h[int((31u+(u26*4u)))];
	v28.xyzw = vc1_h[int((32u+(u26*4u)))];
	v29.xyzw = vc1_h[int((33u+(u26*4u)))];
	v30.xyzw = vc1_h[int((34u+(u26*4u)))];
	highp vec4 v31;
	highp float f32;
	highp vec4 v33;
	v33.xyzw = (vc1_h[int((10u+(u26*4u)))]+((vc1_h[int((9u+(u26*4u)))]*v11.zzzz)+((vc1_h[int((8u+(u26*4u)))]*v11.yyyy)+(vc1_h[int((7u+(u26*4u)))]*v11.xxxx))));
	v31.xyzw = v33;
	if (((f2>0.000000e+00)&&(v33.z<0.000000e+00)))
	{
		v31.z = 1.000000e-06;
		v31.w = 1.000000e+00;
	}
	highp float f34;
	f34 = abs(dot((-normalize((v30+((v29*v11.zzzz)+((v28*v11.yyyy)+(v27*v11.xxxx)))).xyz)),((v29*v25.zzzz)+((v28*v25.yyyy)+(v27*v25.xxxx))).xyz));
	highp float f35;
	f35 = vc1_h[4].z;
	highp float f36;
	f36 = abs(f34);
	highp float f37;
	highp float f38;
	f38 = (sqrt(clamp((1.000000e+00+(-(f34*f34))),0.000000e+00,1.000000e+00))/f34);
	f37 = ((f36>0.000000e+00))?(f38):(f35);
	highp float f39;
	f39 = (((vc1_h[4].y*clamp(f37,0.000000e+00,vc1_h[4].z))+vc1_h[4].x)*f1);
	f32 = f39;
	highp float f40;
	f40 = (f3*f1);
	if (bool(u0))
	{
		f32 = (f39+f40);
	}
	highp float f41;
	f41 = ((v31.z*vc1_h[4].w)+f32);
	v31.z = (f41*v31.w);
	v4.xyzw = v31;
	var_TEXCOORD6 = f41;
	var_TEXCOORD7.xyz = v11.xyz;
	compiler_internal_AdjustOutputSemantic(v4);
	gl_Position.xyzw = v4;
}

// Compiled by HLSLCC 0.73
// @Inputs: f4;0:in_ATTRIBUTE0,f4;2:in_ATTRIBUTE2,f4;8:in_ATTRIBUTE8,f4;9:in_ATTRIBUTE9,f4;10:in_ATTRIBUTE10,f4;11:in_ATTRIBUTE11
// @Outputs: f1;0:var_TEXCOORD6,f3;1:var_TEXCOORD7,f4;-1:gl_Position
// @PackedGlobals: BiasScale(h:0,1),ImposterBiasCtrl(u:0,1)
// @PackedUB: View(0): View_PreViewTranslation(280,3)
// @PackedUB: MobileShadowDepthPass(1): MobileShadowDepthPass_ProjectionMatrix(40,16),MobileShadowDepthPass_ShadowParams(72,4),MobileShadowDepthPass_ImposterShadowBias(76,1),MobileShadowDepthPass_bClampToNearPlane(77,1),MobileShadowDepthPass_ShadowViewProjectionMatrices(80,96),MobileShadowDepthPass_ShadowViewMatrices(176,96)
// @PackedUBCopies: 0:280-1:h:0:3,1:40-0:h:0:16,1:72-0:h:16:5,1:77-0:h:24:1,1:80-0:h:28:192

//M_AdScreen/FLocalVertexFactory/TShadowDepthVSVertexShadowDepth_MobilePointLightPositionOnly/0_e588d11d72819386

/*

*/


