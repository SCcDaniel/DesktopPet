#version 310 es

#define HLSLCC_DX11ClipSpace 1

#ifdef GL_EXT_texture_cube_map_array
#extension GL_EXT_texture_cube_map_array : enable

#endif

#ifdef GL_EXT_texture_buffer
#extension GL_EXT_texture_buffer : enable

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
uniform vec4 pc0_m[16];
uniform ivec4 pc0_i[1];
uniform highp vec4 pc0_h[8];
uniform vec4 pc2_m[2];
uniform vec4 pc8_m[2];
uniform uvec4 pc4_u[1];
uniform highp vec4 pc4_h[34];
uniform uvec4 pc5_u[1];
uniform highp vec4 pc5_h[34];
uniform uvec4 pc6_u[1];
uniform highp vec4 pc6_h[34];
uniform uvec4 pc7_u[1];
uniform highp vec4 pc7_h[34];
uniform highp vec4 pc3_h[14];
uniform uvec4 pc1_u[1];
uniform ivec4 pc1_i[2];
uniform highp vec4 pc1_h[3];
uniform vec4 pc9_m[5];
uniform vec4 pc10_m[11];
uniform uvec4 pu_u[2];
uniform ivec4 pu_i[1];
uniform highp vec4 pu_h[2];
uniform mediump sampler2D ps5;
uniform mediump sampler2D ps4;
uniform mediump sampler2D ps3;
uniform mediump sampler2D ps0;
uniform mediump sampler2D ps14;
uniform mediump sampler2D ps11;
uniform mediump sampler2D ps8;
uniform mediump sampler2D ps7;
uniform mediump sampler2D ps6;
uniform mediump sampler2D ps1;
uniform mediump sampler2D ps13;
uniform mediump samplerCube ps10;
uniform highp sampler2DShadow ps9;
uniform mediump sampler2D ps15;
uniform highp usamplerBuffer ps2;
uniform highp sampler2D ps12;
layout(location=0) in vec4 in_TEXCOORD10_centroid;
layout(location=1) in vec4 in_TEXCOORD11_centroid;
layout(location=2) in vec4 in_COLOR0;
layout(location=3) in highp vec4 in_TEXCOORD0;
layout(location=4) in highp vec4 in_TEXCOORD1;
layout(location=5) in highp vec4 in_TEXCOORD2;
layout(location=6) in highp vec4 in_TEXCOORD3;
layout(location=7) in vec4 in_TEXCOORD4;
layout(location=8) in vec4 in_TEXCOORD7;
layout(location=9) in highp vec4 in_TEXCOORD8;
layout(location=10) in vec4 in_TEXCOORD14;
layout(location=0) out vec4 out_Target0;
void main()
{
	highp float f0;
	f0 = pu_h[1].x;
	bool b1;
	b1 = bool(pu_u[1].x);
	bool b2;
	b2 = bool(pu_u[0].x);
	int i3;
	i3 = pu_i[0].x;
	highp float f4;
	f4 = pu_h[0].x;
	uint u5;
	u5 = pc7_u[0].x;
	uint u6;
	u6 = pc6_u[0].x;
	uint u7;
	u7 = pc5_u[0].x;
	uint u8;
	u8 = pc4_u[0].x;
	int i9;
	i9 = pc1_i[1].x;
	int i10;
	i10 = pc1_i[0].x;
	uint u11;
	u11 = pc1_u[0].x;
	int i12;
	i12 = pc0_i[0].x;
	float h13;
	h13 = pc0_m[15].x;
	highp float f14;
	f14 = pc0_h[6].x;
	highp float f15;
	f15 = pc0_h[5].x;
	vec3 v16;
	v16.xyz = pc0_m[5].xyz;
	vec3 v17;
	v17.xyz = pc0_m[4].xyz;
	float h18;
	h18 = pc0_m[3].x;
	float h19;
	h19 = pc0_m[2].x;
	float h20;
	h20 = pc0_m[1].x;
	highp float f21;
	f21 = pc0_h[4].x;
	highp vec3 v22;
	highp vec4 v23;
	v23.xyzw = gl_FragCoord;
	v23.w = (1.0/(gl_FragCoord.w));
	vec4 v24;
	vec4 v25;
	highp vec4 v26;
	vec3 v27;
	float h28;
	float h29;
	highp vec3 v30;
	highp vec3 v31;
	vec3 v32;
	highp vec3 v33;
	v22.xyz = pc0_h[0].xyz;
	highp vec2 v34;
	highp vec2 v35;
	vec4 v36;
	v34.xy = in_TEXCOORD0.zw;
	v35.xy = in_TEXCOORD1.xy;
	vec3 v37;
	highp vec4 v38;
	v38.xyzw = in_TEXCOORD10_centroid;
	vec3 v39;
	v39.xyz = v38.xyz;
	v37.xyz = v39;
	vec4 v40;
	v40.xyzw = in_TEXCOORD11_centroid;
	v36.xyzw = in_COLOR0;
	vec3 v41;
	vec3 v42;
	v41.xyz = (cross(v40.xyz,v37)*v40.www);
	v42.xyz = v40.xyz;
	v33.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	highp vec4 v43;
	highp vec3 v44;
	highp vec2 v45;
	v45.xy = pc0_m[0].xy;
	v44.xy = ((((gl_FragCoord.xy+(-v45))*pc0_h[2].zw)+vec2(-5.000000e-01,-5.000000e-01))*vec2(2.000000e+00,-2.000000e+00));
	v44.z = gl_FragCoord.z;
	highp vec4 v46;
	v46.w = 1.000000e+00;
	v46.xyz = v44;
	v43.xyzw = (v46*v23.wwww);
	highp vec3 v47;
	v47.xyz = (in_TEXCOORD8.xyz+(-pc0_h[1].xyz));
	highp vec3 v48;
	v48.xyz = normalize((-in_TEXCOORD8.xyz));
	vec3 v49;
	v49.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	float h50;
	highp vec4 v51;
	highp float f52;
	highp float f53;
	f53 = pc10_m[3].y;
	f52 = f53;
	highp vec2 v54;
	v54.x = f52;
	v54.y = f52;
	v51.xyzw = texture(ps13,(v47.xy/v54));
	vec4 v55;
	highp vec4 v56;
	v56.xyzw = vec4(2.413190e-01,2.230440e-01,1.956530e-01,1.000000e+00);
	highp vec4 v57;
	v57.xyzw = vec4(1.562500e-02,1.464000e-02,1.261400e-02,1.000000e+00);
	highp vec4 v58;
	v58.xyzw = vec4(5.034700e-02,4.724500e-02,4.256800e-02,1.000000e+00);
	highp float f59;
	f59 = pc10_m[3].w;
	vec4 v60;
	v60.xyzw = (mix(v58,mix(v56,v57,v51.xxxx),v51.zzzz)*vec4(f59));
	v55.xyzw = v60;
	float h61;
	highp float f62;
	f62 = pc10_m[3].z;
	float h63;
	h63 = (f62*(1.000000e+00+(-v51.w)));
	h61 = h63;
	highp float f64;
	highp float f65;
	f65 = pc10_m[4].x;
	f64 = pow(clamp((f65*(1.000000e+00+(-v51.w))),0.000000e+00,1.000000e+00),8.700000e-01);
	float h66;
	highp vec3 v67;
	v67.xyz = v40.xyz;
	highp float f68;
	f68 = pc10_m[4].y;
	highp float f69;
	f69 = v36.x;
	highp float f70;
	f70 = pc10_m[4].z;
	float h71;
	h71 = mix((f64*clamp(pow((1.440000e+00*(mix(2.000000e-01,1.000000e+00,v51.z)*clamp((v67.z*f68),0.000000e+00,1.000000e+00))),1.500000e+00),0.000000e+00,1.000000e+00)),(f64*f69),f70);
	h66 = h71;
	vec4 v72;
	float h73;
	h73 = in_TEXCOORD2.x;
	v72.x = h73;
	float h74;
	h74 = in_TEXCOORD2.y;
	v72.y = h74;
	float h75;
	h75 = in_TEXCOORD2.z;
	v72.z = h75;
	float h76;
	h76 = in_TEXCOORD2.w;
	v72.w = h76;
	float h77;
	h77 = in_TEXCOORD3.x;
	h50 = h77;
	highp float f78;
	highp float f79;
	f79 = pc10_m[4].w;
	f78 = f79;
	highp vec2 v80;
	if ((f78>=5.000000e-01))
	{
		v80.xy = (v47.xy/vec2(5.120000e+02,5.120000e+02));
	}
	else
	{
		v80.xy = vec2(0.000000e+00,0.000000e+00);
	}
	vec4 v81;
	v81.xyzw = texture(ps1,v80);
	highp float f82;
	highp float f83;
	f83 = pc10_m[5].x;
	f82 = f83;
	highp vec2 v84;
	v84.x = f82;
	v84.y = f82;
	highp vec2 v85;
	v85.xy = (v47.xy/v84);
	vec4 v86;
	highp float f87;
	f87 = pc10_m[5].y;
	v86.xyzw = texture(ps6,(in_TEXCOORD0.xy*vec2(f87)));
	vec3 v88;
	vec2 v89;
	vec2 v90;
	v90.xy = in_TEXCOORD1.zw;
	v89.xy = clamp(v90,vec2(0.000000e+00,0.000000e+00),vec2(1.000000e+00,1.000000e+00));
	float h91;
	h91 = (v89.x*1.100000e+00);
	float h92;
	h92 = ((h91+(-(1.000000e-01*trunc((h91/1.000000e-01)))))*6.000000e+01);
	int i93;
	i93 = int(clamp(floor(h92),0.000000e+00,6.000000e+00));
	vec3 t94[7];
	t94[0].xyz = vec3(1.000000e+00,0.000000e+00,0.000000e+00);
	t94[1].xyz = vec3(1.000000e+00,1.000000e+00,0.000000e+00);
	t94[2].xyz = vec3(0.000000e+00,1.000000e+00,0.000000e+00);
	t94[3].xyz = vec3(0.000000e+00,1.000000e+00,1.000000e+00);
	t94[4].xyz = vec3(0.000000e+00,0.000000e+00,1.000000e+00);
	t94[5].xyz = vec3(1.000000e+00,0.000000e+00,1.000000e+00);
	t94[6].xyz = vec3(1.000000e+00,0.000000e+00,0.000000e+00);
	v88.xyz = vec3(1.000000e+00,0.000000e+00,0.000000e+00);
	if ((i93<6))
	{
		v88.xyz = mix(t94[i93],t94[(i93+1)],vec3(fract(h92)));
	}
	vec3 v95;
	v95.xyz = mix(vec3(1.000000e+00,1.000000e+00,1.000000e+00),v88,vec3(clamp((5.000000e+00*v89.y),0.000000e+00,1.000000e+00)));
	vec3 v96;
	v96.xyz = (((-v95)*v89.yyy)+v95);
	vec4 v97;
	v97.xyz = mix(v96,vec3(dot(v96,vec3(3.000000e-01,5.900000e-01,1.100000e-01))),vec3((floor((v89.x*1.100000e+01))*1.000000e-01)));
	v97.w = step(1.000000e-02,(v89.x+v89.y));
	vec3 v98;
	v98.xyz = (vec3(((((-pc10_m[5].z)*v86.w)+pc10_m[5].z)+v86.w))*pc10_m[1].xyz);
	vec4 v99;
	v99.xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00);
	if ((pc10_m[5].w>=5.000000e-01))
	{
		vec4 v100;
		v100.xyz = mix(v98,v97.xyz,v97.www);
		v100.w = v97.w;
		v99.xyzw = v100;
	}
	else
	{
		vec4 v101;
		v101.w = 0.000000e+00;
		v101.xyz = v98;
		v99.xyzw = v101;
	}
	vec2 v102;
	highp float f103;
	f103 = pc10_m[6].x;
	v102.xy = ((texture(ps7,(in_TEXCOORD0.xy*vec2(f103))).xy*vec2(2.000000e+00,2.000000e+00))+vec2(-1.000000e+00,-1.000000e+00));
	vec4 v104;
	v104.w = 1.000000e+00;
	v104.xy = v102;
	v104.z = sqrt(clamp((1.000000e+00+(-dot(v102,v102))),0.000000e+00,1.000000e+00));
	vec3 v105;
	vec3 v106;
	v106.xyz = texture(ps8,in_TEXCOORD1.xy).xyz;
	v105.xyz = ((pc10_m[6].y>=5.000000e-01))?(v106):(vec3(1.000000e+00,1.000000e+00,1.000000e+00));
	vec3 v107;
	v107.xyz = v99.xyz;
	float h108;
	h108 = pc10_m[6].z;
	float h109;
	h109 = pc10_m[6].w;
	float h110;
	h110 = v99.w;
	float h111;
	h111 = pc10_m[7].y;
	vec3 v112;
	v112.xyz = v104.xyz;
	vec3 v113;
	float h114;
	h114 = 0.000000e+00;
	float h115;
	h115 = 0.000000e+00;
	vec3 v116;
	v116.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	vec3 v117;
	vec3 v118;
	v118.xyz = (vec3(pow(v105.x,pc10_m[7].w))*mix(v99.xyz,(v86.www*pc10_m[0].xyz),v86.zzz));
	v113.xyz = v118;
	if ((pc10_m[7].x>=5.000000e-01))
	{
		vec4 v119;
		v119.xyzw = texture(ps11,v34,f14);
		v113.xyz = mix(v118,v119.xyz,v119.www);
		if ((h111>=5.000000e-01))
		{
			vec4 v120;
			v120.xyzw = texture(ps14,v34,f14);
			h114 = (((v120.x+(-v86.x))*v119.w)+v86.x);
			h115 = (((v120.y+(-v86.y))*v119.w)+v86.y);
			v116.xy = ((v120.zw*vec2(2.000000e+00,2.000000e+00))+vec2(-1.000000e+00,-1.000000e+00));
			v116.z = sqrt(clamp((1.000000e+00+(-dot(v116.xy,v116.xy))),0.000000e+00,1.000000e+00));
			v116.xyz = mix(v112,v116,v119.www);
		}
		else
		{
			h114 = v86.x;
			h115 = ((((h108*v86.y)+(-v86.y))*v119.w)+v86.y);
			v116.xyz = v112;
		}
	}
	else
	{
		h114 = v86.x;
		h115 = v86.y;
		v116.xyz = v112;
	}
	if (bool(pc10_m[7].z))
	{
		v117.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	}
	else
	{
		v117.xyz = ((vec3(h109)*v107)*vec3(h110));
	}
	highp vec4 v121;
	highp vec4 v122;
	v122.xyzw = v81;
	v121.xyzw = v122;
	highp float f123;
	highp float f124;
	f124 = pc9_m[0].x;
	f123 = f124;
	highp float f125;
	highp float f126;
	f126 = pc10_m[8].x;
	f125 = f126;
	highp float f127;
	highp float f128;
	f128 = pc10_m[8].y;
	f127 = f128;
	highp float f129;
	highp float f130;
	f130 = pc10_m[4].z;
	f129 = f130;
	highp float f131;
	highp float f132;
	f132 = h114;
	f131 = f132;
	highp vec3 v133;
	highp vec3 v134;
	v134.xyz = v116;
	v133.xyz = v134;
	highp vec3 v135;
	highp vec3 v136;
	v136.xyz = v117;
	v135.xyz = v136;
	highp float f137;
	highp float f138;
	f138 = pc10_m[4].w;
	f137 = f138;
	highp float f139;
	highp float f140;
	f140 = pc9_m[1].w;
	f139 = f140;
	highp float f141;
	highp float f142;
	f142 = pc10_m[8].z;
	f141 = f142;
	float h143;
	h143 = 0.000000e+00;
	vec3 v144;
	v144.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	float h145;
	h145 = 0.000000e+00;
	float h146;
	float h147;
	vec3 v148;
	v148.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	h146 = 1.000000e+00;
	float h149;
	h149 = v105.x;
	h147 = h149;
	if ((((f123>0.000000e+00)&&(f137>=5.000000e-01))&&(f4>=5.000000e-01)))
	{
		vec2 v150;
		vec2 v151;
		v151.xy = ((v121.wy*vec2(2.000000e+00,2.000000e+00))+vec2(-1.000000e+00,-1.000000e+00));
		v150.xy = v151;
		vec3 v152;
		v152.xy = v150;
		v152.z = sqrt(clamp((1.000000e+00+(-dot(v150,v150))),0.000000e+00,1.000000e+00));
		vec3 v153;
		v153.x = dot(v37,v152);
		v153.y = dot(v41,v152);
		v153.z = dot(v42,v152);
		if ((f129>=5.000000e-01))
		{
			vec4 v154;
			v154.xyzw = texture(ps3,v80,f14);
			h145 = clamp(((v154.z*-7.479900e+00)+((((v154.z*7.479900e+00)+1.000000e+00)*((-2.000000e+00*v154.x)+3.000000e+00))*v36.x)),0.000000e+00,1.000000e+00);
		}
		else
		{
			float h155;
			highp float f156;
			f156 = v42.z;
			highp float f157;
			f157 = ((texture(ps0,v85,f14).x*8.000000e-01)+2.000000e-01);
			float h158;
			h158 = (((((f156+f127)*f125)*f157)*f123)*1.440000e+00);
			h155 = h158;
			h145 = h155;
			float h159;
			h159 = pow(h155,1.000000e+01);
			float h160;
			h160 = ((h155<=0.000000e+00))?(0.000000e+00):(h159);
			h145 = clamp(h160,0.000000e+00,1.000000e+00);
		}
		highp float f161;
		f161 = h145;
		float h162;
		h162 = ((f161*(-f131))+f131);
		h143 = h162;
		highp float f163;
		f163 = h145;
		vec3 v164;
		v164.xyz = ((vec3(f163)*(-v135))+v135);
		v144.xyz = v164;
		highp float f165;
		f165 = max(2.500000e-01,clamp(dot(v153,vec3(5.883484e-01,1.961161e-01,7.844645e-01)),0.000000e+00,1.000000e+00));
		highp float f166;
		f166 = h149;
		highp float f167;
		f167 = clamp((h145+2.500000e-01),0.000000e+00,1.000000e+00);
		float h168;
		h168 = mix(f166,((f165*min(1.000000e+00,pow(v121.w,5.000000e-01)))*1.500000e+00),f167);
		h147 = h168;
		highp float f169;
		f169 = h145;
		highp vec3 v170;
		v170.xyz = v153;
		vec3 v171;
		v171.xyz = ((vec3(f169)*(v170+(-v133)))+v133);
		v148.xyz = v171;
	}
	else
	{
		if (((f139>0.000000e+00)&&(f4>=5.000000e-01)))
		{
			vec4 v172;
			v172.xyzw = texture(ps0,v85,f14);
			float h173;
			h173 = (v172.x*v172.x);
			highp float f174;
			f174 = h173;
			float h175;
			h175 = min((f131*f174),5.500000e-01);
			h143 = h175;
			highp float f176;
			f176 = ((1.000000e+00+(-h173))*5.000000e-01);
			float h177;
			h177 = (f176*f141);
			h146 = h177;
			vec3 v178;
			v178.xyz = v135;
			v144.xyz = v178;
			vec3 v179;
			v179.xyz = v133;
			v148.xyz = v179;
		}
		else
		{
			float h180;
			h180 = f131;
			h143 = h180;
			vec3 v181;
			v181.xyz = v135;
			v144.xyz = v181;
			vec3 v182;
			v182.xyz = v133;
			v148.xyz = v182;
		}
	}
	float h183;
	h183 = 0.000000e+00;
	vec3 v184;
	v184.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	if ((((pc9_m[0].x>0.000000e+00)&&(pc10_m[4].w>=5.000000e-01))&&(f4>=5.000000e-01)))
	{
		h183 = ((h145*(v81.z+(-h115)))+h115);
		v184.xyz = ((vec3(h145)*(mix(pc9_m[4],mix(pc9_m[3],pc9_m[2],v81.xxxx),v81.zzzz).xyz+(-v113)))+v113);
	}
	else
	{
		h183 = h115;
		v184.xyz = v113;
	}
	float h185;
	h185 = (h146*h183);
	vec3 v186;
	v186.xyz = pc10_m[2].xyz;
	float h187;
	h187 = pc10_m[8].w;
	vec2 v188;
	vec2 v189;
	v189.xy = in_TEXCOORD0.xy;
	v188.xy = v189;
	vec4 v190;
	v190.xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00);
	if (((pc10_m[3].x>=5.000000e-01)&&(pc9_m[1].z<5.000000e-01)))
	{
		vec4 v191;
		highp vec2 v192;
		v192.xy = v72.xy;
		v191.xyzw = texture(ps4,v192,f14);
		float h193;
		h193 = (v191.z*v72.z);
		float h194;
		h194 = ((((((v191.x*v72.z)+(-h193))*h50)+h193)*v72.w)*((floor(v188.x)*4.500000e-01)+1.000000e+00));
		vec4 v195;
		v195.xyz = mix(v184,v186,vec3(h194));
		v195.w = (((h187+(-h185))*h194)+h185);
		v190.xyzw = v195;
	}
	else
	{
		vec4 v196;
		v196.xyz = v184;
		v196.w = h185;
		v190.xyzw = v196;
	}
	highp float f197;
	highp float f198;
	f198 = h66;
	f197 = f198;
	highp vec3 v199;
	highp vec3 v200;
	v200.xyz = v55.xyz;
	v199.xyz = v200;
	highp float f201;
	highp float f202;
	f202 = h61;
	f201 = f202;
	highp vec3 v203;
	highp vec3 v204;
	v204.xyz = v190.xyz;
	v203.xyz = v204;
	highp float f205;
	highp float f206;
	f206 = v190.w;
	f205 = f206;
	highp float f207;
	highp float f208;
	f208 = pc10_m[9].x;
	f207 = f208;
	vec3 v209;
	v209.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	float h210;
	h210 = 0.000000e+00;
	if ((f207>=5.000000e-01))
	{
		vec3 v211;
		v211.xyz = mix(v203,v199,vec3(f197));
		v209.xyz = v211;
		float h212;
		h212 = mix(f205,f201,f197);
		h210 = h212;
	}
	else
	{
		vec3 v213;
		v213.xyz = v203;
		v209.xyz = v213;
		float h214;
		h214 = f205;
		h210 = h214;
	}
	vec3 v215;
	float h216;
	h216 = pc10_m[9].y;
	float h217;
	h217 = pc10_m[9].z;
	float h218;
	h218 = pc10_m[9].w;
	float h219;
	vec3 v220;
	highp vec3 v221;
	float h222;
	h222 = (pc9_m[1].w*pc10_m[10].x);
	highp vec3 v223;
	highp vec3 v224;
	v224.xyz = v209;
	v223.xyz = v224;
	v221.xyz = v223;
	h219 = h210;
	v220.xyz = v148;
	if ((h222>1.000000e-02))
	{
		vec2 v225;
		v225.xy = (vec2(h216)*vec2(0.000000e+00,1.000000e+00));
		vec2 v226;
		v226.x = h217;
		v226.y = h218;
		float h227;
		highp vec2 v228;
		v228.xy = v226;
		vec2 v229;
		v229.xy = fract((v35*v228));
		h227 = clamp(sqrt(texture(ps5,v229).z),0.000000e+00,1.000000e+00);
		vec3 v230;
		v230.z = 1.000000e+00;
		highp vec2 v231;
		v231.xy = v225;
		highp vec2 v232;
		v232.xy = vec2(6.000000e+01,2.000000e+01);
		highp vec2 v233;
		v233.xy = (v225/vec2(5.000000e-01,5.000000e-01));
		highp vec2 v234;
		v234.xy = vec2(2.000000e+01,4.000000e+01);
		vec2 v235;
		v235.xy = fract((((v233*vec2(f15))+v35)*v234));
		highp vec2 v236;
		v236.xy = (((texture(ps5,v235).xyz*vec3(2.000000e+00,2.000000e+00,2.000000e+00))+vec3(-1.000000e+00,-1.000000e+00,-1.000000e+00)).xy*vec2(2.000000e-01,2.000000e-01));
		vec2 v237;
		v237.xy = fract(((((v231*vec2(f15))+v35)*v232)+v236));
		v230.xy = ((((texture(ps5,v237)*vec4(2.000000e+00,2.000000e+00,2.000000e+00,2.000000e+00))+vec4(-1.000000e+00,-1.000000e+00,-1.000000e+00,-1.000000e+00)).xy*vec2(h227))*vec2(2.000000e+00,2.000000e+00));
		v220.xyz = (v148+(v230*vec3(h222)));
		h219 = (h210+((-abs((h227*2.000000e+00)))*h222));
		highp vec3 v238;
		v238.xyz = vec3((1.000000e+00+(-(h227*2.000000e-01))));
		highp float f239;
		f239 = h222;
		v221.xyz = mix(v223,(v238*v223),vec3(f239));
	}
	vec3 v240;
	v240.xyz = v221;
	v215.xyz = v240;
	vec3 v241;
	v241.xyz = v220;
	highp vec3 v242;
	v242.xyz = ((v40.xyz*v241.zzz)+((v41*v241.yyy)+(v37*v241.xxx)));
	vec3 v243;
	v243.xyz = normalize(v242);
	v49.xyz = v243;
	vec3 v244;
	highp vec3 v245;
	v245.xyz = v49;
	highp vec3 v246;
	v246.xyz = v49;
	vec3 v247;
	v247.xyz = ((-v48)+((v246*vec3(dot(v245,v48)))*vec3(2.000000e+00,2.000000e+00,2.000000e+00)));
	v244.xyz = v247;
	vec3 v248;
	v248.xyz = (v148*v148);
	vec3 v249;
	v249.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	if ((pc10_m[10].y>=5.000000e-01))
	{
		vec3 v250;
		highp vec3 v251;
		v251.xyz = v49;
		float h252;
		h252 = (1.000000e+00+(-max(0.000000e+00,dot(v251,v48))));
		v250.xyz = abs(vec3(h252));
		float h253;
		h253 = pow(v250.x,5.000000e+00);
		float h254;
		h254 = ((v250.x<=0.000000e+00))?(0.000000e+00):(h253);
		float h255;
		h255 = pow(v250.y,5.000000e+00);
		float h256;
		h256 = ((v250.y<=0.000000e+00))?(0.000000e+00):(h255);
		vec2 v257;
		v257.x = h254;
		v257.y = h256;
		float h258;
		h258 = pow(v250.z,5.000000e+00);
		float h259;
		h259 = ((v250.z<=0.000000e+00))?(0.000000e+00):(h258);
		vec3 v260;
		v260.xy = v257;
		v260.z = h259;
		vec3 v261;
		float h262;
		h262 = abs(sin((1.570796e+00*f15)));
		v261.xyz = vec3(h262);
		vec3 v263;
		v263.xyz = ((v261*((v260*vec3(9.000000e-01,9.000000e-01,9.000000e-01))+vec3(1.000000e-01,1.000000e-01,1.000000e-01)))*vec3(3.000000e+00,8.000000e-01,0.000000e+00));
		highp vec3 v264;
		highp vec3 v265;
		v265.xyz = (normalize(v248)+v49);
		v264 = fwidth(v265);
		vec3 v266;
		vec3 v267;
		v267.xyz = v264;
		v266.xyz = v267;
		v249.xyz = (min(max((vec3(pow(2.000000e+00,h20))*((v263*vec3(2.500000e-01,2.500000e-01,2.500000e-01))+(vec3(1.200000e+00,3.200000e-01,0.000000e+00)*(vec3((((v266.x*2.989000e-01)+(v266.y*5.870000e-01))+(v266.z*1.140000e-01)))*v261)))),vec3(0.000000e+00,0.000000e+00,0.000000e+00)),vec3(6.553400e+04,6.553400e+04,6.553400e+04))+v144);
	}
	else
	{
		v249.xyz = v144;
	}
	vec3 v268;
	v268.xyz = (pc9_m[1].zzz*v249);
	vec3 v269;
	v269.xyz = ((pc10_m[10].z>=5.000000e-01))?(v268):(v249);
	vec3 v270;
	v270.xyz = min(v269,vec3(6.000000e+05,6.000000e+05,6.000000e+05));
	v33.xyz = v47;
	vec3 v271;
	v271.xyz = clamp(v215,vec3(0.000000e+00,0.000000e+00,0.000000e+00),vec3(1.000000e+00,1.000000e+00,1.000000e+00));
	float h272;
	h272 = clamp(h143,0.000000e+00,1.000000e+00);
	float h273;
	h273 = clamp(h147,0.000000e+00,1.000000e+00);
	float h274;
	h274 = max(1.562500e-02,clamp(h219,0.000000e+00,1.000000e+00));
	v32.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	v31.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	v30.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	vec3 v275;
	vec3 v276;
	v275.xyz = (v271+(-(v271*vec3(h272))));
	v276.xyz = (vec3((4.000000e-02+(-(4.000000e-02*h272))))+(v271*vec3(h272)));
	vec3 v277;
	vec2 v278;
	vec4 v279;
	v279.xyzw = ((vec4(h274)*vec4(-1.000000e+00,-2.750000e-02,-5.720000e-01,2.200000e-02))+vec4(1.000000e+00,4.250000e-02,1.040000e+00,-4.000000e-02));
	vec2 v280;
	vec3 v281;
	v281.xyz = v48;
	v280.xy = ((vec2(-1.040000e+00,1.040000e+00)*vec2(((min((v279.x*v279.x),exp2((-9.280000e+00*max(dot(v49,v281),0.000000e+00))))*v279.x)+v279.y)))+v279.zw);
	v278.xy = v280;
	v278.y = (v280.y*clamp((5.000000e+01*v276.y),0.000000e+00,1.000000e+00));
	v277.xyz = ((v276*v280.xxx)+v278.yyy);
	vec3 v282;
	vec3 v283;
	v283.xyz = pc0_m[14].xyz;
	vec3 v284;
	v284.xyz = pc0_m[13].xyz;
	v282.xyz = (b1)?(v283):(v284);
	vec3 v285;
	vec3 v286;
	vec4 v287;
	v287.w = 1.000000e+00;
	v287.xyz = v49;
	v286.x = dot(pc0_m[6],v287);
	v286.y = dot(pc0_m[7],v287);
	v286.z = dot(pc0_m[8],v287);
	vec4 v288;
	v288.xyzw = (v49.xyzz*v49.yzzx);
	v285.x = dot(pc0_m[9],v288);
	v285.y = dot(pc0_m[10],v288);
	v285.z = dot(pc0_m[11],v288);
	vec3 v289;
	v289.xyz = (max(vec3(0.000000e+00,0.000000e+00,0.000000e+00),((v286+v285)+(pc0_m[12].xyz*vec3(((v49.x*v49.x)+(-(v49.y*v49.y)))))))*v282);
	vec3 v290;
	v290.xyz = in_TEXCOORD14.xyz;
	float h291;
	h291 = in_TEXCOORD14.w;
	h29 = in_TEXCOORD14.w;
	float h292;
	h292 = in_TEXCOORD14.w;
	vec3 v293;
	v293.xyz = in_TEXCOORD14.xyz;
	vec3 v294;
	v294.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	if ((bool(((i12>>0)&1))&&!(b1)))
	{
		v294.xyz = v290;
		v293.xyz = (v275*v290);
	}
	if (b2)
	{
		vec4 v295;
		highp vec2 v296;
		v296.xy = in_TEXCOORD4.xy;
		v295.xyzw = texture(ps15,v296);
		vec3 v297;
		v297.xyz = ((v295.xyz*pc2_m[0].xyz)+pc2_m[1].xyz);
		float h298;
		h298 = dot(v297,vec3(3.000000e-01,5.900000e-01,1.100000e-01));
		float h299;
		h299 = ((exp2(((h298*1.600000e+01)+-8.000000e+00))+-3.906250e-03)*6.000000e-01);
		vec3 v300;
		v300.xyz = (v297*vec3((h299/h298)));
		vec4 v301;
		v301.xyz = v300;
		v301.w = (h299*v295.w);
		v293.xyz = ((v300*v275)*v17);
		h292 = (h291+(v301.www*v17).x);
	}
	uint u302;
	u302 = uint(((i12>>1)&15));
	if (bool(u302))
	{
		bool b303;
		b303 = false;
		bool b304;
		b304 = false;
		if((1u==u302)) { b303 = true; };
		if (b303)
		{
			highp float f305;
			highp float f306;
			f306 = pc0_h[7].x;
			f305 = (bool(((i12>>5)&1)))?(f306):(f21);
			highp vec3 v307;
			v307.xyz = v294;
			vec3 v308;
			v308.xyz = (v307*vec3(f305));
			v293.xyz = v308;
			b304 = true;
		}
		if((2u==u302)) { b303 = true; };
		if((6u==u302)) { b303 = true; };
		if((7u==u302)) { b303 = true; };
		if(b304) { b303 = false; };
		if (b303)
		{
			v293.xyz = v294;
			b304 = true;
		}
		if((3u==u302)) { b303 = true; };
		if(b304) { b303 = false; };
		if (b303)
		{
			v293.xyz = v275;
			b304 = true;
		}
		if((4u==u302)) { b303 = true; };
		if(b304) { b303 = false; };
		if (b303)
		{
			vec3 v309;
			v309.yz = vec2(0.000000e+00,0.000000e+00);
			float h310;
			h310 = float(b1);
			v309.x = h310;
			v293.xyz = v309;
			b304 = true;
		}
		if((5u==u302)) { b303 = true; };
		if(b304) { b303 = false; };
		if (b303)
		{
			vec3 v311;
			v311.yz = vec2(0.000000e+00,0.000000e+00);
			float h312;
			h312 = float((int(b2)==1));
			v311.x = h312;
			v293.xyz = v311;
			b304 = true;
		}
		b303 = true;
		if(b304) { b303 = false; };
		if (b303)
		{
			v293.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
			b304 = true;
		}
	}
	h29 = h292;
	v32.xyz = v293;
	if ((!(bool(((i12>>0)&1)))||b1))
	{
		h29 = (h292+dot(v289,vec3(3.000000e-01,5.900000e-01,1.100000e-01)));
		v32.xyz = (v293+(v289*v275));
	}
	vec3 v313;
	v313.xyz = (v32*vec3(h273));
	v32.xyz = v313;
	float h314;
	h314 = (h29*h273);
	h28 = 1.000000e+00;
	if ((bool(i10)||(pc3_h[4].z>0.000000e+00)))
	{
		highp vec2 v315;
		v315.xy = v43.xy;
		highp float f316;
		f316 = v43.w;
		int i317;
		highp float f318;
		highp vec4 v319;
		highp vec4 v320;
		highp float f321;
		highp float f322;
		float h323;
		h323 = 0.000000e+00;
		f322 = pc3_h[1].w;
		v320.xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00);
		v319.xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00);
		f318 = -1.000000e+00;
		i317 = 0;
		int i324;
		i324 = 0;
		for (;i324<2;)
		{
			if ((f316<pc3_h[4][i324]))
			{
				if ((i324==0))
				{
					highp vec4 v325;
					v325.w = 1.000000e+00;
					v325.x = v315.x;
					v325.y = v315.y;
					v325.z = f316;
					v320.xyzw = (pc3_h[9]+((pc3_h[8]*v325.zzzz)+((pc3_h[7]*v325.yyyy)+(pc3_h[6]*v315.xxxx))));
				}
				else
				{
					highp vec4 v326;
					v326.w = 1.000000e+00;
					v326.x = v315.x;
					v326.y = v315.y;
					v326.z = f316;
					v319.xyzw = (pc3_h[(9+(i324*4))]+((pc3_h[(8+(i324*4))]*v326.zzzz)+((pc3_h[(7+(i324*4))]*v326.yyyy)+(pc3_h[(6+(i324*4))]*v315.xxxx))));
				}
				if (((((((i324==0)&&(v320.x<(pc3_h[4].w+-1.000000e-03)))&&(v320.y<9.900000e-01))&&(v320.y>1.000000e-02))&&(v320.x>1.000000e-02))&&(v320.z<=9.999900e-01)))
				{
					i317 = (i317+(1<<i324));
					if ((f316>pc3_h[5].w))
					{
						f318 = clamp(((f316+(-pc3_h[5].w))/pc3_h[5].z),0.000000e+00,1.000000e+00);
					}
					else
					{
						break;
					}
				}
				if ((i324!=0))
				{
					i317 = (i317+(1<<i324));
				}
			}
			i324 = (i324+1);
		}
		int i327;
		i327 = (i317&1);
		int i328;
		i328 = (i317&2);
		if (((bool(i327)&&(v320.z>0.000000e+00))||(bool(i328)&&(v319.z>0.000000e+00))))
		{
			if ((i327>0))
			{
				highp float f329;
				f329 = min(v320.z,9.999900e-01);
				f321 = f329;
				highp vec2 v330;
				v330.xy = ((v320.xy*pc3_h[2].xy)+vec2(5.000000e-01,5.000000e-01));
				highp vec2 v331;
				v331.xy = (v330+(-floor(v330)));
				highp vec2 v332;
				v332.xy = (v320.xy+(-(v331*pc3_h[2].zw)));
				highp vec2 v333;
				v333.xy = (vec2(2.000000e+00,2.000000e+00)+(-v331));
				highp vec2 v334;
				v334.xy = ((1.0/(v333))*pc3_h[2].zw);
				highp vec2 v335;
				v335.xy = (vec2(1.000000e+00,1.000000e+00)+v331);
				highp vec2 v336;
				v336.xy = ((v331/v335)*pc3_h[2].zw);
				highp float f337;
				f337 = clamp((f329+(-(1.0/(f322)))),0.000000e+00,1.000000e+00);
				highp vec2 v338;
				v338.x = v336.x;
				v338.y = v334.y;
				highp vec2 v339;
				v339.x = v334.x;
				v339.y = v336.y;
				float h340;
				float h341;
				h341 = ((v333.x*v333.y)*float(textureLodOffset(ps9,vec3((v332+v334),f337),0.000000e+00,ivec2(-1,-1))));
				float h342;
				h342 = ((v335.x*v333.y)*float(textureLodOffset(ps9,vec3((v332+v338),f337),0.000000e+00,ivec2(1,-1))));
				float h343;
				h343 = ((v333.x*v335.y)*float(textureLodOffset(ps9,vec3((v332+v339),f337),0.000000e+00,ivec2(-1,1))));
				float h344;
				h344 = ((v335.x*v335.y)*float(textureLodOffset(ps9,vec3((v332+v336),f337),0.000000e+00,ivec2(1,1))));
				h340 = ((((h341+h342)+h343)+h344)/9.000000e+00);
				highp float f345;
				highp float f346;
				highp float f347;
				f347 = h340;
				f346 = ((1.000000e+00+(-f318))*f347);
				highp float f348;
				highp float f349;
				f349 = h340;
				f348 = f349;
				f345 = ((f318>=0.000000e+00))?(f346):(f348);
				float h350;
				h350 = f345;
				h323 = h350;
			}
			if ((i328>0))
			{
				f321 = (min(v319.z,9.999900e-01)+(-(f0*1.000000e-02)));
				highp vec2 v351;
				v351.xy = ((v319.xy*pc3_h[2].xy)+vec2(5.000000e-01,5.000000e-01));
				highp vec2 v352;
				v352.xy = (v351+(-floor(v351)));
				highp vec2 v353;
				v353.xy = (v319.xy+(-(v352*pc3_h[2].zw)));
				highp vec2 v354;
				v354.xy = (vec2(2.000000e+00,2.000000e+00)+(-v352));
				highp vec2 v355;
				v355.xy = ((1.0/(v354))*pc3_h[2].zw);
				highp vec2 v356;
				v356.xy = (vec2(1.000000e+00,1.000000e+00)+v352);
				highp vec2 v357;
				v357.xy = ((v352/v356)*pc3_h[2].zw);
				highp float f358;
				f358 = clamp((f321+(-(1.0/(f322)))),0.000000e+00,1.000000e+00);
				highp vec2 v359;
				v359.x = v357.x;
				v359.y = v355.y;
				highp vec2 v360;
				v360.x = v355.x;
				v360.y = v357.y;
				float h361;
				float h362;
				h362 = ((v354.x*v354.y)*float(textureLodOffset(ps9,vec3((v353+v355),f358),0.000000e+00,ivec2(-1,-1))));
				float h363;
				h363 = ((v356.x*v354.y)*float(textureLodOffset(ps9,vec3((v353+v359),f358),0.000000e+00,ivec2(1,-1))));
				float h364;
				h364 = ((v354.x*v356.y)*float(textureLodOffset(ps9,vec3((v353+v360),f358),0.000000e+00,ivec2(-1,1))));
				float h365;
				h365 = ((v356.x*v356.y)*float(textureLodOffset(ps9,vec3((v353+v357),f358),0.000000e+00,ivec2(1,1))));
				h361 = ((((h362+h363)+h364)+h365)/9.000000e+00);
				highp float f366;
				highp float f367;
				highp float f368;
				f368 = h361;
				f367 = (f318*f368);
				highp float f369;
				highp float f370;
				f370 = h361;
				f369 = f370;
				f366 = ((f318>=0.000000e+00))?(f367):(f369);
				float h371;
				h371 = f366;
				h323 = (h323+h371);
			}
			highp float f372;
			f372 = clamp(((f316*pc3_h[3].x)+pc3_h[3].y),0.000000e+00,1.000000e+00);
			highp float f373;
			f373 = h323;
			float h374;
			h374 = mix(f373,1.000000e+00,(f372*f372));
			h323 = h374;
		}
		else
		{
			h323 = 1.000000e+00;
		}
		h28 = h323;
	}
	float h375;
	highp vec3 v376;
	v376.xyz = v49;
	float h377;
	h377 = dot(v376,pc3_h[1].xyz);
	h375 = max(0.000000e+00,h377);
	highp float f378;
	f378 = 0.000000e+00;
	if ((pc3_h[0].w>f378))
	{
		highp float f379;
		f379 = 1.000000e-01;
		if ((pc3_h[3].z<f379))
		{
			highp float f380;
			f380 = h28;
			highp vec3 v381;
			v381.xyz = (vec3(h375)*v275);
			vec3 v382;
			v382.xyz = ((vec3(f380)*pc3_h[0].xyz)*v381);
			v32.xyz = (v313+v382);
		}
		else
		{
			highp float f383;
			f383 = h28;
			highp vec3 v384;
			v384.xyz = (vec3(h375)*v275);
			vec3 v385;
			v385.xyz = ((vec3(f383)*pc3_h[0].xyz)*v384);
			v32.xyz = (v32+v385);
		}
	}
	v27.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	float h386;
	h386 = pc8_m[0].z;
	vec4 v387;
	v387.xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,1.000000e+00);
	if (bool(pc8_m[0].y))
	{
		vec4 v388;
		highp float f389;
		f389 = ((pc8_m[0].y+-1.000000e+00)+(-(1.000000e+00+(-(1.200000e+00*log2(max(h274,1.000000e-03)))))));
		v388.xyzw = textureLod(ps10,v244,f389);
		vec3 v390;
		vec3 v391;
		v391.xyz = pc0_m[14].xyz;
		vec3 v392;
		v392.xyz = pc0_m[13].xyz;
		v390.xyz = (b1)?(v391):(v392);
		v387.xyz = (v388.xyz*v390);
	}
	else
	{
		vec4 v393;
		highp float f394;
		f394 = ((h18+-1.000000e+00)+(-(1.000000e+00+(-(1.200000e+00*log2(max(h274,1.000000e-03)))))));
		v393.xyzw = textureLod(ps10,v244,f394);
		vec3 v395;
		v395.xyz = (v393.xyz*vec3((v393.w*h386)));
		vec3 v396;
		v396.xyz = (v395*v395);
		v387.xyz = v396;
		v387.xyz = (v396*vec3(mix(1.000000e+00,min((h314/max(pc8_m[0].x,1.000000e-04)),v16.z),smoothstep(0.000000e+00,1.000000e+00,clamp(((h274*v16.x)+v16.y),0.000000e+00,1.000000e+00)))));
		v387.xyz = (v387.xyz*v17);
	}
	v27.xyz = (v387.xyz*pc8_m[1].xyz);
	float h397;
	h397 = dot(v27,vec3(3.000000e-01,5.900000e-01,1.100000e-01));
	vec3 v398;
	v398.x = h397;
	v398.y = h397;
	v398.z = h397;
	vec3 v399;
	v399.xyz = (v32+(mix(v398,v27,pc8_m[1].www)*v277));
	v32.xyz = v399;
	uvec3 v400;
	highp vec2 v401;
	v401.xy = pc0_m[0].xy;
	v400.xy = (uvec2((gl_FragCoord.xy+(-v401)))>>uvec2(u11));
	float h402;
	h402 = v23.w;
	float h403;
	h403 = pc1_h[1].x;
	float h404;
	h404 = pc1_h[1].y;
	float h405;
	h405 = pc1_h[1].z;
	float h406;
	h406 = pc1_h[0].z;
	v400.z = uint(clamp((log2(((h402*h403)+h404))*h405),0.000000e+00,(h406+-1.000000e+00)));
	highp vec3 v407;
	v407.xyz = vec3(v400);
	uint u408;
	u408 = uint(texelFetch(ps2,int(uint(((((v407.z*pc1_h[0].y)+v407.y)*pc1_h[0].x)+v407.x)))).x);
	v26.xyzw = vec4(0.000000e+00,1.000000e+00,0.000000e+00,0.000000e+00);
	v26.x = pc3_h[5].x;
	v26.y = pc3_h[5].y;
	if (bool((u408&u5)))
	{
		highp float f409;
		highp float f410;
		f410 = h28;
		f409 = f410;
		highp float f411;
		f411 = v26.x;
		highp float f412;
		f412 = v26.y;
		vec3 v413;
		v413.xyz = v399;
		highp vec3 v414;
		v414.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
		uint u415;
		float h416;
		uint u417;
		u417 = uint(pc7_h[3].w);
		h416 = 1.000000e+00;
		u415 = 0u;
		if (((u417&4u)==4u))
		{
			uint u418;
			u415 = 1u;
			u418 = 0u;
			if (((u417&1u)==1u))
			{
				highp vec3 v419;
				v419.xyz = (v47+(-pc7_h[0].xyz));
				highp vec3 v420;
				v420.xyz = abs(v419);
				highp float f421;
				f421 = max(max(v420.x,v420.y),v420.z);
				bool b422;
				b422 = (f421==v420.x);
				bool b423;
				b423 = (!(b422)&&(f421==v420.y));
				bool b424;
				b424 = (!(b422)&&!(b423));
				u418 = ((uint(int((b422&&(f421==v419.x))))+uint(((2*int(b423))+int((b423&&(f421==v419.y))))))+uint(((4*int(b424))+int((b424&&(f421==v419.z))))));
			}
			highp vec4 v425;
			v425.xyzw = (pc7_h[int((13u+(u418*4u)))]+((pc7_h[int((12u+(u418*4u)))]*v47.zzzz)+((pc7_h[int((11u+(u418*4u)))]*v47.yyyy)+(pc7_h[int((10u+(u418*4u)))]*v47.xxxx))));
			highp vec2 v426;
			v426.xy = (v425.xy/v425.ww);
			highp vec4 v427;
			v427.xyzw = pc7_h[int((4u+u418))];
			highp vec4 v428;
			v428.xyzw = pc7_h[int((4u+u418))];
			if (all(bvec2(uvec2(greaterThanEqual(v426,v427.xy))*uvec2(lessThanEqual(v426,v428.zw)))))
			{
				highp float f429;
				f429 = min(v425.z,9.999900e-01);
				highp vec4 v430;
				highp vec2 v431;
				v431.xy = (v426*pc0_h[3].xy);
				highp vec2 v432;
				v432.xy = ((floor(v431)+vec2(5.000000e-01,5.000000e-01))*pc0_h[3].zw);
				highp vec4 v433;
				v433.xyzw = textureGatherOffset(ps12,v432,ivec2(-1,-1));
				v430.xyzw = textureGatherOffset(ps12,v432,ivec2(0,0));
				highp vec3 v434;
				v434.x = v433.w;
				v434.y = v433.z;
				highp vec2 v435;
				v435.xy = vec2(1.000000e+00,-1.000000e+00);
				v434.z = textureLod(ps12,(v432+(v435*pc0_h[3].zw)),0.000000e+00).x;
				vec3 v436;
				float h437;
				float h438;
				h438 = pc7_h[3].z;
				h437 = h438;
				highp float f439;
				f439 = h437;
				highp float f440;
				f440 = h437;
				vec3 v441;
				v441.xyz = clamp(((v434*vec3(f439))+(-vec3(((f429*f440)+-1.000000e+00)))),vec3(0.000000e+00,0.000000e+00,0.000000e+00),vec3(1.000000e+00,1.000000e+00,1.000000e+00));
				v436.xyz = v441;
				highp vec3 v442;
				v442.x = v433.x;
				v442.y = v433.y;
				v442.z = v430.z;
				vec3 v443;
				float h444;
				float h445;
				h445 = pc7_h[3].z;
				h444 = h445;
				highp float f446;
				f446 = h444;
				highp float f447;
				f447 = h444;
				vec3 v448;
				v448.xyz = clamp(((v442*vec3(f446))+(-vec3(((f429*f447)+-1.000000e+00)))),vec3(0.000000e+00,0.000000e+00,0.000000e+00),vec3(1.000000e+00,1.000000e+00,1.000000e+00));
				v443.xyz = v448;
				highp vec3 v449;
				highp vec2 v450;
				v450.xy = vec2(-1.000000e+00,1.000000e+00);
				v449.x = textureLod(ps12,(v432+(v450*pc0_h[3].zw)),0.000000e+00).x;
				v449.y = v430.x;
				v449.z = v430.y;
				vec3 v451;
				float h452;
				float h453;
				h453 = pc7_h[3].z;
				h452 = h453;
				highp float f454;
				f454 = h452;
				highp float f455;
				f455 = h452;
				vec3 v456;
				v456.xyz = clamp(((v449*vec3(f454))+(-vec3(((f429*f455)+-1.000000e+00)))),vec3(0.000000e+00,0.000000e+00,0.000000e+00),vec3(1.000000e+00,1.000000e+00,1.000000e+00));
				v451.xyz = v456;
				vec2 v457;
				vec2 v458;
				v458.xy = fract(v431);
				v457.xy = v458;
				vec3 v459;
				v459.x = (v436.x*(1.000000e+00+(-v457.x)));
				v459.y = (v443.x*(1.000000e+00+(-v457.x)));
				v459.z = (v451.x*(1.000000e+00+(-v457.x)));
				v459.x = (v459.x+v436.y);
				v459.y = (v459.y+v443.y);
				v459.z = (v459.z+v451.y);
				v459.x = (v459.x+(v436.z*v457.x));
				v459.y = (v459.y+(v443.z*v457.x));
				v459.z = (v459.z+(v451.z*v457.x));
				vec3 v460;
				v460.y = 1.000000e+00;
				v460.x = (1.000000e+00+(-v457.y));
				v460.z = v457.y;
				highp float f461;
				highp float f462;
				f462 = clamp(clamp((2.500000e-01*dot(v459,v460)),0.000000e+00,1.000000e+00),0.000000e+00,1.000000e+00);
				f461 = f462;
				highp float f463;
				f463 = 1.000000e+00;
				highp float f464;
				f464 = 1.000000e+00;
				float h465;
				h465 = mix(f463,(f461*f461),f464);
				h416 = h465;
			}
		}
		if (((u417&3u)!=0u))
		{
			highp float f466;
			highp vec3 v467;
			v467.xyz = (pc7_h[0].xyz+(-v47));
			highp vec3 v468;
			v468.xyz = normalize(v467);
			float h469;
			highp vec3 v470;
			v470.xyz = v49;
			float h471;
			h471 = dot(v470,v468);
			h469 = max(0.000000e+00,h471);
			if ((pc7_h[1].w==0.000000e+00))
			{
				highp float f472;
				f472 = dot(v467,v467);
				highp float f473;
				f473 = (f472*(pc7_h[0].w*pc7_h[0].w));
				highp float f474;
				f474 = clamp((1.000000e+00+(-(f473*f473))),0.000000e+00,1.000000e+00);
				f466 = ((1.0/((f472+1.000000e+00)))*(f474*f474));
			}
			else
			{
				highp vec3 v475;
				v475.xyz = (v467*pc7_h[0].www);
				f466 = pow((1.000000e+00+(-clamp(dot(v475,v475),0.000000e+00,1.000000e+00))),pc7_h[1].w);
			}
			if (((u417&2u)==2u))
			{
				highp float f476;
				f476 = clamp(((dot(v468,(-(-pc7_h[2].xyz)))+(-pc7_h[3].x))*pc7_h[3].y),0.000000e+00,1.000000e+00);
				f466 = (f466*(f476*f476));
			}
			highp float f477;
			highp float f478;
			f478 = h416;
			f477 = (f466*f478);
			f466 = f477;
			highp float f479;
			f479 = mix((f409+f412),f409,f409);
			highp float f480;
			f480 = ((!(bool(u415))&&(f411>0.000000e+00)))?(f479):(1.000000e+00);
			highp float f481;
			f481 = (f477*min(1.000000e+00,f480));
			f466 = f481;
			highp float f482;
			f482 = h469;
			highp float f483;
			f483 = 3.183099e-01;
			v414.xyz = min(vec3(6.500000e+04,6.500000e+04,6.500000e+04),((vec3((f482*f481))*pc7_h[1].xyz)*vec3(f483)));
			highp float f484;
			f484 = 3.141593e+00;
			highp vec3 v485;
			v485.xyz = (vec3(h469)*v275);
			vec3 v486;
			v486.xyz = min(vec3(6.500000e+04,6.500000e+04,6.500000e+04),(((vec3(f481)*pc7_h[1].xyz)*vec3((1.0/(f484))))*v485));
			v413.xyz = (v399+v486);
		}
		v32.xyz = v413;
		v30.xyz = v414;
	}
	v31.xyz = v30;
	if ((bool((u408&u6))&&(i3>1)))
	{
		highp float f487;
		highp float f488;
		f488 = h28;
		f487 = f488;
		highp float f489;
		f489 = v26.x;
		highp float f490;
		f490 = v26.y;
		vec3 v491;
		v491.xyz = v32;
		highp vec3 v492;
		v492.xyz = v30;
		uint u493;
		float h494;
		uint u495;
		u495 = uint(pc6_h[3].w);
		h494 = 1.000000e+00;
		u493 = 0u;
		if (((u495&4u)==4u))
		{
			uint u496;
			u493 = 1u;
			u496 = 0u;
			if (((u495&1u)==1u))
			{
				highp vec3 v497;
				v497.xyz = (v47+(-pc6_h[0].xyz));
				highp vec3 v498;
				v498.xyz = abs(v497);
				highp float f499;
				f499 = max(max(v498.x,v498.y),v498.z);
				bool b500;
				b500 = (f499==v498.x);
				bool b501;
				b501 = (!(b500)&&(f499==v498.y));
				bool b502;
				b502 = (!(b500)&&!(b501));
				u496 = ((uint(int((b500&&(f499==v497.x))))+uint(((2*int(b501))+int((b501&&(f499==v497.y))))))+uint(((4*int(b502))+int((b502&&(f499==v497.z))))));
			}
			highp vec4 v503;
			v503.xyzw = (pc6_h[int((13u+(u496*4u)))]+((pc6_h[int((12u+(u496*4u)))]*v47.zzzz)+((pc6_h[int((11u+(u496*4u)))]*v47.yyyy)+(pc6_h[int((10u+(u496*4u)))]*v47.xxxx))));
			highp vec2 v504;
			v504.xy = (v503.xy/v503.ww);
			highp vec4 v505;
			v505.xyzw = pc6_h[int((4u+u496))];
			highp vec4 v506;
			v506.xyzw = pc6_h[int((4u+u496))];
			if (all(bvec2(uvec2(greaterThanEqual(v504,v505.xy))*uvec2(lessThanEqual(v504,v506.zw)))))
			{
				highp vec2 v507;
				v507.xy = (v504*pc0_h[3].xy);
				vec4 v508;
				float h509;
				float h510;
				h510 = pc6_h[3].z;
				h509 = h510;
				highp float f511;
				f511 = h509;
				highp float f512;
				f512 = h509;
				vec4 v513;
				v513.xyzw = clamp(((textureGatherOffset(ps12,((floor(v507)+vec2(5.000000e-01,5.000000e-01))*pc0_h[3].zw),ivec2(0,0))*vec4(f511))+(-vec4(((min(v503.z,9.999900e-01)*f512)+-1.000000e+00)))),vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00),vec4(1.000000e+00,1.000000e+00,1.000000e+00,1.000000e+00));
				v508.xyzw = v513;
				vec2 v514;
				vec2 v515;
				v515.xy = fract(v507);
				v514.xy = v515;
				vec2 v516;
				v516.xy = mix(v508.wx,v508.zy,v514.xx);
				highp float f517;
				highp float f518;
				f518 = clamp(mix(v516.x,v516.y,v514.y),0.000000e+00,1.000000e+00);
				f517 = f518;
				highp float f519;
				f519 = 1.000000e+00;
				highp float f520;
				f520 = 1.000000e+00;
				float h521;
				h521 = mix(f519,(f517*f517),f520);
				h494 = h521;
			}
		}
		if (((u495&3u)!=0u))
		{
			highp float f522;
			highp vec3 v523;
			v523.xyz = (pc6_h[0].xyz+(-v47));
			highp vec3 v524;
			v524.xyz = normalize(v523);
			float h525;
			highp vec3 v526;
			v526.xyz = v49;
			float h527;
			h527 = dot(v526,v524);
			h525 = max(0.000000e+00,h527);
			if ((pc6_h[1].w==0.000000e+00))
			{
				highp float f528;
				f528 = dot(v523,v523);
				highp float f529;
				f529 = (f528*(pc6_h[0].w*pc6_h[0].w));
				highp float f530;
				f530 = clamp((1.000000e+00+(-(f529*f529))),0.000000e+00,1.000000e+00);
				f522 = ((1.0/((f528+1.000000e+00)))*(f530*f530));
			}
			else
			{
				highp vec3 v531;
				v531.xyz = (v523*pc6_h[0].www);
				f522 = pow((1.000000e+00+(-clamp(dot(v531,v531),0.000000e+00,1.000000e+00))),pc6_h[1].w);
			}
			if (((u495&2u)==2u))
			{
				highp float f532;
				f532 = clamp(((dot(v524,(-(-pc6_h[2].xyz)))+(-pc6_h[3].x))*pc6_h[3].y),0.000000e+00,1.000000e+00);
				f522 = (f522*(f532*f532));
			}
			highp float f533;
			highp float f534;
			f534 = h494;
			f533 = (f522*f534);
			f522 = f533;
			highp float f535;
			f535 = mix((f487+f490),f487,f487);
			highp float f536;
			f536 = ((!(bool(u493))&&(f489>0.000000e+00)))?(f535):(1.000000e+00);
			highp float f537;
			f537 = (f533*min(1.000000e+00,f536));
			f522 = f537;
			highp float f538;
			f538 = h525;
			highp float f539;
			f539 = 3.183099e-01;
			v492.xyz = min(vec3(6.500000e+04,6.500000e+04,6.500000e+04),(v30+((vec3((f538*f537))*pc6_h[1].xyz)*vec3(f539))));
			highp float f540;
			f540 = 3.141593e+00;
			highp vec3 v541;
			v541.xyz = (vec3(h525)*v275);
			vec3 v542;
			v542.xyz = min(vec3(6.500000e+04,6.500000e+04,6.500000e+04),(((vec3(f537)*pc6_h[1].xyz)*vec3((1.0/(f540))))*v541));
			v491.xyz = (v32+v542);
		}
		v32.xyz = v491;
		v31.xyz = v492;
	}
	if ((bool((u408&u7))&&(i3>2)))
	{
		highp float f543;
		highp float f544;
		f544 = h28;
		f543 = f544;
		highp float f545;
		f545 = v26.x;
		highp float f546;
		f546 = v26.y;
		vec3 v547;
		v547.xyz = v32;
		highp vec3 v548;
		v548.xyz = v31;
		uint u549;
		float h550;
		uint u551;
		u551 = uint(pc5_h[3].w);
		h550 = 1.000000e+00;
		u549 = 0u;
		if (((u551&4u)==4u))
		{
			uint u552;
			u549 = 1u;
			u552 = 0u;
			if (((u551&1u)==1u))
			{
				highp vec3 v553;
				v553.xyz = (v47+(-pc5_h[0].xyz));
				highp vec3 v554;
				v554.xyz = abs(v553);
				highp float f555;
				f555 = max(max(v554.x,v554.y),v554.z);
				bool b556;
				b556 = (f555==v554.x);
				bool b557;
				b557 = (!(b556)&&(f555==v554.y));
				bool b558;
				b558 = (!(b556)&&!(b557));
				u552 = ((uint(int((b556&&(f555==v553.x))))+uint(((2*int(b557))+int((b557&&(f555==v553.y))))))+uint(((4*int(b558))+int((b558&&(f555==v553.z))))));
			}
			highp vec4 v559;
			v559.xyzw = (pc5_h[int((13u+(u552*4u)))]+((pc5_h[int((12u+(u552*4u)))]*v47.zzzz)+((pc5_h[int((11u+(u552*4u)))]*v47.yyyy)+(pc5_h[int((10u+(u552*4u)))]*v47.xxxx))));
			highp vec2 v560;
			v560.xy = (v559.xy/v559.ww);
			highp vec4 v561;
			v561.xyzw = pc5_h[int((4u+u552))];
			highp vec4 v562;
			v562.xyzw = pc5_h[int((4u+u552))];
			if (all(bvec2(uvec2(greaterThanEqual(v560,v561.xy))*uvec2(lessThanEqual(v560,v562.zw)))))
			{
				highp float f563;
				highp float f564;
				f564 = 1.000000e+00;
				f563 = f564;
				highp float f565;
				f565 = 1.000000e+00;
				highp float f566;
				f566 = 1.000000e+00;
				float h567;
				h567 = mix(f565,(f563*f563),f566);
				h550 = h567;
			}
		}
		if (((u551&3u)!=0u))
		{
			highp float f568;
			highp vec3 v569;
			v569.xyz = (pc5_h[0].xyz+(-v47));
			highp vec3 v570;
			v570.xyz = normalize(v569);
			float h571;
			highp vec3 v572;
			v572.xyz = v49;
			float h573;
			h573 = dot(v572,v570);
			h571 = max(0.000000e+00,h573);
			if ((pc5_h[1].w==0.000000e+00))
			{
				highp float f574;
				f574 = dot(v569,v569);
				highp float f575;
				f575 = (f574*(pc5_h[0].w*pc5_h[0].w));
				highp float f576;
				f576 = clamp((1.000000e+00+(-(f575*f575))),0.000000e+00,1.000000e+00);
				f568 = ((1.0/((f574+1.000000e+00)))*(f576*f576));
			}
			else
			{
				highp vec3 v577;
				v577.xyz = (v569*pc5_h[0].www);
				f568 = pow((1.000000e+00+(-clamp(dot(v577,v577),0.000000e+00,1.000000e+00))),pc5_h[1].w);
			}
			if (((u551&2u)==2u))
			{
				highp float f578;
				f578 = clamp(((dot(v570,(-(-pc5_h[2].xyz)))+(-pc5_h[3].x))*pc5_h[3].y),0.000000e+00,1.000000e+00);
				f568 = (f568*(f578*f578));
			}
			highp float f579;
			highp float f580;
			f580 = h550;
			f579 = (f568*f580);
			f568 = f579;
			highp float f581;
			f581 = mix((f543+f546),f543,f543);
			highp float f582;
			f582 = ((!(bool(u549))&&(f545>0.000000e+00)))?(f581):(1.000000e+00);
			highp float f583;
			f583 = (f579*min(1.000000e+00,f582));
			f568 = f583;
			highp float f584;
			f584 = h571;
			highp float f585;
			f585 = 3.183099e-01;
			v548.xyz = min(vec3(6.500000e+04,6.500000e+04,6.500000e+04),(v31+((vec3((f584*f583))*pc5_h[1].xyz)*vec3(f585))));
			highp float f586;
			f586 = 3.141593e+00;
			highp vec3 v587;
			v587.xyz = (vec3(h571)*v275);
			vec3 v588;
			v588.xyz = min(vec3(6.500000e+04,6.500000e+04,6.500000e+04),(((vec3(f583)*pc5_h[1].xyz)*vec3((1.0/(f586))))*v587));
			v547.xyz = (v32+v588);
		}
		v32.xyz = v547;
		v31.xyz = v548;
	}
	if ((bool((u408&u8))&&(i3>3)))
	{
		highp float f589;
		highp float f590;
		f590 = h28;
		f589 = f590;
		highp float f591;
		f591 = v26.x;
		highp float f592;
		f592 = v26.y;
		vec3 v593;
		v593.xyz = v32;
		highp vec3 v594;
		v594.xyz = v31;
		uint u595;
		float h596;
		uint u597;
		u597 = uint(pc4_h[3].w);
		h596 = 1.000000e+00;
		u595 = 0u;
		if (((u597&4u)==4u))
		{
			uint u598;
			u595 = 1u;
			u598 = 0u;
			if (((u597&1u)==1u))
			{
				highp vec3 v599;
				v599.xyz = (v47+(-pc4_h[0].xyz));
				highp vec3 v600;
				v600.xyz = abs(v599);
				highp float f601;
				f601 = max(max(v600.x,v600.y),v600.z);
				bool b602;
				b602 = (f601==v600.x);
				bool b603;
				b603 = (!(b602)&&(f601==v600.y));
				bool b604;
				b604 = (!(b602)&&!(b603));
				u598 = ((uint(int((b602&&(f601==v599.x))))+uint(((2*int(b603))+int((b603&&(f601==v599.y))))))+uint(((4*int(b604))+int((b604&&(f601==v599.z))))));
			}
			highp vec4 v605;
			v605.xyzw = (pc4_h[int((13u+(u598*4u)))]+((pc4_h[int((12u+(u598*4u)))]*v47.zzzz)+((pc4_h[int((11u+(u598*4u)))]*v47.yyyy)+(pc4_h[int((10u+(u598*4u)))]*v47.xxxx))));
			highp vec2 v606;
			v606.xy = (v605.xy/v605.ww);
			highp vec4 v607;
			v607.xyzw = pc4_h[int((4u+u598))];
			highp vec4 v608;
			v608.xyzw = pc4_h[int((4u+u598))];
			if (all(bvec2(uvec2(greaterThanEqual(v606,v607.xy))*uvec2(lessThanEqual(v606,v608.zw)))))
			{
				highp float f609;
				highp float f610;
				f610 = 1.000000e+00;
				f609 = f610;
				highp float f611;
				f611 = 1.000000e+00;
				highp float f612;
				f612 = 1.000000e+00;
				float h613;
				h613 = mix(f611,(f609*f609),f612);
				h596 = h613;
			}
		}
		if (((u597&3u)!=0u))
		{
			highp float f614;
			highp vec3 v615;
			v615.xyz = (pc4_h[0].xyz+(-v47));
			highp vec3 v616;
			v616.xyz = normalize(v615);
			float h617;
			highp vec3 v618;
			v618.xyz = v49;
			float h619;
			h619 = dot(v618,v616);
			h617 = max(0.000000e+00,h619);
			if ((pc4_h[1].w==0.000000e+00))
			{
				highp float f620;
				f620 = dot(v615,v615);
				highp float f621;
				f621 = (f620*(pc4_h[0].w*pc4_h[0].w));
				highp float f622;
				f622 = clamp((1.000000e+00+(-(f621*f621))),0.000000e+00,1.000000e+00);
				f614 = ((1.0/((f620+1.000000e+00)))*(f622*f622));
			}
			else
			{
				highp vec3 v623;
				v623.xyz = (v615*pc4_h[0].www);
				f614 = pow((1.000000e+00+(-clamp(dot(v623,v623),0.000000e+00,1.000000e+00))),pc4_h[1].w);
			}
			if (((u597&2u)==2u))
			{
				highp float f624;
				f624 = clamp(((dot(v616,(-(-pc4_h[2].xyz)))+(-pc4_h[3].x))*pc4_h[3].y),0.000000e+00,1.000000e+00);
				f614 = (f614*(f624*f624));
			}
			highp float f625;
			highp float f626;
			f626 = h596;
			f625 = (f614*f626);
			f614 = f625;
			highp float f627;
			f627 = mix((f589+f592),f589,f589);
			highp float f628;
			f628 = ((!(bool(u595))&&(f591>0.000000e+00)))?(f627):(1.000000e+00);
			highp float f629;
			f629 = (f625*min(1.000000e+00,f628));
			f614 = f629;
			highp float f630;
			f630 = h617;
			highp float f631;
			f631 = 3.183099e-01;
			v594.xyz = min(vec3(6.500000e+04,6.500000e+04,6.500000e+04),(v31+((vec3((f630*f629))*pc4_h[1].xyz)*vec3(f631))));
			highp float f632;
			f632 = 3.141593e+00;
			highp vec3 v633;
			v633.xyz = (vec3(h617)*v275);
			vec3 v634;
			v634.xyz = min(vec3(6.500000e+04,6.500000e+04,6.500000e+04),(((vec3(f629)*pc4_h[1].xyz)*vec3((1.0/(f632))))*v633));
			v593.xyz = (v32+v634);
		}
		v32.xyz = v593;
		v31.xyz = v594;
	}
	if (((pc7_h[2].w>1.000000e-01)&&(float(i9)>5.000000e-01)))
	{
		vec3 v635;
		v635.xyz = v32;
		highp float f636;
		f636 = distance(v33,v22);
		float h637;
		float h638;
		h638 = f636;
		h637 = h638;
		if ((h637<2.500000e+03))
		{
			float h639;
			h639 = clamp(h274,0.000000e+00,1.000000e+00);
			highp float f640;
			highp vec3 v641;
			v641.xyz = v49;
			f640 = max(0.000000e+00,dot(v641,normalize((normalize((pc7_h[0].xyz+(-v47)))+v48))));
			float h642;
			h642 = (h639*h639);
			float h643;
			highp float f644;
			f644 = h642;
			float h645;
			h645 = (f640*f644);
			h643 = h645;
			float h646;
			highp float f647;
			f647 = (h643*h643);
			highp float f648;
			f648 = h642;
			float h649;
			h649 = (f648/(max(1.000000e-06,(1.000000e+00+(-(f640*f640))))+f647));
			h646 = h649;
			vec3 v650;
			v650.xyz = v30;
			v635.xyz = (v32+((((v650*vec3(clamp((1.000000e+00+(-((h637+-1.250000e+03)/1.250000e+03))),0.000000e+00,1.000000e+00)))*vec3(((h639*2.500000e-01)+2.500000e-01)))*vec3(min((h646*h646),h19)))*v277));
		}
		v32.xyz = v635;
	}
	v25.xyzw = in_TEXCOORD7;
	highp float f651;
	f651 = h28;
	vec3 v652;
	v652.xyz = max((v31*((vec3((pc1_h[2].w*f651))*pc3_h[0].xyz)*pc3_h[0].www)),vec3(1.000000e+00,1.000000e+00,1.000000e+00));
	v25.xyz = (in_TEXCOORD7.xyz*v652);
	vec4 v653;
	v653.xyzw = mix(v25,vec4(0.000000e+00,0.000000e+00,0.000000e+00,1.000000e+00),vec4(h13));
	v24.xyz = (((v32+mix(max(v270,vec3(0.000000e+00,0.000000e+00,0.000000e+00)),vec3(0.000000e+00,0.000000e+00,0.000000e+00),vec3(h13)))*v653.www)+v653.xyz);
	v24.w = 1.000000e+00;
	float h654;
	h654 = gl_FragCoord.z;
	v24.w = h654;
	vec3 v655;
	v655.xyz = min(v24.xyz,vec3(6.500000e+04,6.500000e+04,6.500000e+04));
	v24.xyz = v655;
	float h656;
	h656 = f21;
	v24.xyz = (v655*vec3(h656));
	uint u657;
	u657 = uint(((i12>>1)&15));
	if (bool(u657))
	{
		v24.xyz = v293;
		v24.w = 1.000000e+00;
	}
	out_Target0.xyzw = v24;
}

