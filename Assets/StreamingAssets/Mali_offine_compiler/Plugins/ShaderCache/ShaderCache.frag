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
uniform highp vec4 pc0_h[7];
uniform highp vec4 pc2_h[1];
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
uniform vec4 pc10_m[13];
uniform uvec4 pu_u[1];
uniform ivec4 pu_i[1];
uniform highp vec4 pu_h[2];
uniform mediump sampler2D ps0;
uniform mediump sampler2D ps6;
uniform mediump sampler2D ps5;
uniform mediump sampler2D ps3;
uniform mediump sampler2D ps8;
uniform mediump sampler2D ps7;
uniform mediump samplerCube ps4;
uniform highp sampler2DShadow ps2;
uniform highp usamplerBuffer ps9;
uniform highp sampler2D ps1;
layout(location=0) in vec4 in_TEXCOORD10_centroid;
layout(location=1) in vec4 in_TEXCOORD11_centroid;
layout(location=2) in vec4 in_COLOR0;
layout(location=3) in highp vec4 in_TEXCOORD0;
layout(location=4) in highp vec4 in_TEXCOORD1;
layout(location=5) in highp vec4 in_TEXCOORD2;
layout(location=6) in vec4 in_TEXCOORD7;
layout(location=7) in highp vec4 in_TEXCOORD8;
layout(location=8) in vec4 in_TEXCOORD14;
layout(location=0) out vec4 out_Target0;
void main()
{
	highp float f0;
	f0 = pu_h[1].x;
	bool b1;
	b1 = bool(pu_u[0].x);
	int i2;
	i2 = pu_i[0].x;
	highp float f3;
	f3 = pu_h[0].x;
	uint u4;
	u4 = pc7_u[0].x;
	uint u5;
	u5 = pc6_u[0].x;
	uint u6;
	u6 = pc5_u[0].x;
	uint u7;
	u7 = pc4_u[0].x;
	highp vec3 v8;
	v8.xyz = pc2_h[0].xyz;
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
	vec3 v34;
	vec3 v35;
	vec3 v36;
	v34.xyz = in_TEXCOORD10_centroid.xyz;
	v35.xyz = (cross(in_TEXCOORD11_centroid.xyz,in_TEXCOORD10_centroid.xyz)*in_TEXCOORD11_centroid.www);
	v36.xyz = in_TEXCOORD11_centroid.xyz;
	v33.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	highp vec4 v37;
	highp vec3 v38;
	highp vec2 v39;
	v39.xy = pc0_m[0].xy;
	v38.xy = ((((gl_FragCoord.xy+(-v39))*pc0_h[2].zw)+vec2(-5.000000e-01,-5.000000e-01))*vec2(2.000000e+00,-2.000000e+00));
	v38.z = gl_FragCoord.z;
	highp vec4 v40;
	v40.w = 1.000000e+00;
	v40.xyz = v38;
	v37.xyzw = (v40*v23.wwww);
	highp vec3 v41;
	v41.xyz = (in_TEXCOORD8.xyz+(-pc0_h[1].xyz));
	highp vec3 v42;
	v42.xyz = normalize((-in_TEXCOORD8.xyz));
	vec3 v43;
	v43.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	vec2 v44;
	float h45;
	h45 = in_TEXCOORD1.x;
	v44.x = h45;
	float h46;
	h46 = in_TEXCOORD1.y;
	v44.y = h46;
	vec2 v47;
	vec2 v48;
	v48.xy = in_TEXCOORD0.xy;
	v47.xy = (v48*pc10_m[3].xx);
	vec4 v49;
	highp vec2 v50;
	v50.xy = v47;
	highp float f51;
	f51 = pc10_m[4].x;
	v49.xyzw = texture(ps7,v50,f51);
	float h52;
	float h53;
	h53 = texture(ps8,in_TEXCOORD0.zw).x;
	h52 = ((pc10_m[4].y>=5.000000e-01))?(h53):(1.000000e+00);
	float h54;
	h54 = pow(h52,pc10_m[4].z);
	float h55;
	h55 = ((h52<=0.000000e+00))?(0.000000e+00):(h54);
	vec4 v56;
	highp vec2 v57;
	v57.xy = v47;
	v56.xyzw = texture(ps3,v57);
	vec3 v58;
	v58.xyz = pc10_m[1].xyz;
	float h59;
	h59 = pc10_m[5].x;
	float h60;
	h60 = pc10_m[5].y;
	float h61;
	h61 = pc10_m[5].z;
	float h62;
	h62 = pc10_m[6].w;
	vec3 v63;
	v63.xyz = pc10_m[2].xyz;
	float h64;
	h64 = pc10_m[7].x;
	float h65;
	h65 = pc10_m[7].y;
	float h66;
	h66 = pc10_m[7].z;
	float h67;
	h67 = pc10_m[7].w;
	float h68;
	h68 = pc10_m[8].x;
	float h69;
	h69 = pc10_m[8].y;
	float h70;
	h70 = 0.000000e+00;
	float h71;
	h71 = 0.000000e+00;
	vec3 v72;
	v72.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	vec3 v73;
	v73.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	float h74;
	h74 = (v56.w*pc10_m[4].w);
	if ((pc10_m[6].x>=5.000000e-01))
	{
		h70 = v56.x;
	}
	else
	{
		h70 = h59;
	}
	if ((pc10_m[6].y>=5.000000e-01))
	{
		h71 = ((h74*((v56.y*h61)+(-v56.y)))+v56.y);
	}
	else
	{
		h71 = ((h74*((h60*h61)+(-h60)))+h60);
	}
	vec3 v75;
	v75.xyz = (v49.xyz*pc10_m[0].xyz);
	if (((pc10_m[6].z>=5.000000e-01)&&(pc10_m[8].z<5.000000e-01)))
	{
		float h76;
		h76 = clamp((v56.z+-2.000000e-01),0.000000e+00,1.000000e+00);
		vec3 v77;
		v77.xyz = vec3(h76);
		v72.xyz = vec3(h76);
		if ((h62>=5.000000e-01))
		{
			vec3 v78;
			v78.xyz = (v77*(v63*v75));
			v72.xyz = mix(v78,((vec3((1.000000e+00+(-clamp(((v49.w+-5.000000e-01)*3.333000e+00),0.000000e+00,1.000000e+00))))*v78)*vec3(5.000000e-01,5.000000e-01,5.000000e-01)),vec3((step(5.000000e-01,v49.w)+(-step(8.000000e-01,v49.w)))));
		}
		else
		{
			v72.xyz = (v72*v63);
		}
	}
	else
	{
		v72.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	}
	if ((pc10_m[5].w>=5.000000e-01))
	{
		highp vec3 v79;
		highp vec3 v80;
		highp float f81;
		f81 = (step(1.000000e-01,v49.w)+(-step(8.000000e-01,v49.w)));
		v80.x = f81;
		highp float f82;
		f82 = step(8.000000e-01,v49.w);
		v80.y = f82;
		highp float f83;
		f83 = (1.000000e+00+(-step(1.000000e-01,v49.w)));
		v80.z = f83;
		highp vec4 v84;
		v84.w = 1.666667e+00;
		highp vec3 v85;
		v85.xyz = v49.zxy;
		v84.xyz = v85;
		highp vec4 v86;
		v86.w = 1.333333e+00;
		highp vec3 v87;
		v87.xyz = v49.yzx;
		v86.xyz = v87;
		highp vec4 v88;
		highp float f89;
		f89 = step(v49.z,v49.y);
		v88.xyzw = mix(v84,v86,vec4(f89));
		highp vec4 v90;
		v90.w = 1.000000e+00;
		highp vec3 v91;
		v91.xyz = v49.xyz;
		v90.xyz = v91;
		highp vec4 v92;
		highp float f93;
		f93 = v49.x;
		v92.xyzw = mix(v88,v90,vec4(step(v88.x,f93)));
		highp float f94;
		f94 = (v92.x+(-min(v92.y,v92.z)));
		highp vec3 v95;
		v95.x = mix(fract((((v92.y+(-v92.z))/(6.000000e+00*f94))+v92.w)),0.000000e+00,step(f94,1.000000e-10));
		v95.y = mix((f94/v92.x),0.000000e+00,step(v92.x,1.000000e-10));
		v95.z = v92.x;
		highp vec3 v96;
		v96.xyz = clamp(v95,vec3(0.000000e+00,0.000000e+00,0.000000e+00),vec3(1.000000e+00,1.000000e+00,1.000000e+00));
		v79.xyz = v96;
		highp float f97;
		highp float f98;
		f98 = h64;
		highp float f99;
		f99 = h67;
		f97 = fract((v96.x+((f98*v80.x)+(f99*v80.y))));
		v79.x = f97;
		highp float f100;
		f100 = h65;
		highp float f101;
		f101 = h68;
		v79.y = clamp((v96.y+((f100*v80.x)+(f101*v80.y))),0.000000e+00,1.000000e+00);
		highp float f102;
		f102 = h66;
		highp float f103;
		f103 = h69;
		v79.z = max(0.000000e+00,(v96.z*((f102*v80.x)+(f103*v80.y))));
		highp vec3 v104;
		v104.xyz = v49.xyz;
		vec3 v105;
		v105.xyz = mix((v79.zzz*mix(vec3(1.000000e+00,1.000000e+00,1.000000e+00),clamp((abs(((fract((vec3(f97)+vec3(1.000000e+00,6.666667e-01,3.333333e-01)))*vec3(6.000000e+00,6.000000e+00,6.000000e+00))+vec3(-3.000000e+00,-3.000000e+00,-3.000000e+00)))+vec3(-1.000000e+00,-1.000000e+00,-1.000000e+00)),vec3(0.000000e+00,0.000000e+00,0.000000e+00),vec3(1.000000e+00,1.000000e+00,1.000000e+00)),v79.yyy)),v104,v80.zzz);
		v73.xyz = v105;
	}
	else
	{
		v73.xyz = ((vec3(h74)*(v58+(-v75)))+v75);
	}
	vec3 v106;
	v106.xyz = (vec3(h55)*v73);
	vec2 v107;
	highp vec2 v108;
	v108.xy = v47;
	v107.xy = ((texture(ps5,v108).xy*vec2(2.000000e+00,2.000000e+00))+vec2(-1.000000e+00,-1.000000e+00));
	vec4 v109;
	v109.w = 1.000000e+00;
	v109.xy = v107;
	v109.z = sqrt(clamp((1.000000e+00+(-dot(v107,v107))),0.000000e+00,1.000000e+00));
	vec3 v110;
	vec3 v111;
	v111.xyz = v8;
	v110.xyz = v111;
	float h112;
	h112 = fract(((v110.x+v110.y)+v110.z));
	float h113;
	h113 = pc10_m[8].w;
	float h114;
	float h115;
	h115 = (f15+(-(1.200000e+01*trunc((f15/1.200000e+01)))));
	h114 = h115;
	float h116;
	h116 = pc10_m[9].x;
	vec3 v117;
	v117.xyz = v72;
	if ((pc10_m[8].w>1.000000e-01))
	{
		highp vec4 v118;
		highp float f119;
		f119 = h112;
		highp vec4 v120;
		v120.xyzw = (((vec4((1.000000e+00+h112))*vec4(6.000000e+00,1.600000e+01,1.900000e+01,2.700000e+01))*vec4(h114))*vec4(h116));
		v118.xyzw = ((fract((v120+vec4(f119)))*vec4(5.000000e-01,5.000000e-01,5.000000e-01,5.000000e-01))+vec4(5.000000e-01,5.000000e-01,5.000000e-01,5.000000e-01));
		highp float f121;
		f121 = (((v118.x*v118.y)*v118.z)*v118.w);
		highp float f122;
		f122 = max(1.000000e+00,h113);
		highp float f123;
		f123 = clamp(h113,0.000000e+00,1.000000e+00);
		highp vec3 v124;
		v124.xyz = v72;
		highp float f125;
		f125 = smoothstep(8.500000e-01,9.000000e-01,v56.z);
		highp vec3 v126;
		v126.xyz = v72;
		highp float f127;
		f127 = smoothstep(1.000000e-01,1.500000e-01,v56.z);
		vec3 v128;
		v128.xyz = (mix((v124*vec3(mix(1.000000e+00,((f121*f121)*f122),f123))),v126,vec3(f125))*vec3(f127));
		v117.xyz = v128;
	}
	vec2 v129;
	float h130;
	h130 = in_TEXCOORD1.z;
	v129.x = h130;
	float h131;
	h131 = in_TEXCOORD1.w;
	v129.y = h131;
	vec2 v132;
	float h133;
	h133 = in_TEXCOORD2.x;
	v132.x = h133;
	float h134;
	h134 = in_TEXCOORD2.y;
	v132.y = h134;
	float h135;
	h135 = pc9_m[0].x;
	float h136;
	h136 = pc10_m[9].y;
	float h137;
	h137 = pc10_m[9].z;
	float h138;
	h138 = pc10_m[9].w;
	float h139;
	h139 = v49.w;
	vec3 v140;
	v140.xyz = v109.xyz;
	float h141;
	h141 = pc9_m[1].w;
	float h142;
	h142 = pc10_m[10].x;
	float h143;
	h143 = 0.000000e+00;
	float h144;
	h144 = 0.000000e+00;
	vec3 v145;
	v145.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	vec3 v146;
	v146.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	float h147;
	vec3 v148;
	v148.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	h147 = h52;
	if ((((pc9_m[0].x>0.000000e+00)&&(pc10_m[3].y>=5.000000e-01))&&(f3>=5.000000e-01)))
	{
		float h149;
		vec4 v150;
		highp vec2 v151;
		v151.xy = v129;
		v150.xyzw = texture(ps6,v151,f14);
		vec2 v152;
		v152.xy = ((v150.wy*vec2(2.000000e+00,2.000000e+00))+vec2(-1.000000e+00,-1.000000e+00));
		vec3 v153;
		v153.xy = v152;
		v153.z = sqrt(clamp((1.000000e+00+(-dot(v152,v152))),0.000000e+00,1.000000e+00));
		vec3 v154;
		v154.x = dot(v34,v153);
		v154.y = dot(v35,v153);
		v154.z = dot(v36,v153);
		vec4 v155;
		v155.xyzw = mix(pc9_m[4],mix(pc9_m[3],pc9_m[2],v150.xxxx),v150.zzzz);
		float h156;
		highp vec2 v157;
		v157.xy = v44;
		h156 = (((((v36.z+h137)*h136)*((texture(ps0,v157,f14).x*8.000000e-01)+2.000000e-01))*h135)*1.440000e+00);
		h149 = h156;
		float h158;
		h158 = pow(h156,1.000000e+01);
		float h159;
		h159 = ((h156<=0.000000e+00))?(0.000000e+00):(h158);
		float h160;
		h160 = clamp(h159,0.000000e+00,1.000000e+00);
		h149 = h160;
		if ((h138>=5.000000e-01))
		{
			h149 = (h160*h139);
		}
		h143 = ((h149*(-h70))+h70);
		h144 = ((h149*(v150.z+(-h71)))+h71);
		v145.xyz = ((vec3(h149)*(v154+(-v140)))+v140);
		v146.xyz = ((vec3(h149)*(-v117))+v117);
		h147 = mix(h52,((max(2.500000e-01,clamp(dot(v154,vec3(5.883484e-01,1.961161e-01,7.844645e-01)),0.000000e+00,1.000000e+00))*min(1.000000e+00,pow(v150.w,5.000000e-01)))*1.500000e+00),clamp((h149+2.500000e-01),0.000000e+00,1.000000e+00));
		v148.xyz = ((vec3(h149)*(v155.xyz+(-v106)))+v106);
	}
	else
	{
		if (((h141>0.000000e+00)&&(f3>=5.000000e-01)))
		{
			vec4 v161;
			highp vec2 v162;
			v162.xy = v132;
			highp float f163;
			f163 = 0.000000e+00;
			v161.xyzw = texture(ps0,v162,f163);
			float h164;
			h164 = (v161.x*v161.x);
			h143 = min((h70*h164),5.500000e-01);
			h144 = (((h71*(1.000000e+00+(-h164)))*5.000000e-01)*h142);
			v145.xyz = v140;
			v146.xyz = v117;
			v148.xyz = v106;
		}
		else
		{
			h143 = h70;
			h144 = h71;
			v145.xyz = v140;
			v146.xyz = v117;
			v148.xyz = v106;
		}
	}
	vec2 v165;
	highp float f166;
	f166 = pc10_m[10].y;
	vec2 v167;
	v167.xy = (in_TEXCOORD0.xy*vec2(f166));
	v165.xy = v167;
	float h168;
	highp float f169;
	f169 = pc10_m[10].w;
	float h170;
	h170 = (f15*f169);
	h168 = h170;
	highp float f171;
	highp float f172;
	f172 = pc10_m[10].z;
	f171 = (f172*1.745329e-02);
	highp vec2 v173;
	highp vec2 v174;
	v174.xy = vec2(1.000000e+00,0.000000e+00);
	v173.xy = (vec2(-5.000000e-01,-5.000000e-01)+v174);
	highp float f175;
	f175 = sin(f171);
	highp float f176;
	f176 = cos(f171);
	highp vec2 v177;
	v177.x = f176;
	v177.y = (f175*-1.000000e+00);
	highp vec2 v178;
	v178.x = f175;
	v178.y = f176;
	highp vec2 v179;
	v179.x = dot(v173,v177);
	v179.y = dot(v173,v178);
	highp vec2 v180;
	v180.xy = (vec2(5.000000e-01,5.000000e-01)+v179);
	highp vec2 v181;
	highp vec2 v182;
	v182.xy = v165;
	v181.xy = (vec2(-5.000000e-01,-5.000000e-01)+v182);
	highp float f183;
	f183 = sin(f171);
	highp float f184;
	f184 = cos(f171);
	highp vec2 v185;
	v185.x = f184;
	v185.y = (f183*-1.000000e+00);
	highp vec2 v186;
	v186.x = f183;
	v186.y = f184;
	highp vec2 v187;
	v187.x = dot(v181,v185);
	v187.y = dot(v181,v186);
	highp vec2 v188;
	v188.xy = (vec2(5.000000e-01,5.000000e-01)+v187);
	vec3 v189;
	v189.x = pc10_m[10].z;
	v189.yz = v165;
	vec4 v190;
	v190.xyz = v189;
	v190.w = h168;
	vec3 v191;
	v191.x = pc10_m[10].z;
	v191.yz = v165;
	vec4 v192;
	v192.xyz = v191;
	v192.w = h168;
	vec3 v193;
	v193.z = 0.000000e+00;
	vec2 v194;
	v194.xy = v180;
	v193.xy = v194;
	vec3 v195;
	vec2 v196;
	v196.xy = v180;
	v195.xy = v196;
	vec2 v197;
	v197.xy = v188;
	vec2 v198;
	v198.xy = v188;
	v195.z = (((sin(((((v190.w*2.000000e+00)+pc10_m[11].x)+(2.000000e+00*v197.x))*6.280000e+00))*2.000000e+00)+(-(sin((((v192.w*2.000000e+00)+(2.000000e+00*v198.x))*6.280000e+00))*2.000000e+00)))*pc10_m[11].y);
	vec3 v199;
	v199.xyz = cross(v195,cross(vec3(0.000000e+00,0.000000e+00,1.000000e+00),v193));
	float h200;
	h200 = (v199.z+1.000000e+00);
	highp float f201;
	highp float f202;
	f202 = (pc10_m[10].z+3.000000e+01);
	f201 = (f202*1.745329e-02);
	highp vec2 v203;
	highp vec2 v204;
	v204.xy = vec2(1.000000e+00,0.000000e+00);
	v203.xy = (vec2(-5.000000e-01,-5.000000e-01)+v204);
	highp float f205;
	f205 = sin(f201);
	highp float f206;
	f206 = cos(f201);
	highp vec2 v207;
	v207.x = f206;
	v207.y = (f205*-1.000000e+00);
	highp vec2 v208;
	v208.x = f205;
	v208.y = f206;
	highp vec2 v209;
	v209.x = dot(v203,v207);
	v209.y = dot(v203,v208);
	highp vec2 v210;
	v210.xy = (vec2(5.000000e-01,5.000000e-01)+v209);
	highp vec2 v211;
	highp vec2 v212;
	v212.xy = v165;
	v211.xy = (vec2(-5.000000e-01,-5.000000e-01)+v212);
	highp float f213;
	f213 = sin(f201);
	highp float f214;
	f214 = cos(f201);
	highp vec2 v215;
	v215.x = f214;
	v215.y = (f213*-1.000000e+00);
	highp vec2 v216;
	v216.x = f213;
	v216.y = f214;
	highp vec2 v217;
	v217.x = dot(v211,v215);
	v217.y = dot(v211,v216);
	highp vec2 v218;
	v218.xy = (vec2(5.000000e-01,5.000000e-01)+v217);
	vec3 v219;
	v219.x = pc10_m[10].z;
	v219.yz = v165;
	vec4 v220;
	v220.xyz = v219;
	v220.w = h168;
	vec3 v221;
	v221.x = pc10_m[10].z;
	v221.yz = v165;
	vec4 v222;
	v222.xyz = v221;
	v222.w = h168;
	vec3 v223;
	v223.z = 0.000000e+00;
	vec2 v224;
	v224.xy = v210;
	v223.xy = v224;
	vec3 v225;
	vec2 v226;
	v226.xy = v210;
	v225.xy = v226;
	vec2 v227;
	v227.xy = v218;
	vec2 v228;
	v228.xy = v218;
	v225.z = (((cos(((((v220.w*1.500000e+00)+pc10_m[11].x)+v227.x)*6.280000e+00))*2.000000e+00)+(-(cos((((v222.w*1.500000e+00)+v228.x)*6.280000e+00))*2.000000e+00)))*pc10_m[11].y);
	vec3 v229;
	v229.xyz = cross(v225,cross(vec3(0.000000e+00,0.000000e+00,1.000000e+00),v223));
	vec2 v230;
	v230.xy = (v229.xy*vec2(-1.000000e+00,-1.000000e+00));
	vec3 v231;
	v231.xy = v199.xy;
	v231.z = h200;
	vec3 v232;
	v232.xy = v230;
	v232.z = v229.z;
	vec3 v233;
	v233.xy = v199.xy;
	v233.z = h200;
	vec3 v234;
	v234.xy = v230;
	v234.z = v229.z;
	vec3 v235;
	v235.xyz = mix(vec3(0.000000e+00,0.000000e+00,1.000000e+00),((v233*vec3(dot(v231,v232)))+(-(vec3(h200)*v234))),in_COLOR0.xxx);
	float h236;
	h236 = abs((pc10_m[11].z+-1.000000e-02));
	vec3 v237;
	v237.xyz = ((pc10_m[11].z>=1.000000e-02))?(v235):(vec3(0.000000e+00,0.000000e+00,1.000000e+00));
	vec3 v238;
	v238.xyz = ((h236>1.000000e-05))?(v237):(vec3(0.000000e+00,0.000000e+00,1.000000e+00));
	vec3 v239;
	v239.xyz = (v145+v238);
	vec2 v240;
	v240.x = v239.x;
	v240.y = v239.y;
	vec3 v241;
	v241.xy = v240;
	v241.z = v239.z;
	vec3 v242;
	v242.xyz = v241;
	highp vec3 v243;
	v243.xyz = ((in_TEXCOORD11_centroid.xyz*v242.zzz)+((v35*v242.yyy)+(in_TEXCOORD10_centroid.xyz*v242.xxx)));
	vec3 v244;
	v244.xyz = normalize(v243);
	v43.xyz = v244;
	vec3 v245;
	highp vec3 v246;
	v246.xyz = v43;
	highp vec3 v247;
	v247.xyz = v43;
	vec3 v248;
	v248.xyz = ((-v42)+((v247*vec3(dot(v246,v42)))*vec3(2.000000e+00,2.000000e+00,2.000000e+00)));
	v245.xyz = v248;
	vec3 v249;
	float h250;
	h250 = in_TEXCOORD2.z;
	v249.xyz = (vec3(h250)*v146);
	vec3 v251;
	v251.xyz = normalize(in_TEXCOORD11_centroid.xyz);
	vec3 v252;
	vec3 v253;
	v253.xyz = v42;
	v252.xyz = v253;
	vec3 v254;
	v254.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	if ((pc10_m[3].w>5.000000e-01))
	{
		v254.xyz = (((vec3(pow(abs((clamp(dot(v252,v251),0.000000e+00,1.000000e+00)+-3.500000e-01)),1.500000e+00))*vec3(1.500000e+00,3.690000e-01,1.000000e-02))*v249.xxx)*vec3(step(5.000000e+00,v249.x)));
	}
	vec3 v255;
	v255.xyz = (v254+v249);
	vec3 v256;
	v256.xyz = (in_TEXCOORD11_centroid.xyz*in_TEXCOORD11_centroid.xyz);
	vec3 v257;
	v257.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	if ((pc10_m[11].w>=5.000000e-01))
	{
		vec3 v258;
		highp vec3 v259;
		v259.xyz = v43;
		float h260;
		h260 = (1.000000e+00+(-max(0.000000e+00,dot(v259,v42))));
		v258.xyz = abs(vec3(h260));
		float h261;
		h261 = pow(v258.x,5.000000e+00);
		float h262;
		h262 = ((v258.x<=0.000000e+00))?(0.000000e+00):(h261);
		float h263;
		h263 = pow(v258.y,5.000000e+00);
		float h264;
		h264 = ((v258.y<=0.000000e+00))?(0.000000e+00):(h263);
		vec2 v265;
		v265.x = h262;
		v265.y = h264;
		float h266;
		h266 = pow(v258.z,5.000000e+00);
		float h267;
		h267 = ((v258.z<=0.000000e+00))?(0.000000e+00):(h266);
		vec3 v268;
		v268.xy = v265;
		v268.z = h267;
		vec3 v269;
		float h270;
		h270 = abs(sin((1.570796e+00*f15)));
		v269.xyz = vec3(h270);
		vec3 v271;
		v271.xyz = ((v269*((v268*vec3(9.000000e-01,9.000000e-01,9.000000e-01))+vec3(1.000000e-01,1.000000e-01,1.000000e-01)))*vec3(3.000000e+00,8.000000e-01,0.000000e+00));
		highp vec3 v272;
		highp vec3 v273;
		v273.xyz = (normalize(v256)+v43);
		v272 = fwidth(v273);
		vec3 v274;
		vec3 v275;
		v275.xyz = v272;
		v274.xyz = v275;
		v257.xyz = (min(max((vec3(pow(2.000000e+00,h20))*((v271*vec3(2.500000e-01,2.500000e-01,2.500000e-01))+(vec3(1.200000e+00,3.200000e-01,0.000000e+00)*(vec3((((v274.x*2.989000e-01)+(v274.y*5.870000e-01))+(v274.z*1.140000e-01)))*v269)))),vec3(0.000000e+00,0.000000e+00,0.000000e+00)),vec3(6.553400e+04,6.553400e+04,6.553400e+04))+v255);
	}
	else
	{
		v257.xyz = v255;
	}
	vec3 v276;
	v276.xyz = (pc9_m[1].zzz*v257);
	vec3 v277;
	v277.xyz = ((pc10_m[12].x>=5.000000e-01))?(v276):(v257);
	v33.xyz = v41;
	vec3 v278;
	v278.xyz = clamp(v148,vec3(0.000000e+00,0.000000e+00,0.000000e+00),vec3(1.000000e+00,1.000000e+00,1.000000e+00));
	float h279;
	h279 = clamp(h143,0.000000e+00,1.000000e+00);
	float h280;
	h280 = clamp(h147,0.000000e+00,1.000000e+00);
	float h281;
	h281 = max(1.562500e-02,clamp(h144,0.000000e+00,1.000000e+00));
	v32.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	v31.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	v30.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	vec2 v282;
	vec2 v283;
	v283.xy = in_TEXCOORD0.xy;
	v282.xy = (v283*pc10_m[3].xx);
	vec4 v284;
	highp vec2 v285;
	v285.xy = v282;
	highp float f286;
	f286 = pc10_m[4].x;
	v284.xyzw = texture(ps7,v285,f286);
	vec4 v287;
	highp vec2 v288;
	v288.xy = v282;
	v287.xyzw = texture(ps3,v288);
	float h289;
	h289 = pc10_m[6].w;
	vec3 v290;
	v290.xyz = pc10_m[2].xyz;
	vec3 v291;
	v291.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	vec3 v292;
	v292.xyz = (v284.xyz*pc10_m[0].xyz);
	if (((pc10_m[6].z>=5.000000e-01)&&(pc10_m[8].z<5.000000e-01)))
	{
		float h293;
		h293 = clamp((v287.z+-2.000000e-01),0.000000e+00,1.000000e+00);
		vec3 v294;
		v294.xyz = vec3(h293);
		v291.xyz = vec3(h293);
		if ((h289>=5.000000e-01))
		{
			vec3 v295;
			v295.xyz = (v294*(v290*v292));
			v291.xyz = mix(v295,((vec3((1.000000e+00+(-clamp(((v284.w+-5.000000e-01)*3.333000e+00),0.000000e+00,1.000000e+00))))*v295)*vec3(5.000000e-01,5.000000e-01,5.000000e-01)),vec3((step(5.000000e-01,v284.w)+(-step(8.000000e-01,v284.w)))));
		}
		else
		{
			v291.xyz = (v291*v290);
		}
	}
	else
	{
		v291.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	}
	vec3 v296;
	vec3 v297;
	v296.xyz = (v278+(-(v278*vec3(h279))));
	v297.xyz = (vec3((4.000000e-02+(-(4.000000e-02*h279))))+(v278*vec3(h279)));
	vec3 v298;
	vec2 v299;
	vec4 v300;
	v300.xyzw = ((vec4(h281)*vec4(-1.000000e+00,-2.750000e-02,-5.720000e-01,2.200000e-02))+vec4(1.000000e+00,4.250000e-02,1.040000e+00,-4.000000e-02));
	vec2 v301;
	vec3 v302;
	v302.xyz = v42;
	v301.xy = ((vec2(-1.040000e+00,1.040000e+00)*vec2(((min((v300.x*v300.x),exp2((-9.280000e+00*max(dot(v43,v302),0.000000e+00))))*v300.x)+v300.y)))+v300.zw);
	v299.xy = v301;
	v299.y = (v301.y*clamp((5.000000e+01*v297.y),0.000000e+00,1.000000e+00));
	v298.xyz = ((v297*v301.xxx)+v299.yyy);
	vec3 v303;
	vec3 v304;
	v304.xyz = pc0_m[14].xyz;
	vec3 v305;
	v305.xyz = pc0_m[13].xyz;
	v303.xyz = (b1)?(v304):(v305);
	vec3 v306;
	vec3 v307;
	vec4 v308;
	v308.w = 1.000000e+00;
	v308.xyz = v43;
	v307.x = dot(pc0_m[6],v308);
	v307.y = dot(pc0_m[7],v308);
	v307.z = dot(pc0_m[8],v308);
	vec4 v309;
	v309.xyzw = (v43.xyzz*v43.yzzx);
	v306.x = dot(pc0_m[9],v309);
	v306.y = dot(pc0_m[10],v309);
	v306.z = dot(pc0_m[11],v309);
	vec3 v310;
	v310.xyz = (max(vec3(0.000000e+00,0.000000e+00,0.000000e+00),((v307+v306)+(pc0_m[12].xyz*vec3(((v43.x*v43.x)+(-(v43.y*v43.y)))))))*v303);
	vec3 v311;
	v311.xyz = in_TEXCOORD14.xyz;
	float h312;
	h312 = in_TEXCOORD14.w;
	h29 = in_TEXCOORD14.w;
	vec3 v313;
	v313.xyz = in_TEXCOORD14.xyz;
	if ((bool(((i12>>0)&1))&&!(b1)))
	{
		v313.xyz = (v296*v311);
	}
	h29 = in_TEXCOORD14.w;
	v32.xyz = v313;
	if ((!(bool(((i12>>0)&1)))||b1))
	{
		h29 = (h312+dot(v310,vec3(3.000000e-01,5.900000e-01,1.100000e-01)));
		v32.xyz = (v313+(v310*v296));
	}
	vec3 v314;
	v314.xyz = (v32*vec3(h280));
	v32.xyz = v314;
	float h315;
	h315 = (h29*h280);
	h28 = 1.000000e+00;
	if ((bool(i10)||(pc3_h[4].z>0.000000e+00)))
	{
		highp vec2 v316;
		v316.xy = v37.xy;
		highp float f317;
		f317 = v37.w;
		int i318;
		highp float f319;
		highp vec4 v320;
		highp vec4 v321;
		highp float f322;
		highp float f323;
		float h324;
		h324 = 0.000000e+00;
		f323 = pc3_h[1].w;
		v321.xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00);
		v320.xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00);
		f319 = -1.000000e+00;
		i318 = 0;
		int i325;
		i325 = 0;
		for (;i325<2;)
		{
			if ((f317<pc3_h[4][i325]))
			{
				if ((i325==0))
				{
					highp vec4 v326;
					v326.w = 1.000000e+00;
					v326.x = v316.x;
					v326.y = v316.y;
					v326.z = f317;
					v321.xyzw = (pc3_h[9]+((pc3_h[8]*v326.zzzz)+((pc3_h[7]*v326.yyyy)+(pc3_h[6]*v316.xxxx))));
				}
				else
				{
					highp vec4 v327;
					v327.w = 1.000000e+00;
					v327.x = v316.x;
					v327.y = v316.y;
					v327.z = f317;
					v320.xyzw = (pc3_h[(9+(i325*4))]+((pc3_h[(8+(i325*4))]*v327.zzzz)+((pc3_h[(7+(i325*4))]*v327.yyyy)+(pc3_h[(6+(i325*4))]*v316.xxxx))));
				}
				if (((((((i325==0)&&(v321.x<(pc3_h[4].w+-1.000000e-03)))&&(v321.y<9.900000e-01))&&(v321.y>1.000000e-02))&&(v321.x>1.000000e-02))&&(v321.z<=9.999900e-01)))
				{
					i318 = (i318+(1<<i325));
					if ((f317>pc3_h[5].w))
					{
						f319 = clamp(((f317+(-pc3_h[5].w))/pc3_h[5].z),0.000000e+00,1.000000e+00);
					}
					else
					{
						break;
					}
				}
				if ((i325!=0))
				{
					i318 = (i318+(1<<i325));
				}
			}
			i325 = (i325+1);
		}
		int i328;
		i328 = (i318&1);
		int i329;
		i329 = (i318&2);
		if (((bool(i328)&&(v321.z>0.000000e+00))||(bool(i329)&&(v320.z>0.000000e+00))))
		{
			if ((i328>0))
			{
				highp float f330;
				f330 = min(v321.z,9.999900e-01);
				f322 = f330;
				highp vec2 v331;
				v331.xy = ((v321.xy*pc3_h[2].xy)+vec2(5.000000e-01,5.000000e-01));
				highp vec2 v332;
				v332.xy = (v331+(-floor(v331)));
				highp vec2 v333;
				v333.xy = (v321.xy+(-(v332*pc3_h[2].zw)));
				highp vec2 v334;
				v334.xy = (vec2(2.000000e+00,2.000000e+00)+(-v332));
				highp vec2 v335;
				v335.xy = ((1.0/(v334))*pc3_h[2].zw);
				highp vec2 v336;
				v336.xy = (vec2(1.000000e+00,1.000000e+00)+v332);
				highp vec2 v337;
				v337.xy = ((v332/v336)*pc3_h[2].zw);
				highp float f338;
				f338 = clamp((f330+(-(1.0/(f323)))),0.000000e+00,1.000000e+00);
				highp vec2 v339;
				v339.x = v337.x;
				v339.y = v335.y;
				highp vec2 v340;
				v340.x = v335.x;
				v340.y = v337.y;
				float h341;
				float h342;
				h342 = ((v334.x*v334.y)*float(textureLodOffset(ps2,vec3((v333+v335),f338),0.000000e+00,ivec2(-1,-1))));
				float h343;
				h343 = ((v336.x*v334.y)*float(textureLodOffset(ps2,vec3((v333+v339),f338),0.000000e+00,ivec2(1,-1))));
				float h344;
				h344 = ((v334.x*v336.y)*float(textureLodOffset(ps2,vec3((v333+v340),f338),0.000000e+00,ivec2(-1,1))));
				float h345;
				h345 = ((v336.x*v336.y)*float(textureLodOffset(ps2,vec3((v333+v337),f338),0.000000e+00,ivec2(1,1))));
				h341 = ((((h342+h343)+h344)+h345)/9.000000e+00);
				highp float f346;
				highp float f347;
				highp float f348;
				f348 = h341;
				f347 = ((1.000000e+00+(-f319))*f348);
				highp float f349;
				highp float f350;
				f350 = h341;
				f349 = f350;
				f346 = ((f319>=0.000000e+00))?(f347):(f349);
				float h351;
				h351 = f346;
				h324 = h351;
			}
			if ((i329>0))
			{
				f322 = (min(v320.z,9.999900e-01)+(-(f0*1.000000e-02)));
				highp vec2 v352;
				v352.xy = ((v320.xy*pc3_h[2].xy)+vec2(5.000000e-01,5.000000e-01));
				highp vec2 v353;
				v353.xy = (v352+(-floor(v352)));
				highp vec2 v354;
				v354.xy = (v320.xy+(-(v353*pc3_h[2].zw)));
				highp vec2 v355;
				v355.xy = (vec2(2.000000e+00,2.000000e+00)+(-v353));
				highp vec2 v356;
				v356.xy = ((1.0/(v355))*pc3_h[2].zw);
				highp vec2 v357;
				v357.xy = (vec2(1.000000e+00,1.000000e+00)+v353);
				highp vec2 v358;
				v358.xy = ((v353/v357)*pc3_h[2].zw);
				highp float f359;
				f359 = clamp((f322+(-(1.0/(f323)))),0.000000e+00,1.000000e+00);
				highp vec2 v360;
				v360.x = v358.x;
				v360.y = v356.y;
				highp vec2 v361;
				v361.x = v356.x;
				v361.y = v358.y;
				float h362;
				float h363;
				h363 = ((v355.x*v355.y)*float(textureLodOffset(ps2,vec3((v354+v356),f359),0.000000e+00,ivec2(-1,-1))));
				float h364;
				h364 = ((v357.x*v355.y)*float(textureLodOffset(ps2,vec3((v354+v360),f359),0.000000e+00,ivec2(1,-1))));
				float h365;
				h365 = ((v355.x*v357.y)*float(textureLodOffset(ps2,vec3((v354+v361),f359),0.000000e+00,ivec2(-1,1))));
				float h366;
				h366 = ((v357.x*v357.y)*float(textureLodOffset(ps2,vec3((v354+v358),f359),0.000000e+00,ivec2(1,1))));
				h362 = ((((h363+h364)+h365)+h366)/9.000000e+00);
				highp float f367;
				highp float f368;
				highp float f369;
				f369 = h362;
				f368 = (f319*f369);
				highp float f370;
				highp float f371;
				f371 = h362;
				f370 = f371;
				f367 = ((f319>=0.000000e+00))?(f368):(f370);
				float h372;
				h372 = f367;
				h324 = (h324+h372);
			}
			highp float f373;
			f373 = clamp(((f317*pc3_h[3].x)+pc3_h[3].y),0.000000e+00,1.000000e+00);
			highp float f374;
			f374 = h324;
			float h375;
			h375 = mix(f374,1.000000e+00,(f373*f373));
			h324 = h375;
		}
		else
		{
			h324 = 1.000000e+00;
		}
		h28 = h324;
	}
	float h376;
	highp vec3 v377;
	v377.xyz = v43;
	float h378;
	h378 = dot(v377,pc3_h[1].xyz);
	h376 = max(0.000000e+00,h378);
	highp float f379;
	f379 = 0.000000e+00;
	if ((pc3_h[0].w>f379))
	{
		highp float f380;
		f380 = 1.000000e-01;
		if ((pc3_h[3].z<f380))
		{
			highp float f381;
			f381 = h28;
			highp vec3 v382;
			v382.xyz = (vec3(h376)*v296);
			vec3 v383;
			v383.xyz = ((vec3(f381)*pc3_h[0].xyz)*v382);
			v32.xyz = (v314+v383);
		}
		else
		{
			highp float f384;
			f384 = h28;
			highp vec3 v385;
			v385.xyz = (vec3(h376)*v296);
			vec3 v386;
			v386.xyz = ((vec3(f384)*pc3_h[0].xyz)*v385);
			v32.xyz = (v32+v386);
		}
	}
	v27.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	float h387;
	h387 = pc8_m[0].z;
	vec4 v388;
	v388.xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,1.000000e+00);
	if (bool(pc8_m[0].y))
	{
		vec4 v389;
		highp float f390;
		f390 = ((pc8_m[0].y+-1.000000e+00)+(-(1.000000e+00+(-(1.200000e+00*log2(max(h281,1.000000e-03)))))));
		v389.xyzw = textureLod(ps4,v245,f390);
		vec3 v391;
		vec3 v392;
		v392.xyz = pc0_m[14].xyz;
		vec3 v393;
		v393.xyz = pc0_m[13].xyz;
		v391.xyz = (b1)?(v392):(v393);
		v388.xyz = (v389.xyz*v391);
	}
	else
	{
		vec4 v394;
		highp float f395;
		f395 = ((h18+-1.000000e+00)+(-(1.000000e+00+(-(1.200000e+00*log2(max(h281,1.000000e-03)))))));
		v394.xyzw = textureLod(ps4,v245,f395);
		vec3 v396;
		v396.xyz = (v394.xyz*vec3((v394.w*h387)));
		vec3 v397;
		v397.xyz = (v396*v396);
		v388.xyz = v397;
		v388.xyz = (v397*vec3(mix(1.000000e+00,min((h315/max(pc8_m[0].x,1.000000e-04)),v16.z),smoothstep(0.000000e+00,1.000000e+00,clamp(((h281*v16.x)+v16.y),0.000000e+00,1.000000e+00)))));
		v388.xyz = (v388.xyz*v17);
	}
	v27.xyz = ((v388.xyz*pc10_m[12].zzz)*pc8_m[1].xyz);
	float h398;
	h398 = dot(v27,vec3(3.000000e-01,5.900000e-01,1.100000e-01));
	vec3 v399;
	v399.x = h398;
	v399.y = h398;
	v399.z = h398;
	vec3 v400;
	v400.xyz = (v32+(mix(v399,v27,pc8_m[1].www)*v298));
	v32.xyz = v400;
	uvec3 v401;
	highp vec2 v402;
	v402.xy = pc0_m[0].xy;
	v401.xy = (uvec2((gl_FragCoord.xy+(-v402)))>>uvec2(u11));
	float h403;
	h403 = v23.w;
	float h404;
	h404 = pc1_h[1].x;
	float h405;
	h405 = pc1_h[1].y;
	float h406;
	h406 = pc1_h[1].z;
	float h407;
	h407 = pc1_h[0].z;
	v401.z = uint(clamp((log2(((h403*h404)+h405))*h406),0.000000e+00,(h407+-1.000000e+00)));
	highp vec3 v408;
	v408.xyz = vec3(v401);
	uint u409;
	u409 = uint(texelFetch(ps9,int(uint(((((v408.z*pc1_h[0].y)+v408.y)*pc1_h[0].x)+v408.x)))).x);
	v26.xyzw = vec4(0.000000e+00,1.000000e+00,0.000000e+00,0.000000e+00);
	v26.x = pc3_h[5].x;
	v26.y = pc3_h[5].y;
	if (bool((u409&u4)))
	{
		highp float f410;
		highp float f411;
		f411 = h28;
		f410 = f411;
		highp float f412;
		f412 = v26.x;
		highp float f413;
		f413 = v26.y;
		vec3 v414;
		v414.xyz = v400;
		highp vec3 v415;
		v415.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
		uint u416;
		float h417;
		uint u418;
		u418 = uint(pc7_h[3].w);
		h417 = 1.000000e+00;
		u416 = 0u;
		if (((u418&4u)==4u))
		{
			uint u419;
			u416 = 1u;
			u419 = 0u;
			if (((u418&1u)==1u))
			{
				highp vec3 v420;
				v420.xyz = (v41+(-pc7_h[0].xyz));
				highp vec3 v421;
				v421.xyz = abs(v420);
				highp float f422;
				f422 = max(max(v421.x,v421.y),v421.z);
				bool b423;
				b423 = (f422==v421.x);
				bool b424;
				b424 = (!(b423)&&(f422==v421.y));
				bool b425;
				b425 = (!(b423)&&!(b424));
				u419 = ((uint(int((b423&&(f422==v420.x))))+uint(((2*int(b424))+int((b424&&(f422==v420.y))))))+uint(((4*int(b425))+int((b425&&(f422==v420.z))))));
			}
			highp vec4 v426;
			v426.xyzw = (pc7_h[int((13u+(u419*4u)))]+((pc7_h[int((12u+(u419*4u)))]*v41.zzzz)+((pc7_h[int((11u+(u419*4u)))]*v41.yyyy)+(pc7_h[int((10u+(u419*4u)))]*v41.xxxx))));
			highp vec2 v427;
			v427.xy = (v426.xy/v426.ww);
			highp vec4 v428;
			v428.xyzw = pc7_h[int((4u+u419))];
			highp vec4 v429;
			v429.xyzw = pc7_h[int((4u+u419))];
			if (all(bvec2(uvec2(greaterThanEqual(v427,v428.xy))*uvec2(lessThanEqual(v427,v429.zw)))))
			{
				highp float f430;
				f430 = min(v426.z,9.999900e-01);
				highp vec4 v431;
				highp vec2 v432;
				v432.xy = (v427*pc0_h[3].xy);
				highp vec2 v433;
				v433.xy = ((floor(v432)+vec2(5.000000e-01,5.000000e-01))*pc0_h[3].zw);
				highp vec4 v434;
				v434.xyzw = textureGatherOffset(ps1,v433,ivec2(-1,-1));
				v431.xyzw = textureGatherOffset(ps1,v433,ivec2(0,0));
				highp vec3 v435;
				v435.x = v434.w;
				v435.y = v434.z;
				highp vec2 v436;
				v436.xy = vec2(1.000000e+00,-1.000000e+00);
				v435.z = textureLod(ps1,(v433+(v436*pc0_h[3].zw)),0.000000e+00).x;
				vec3 v437;
				float h438;
				float h439;
				h439 = pc7_h[3].z;
				h438 = h439;
				highp float f440;
				f440 = h438;
				highp float f441;
				f441 = h438;
				vec3 v442;
				v442.xyz = clamp(((v435*vec3(f440))+(-vec3(((f430*f441)+-1.000000e+00)))),vec3(0.000000e+00,0.000000e+00,0.000000e+00),vec3(1.000000e+00,1.000000e+00,1.000000e+00));
				v437.xyz = v442;
				highp vec3 v443;
				v443.x = v434.x;
				v443.y = v434.y;
				v443.z = v431.z;
				vec3 v444;
				float h445;
				float h446;
				h446 = pc7_h[3].z;
				h445 = h446;
				highp float f447;
				f447 = h445;
				highp float f448;
				f448 = h445;
				vec3 v449;
				v449.xyz = clamp(((v443*vec3(f447))+(-vec3(((f430*f448)+-1.000000e+00)))),vec3(0.000000e+00,0.000000e+00,0.000000e+00),vec3(1.000000e+00,1.000000e+00,1.000000e+00));
				v444.xyz = v449;
				highp vec3 v450;
				highp vec2 v451;
				v451.xy = vec2(-1.000000e+00,1.000000e+00);
				v450.x = textureLod(ps1,(v433+(v451*pc0_h[3].zw)),0.000000e+00).x;
				v450.y = v431.x;
				v450.z = v431.y;
				vec3 v452;
				float h453;
				float h454;
				h454 = pc7_h[3].z;
				h453 = h454;
				highp float f455;
				f455 = h453;
				highp float f456;
				f456 = h453;
				vec3 v457;
				v457.xyz = clamp(((v450*vec3(f455))+(-vec3(((f430*f456)+-1.000000e+00)))),vec3(0.000000e+00,0.000000e+00,0.000000e+00),vec3(1.000000e+00,1.000000e+00,1.000000e+00));
				v452.xyz = v457;
				vec2 v458;
				vec2 v459;
				v459.xy = fract(v432);
				v458.xy = v459;
				vec3 v460;
				v460.x = (v437.x*(1.000000e+00+(-v458.x)));
				v460.y = (v444.x*(1.000000e+00+(-v458.x)));
				v460.z = (v452.x*(1.000000e+00+(-v458.x)));
				v460.x = (v460.x+v437.y);
				v460.y = (v460.y+v444.y);
				v460.z = (v460.z+v452.y);
				v460.x = (v460.x+(v437.z*v458.x));
				v460.y = (v460.y+(v444.z*v458.x));
				v460.z = (v460.z+(v452.z*v458.x));
				vec3 v461;
				v461.y = 1.000000e+00;
				v461.x = (1.000000e+00+(-v458.y));
				v461.z = v458.y;
				highp float f462;
				highp float f463;
				f463 = clamp(clamp((2.500000e-01*dot(v460,v461)),0.000000e+00,1.000000e+00),0.000000e+00,1.000000e+00);
				f462 = f463;
				highp float f464;
				f464 = 1.000000e+00;
				highp float f465;
				f465 = 1.000000e+00;
				float h466;
				h466 = mix(f464,(f462*f462),f465);
				h417 = h466;
			}
		}
		if (((u418&3u)!=0u))
		{
			highp float f467;
			highp vec3 v468;
			v468.xyz = (pc7_h[0].xyz+(-v41));
			highp vec3 v469;
			v469.xyz = normalize(v468);
			float h470;
			highp vec3 v471;
			v471.xyz = v43;
			float h472;
			h472 = dot(v471,v469);
			h470 = max(0.000000e+00,h472);
			if ((pc7_h[1].w==0.000000e+00))
			{
				highp float f473;
				f473 = dot(v468,v468);
				highp float f474;
				f474 = (f473*(pc7_h[0].w*pc7_h[0].w));
				highp float f475;
				f475 = clamp((1.000000e+00+(-(f474*f474))),0.000000e+00,1.000000e+00);
				f467 = ((1.0/((f473+1.000000e+00)))*(f475*f475));
			}
			else
			{
				highp vec3 v476;
				v476.xyz = (v468*pc7_h[0].www);
				f467 = pow((1.000000e+00+(-clamp(dot(v476,v476),0.000000e+00,1.000000e+00))),pc7_h[1].w);
			}
			if (((u418&2u)==2u))
			{
				highp float f477;
				f477 = clamp(((dot(v469,(-(-pc7_h[2].xyz)))+(-pc7_h[3].x))*pc7_h[3].y),0.000000e+00,1.000000e+00);
				f467 = (f467*(f477*f477));
			}
			highp float f478;
			highp float f479;
			f479 = h417;
			f478 = (f467*f479);
			f467 = f478;
			highp float f480;
			f480 = mix((f410+f413),f410,f410);
			highp float f481;
			f481 = ((!(bool(u416))&&(f412>0.000000e+00)))?(f480):(1.000000e+00);
			highp float f482;
			f482 = (f478*min(1.000000e+00,f481));
			f467 = f482;
			highp float f483;
			f483 = h470;
			highp float f484;
			f484 = 3.183099e-01;
			v415.xyz = min(vec3(6.500000e+04,6.500000e+04,6.500000e+04),((vec3((f483*f482))*pc7_h[1].xyz)*vec3(f484)));
			highp float f485;
			f485 = 3.141593e+00;
			highp vec3 v486;
			v486.xyz = (vec3(h470)*v296);
			vec3 v487;
			v487.xyz = min(vec3(6.500000e+04,6.500000e+04,6.500000e+04),(((vec3(f482)*pc7_h[1].xyz)*vec3((1.0/(f485))))*v486));
			v414.xyz = (v400+v487);
		}
		v32.xyz = v414;
		v30.xyz = v415;
	}
	v31.xyz = v30;
	if ((bool((u409&u5))&&(i2>1)))
	{
		highp float f488;
		highp float f489;
		f489 = h28;
		f488 = f489;
		highp float f490;
		f490 = v26.x;
		highp float f491;
		f491 = v26.y;
		vec3 v492;
		v492.xyz = v32;
		highp vec3 v493;
		v493.xyz = v30;
		uint u494;
		float h495;
		uint u496;
		u496 = uint(pc6_h[3].w);
		h495 = 1.000000e+00;
		u494 = 0u;
		if (((u496&4u)==4u))
		{
			uint u497;
			u494 = 1u;
			u497 = 0u;
			if (((u496&1u)==1u))
			{
				highp vec3 v498;
				v498.xyz = (v41+(-pc6_h[0].xyz));
				highp vec3 v499;
				v499.xyz = abs(v498);
				highp float f500;
				f500 = max(max(v499.x,v499.y),v499.z);
				bool b501;
				b501 = (f500==v499.x);
				bool b502;
				b502 = (!(b501)&&(f500==v499.y));
				bool b503;
				b503 = (!(b501)&&!(b502));
				u497 = ((uint(int((b501&&(f500==v498.x))))+uint(((2*int(b502))+int((b502&&(f500==v498.y))))))+uint(((4*int(b503))+int((b503&&(f500==v498.z))))));
			}
			highp vec4 v504;
			v504.xyzw = (pc6_h[int((13u+(u497*4u)))]+((pc6_h[int((12u+(u497*4u)))]*v41.zzzz)+((pc6_h[int((11u+(u497*4u)))]*v41.yyyy)+(pc6_h[int((10u+(u497*4u)))]*v41.xxxx))));
			highp vec2 v505;
			v505.xy = (v504.xy/v504.ww);
			highp vec4 v506;
			v506.xyzw = pc6_h[int((4u+u497))];
			highp vec4 v507;
			v507.xyzw = pc6_h[int((4u+u497))];
			if (all(bvec2(uvec2(greaterThanEqual(v505,v506.xy))*uvec2(lessThanEqual(v505,v507.zw)))))
			{
				highp vec2 v508;
				v508.xy = (v505*pc0_h[3].xy);
				vec4 v509;
				float h510;
				float h511;
				h511 = pc6_h[3].z;
				h510 = h511;
				highp float f512;
				f512 = h510;
				highp float f513;
				f513 = h510;
				vec4 v514;
				v514.xyzw = clamp(((textureGatherOffset(ps1,((floor(v508)+vec2(5.000000e-01,5.000000e-01))*pc0_h[3].zw),ivec2(0,0))*vec4(f512))+(-vec4(((min(v504.z,9.999900e-01)*f513)+-1.000000e+00)))),vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00),vec4(1.000000e+00,1.000000e+00,1.000000e+00,1.000000e+00));
				v509.xyzw = v514;
				vec2 v515;
				vec2 v516;
				v516.xy = fract(v508);
				v515.xy = v516;
				vec2 v517;
				v517.xy = mix(v509.wx,v509.zy,v515.xx);
				highp float f518;
				highp float f519;
				f519 = clamp(mix(v517.x,v517.y,v515.y),0.000000e+00,1.000000e+00);
				f518 = f519;
				highp float f520;
				f520 = 1.000000e+00;
				highp float f521;
				f521 = 1.000000e+00;
				float h522;
				h522 = mix(f520,(f518*f518),f521);
				h495 = h522;
			}
		}
		if (((u496&3u)!=0u))
		{
			highp float f523;
			highp vec3 v524;
			v524.xyz = (pc6_h[0].xyz+(-v41));
			highp vec3 v525;
			v525.xyz = normalize(v524);
			float h526;
			highp vec3 v527;
			v527.xyz = v43;
			float h528;
			h528 = dot(v527,v525);
			h526 = max(0.000000e+00,h528);
			if ((pc6_h[1].w==0.000000e+00))
			{
				highp float f529;
				f529 = dot(v524,v524);
				highp float f530;
				f530 = (f529*(pc6_h[0].w*pc6_h[0].w));
				highp float f531;
				f531 = clamp((1.000000e+00+(-(f530*f530))),0.000000e+00,1.000000e+00);
				f523 = ((1.0/((f529+1.000000e+00)))*(f531*f531));
			}
			else
			{
				highp vec3 v532;
				v532.xyz = (v524*pc6_h[0].www);
				f523 = pow((1.000000e+00+(-clamp(dot(v532,v532),0.000000e+00,1.000000e+00))),pc6_h[1].w);
			}
			if (((u496&2u)==2u))
			{
				highp float f533;
				f533 = clamp(((dot(v525,(-(-pc6_h[2].xyz)))+(-pc6_h[3].x))*pc6_h[3].y),0.000000e+00,1.000000e+00);
				f523 = (f523*(f533*f533));
			}
			highp float f534;
			highp float f535;
			f535 = h495;
			f534 = (f523*f535);
			f523 = f534;
			highp float f536;
			f536 = mix((f488+f491),f488,f488);
			highp float f537;
			f537 = ((!(bool(u494))&&(f490>0.000000e+00)))?(f536):(1.000000e+00);
			highp float f538;
			f538 = (f534*min(1.000000e+00,f537));
			f523 = f538;
			highp float f539;
			f539 = h526;
			highp float f540;
			f540 = 3.183099e-01;
			v493.xyz = min(vec3(6.500000e+04,6.500000e+04,6.500000e+04),(v30+((vec3((f539*f538))*pc6_h[1].xyz)*vec3(f540))));
			highp float f541;
			f541 = 3.141593e+00;
			highp vec3 v542;
			v542.xyz = (vec3(h526)*v296);
			vec3 v543;
			v543.xyz = min(vec3(6.500000e+04,6.500000e+04,6.500000e+04),(((vec3(f538)*pc6_h[1].xyz)*vec3((1.0/(f541))))*v542));
			v492.xyz = (v32+v543);
		}
		v32.xyz = v492;
		v31.xyz = v493;
	}
	if ((bool((u409&u6))&&(i2>2)))
	{
		highp float f544;
		highp float f545;
		f545 = h28;
		f544 = f545;
		highp float f546;
		f546 = v26.x;
		highp float f547;
		f547 = v26.y;
		vec3 v548;
		v548.xyz = v32;
		highp vec3 v549;
		v549.xyz = v31;
		uint u550;
		float h551;
		uint u552;
		u552 = uint(pc5_h[3].w);
		h551 = 1.000000e+00;
		u550 = 0u;
		if (((u552&4u)==4u))
		{
			uint u553;
			u550 = 1u;
			u553 = 0u;
			if (((u552&1u)==1u))
			{
				highp vec3 v554;
				v554.xyz = (v41+(-pc5_h[0].xyz));
				highp vec3 v555;
				v555.xyz = abs(v554);
				highp float f556;
				f556 = max(max(v555.x,v555.y),v555.z);
				bool b557;
				b557 = (f556==v555.x);
				bool b558;
				b558 = (!(b557)&&(f556==v555.y));
				bool b559;
				b559 = (!(b557)&&!(b558));
				u553 = ((uint(int((b557&&(f556==v554.x))))+uint(((2*int(b558))+int((b558&&(f556==v554.y))))))+uint(((4*int(b559))+int((b559&&(f556==v554.z))))));
			}
			highp vec4 v560;
			v560.xyzw = (pc5_h[int((13u+(u553*4u)))]+((pc5_h[int((12u+(u553*4u)))]*v41.zzzz)+((pc5_h[int((11u+(u553*4u)))]*v41.yyyy)+(pc5_h[int((10u+(u553*4u)))]*v41.xxxx))));
			highp vec2 v561;
			v561.xy = (v560.xy/v560.ww);
			highp vec4 v562;
			v562.xyzw = pc5_h[int((4u+u553))];
			highp vec4 v563;
			v563.xyzw = pc5_h[int((4u+u553))];
			if (all(bvec2(uvec2(greaterThanEqual(v561,v562.xy))*uvec2(lessThanEqual(v561,v563.zw)))))
			{
				highp float f564;
				highp float f565;
				f565 = 1.000000e+00;
				f564 = f565;
				highp float f566;
				f566 = 1.000000e+00;
				highp float f567;
				f567 = 1.000000e+00;
				float h568;
				h568 = mix(f566,(f564*f564),f567);
				h551 = h568;
			}
		}
		if (((u552&3u)!=0u))
		{
			highp float f569;
			highp vec3 v570;
			v570.xyz = (pc5_h[0].xyz+(-v41));
			highp vec3 v571;
			v571.xyz = normalize(v570);
			float h572;
			highp vec3 v573;
			v573.xyz = v43;
			float h574;
			h574 = dot(v573,v571);
			h572 = max(0.000000e+00,h574);
			if ((pc5_h[1].w==0.000000e+00))
			{
				highp float f575;
				f575 = dot(v570,v570);
				highp float f576;
				f576 = (f575*(pc5_h[0].w*pc5_h[0].w));
				highp float f577;
				f577 = clamp((1.000000e+00+(-(f576*f576))),0.000000e+00,1.000000e+00);
				f569 = ((1.0/((f575+1.000000e+00)))*(f577*f577));
			}
			else
			{
				highp vec3 v578;
				v578.xyz = (v570*pc5_h[0].www);
				f569 = pow((1.000000e+00+(-clamp(dot(v578,v578),0.000000e+00,1.000000e+00))),pc5_h[1].w);
			}
			if (((u552&2u)==2u))
			{
				highp float f579;
				f579 = clamp(((dot(v571,(-(-pc5_h[2].xyz)))+(-pc5_h[3].x))*pc5_h[3].y),0.000000e+00,1.000000e+00);
				f569 = (f569*(f579*f579));
			}
			highp float f580;
			highp float f581;
			f581 = h551;
			f580 = (f569*f581);
			f569 = f580;
			highp float f582;
			f582 = mix((f544+f547),f544,f544);
			highp float f583;
			f583 = ((!(bool(u550))&&(f546>0.000000e+00)))?(f582):(1.000000e+00);
			highp float f584;
			f584 = (f580*min(1.000000e+00,f583));
			f569 = f584;
			highp float f585;
			f585 = h572;
			highp float f586;
			f586 = 3.183099e-01;
			v549.xyz = min(vec3(6.500000e+04,6.500000e+04,6.500000e+04),(v31+((vec3((f585*f584))*pc5_h[1].xyz)*vec3(f586))));
			highp float f587;
			f587 = 3.141593e+00;
			highp vec3 v588;
			v588.xyz = (vec3(h572)*v296);
			vec3 v589;
			v589.xyz = min(vec3(6.500000e+04,6.500000e+04,6.500000e+04),(((vec3(f584)*pc5_h[1].xyz)*vec3((1.0/(f587))))*v588));
			v548.xyz = (v32+v589);
		}
		v32.xyz = v548;
		v31.xyz = v549;
	}
	if ((bool((u409&u7))&&(i2>3)))
	{
		highp float f590;
		highp float f591;
		f591 = h28;
		f590 = f591;
		highp float f592;
		f592 = v26.x;
		highp float f593;
		f593 = v26.y;
		vec3 v594;
		v594.xyz = v32;
		highp vec3 v595;
		v595.xyz = v31;
		uint u596;
		float h597;
		uint u598;
		u598 = uint(pc4_h[3].w);
		h597 = 1.000000e+00;
		u596 = 0u;
		if (((u598&4u)==4u))
		{
			uint u599;
			u596 = 1u;
			u599 = 0u;
			if (((u598&1u)==1u))
			{
				highp vec3 v600;
				v600.xyz = (v41+(-pc4_h[0].xyz));
				highp vec3 v601;
				v601.xyz = abs(v600);
				highp float f602;
				f602 = max(max(v601.x,v601.y),v601.z);
				bool b603;
				b603 = (f602==v601.x);
				bool b604;
				b604 = (!(b603)&&(f602==v601.y));
				bool b605;
				b605 = (!(b603)&&!(b604));
				u599 = ((uint(int((b603&&(f602==v600.x))))+uint(((2*int(b604))+int((b604&&(f602==v600.y))))))+uint(((4*int(b605))+int((b605&&(f602==v600.z))))));
			}
			highp vec4 v606;
			v606.xyzw = (pc4_h[int((13u+(u599*4u)))]+((pc4_h[int((12u+(u599*4u)))]*v41.zzzz)+((pc4_h[int((11u+(u599*4u)))]*v41.yyyy)+(pc4_h[int((10u+(u599*4u)))]*v41.xxxx))));
			highp vec2 v607;
			v607.xy = (v606.xy/v606.ww);
			highp vec4 v608;
			v608.xyzw = pc4_h[int((4u+u599))];
			highp vec4 v609;
			v609.xyzw = pc4_h[int((4u+u599))];
			if (all(bvec2(uvec2(greaterThanEqual(v607,v608.xy))*uvec2(lessThanEqual(v607,v609.zw)))))
			{
				highp float f610;
				highp float f611;
				f611 = 1.000000e+00;
				f610 = f611;
				highp float f612;
				f612 = 1.000000e+00;
				highp float f613;
				f613 = 1.000000e+00;
				float h614;
				h614 = mix(f612,(f610*f610),f613);
				h597 = h614;
			}
		}
		if (((u598&3u)!=0u))
		{
			highp float f615;
			highp vec3 v616;
			v616.xyz = (pc4_h[0].xyz+(-v41));
			highp vec3 v617;
			v617.xyz = normalize(v616);
			float h618;
			highp vec3 v619;
			v619.xyz = v43;
			float h620;
			h620 = dot(v619,v617);
			h618 = max(0.000000e+00,h620);
			if ((pc4_h[1].w==0.000000e+00))
			{
				highp float f621;
				f621 = dot(v616,v616);
				highp float f622;
				f622 = (f621*(pc4_h[0].w*pc4_h[0].w));
				highp float f623;
				f623 = clamp((1.000000e+00+(-(f622*f622))),0.000000e+00,1.000000e+00);
				f615 = ((1.0/((f621+1.000000e+00)))*(f623*f623));
			}
			else
			{
				highp vec3 v624;
				v624.xyz = (v616*pc4_h[0].www);
				f615 = pow((1.000000e+00+(-clamp(dot(v624,v624),0.000000e+00,1.000000e+00))),pc4_h[1].w);
			}
			if (((u598&2u)==2u))
			{
				highp float f625;
				f625 = clamp(((dot(v617,(-(-pc4_h[2].xyz)))+(-pc4_h[3].x))*pc4_h[3].y),0.000000e+00,1.000000e+00);
				f615 = (f615*(f625*f625));
			}
			highp float f626;
			highp float f627;
			f627 = h597;
			f626 = (f615*f627);
			f615 = f626;
			highp float f628;
			f628 = mix((f590+f593),f590,f590);
			highp float f629;
			f629 = ((!(bool(u596))&&(f592>0.000000e+00)))?(f628):(1.000000e+00);
			highp float f630;
			f630 = (f626*min(1.000000e+00,f629));
			f615 = f630;
			highp float f631;
			f631 = h618;
			highp float f632;
			f632 = 3.183099e-01;
			v595.xyz = min(vec3(6.500000e+04,6.500000e+04,6.500000e+04),(v31+((vec3((f631*f630))*pc4_h[1].xyz)*vec3(f632))));
			highp float f633;
			f633 = 3.141593e+00;
			highp vec3 v634;
			v634.xyz = (vec3(h618)*v296);
			vec3 v635;
			v635.xyz = min(vec3(6.500000e+04,6.500000e+04,6.500000e+04),(((vec3(f630)*pc4_h[1].xyz)*vec3((1.0/(f633))))*v634));
			v594.xyz = (v32+v635);
		}
		v32.xyz = v594;
		v31.xyz = v595;
	}
	if (((pc7_h[2].w>1.000000e-01)&&(float(i9)>5.000000e-01)))
	{
		vec3 v636;
		v636.xyz = v32;
		highp float f637;
		f637 = distance(v33,v22);
		float h638;
		float h639;
		h639 = f637;
		h638 = h639;
		if ((h638<2.500000e+03))
		{
			float h640;
			h640 = clamp(h281,0.000000e+00,1.000000e+00);
			highp float f641;
			highp vec3 v642;
			v642.xyz = v43;
			f641 = max(0.000000e+00,dot(v642,normalize((normalize((pc7_h[0].xyz+(-v41)))+v42))));
			float h643;
			h643 = (h640*h640);
			float h644;
			highp float f645;
			f645 = h643;
			float h646;
			h646 = (f641*f645);
			h644 = h646;
			float h647;
			highp float f648;
			f648 = (h644*h644);
			highp float f649;
			f649 = h643;
			float h650;
			h650 = (f649/(max(1.000000e-06,(1.000000e+00+(-(f641*f641))))+f648));
			h647 = h650;
			vec3 v651;
			v651.xyz = v30;
			v636.xyz = (v32+((((v651*vec3(clamp((1.000000e+00+(-((h638+-1.250000e+03)/1.250000e+03))),0.000000e+00,1.000000e+00)))*vec3(((h640*2.500000e-01)+2.500000e-01)))*vec3(min((h647*h647),h19)))*v298));
		}
		v32.xyz = v636;
	}
	v25.xyzw = in_TEXCOORD7;
	highp float f652;
	f652 = h28;
	vec3 v653;
	v653.xyz = max((v31*((vec3((pc1_h[2].w*f652))*pc3_h[0].xyz)*pc3_h[0].www)),vec3(1.000000e+00,1.000000e+00,1.000000e+00));
	v25.xyz = (in_TEXCOORD7.xyz*v653);
	vec4 v654;
	v654.xyzw = mix(v25,vec4(0.000000e+00,0.000000e+00,0.000000e+00,1.000000e+00),vec4(h13));
	v24.xyz = (((v32+mix(max(v277,vec3(0.000000e+00,0.000000e+00,0.000000e+00)),vec3(0.000000e+00,0.000000e+00,0.000000e+00),vec3(h13)))*v654.www)+v654.xyz);
	v24.w = 1.000000e+00;
	float h655;
	h655 = gl_FragCoord.z;
	v24.w = h655;
	vec3 v656;
	v656.xyz = min(v24.xyz,vec3(6.500000e+04,6.500000e+04,6.500000e+04));
	v24.xyz = v656;
	float h657;
	h657 = f21;
	v24.xyz = (v656*vec3(h657));
	out_Target0.xyzw = v24;
}

