#version 310 es

#define HLSLCC_DX11ClipSpace 1

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
uniform vec4 vc3_m[384];
uniform highp vec4 vc0_h[2];
uniform vec4 vc1_m[1];
uniform highp vec4 vc1_h[5];
uniform highp vec4 vc2_h[11];
uniform vec4 vc4_m[5];
uniform uvec4 vu_u[3];
uniform highp vec4 vu_h[1];
layout(location=0) in highp vec4 in_ATTRIBUTE0;
layout(location=1) in vec3 in_ATTRIBUTE1;
layout(location=2) in vec4 in_ATTRIBUTE2;
layout(location=3) in uvec4 in_ATTRIBUTE3;
layout(location=14) in uvec4 in_ATTRIBUTE14;
layout(location=4) in highp vec4 in_ATTRIBUTE4;
layout(location=15) in highp vec4 in_ATTRIBUTE15;
layout(location=5) in highp vec2 in_ATTRIBUTE5;
layout(location=11) in vec3 in_ATTRIBUTE11;
layout(location=12) in vec3 in_ATTRIBUTE12;
layout(location=13) in vec4 in_ATTRIBUTE13;
void main()
{
	uint u0;
	u0 = vu_u[2].x;
	highp float f1;
	f1 = vu_h[0].x;
	uint u2;
	u2 = vu_u[1].x;
	uint u3;
	u3 = vu_u[0].x;
	highp float f4;
	f4 = vc2_h[10].x;
	highp float f5;
	f5 = vc2_h[9].x;
	highp float f6;
	f6 = vc0_h[1].x;
	highp vec3 v7;
	v7.xyz = vc0_h[0].xyz;
	highp vec4 v8;
	highp vec4 v9;
	highp mat3x4 m10;
	highp mat3x4 m11;
	m11[0].xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00);
	m11[1].xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00);
	m11[2].xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00);
	m10 = m11;
	int i12;
	i12 = 0;
	for (;i12<4;)
	{
		highp mat3x4 m13;
		m13[0].xyzw = vec4(in_ATTRIBUTE4[i12]);
		m13[1].xyzw = vec4(in_ATTRIBUTE4[i12]);
		m13[2].xyzw = vec4(in_ATTRIBUTE4[i12]);
		mat3x4 m14;
		m14[0].xyzw = vc3_m[int(((in_ATTRIBUTE3[i12]+u2)*3u))];
		m14[1].xyzw = vc3_m[int((1u+((in_ATTRIBUTE3[i12]+u2)*3u)))];
		m14[2].xyzw = vc3_m[int((2u+((in_ATTRIBUTE3[i12]+u2)*3u)))];
		highp mat3x4 m15;
		m15 = m14;
		m10 = (m10+matrixCompMult(m13,m15));
		i12 = (i12+1);
	}
	if ((u3>4u))
	{
		int i16;
		i16 = 0;
		for (;i16<4;)
		{
			highp mat3x4 m17;
			m17[0].xyzw = vec4(in_ATTRIBUTE15[i16]);
			m17[1].xyzw = vec4(in_ATTRIBUTE15[i16]);
			m17[2].xyzw = vec4(in_ATTRIBUTE15[i16]);
			mat3x4 m18;
			m18[0].xyzw = vc3_m[int(((in_ATTRIBUTE14[i16]+u2)*3u))];
			m18[1].xyzw = vc3_m[int((1u+((in_ATTRIBUTE14[i16]+u2)*3u)))];
			m18[2].xyzw = vc3_m[int((2u+((in_ATTRIBUTE14[i16]+u2)*3u)))];
			highp mat3x4 m19;
			m19 = m18;
			m10 = (m10+matrixCompMult(m17,m19));
			i16 = (i16+1);
		}
	}
	mat3 m20;
	highp vec4 v21;
	v21.w = 0.000000e+00;
	highp vec3 v22;
	v22.xyz = in_ATTRIBUTE1;
	v21.xyz = v22;
	highp vec3 v23;
	v23.x = dot(m10[0],v21);
	v23.y = dot(m10[1],v21);
	v23.z = dot(m10[2],v21);
	vec3 v24;
	v24.xyz = v23;
	m20[0].xyz = v24;
	highp vec4 v25;
	v25.w = 0.000000e+00;
	highp vec3 v26;
	v26.xyz = in_ATTRIBUTE2.xyz;
	v25.xyz = v26;
	highp vec3 v27;
	v27.x = dot(m10[0],v25);
	v27.y = dot(m10[1],v25);
	v27.z = dot(m10[2],v25);
	vec3 v28;
	v28.xyz = v27;
	m20[2].xyz = v28;
	m20[1].xyz = (cross(m20[2],m20[0])*in_ATTRIBUTE2.www);
	highp vec4 v29;
	v29.w = 1.000000e+00;
	highp vec3 v30;
	v30.xyz = in_ATTRIBUTE11;
	v29.xyz = (in_ATTRIBUTE0.xyz+v30);
	highp vec3 v31;
	v31.x = dot(m10[0],v29);
	v31.y = dot(m10[1],v29);
	v31.z = dot(m10[2],v29);
	highp vec3 v32;
	highp vec3 v33;
	v33.xyz = in_ATTRIBUTE12;
	v32.xyz = (v31+v33);
	highp vec4 v34;
	v34.w = 1.000000e+00;
	v34.xyz = ((((vc1_h[3].xyz+(vc1_h[0].xyz*v32.xxx))+(vc1_h[1].xyz*v32.yyy))+(vc1_h[2].xyz*v32.zzz))+v7);
	v9.xyzw = v34;
	mat3 m35;
	highp vec3 v36;
	highp vec3 v37;
	highp vec3 v38;
	v36.xyz = vc1_h[0].xyz;
	v37.xyz = vc1_h[1].xyz;
	v38.xyz = vc1_h[2].xyz;
	highp mat3 m39;
	highp mat3 m40;
	m40 = m20;
	m39 = m40;
	highp mat3 m41;
	highp vec3 v42;
	v42.xyz = ((m39[0].zzz*v38)+((m39[0].yyy*v37)+(m39[0].xxx*v36)));
	m41[0].xyz = v42;
	v42.xyz = (m39[1].xxx*v36);
	highp vec3 v43;
	v43.xyz = ((m39[1].zzz*v38)+((m39[1].yyy*v37)+v42));
	m41[1].xyz = v43;
	v43.xyz = (m39[2].xxx*v36);
	m41[2].xyz = ((m39[2].zzz*v38)+((m39[2].yyy*v37)+v43));
	mat3 m44;
	m44 = m41;
	m35 = m44;
	highp mat3 m45;
	highp mat3 m46;
	m46[0].xyz = vc1_h[0].xyz;
	m46[1].xyz = vc1_h[1].xyz;
	m46[2].xyz = vc1_h[2].xyz;
	m45 = m46;
	highp float f47;
	f47 = vc1_m[0].x;
	m45[0].xyz = (m46[0]*vec3(f47));
	highp float f48;
	f48 = vc1_m[0].y;
	m45[1].xyz = (m45[1]*vec3(f48));
	highp float f49;
	f49 = vc1_m[0].z;
	m45[2].xyz = (m45[2]*vec3(f49));
	highp mat3 m50;
	highp mat3 m51;
	m51 = m20;
	m50 = m51;
	highp vec3 v52;
	v52.xyz = ((m50[2].zzz*m45[2])+((m50[2].yyy*m45[1])+(m50[2].xxx*m45[0])));
	highp vec3 v53;
	v53.xyz = v34.xyz;
	highp vec2 v54;
	highp float f55;
	f55 = vc4_m[2].y;
	v54.xy = (in_ATTRIBUTE5*vec2(f55));
	highp float f56;
	highp float f57;
	f57 = vc4_m[2].w;
	f56 = (f6*f57);
	highp vec3 v58;
	highp float f59;
	f59 = vc4_m[2].z;
	v58.x = f59;
	v58.yz = v54;
	highp float f60;
	f60 = (v58.x*1.745329e-02);
	highp vec2 v61;
	v61.xy = (vec2(-5.000000e-01,-5.000000e-01)+v54);
	highp float f62;
	f62 = sin(f60);
	highp float f63;
	f63 = cos(f60);
	highp vec2 v64;
	v64.x = f63;
	v64.y = (f62*-1.000000e+00);
	highp vec2 v65;
	v65.x = f62;
	v65.y = f63;
	highp vec2 v66;
	v66.x = dot(v61,v64);
	v66.y = dot(v61,v65);
	highp vec3 v67;
	highp float f68;
	f68 = vc4_m[2].z;
	v67.x = f68;
	v67.yz = v54;
	highp vec4 v69;
	v69.xyz = v67;
	v69.w = f56;
	highp vec3 v70;
	highp float f71;
	f71 = vc4_m[2].z;
	v70.x = f71;
	v70.yz = v54;
	highp float f72;
	f72 = ((v70.x+3.000000e+01)*1.745329e-02);
	highp vec2 v73;
	v73.xy = (vec2(-5.000000e-01,-5.000000e-01)+v54);
	highp float f74;
	f74 = sin(f72);
	highp float f75;
	f75 = cos(f72);
	highp vec2 v76;
	v76.x = f75;
	v76.y = (f74*-1.000000e+00);
	highp vec2 v77;
	v77.x = f74;
	v77.y = f75;
	highp vec2 v78;
	v78.x = dot(v73,v76);
	v78.y = dot(v73,v77);
	highp vec3 v79;
	highp float f80;
	f80 = vc4_m[2].z;
	v79.x = f80;
	v79.yz = v54;
	highp vec4 v81;
	v81.xyz = v79;
	v81.w = f56;
	highp float f82;
	highp float f83;
	f83 = vc4_m[3].z;
	f82 = (((sin((((v69.w*2.000000e+00)+(2.000000e+00*(vec2(5.000000e-01,5.000000e-01)+v66).x))*6.280000e+00))*2.000000e+00)+(cos((((v81.w*1.500000e+00)+(vec2(5.000000e-01,5.000000e-01)+v78).x)*6.280000e+00))*2.000000e+00))*f83);
	highp vec3 v84;
	highp float f85;
	f85 = vc4_m[4].y;
	highp float f86;
	f86 = in_ATTRIBUTE13.z;
	highp vec3 v87;
	v87.xyz = vc4_m[0].xyz;
	highp vec3 v88;
	v88.xyz = m35[2];
	v84.xyz = ((vec3(mix((f82*f85),f82,f86))*v87)*v88);
	float h89;
	h89 = abs((vc4_m[3].z+-1.000000e-02));
	highp vec3 v90;
	v90.xyz = ((vc4_m[3].z>=1.000000e-02))?(v84):(vec3(0.000000e+00,0.000000e+00,0.000000e+00));
	highp vec3 v91;
	v91.xyz = ((h89>1.000000e-05))?(v90):(vec3(0.000000e+00,0.000000e+00,0.000000e+00));
	highp float f92;
	highp float f93;
	f93 = vc4_m[1].w;
	f92 = f93;
	highp vec3 v94;
	v94.xyz = (vc1_h[4].xyz/vec3(2.000000e+02,2.000000e+02,2.000000e+02));
	highp vec3 v95;
	v95.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	if ((f92>5.000000e-01))
	{
		highp vec4 v96;
		v96.xyz = vec3(5.000000e-01,5.000000e-01,0.000000e+00);
		v96.w = (2.513274e-01*sin(((2.199115e+00*f6)*clamp(fract((sin((vec2(dot(floor(v94),vec3(1.288800e+02,5.273300e+02,1.233330e+02)))+vec2(0.000000e+00,1.783185e+01)))*vec2(6.000000e+01,6.000000e+01))),vec2(0.000000e+00,0.000000e+00),vec2(1.000000e+00,1.000000e+00)).y)));
		highp vec3 v97;
		v97.xyz = vc1_h[3].xyz;
		highp vec3 v98;
		v98.xyz = (v53+(-v7));
		highp vec3 v99;
		v99.xyz = (v97+(vec3(5.000000e-01,5.000000e-01,0.000000e+00)*vec3(dot(vec3(5.000000e-01,5.000000e-01,0.000000e+00),(v98+(-v97))))));
		highp vec3 v100;
		v100.xyz = (v98+(-v99));
		v95.xyz = ((v99+((v100*vec3(cos(v96.w)))+(cross(vec3(5.000000e-01,5.000000e-01,0.000000e+00),v100)*vec3(sin(v96.w)))))+(-v98));
	}
	else
	{
		v95.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	}
	v9.xyz = (v34.xyz+(v91+v95));
	highp vec4 v101;
	highp float f102;
	highp vec4 v103;
	v103.xyzw = (vc2_h[3]+((vc2_h[2]*v9.zzzz)+((vc2_h[1]*v9.yyyy)+(vc2_h[0]*v9.xxxx))));
	v101.xyzw = v103;
	if (((f4>0.000000e+00)&&(v103.z<0.000000e+00)))
	{
		v101.z = 1.000000e-06;
		v101.w = 1.000000e+00;
	}
	highp vec3 v104;
	v104.x = vc2_h[4].z;
	v104.y = vc2_h[5].z;
	v104.z = vc2_h[6].z;
	highp float f105;
	f105 = abs(dot(v104,v52));
	highp float f106;
	f106 = vc2_h[8].z;
	highp float f107;
	f107 = abs(f105);
	highp float f108;
	highp float f109;
	f109 = (sqrt(clamp((1.000000e+00+(-(f105*f105))),0.000000e+00,1.000000e+00))/f105);
	f108 = ((f107>0.000000e+00))?(f109):(f106);
	highp float f110;
	f110 = (((vc2_h[8].y*clamp(f108,0.000000e+00,vc2_h[8].z))+vc2_h[8].x)*f1);
	f102 = f110;
	highp float f111;
	f111 = (f5*f1);
	if (bool(u0))
	{
		f102 = (f110+f111);
	}
	v101.z = (((v101.z*vc2_h[8].w)+f102)*v101.w);
	v8.xyzw = v101;
	compiler_internal_AdjustOutputSemantic(v8);
	gl_Position.xyzw = v8;
}