// Compiled by HLSLCC 0.73
// @Inputs: f4;0:in_TEXCOORD10_centroid,f4;1:in_TEXCOORD11_centroid,f4;2:in_COLOR0,f4;3:in_TEXCOORD0,f4;4:in_TEXCOORD1,f4;5:in_TEXCOORD2,f4;6:in_TEXCOORD3,f4;7:in_TEXCOORD4,f4;8:in_TEXCOORD7,f4;9:in_TEXCOORD8,f4;10:in_TEXCOORD14,f4;-1:gl_FragCoord
// @Outputs: f4;0:out_Target0
// @PackedGlobals: bAffectByWeather(h:0,1),bShadowReceiveBiasScale(h:4,1),NumDynamicPointLights(i:0,1),bLMPValid(u:0,1),bUseLightMapSkyLight(u:4,1)
// @PackedUB: View(0): View_WorldCameraOrigin(268,3),View_PreViewTranslation(280,3),View_ViewSizeAndInvSize(520,4),View_LocalLightShadowsSize(540,4),View_PreExposure(546,1),View_GameTime(666,1),View_MaterialTextureMipBias(669,1),View_PrtDebugData(992,4),View_PrtFlag(976,1),View_ViewRectMin(516,4),View_Ev100(549,1),View_GGXTweak(550,1),View_ReflectionCubemapMaxMip(552,1),View_IndirectLightingColorScale(556,3),View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight(560,3),View_MobileSkyIrradianceEnvironmentMap_0(564,4),View_MobileSkyIrradianceEnvironmentMap_1(568,4),View_MobileSkyIrradianceEnvironmentMap_2(572,4),View_MobileSkyIrradianceEnvironmentMap_3(576,4),View_MobileSkyIrradianceEnvironmentMap_4(580,4),View_MobileSkyIrradianceEnvironmentMap_5(584,4),View_MobileSkyIrradianceEnvironmentMap_6(588,4),View_SkyLightColor(620,4),View_LightMapSkyLightColor(624,4),View_SpecularOnlyViewmodeMask(680,1)
// @PackedUB: MobileBasePass(1): MobileBasePass_CulledGridSize(4,4),MobileBasePass_LightGridZParams(8,4),MobileBasePass_Fog_ExponentialFogEnvLightingAndScale(44,4),MobileBasePass_UseCSM(14,1),MobileBasePass_UseFakeSpec(15,1),MobileBasePass_LightGridPixelSizeShift(0,1)
// @PackedUB: PrecomputedLightingBuffer(2): PrecomputedLightingBuffer_LightMapScale_0(16,4),PrecomputedLightingBuffer_LightMapAdd_0(24,4)
// @PackedUB: MobileDirectionalLight(3): MobileDirectionalLight_DirectionalLightColor(0,4),MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition(4,4),MobileDirectionalLight_DirectionalLightShadowSize(8,4),MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale(12,4),MobileDirectionalLight_DirectionalLightShadowDistances(16,4),MobileDirectionalLight_DirectionalLightShadowIntensityScale(20,4),MobileDirectionalLight_DirectionalLightScreenToShadow(24,32)
// @PackedUB: MobileMovablePointLight3(4): MobileMovablePointLight3_LightPositionAndInvRadius(4,4),MobileMovablePointLight3_LightColorAndFalloffExponent(8,4),MobileMovablePointLight3_SpotLightDirectionAndSpecularScale(12,4),MobileMovablePointLight3_SpotLightAnglesAndSoftTransitionScaleAndLightShadowType(16,4),MobileMovablePointLight3_LightShadowmapMinMax(20,24),MobileMovablePointLight3_LightShadowWorldToShadowMatrix(44,96),MobileMovablePointLight3_LightIDMask(0,1)
// @PackedUB: MobileMovablePointLight2(5): MobileMovablePointLight2_LightPositionAndInvRadius(4,4),MobileMovablePointLight2_LightColorAndFalloffExponent(8,4),MobileMovablePointLight2_SpotLightDirectionAndSpecularScale(12,4),MobileMovablePointLight2_SpotLightAnglesAndSoftTransitionScaleAndLightShadowType(16,4),MobileMovablePointLight2_LightShadowmapMinMax(20,24),MobileMovablePointLight2_LightShadowWorldToShadowMatrix(44,96),MobileMovablePointLight2_LightIDMask(0,1)
// @PackedUB: MobileMovablePointLight1(6): MobileMovablePointLight1_LightPositionAndInvRadius(4,4),MobileMovablePointLight1_LightColorAndFalloffExponent(8,4),MobileMovablePointLight1_SpotLightDirectionAndSpecularScale(12,4),MobileMovablePointLight1_SpotLightAnglesAndSoftTransitionScaleAndLightShadowType(16,4),MobileMovablePointLight1_LightShadowmapMinMax(20,24),MobileMovablePointLight1_LightShadowWorldToShadowMatrix(44,96),MobileMovablePointLight1_LightIDMask(0,1)
// @PackedUB: MobileMovablePointLight0(7): MobileMovablePointLight0_LightPositionAndInvRadius(4,4),MobileMovablePointLight0_LightColorAndFalloffExponent(8,4),MobileMovablePointLight0_SpotLightDirectionAndSpecularScale(12,4),MobileMovablePointLight0_SpotLightAnglesAndSoftTransitionScaleAndLightShadowType(16,4),MobileMovablePointLight0_LightShadowmapMinMax(20,24),MobileMovablePointLight0_LightShadowWorldToShadowMatrix(44,96),MobileMovablePointLight0_LightIDMask(0,1)
// @PackedUB: MobileReflectionCapture(8): MobileReflectionCapture_Params(0,4),MobileReflectionCapture_ReflectionColor(4,4)
// @PackedUB: MaterialCollection0(9): MaterialCollection0_Vectors_0(0,4),MaterialCollection0_Vectors_1(4,4),MaterialCollection0_Vectors_3(12,4),MaterialCollection0_Vectors_4(16,4),MaterialCollection0_Vectors_5(20,4)
// @PackedUB: Material(10): Material_VectorExpressions_0(0,4),Material_VectorExpressions_1(4,4),Material_VectorExpressions_2(8,4),Material_ScalarExpressions_3(28,4),Material_ScalarExpressions_4(32,4),Material_ScalarExpressions_5(36,4),Material_ScalarExpressions_6(40,4),Material_ScalarExpressions_7(44,4),Material_ScalarExpressions_8(48,4),Material_ScalarExpressions_9(52,4),Material_ScalarExpressions_10(56,4)
// @PackedUBCopies: 0:268-10:h:0:3,0:280-10:h:4:3,0:520-10:h:8:4,0:540-10:h:12:4,0:546-10:h:16:1,0:666-10:h:20:1,0:669-10:h:24:1,0:992-10:h:28:4,0:976-10:i:0:1,0:516-10:m:0:4,0:549-10:m:4:1,0:550-10:m:8:1,0:552-10:m:12:1,0:556-10:m:16:3,0:560-10:m:20:3,0:564-10:m:24:28,0:620-10:m:52:8,0:680-10:m:60:1,1:4-2:h:0:8,1:44-2:h:8:4,1:14-2:i:0:1,1:15-2:i:4:1,1:0-2:u:0:1,2:16-9:m:0:4,2:24-9:m:4:4,3:0-3:h:0:56,4:4-7:h:0:136,4:0-7:u:0:1,5:4-6:h:0:136,5:0-6:u:0:1,6:4-5:h:0:136,6:0-5:u:0:1,7:4-4:h:0:136,7:0-4:u:0:1,8:0-8:m:0:8,9:0-1:m:0:8,9:12-1:m:8:12,10:0-0:m:0:12,10:28-0:m:12:32
// @Samplers: Material_Texture2D_7(0:1[Material_Texture2D_7Sampler]),Material_Texture2D_1(1:1[Material_Texture2D_1Sampler]),MobileBasePass_CulledLightDataGrid(2:1),Material_Texture2D_8(3:1[Material_Texture2D_8Sampler]),Material_Texture2D_9(4:1[Material_Texture2D_9Sampler]),Material_Texture2D_10(5:1[Material_Texture2D_10Sampler]),Material_Texture2D_2(6:1[Material_Texture2D_2Sampler]),Material_Texture2D_3(7:1[Material_Texture2D_3Sampler]),Material_Texture2D_4(8:1[Material_Texture2D_4Sampler]),MobileDirectionalLight_DirectionalLightShadowTexture2(9:1[MobileDirectionalLight_ShadowDepthTextureComparisonSampler]),MobileReflectionCapture_Texture(10:1[MobileReflectionCapture_TextureSampler]),Material_Texture2D_5(11:1[Material_Texture2D_5Sampler]),View_LocalLightShadows(12:1[View_LocalLightShadowsSampler]),Material_Texture2D_0(13:1[Material_Texture2D_0Sampler]),Material_Texture2D_6(14:1[Material_Texture2D_6Sampler]),LightmapResourceCluster_LightMapTexture(15:1[LightmapResourceCluster_LightMapSampler])

//M_TD_Item_Base_L00/FLocalVertexFactory/TMobileBasePassPSFMobileMovableDirectionalLightAndPrtLighingPolicyINT32_MAXHDRLinear64Skylight/0_3ea3b0994427d18c

/*

*/