// Compiled by HLSLCC 0.73
// @Inputs: f4;0:in_TEXCOORD10_centroid,f4;1:in_TEXCOORD11_centroid,f4;2:in_COLOR0,f4;3:in_TEXCOORD0,f4;4:in_TEXCOORD1,f4;5:in_TEXCOORD2,f4;6:in_TEXCOORD7,f4;7:in_TEXCOORD8,f4;8:in_TEXCOORD14,f4;-1:gl_FragCoord
// @Outputs: f4;0:out_Target0
// @PackedGlobals: bAffectByWeather(h:0,1),bShadowReceiveBiasScale(h:4,1),NumDynamicPointLights(i:0,1),bUseLightMapSkyLight(u:0,1)
// @PackedUB: View(0): View_WorldCameraOrigin(268,3),View_PreViewTranslation(280,3),View_ViewSizeAndInvSize(520,4),View_LocalLightShadowsSize(540,4),View_PreExposure(546,1),View_GameTime(666,1),View_MaterialTextureMipBias(669,1),View_PrtFlag(976,1),View_ViewRectMin(516,4),View_Ev100(549,1),View_GGXTweak(550,1),View_ReflectionCubemapMaxMip(552,1),View_IndirectLightingColorScale(556,3),View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight(560,3),View_MobileSkyIrradianceEnvironmentMap_0(564,4),View_MobileSkyIrradianceEnvironmentMap_1(568,4),View_MobileSkyIrradianceEnvironmentMap_2(572,4),View_MobileSkyIrradianceEnvironmentMap_3(576,4),View_MobileSkyIrradianceEnvironmentMap_4(580,4),View_MobileSkyIrradianceEnvironmentMap_5(584,4),View_MobileSkyIrradianceEnvironmentMap_6(588,4),View_SkyLightColor(620,4),View_LightMapSkyLightColor(624,4),View_SpecularOnlyViewmodeMask(680,1)
// @PackedUB: MobileBasePass(1): MobileBasePass_CulledGridSize(4,4),MobileBasePass_LightGridZParams(8,4),MobileBasePass_Fog_ExponentialFogEnvLightingAndScale(44,4),MobileBasePass_UseCSM(14,1),MobileBasePass_UseFakeSpec(15,1),MobileBasePass_LightGridPixelSizeShift(0,1)
// @PackedUB: Primitive(2): Primitive_ActorWorldPosition(56,3)
// @PackedUB: MobileDirectionalLight(3): MobileDirectionalLight_DirectionalLightColor(0,4),MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition(4,4),MobileDirectionalLight_DirectionalLightShadowSize(8,4),MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale(12,4),MobileDirectionalLight_DirectionalLightShadowDistances(16,4),MobileDirectionalLight_DirectionalLightShadowIntensityScale(20,4),MobileDirectionalLight_DirectionalLightScreenToShadow(24,32)
// @PackedUB: MobileMovablePointLight3(4): MobileMovablePointLight3_LightPositionAndInvRadius(4,4),MobileMovablePointLight3_LightColorAndFalloffExponent(8,4),MobileMovablePointLight3_SpotLightDirectionAndSpecularScale(12,4),MobileMovablePointLight3_SpotLightAnglesAndSoftTransitionScaleAndLightShadowType(16,4),MobileMovablePointLight3_LightShadowmapMinMax(20,24),MobileMovablePointLight3_LightShadowWorldToShadowMatrix(44,96),MobileMovablePointLight3_LightIDMask(0,1)
// @PackedUB: MobileMovablePointLight2(5): MobileMovablePointLight2_LightPositionAndInvRadius(4,4),MobileMovablePointLight2_LightColorAndFalloffExponent(8,4),MobileMovablePointLight2_SpotLightDirectionAndSpecularScale(12,4),MobileMovablePointLight2_SpotLightAnglesAndSoftTransitionScaleAndLightShadowType(16,4),MobileMovablePointLight2_LightShadowmapMinMax(20,24),MobileMovablePointLight2_LightShadowWorldToShadowMatrix(44,96),MobileMovablePointLight2_LightIDMask(0,1)
// @PackedUB: MobileMovablePointLight1(6): MobileMovablePointLight1_LightPositionAndInvRadius(4,4),MobileMovablePointLight1_LightColorAndFalloffExponent(8,4),MobileMovablePointLight1_SpotLightDirectionAndSpecularScale(12,4),MobileMovablePointLight1_SpotLightAnglesAndSoftTransitionScaleAndLightShadowType(16,4),MobileMovablePointLight1_LightShadowmapMinMax(20,24),MobileMovablePointLight1_LightShadowWorldToShadowMatrix(44,96),MobileMovablePointLight1_LightIDMask(0,1)
// @PackedUB: MobileMovablePointLight0(7): MobileMovablePointLight0_LightPositionAndInvRadius(4,4),MobileMovablePointLight0_LightColorAndFalloffExponent(8,4),MobileMovablePointLight0_SpotLightDirectionAndSpecularScale(12,4),MobileMovablePointLight0_SpotLightAnglesAndSoftTransitionScaleAndLightShadowType(16,4),MobileMovablePointLight0_LightShadowmapMinMax(20,24),MobileMovablePointLight0_LightShadowWorldToShadowMatrix(44,96),MobileMovablePointLight0_LightIDMask(0,1)
// @PackedUB: MobileReflectionCapture(8): MobileReflectionCapture_Params(0,4),MobileReflectionCapture_ReflectionColor(4,4)
// @PackedUB: MaterialCollection0(9): MaterialCollection0_Vectors_0(0,4),MaterialCollection0_Vectors_1(4,4),MaterialCollection0_Vectors_3(12,4),MaterialCollection0_Vectors_4(16,4),MaterialCollection0_Vectors_5(20,4)
// @PackedUB: Material(10): Material_VectorExpressions_0(0,4),Material_VectorExpressions_1(4,4),Material_VectorExpressions_2(8,4),Material_ScalarExpressions_0(16,4),Material_ScalarExpressions_1(20,4),Material_ScalarExpressions_2(24,4),Material_ScalarExpressions_3(28,4),Material_ScalarExpressions_4(32,4),Material_ScalarExpressions_5(36,4),Material_ScalarExpressions_6(40,4),Material_ScalarExpressions_7(44,4),Material_ScalarExpressions_8(48,4),Material_ScalarExpressions_9(52,4)
// @PackedUBCopies: 0:268-10:h:0:3,0:280-10:h:4:3,0:520-10:h:8:4,0:540-10:h:12:4,0:546-10:h:16:1,0:666-10:h:20:1,0:669-10:h:24:1,0:976-10:i:0:1,0:516-10:m:0:4,0:549-10:m:4:1,0:550-10:m:8:1,0:552-10:m:12:1,0:556-10:m:16:3,0:560-10:m:20:3,0:564-10:m:24:28,0:620-10:m:52:8,0:680-10:m:60:1,1:4-2:h:0:8,1:44-2:h:8:4,1:14-2:i:0:1,1:15-2:i:4:1,1:0-2:u:0:1,2:56-9:h:0:3,3:0-3:h:0:56,4:4-7:h:0:136,4:0-7:u:0:1,5:4-6:h:0:136,5:0-6:u:0:1,6:4-5:h:0:136,6:0-5:u:0:1,7:4-4:h:0:136,7:0-4:u:0:1,8:0-8:m:0:8,9:0-1:m:0:8,9:12-1:m:8:12,10:0-0:m:0:12,10:16-0:m:12:40
// @Samplers: Material_Texture2D_5(0:1[Material_Texture2D_5Sampler]),View_LocalLightShadows(1:1[View_LocalLightShadowsSampler]),MobileDirectionalLight_DirectionalLightShadowTexture2(2:1[MobileDirectionalLight_ShadowDepthTextureComparisonSampler]),Material_Texture2D_2(3:1[Material_Texture2D_2Sampler]),MobileReflectionCapture_Texture(4:1[MobileReflectionCapture_TextureSampler]),Material_Texture2D_3(5:1[Material_Texture2D_3Sampler]),Material_Texture2D_4(6:1[Material_Texture2D_4Sampler]),Material_Texture2D_0(7:1[Material_Texture2D_0Sampler]),Material_Texture2D_1(8:1[Material_Texture2D_1Sampler]),MobileBasePass_CulledLightDataGrid(9:1)

//M_Base/TGPUSkinVertexFactoryDefault/TMobileBasePassPSFMobileMovableDirectionalLightAndPrtLighingPolicyINT32_MAXHDRLinear64Skylight/0_e7c7eb261ed056ae

/*

*/