// Compiled by HLSLCC 0.73
// @Inputs: f4;0:in_ATTRIBUTE0,f3;1:in_ATTRIBUTE1,f4;2:in_ATTRIBUTE2,u4;3:in_ATTRIBUTE3,u4;14:in_ATTRIBUTE14,f4;4:in_ATTRIBUTE4,f4;15:in_ATTRIBUTE15,f2;5:in_ATTRIBUTE5,f3;11:in_ATTRIBUTE11,f3;12:in_ATTRIBUTE12,f4;13:in_ATTRIBUTE13
// @Outputs: f4;-1:gl_Position
// @PackedGlobals: BiasScale(h:0,1),NumBoneInfluencesParam(u:0,1),BoneIndexOffsetParam(u:4,1),ImposterBiasCtrl(u:8,1)
// @PackedUB: View(0): View_PreViewTranslation(280,3),View_GameTime(666,1)
// @PackedUB: Primitive(1): Primitive_LocalToWorld(0,16),Primitive_ObjectWorldPositionAndRadius(20,4),Primitive_InvNonUniformScaleAndDeterminantSign(16,4)
// @PackedUB: MobileShadowDepthPass(2): MobileShadowDepthPass_ProjectionMatrix(40,16),MobileShadowDepthPass_ViewMatrix(56,16),MobileShadowDepthPass_ShadowParams(72,4),MobileShadowDepthPass_ImposterShadowBias(76,1),MobileShadowDepthPass_bClampToNearPlane(77,1)
// @PackedUB: Bones(3): Bones_BoneMatrices(0,1536)
// @PackedUB: Material(4): Material_VectorExpressions_3(12,4),Material_ScalarExpressions_0(16,4),Material_ScalarExpressions_7(44,4),Material_ScalarExpressions_8(48,4),Material_ScalarExpressions_9(52,4)
// @PackedUBCopies: 0:280-4:h:0:3,0:666-4:h:4:1,1:0-3:h:0:16,1:20-3:h:16:4,1:16-3:m:0:4,2:40-2:h:0:37,2:77-2:h:40:1,3:0-0:m:0:1536,4:12-1:m:0:8,4:44-1:m:8:12

//M_Base/TGPUSkinVertexFactoryDefault/TShadowDepthVSVertexShadowDepth_OutputDepthfalse/0_e7c7eb261ed056ae

/*

*/

