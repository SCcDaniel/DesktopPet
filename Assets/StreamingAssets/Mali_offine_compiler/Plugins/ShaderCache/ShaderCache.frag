#version 310 es

#define HLSLCC_DX11ClipSpace 1
#define CODE_TEST 1


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
uniform vec4 pc0_m[21];
uniform ivec4 pc0_i[1];
uniform highp vec4 pc0_h[7];
uniform highp vec4 pc2_h[1];
uniform vec4 pc3_m[2];
uniform uvec4 pc5_u[2];
uniform highp vec4 pc5_h[34];
uniform uvec4 pc6_u[2];
uniform highp vec4 pc6_h[34];
uniform uvec4 pc7_u[2];
uniform highp vec4 pc7_h[34];
uniform uvec4 pc8_u[2];
uniform highp vec4 pc8_h[34];
uniform highp vec4 pc4_h[14];
uniform uvec4 pc1_u[1];
uniform ivec4 pc1_i[1];
uniform highp vec4 pc1_h[3];
uniform vec4 pc9_m[8];
uniform uvec4 pu_u[2];
uniform ivec4 pu_i[1];
uniform highp vec4 pu_h[1];
uniform mediump sampler2D ps7;
uniform mediump sampler2D ps4;
uniform mediump sampler2D ps11;
uniform mediump sampler2D ps9;
uniform mediump sampler2D ps6;
uniform mediump sampler2D ps5;
uniform mediump sampler2D ps3;
uniform mediump sampler2D ps1;
uniform highp sampler2DShadow ps10;
uniform mediump sampler2D ps0;
uniform highp usamplerBuffer ps2;
uniform highp sampler2D ps8;
layout(location=0) in vec4 in_TEXCOORD10_centroid;
layout(location=1) in vec4 in_TEXCOORD11_centroid;
layout(location=2) in highp vec4 in_TEXCOORD0;
layout(location=3) in vec4 in_TEXCOORD4;
layout(location=4) in vec4 in_TEXCOORD7;
layout(location=5) in highp vec4 in_TEXCOORD8;
layout(location=6) in vec4 in_TEXCOORD14;
layout(location=0) out vec4 out_Target0;
void main()
{
	highp float f0;
	f0 = pu_h[0].x;
	bool b1;
	b1 = bool(pu_u[1].x);
	bool b2;
	b2 = bool(pu_u[0].x);
	int i3;
	i3 = pu_i[0].x;
	uint u4;
	u4 = pc8_u[1].x;
	uint u5;
	u5 = pc8_u[0].x;
	uint u6;
	u6 = pc7_u[1].x;
	uint u7;
	u7 = pc7_u[0].x;
	uint u8;
	u8 = pc6_u[1].x;
	uint u9;
	u9 = pc6_u[0].x;
	uint u10;
	u10 = pc5_u[1].x;
	uint u11;
	u11 = pc5_u[0].x;
	int i12;
	i12 = pc1_i[0].x;
	uint u13;
	u13 = pc1_u[0].x;
	int i14;
	i14 = pc0_i[0].x;
	float h15;
	h15 = pc0_m[20].x;
	highp float f16;
	f16 = pc0_h[5].x;
	vec3 v17;
	v17.xyz = pc0_m[2].xyz;
	float h18;
	h18 = pc0_m[1].x;
	highp float f19;
	f19 = pc0_h[3].x;
	highp vec4 v20;
	v20.xyzw = gl_FragCoord;
	v20.w = (1.0/(gl_FragCoord.w));
	vec4 v21;
	vec4 v22;
	highp vec4 v23;
	float h24;
	highp vec3 v25;
	highp vec3 v26;
	vec3 v27;
	vec3 v28;
	highp vec4 v29;
	v29.xyzw = in_TEXCOORD10_centroid;
	vec3 v30;
	v30.xyz = v29.xyz;
	v28.xyz = v30;
	vec4 v31;
	v31.xyzw = in_TEXCOORD11_centroid;
	highp vec4 v32;
	highp vec3 v33;
	highp vec2 v34;
	v34.xy = pc0_m[0].xy;
	v33.xy = ((((gl_FragCoord.xy+(-v34))*pc0_h[1].zw)+vec2(-5.000000e-01,-5.000000e-01))*vec2(2.000000e+00,-2.000000e+00));
	v33.z = gl_FragCoord.z;
	highp vec4 v35;
	v35.w = 1.000000e+00;
	v35.xyz = v33;
	v32.xyzw = (v35*v20.wwww);
	highp vec3 v36;
	v36.xyz = (in_TEXCOORD8.xyz+(-pc0_h[0].xyz));
	vec3 v37;
	vec3 v38;
	v38.xyz = vec3(0.000000e+00,0.000000e+00,1.000000e+00);
	highp vec3 v39;
	v39.xyz = ((v31.xyz*v38.zzz)+(((cross(v31.xyz,v28)*v31.www)*v38.yyy)+(v28*v38.xxx)));
	vec3 v40;
	v40.xyz = normalize(v39);
	v37.xyz = v40;
	float h41;
	h41 = (pc9_m[1].x+pc9_m[1].y);
	float h42;
	float h43;
	h43 = ((pc2_h[0].y+pc2_h[0].x)+pc2_h[0].z);
	h42 = fract(h43);
	highp float f44;
	highp float f45;
	f45 = h42;
	f44 = (f45+pc0_h[4].x);
	highp float f46;
	highp float f47;
	f47 = pc9_m[1].z;
	f46 = (f44*f47);
	vec2 v48;
	float h49;
	h49 = (f46+(-trunc(f46)));
	v48.x = (h49*1.000000e+01);
	v48.y = 0.000000e+00;
	vec3 v50;
	vec2 v51;
	v51.xy = (in_TEXCOORD0.xy*vec2(2.000000e+00,2.000000e+00));
	highp vec2 v52;
	v52.xy = (v48+v51);
	v50.xyz = (texture(ps1,v52).xyz*pc9_m[1].www);
	float h53;
	highp float f54;
	f54 = pc9_m[2].x;
	float h55;
	h55 = (f44*f54);
	h53 = h55;
	vec2 v56;
	v56.x = ((h53+(-trunc(h53)))*2.848999e+00);
	v56.y = 0.000000e+00;
	vec4 v57;
	highp vec2 v58;
	v58.xy = vec2(1.000000e+00,0.000000e+00);
	vec2 v59;
	v59.xy = (in_TEXCOORD0.zw*v58);
	highp vec2 v60;
	v60.xy = (v56+(v59/vec2(2.560000e+02,2.560000e+02)));
	v57.xyzw = texture(ps3,v60);
	float h61;
	h61 = pow(v57.x,2.000000e+00);
	float h62;
	h62 = ((v57.x<=0.000000e+00))?(0.000000e+00):(h61);
	float h63;
	h63 = (h62*pc9_m[2].y);
	vec3 v64;
	v64.xyz = (v50*vec3(h63));
	vec2 v65;
	highp float f66;
	f66 = pc9_m[2].z;
	float h67;
	h67 = (in_TEXCOORD0.x*f66);
	v65.x = h67;
	highp float f68;
	f68 = pc9_m[2].w;
	float h69;
	h69 = (in_TEXCOORD0.y*f68);
	v65.y = h69;
	highp float f70;
	highp float f71;
	f71 = pc9_m[3].x;
	f70 = (f44*f71);
	vec2 v72;
	float h73;
	h73 = (f70+(-trunc(f70)));
	v72.x = (h73*2.848999e+00);
	v72.y = 0.000000e+00;
	float h74;
	highp float f75;
	f75 = pc9_m[3].y;
	vec2 v76;
	v76.xy = (in_TEXCOORD0.xy*vec2(f75));
	highp vec2 v77;
	v77.xy = (v72+v76);
	h74 = step(5.000000e-01,texture(ps6,v77).x);
	vec2 v78;
	highp vec2 v79;
	v79.xy = v65;
	highp float f80;
	f80 = ((texture(ps5,v79).x*h74)*pc9_m[3].z);
	float h81;
	h81 = (in_TEXCOORD0.x+f80);
	v78.x = h81;
	float h82;
	h82 = in_TEXCOORD0.y;
	v78.y = h82;
	vec2 v83;
	vec2 v84;
	v84.xy = in_TEXCOORD0.xy;
	v83.xy = v84;
	vec2 v85;
	v85.xy = vec2(0.000000e+00,0.000000e+00);
	v85.xy = ((pc9_m[3].w<5.000000e-01))?(v83):(v78);
	vec2 v86;
	v86.x = pc9_m[4].y;
	v86.y = pc9_m[4].x;
	vec2 v87;
	v87.xy = (v85/v86);
	float h88;
	h88 = (pc9_m[4].y*pc9_m[4].x);
	vec3 v89;
	vec3 v90;
	v90.xyz = fract(pc2_h[0].xyz);
	v89.xyz = v90;
	float h91;
	h91 = abs(pc9_m[4].w);
	highp float f92;
	highp float f93;
	highp float f94;
	f94 = ((((v89.x+v89.y)+v89.z)*1.076241e+02)/pc9_m[4].z);
	f93 = (f94+f16);
	f92 = ((pc9_m[4].w>=0.000000e+00))?(f93):(f16);
	highp float f95;
	f95 = ((h91>1.000000e-05))?(f92):(f16);
	vec2 v96;
	v96.x = h88;
	v96.y = pc9_m[4].x;
	vec2 v97;
	v97.x = pc9_m[4].y;
	v97.y = pc9_m[4].x;
	vec3 v98;
	highp float f99;
	f99 = pc9_m[4].z;
	float h100;
	h100 = fract((f95*f99));
	highp vec2 v101;
	v101.xy = (v87+(floor((v96*vec2(h100)))/v97));
	highp float f102;
	f102 = -1.000000e+00;
	v98.xyz = texture(ps9,v101,f102).xyz;
	vec3 v103;
	highp vec2 v104;
	v104.xy = v85;
	v103.xyz = texture(ps11,v104).xyz;
	vec3 v105;
	v105.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	v105.xyz = ((pc9_m[5].x<5.000000e-01))?(v103):(v98);
	float h106;
	float h107;
	h107 = pc9_m[5].y;
	h106 = ((pc9_m[5].z>=5.000000e-01))?(h107):(0.000000e+00);
	vec3 v108;
	v108.xyz = (v105*vec3(h106));
	vec3 v109;
	v109.xyz = (v108*vec3(h63));
	float h110;
	float h111;
	h111 = pc9_m[5].w;
	h110 = ((pc9_m[1].y>=5.000000e-01))?(h42):(h111);
	vec2 v112;
	highp float f113;
	f113 = h110;
	float h114;
	h114 = (in_TEXCOORD0.x*f113);
	v112.x = h114;
	highp float f115;
	f115 = pc9_m[6].x;
	float h116;
	h116 = (in_TEXCOORD0.y*f115);
	v112.y = h116;
	vec4 v117;
	highp vec2 v118;
	v118.xy = v112;
	v117.xyzw = texture(ps4,v118);
	vec2 v119;
	highp float f120;
	f120 = pc9_m[6].y;
	float h121;
	h121 = (in_TEXCOORD0.x*f120);
	v119.x = h121;
	highp float f122;
	f122 = pc9_m[6].z;
	float h123;
	h123 = (in_TEXCOORD0.y*f122);
	v119.y = h123;
	float h124;
	highp vec2 v125;
	v125.xy = v119;
	h124 = (v117.x*texture(ps7,v125).x);
	float h126;
	float h127;
	h127 = v117.x;
	h126 = ((pc9_m[6].w>=5.000000e-01))?(h124):(h127);
	vec3 v128;
	v128.xyz = mix(v64,v109,vec3(mix((1.000000e+00+(-h126)),1.000000e+00,h74)));
	vec3 v129;
	v129.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	v129.xyz = ((h41<5.000000e-01))?(v108):(v128);
	vec3 v130;
	v130.xyz = (v129*vec3((pc9_m[7].x/5.000000e+00)));
	float h131;
	float h132;
	highp vec2 v133;
	v133.xy = vec2(5.000000e-01,5.000000e-01);
	vec2 v134;
	v134.xy = (in_TEXCOORD0.xy+(-v133));
	h132 = length(v134);
	h131 = clamp((h132*1.415000e+00),0.000000e+00,1.000000e+00);
	float h135;
	h135 = pow(h131,(1.0/(min(max(pc9_m[7].y,1.000000e-01),2.000000e+00))));
	float h136;
	h136 = ((h131<=0.000000e+00))?(0.000000e+00):(h135);
	float h137;
	h137 = (h136*min(max(pc9_m[7].z,0.000000e+00),1.000000e+00));
	highp vec3 v138;
	highp vec3 v139;
	v139.xyz = mix(v130,vec3(0.000000e+00,0.000000e+00,0.000000e+00),vec3(h137));
	v138.xyz = v139;
	vec3 v140;
	highp float f141;
	f141 = h18;
	highp float f142;
	f142 = pc9_m[7].w;
	vec3 v143;
	v143.xyz = min(mix(v138,(v138*vec3(pow(2.000000e+00,f141))),vec3(f142)),vec3(6.500000e+04,6.500000e+04,6.500000e+04));
	v140.xyz = v143;
	vec3 v144;
	v144.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	v144.xyz = ((pc9_m[5].z<5.000000e-01))?(vec3(0.000000e+00,0.000000e+00,0.000000e+00)):(v140);
	v27.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	v26.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	v25.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	vec3 v145;
	v145.xyz = (clamp(mix((pc9_m[0].xyz*v129),vec3(0.000000e+00,0.000000e+00,0.000000e+00),vec3(h137)),vec3(0.000000e+00,0.000000e+00,0.000000e+00),vec3(1.000000e+00,1.000000e+00,1.000000e+00))+vec3(1.800000e-02,1.800000e-02,1.800000e-02));
	vec3 v146;
	vec3 v147;
	v147.xyz = pc0_m[18].xyz;
	vec3 v148;
	v148.xyz = pc0_m[17].xyz;
	v146.xyz = (b1)?(v147):(v148);
	vec3 v149;
	vec3 v150;
	vec3 v151;
	vec4 v152;
	v152.w = 1.000000e+00;
	v152.xyz = v37;
	if (b1)
	{
		v151.x = dot(pc0_m[10],v152);
		v151.y = dot(pc0_m[11],v152);
		v151.z = dot(pc0_m[12],v152);
		vec4 v153;
		v153.xyzw = (v152.xyzz*v152.yzzx);
		v150.x = dot(pc0_m[13],v153);
		v150.y = dot(pc0_m[14],v153);
		v150.z = dot(pc0_m[15],v153);
		v149.xyz = (pc0_m[16].xyz*vec3(((v152.x*v152.x)+(-(v152.y*v152.y)))));
	}
	else
	{
		v151.x = dot(pc0_m[3],v152);
		v151.y = dot(pc0_m[4],v152);
		v151.z = dot(pc0_m[5],v152);
		vec4 v154;
		v154.xyzw = (v152.xyzz*v152.yzzx);
		v150.x = dot(pc0_m[6],v154);
		v150.y = dot(pc0_m[7],v154);
		v150.z = dot(pc0_m[8],v154);
		v149.xyz = (pc0_m[9].xyz*vec3(((v152.x*v152.x)+(-(v152.y*v152.y)))));
	}
	vec3 v155;
	v155.xyz = (max(vec3(0.000000e+00,0.000000e+00,0.000000e+00),((v151+v150)+v149))*v146);
	vec3 v156;
	v156.xyz = in_TEXCOORD14.xyz;
	float h157;
	h157 = in_TEXCOORD14.w;
	vec3 v158;
	v158.xyz = (pc0_m[19].www*v155);
	float h159;
	h159 = in_TEXCOORD14.w;
	vec3 v160;
	v160.xyz = in_TEXCOORD14.xyz;
	vec3 v161;
	vec3 v162;
	v162.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	v161.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	if ((bool(((i14>>0)&1))&&!(b1)))
	{
		float h163;
		v161.xyz = v156;
		if (bool(((i14>>24)&1)))
		{
			float h164;
			h164 = fract(h157);
			h163 = h164;
			v161.xyz = (v156+(v158*vec3(clamp(((h157+(-h164))/2.550000e+02),0.000000e+00,1.000000e+00))));
		}
		else
		{
			h163 = h157;
		}
		h159 = (dot(v161,vec3(3.000000e-01,5.900000e-01,1.100000e-01))*h163);
		v162.xyz = v161;
		v160.xyz = (v145*v161);
	}
	if (b2)
	{
		vec4 v165;
		highp vec2 v166;
		v166.xy = in_TEXCOORD4.xy;
		v165.xyzw = texture(ps0,v166);
		vec3 v167;
		v167.xyz = ((v165.xyz*pc3_m[0].xyz)+pc3_m[1].xyz);
		float h168;
		h168 = dot(v167,vec3(3.000000e-01,5.900000e-01,1.100000e-01));
		float h169;
		h169 = ((exp2(((h168*1.600000e+01)+-8.000000e+00))+-3.906250e-03)*6.000000e-01);
		vec3 v170;
		v170.xyz = (v167*vec3((h169/h168)));
		vec4 v171;
		v171.xyz = v170;
		v171.w = (h169*v165.w);
		v160.xyz = ((v170*v145)*v17);
		h159 = (h159+(v171.www*v17).x);
	}
	uint u172;
	u172 = uint(((i14>>1)&15));
	if (bool(u172))
	{
		bool b173;
		b173 = false;
		bool b174;
		b174 = false;
		if((1u==u172)) { b173 = true; };
		if (b173)
		{
			highp float f175;
			highp float f176;
			f176 = pc0_h[6].x;
			f175 = (bool(((i14>>5)&1)))?(f176):(f19);
			highp vec3 v177;
			v177.xyz = v162;
			vec3 v178;
			v178.xyz = (v177*vec3(f175));
			v160.xyz = v178;
			b174 = true;
		}
		if((2u==u172)) { b173 = true; };
		if((6u==u172)) { b173 = true; };
		if((7u==u172)) { b173 = true; };
		if(b174) { b173 = false; };
		if (b173)
		{
			v160.xyz = v162;
			b174 = true;
		}
		if((3u==u172)) { b173 = true; };
		if(b174) { b173 = false; };
		if (b173)
		{
			v160.xyz = v145;
			b174 = true;
		}
		if((4u==u172)) { b173 = true; };
		if(b174) { b173 = false; };
		if (b173)
		{
			vec3 v179;
			v179.yz = vec2(0.000000e+00,0.000000e+00);
			float h180;
			h180 = float(b1);
			v179.x = h180;
			v160.xyz = v179;
			b174 = true;
		}
		if((5u==u172)) { b173 = true; };
		if(b174) { b173 = false; };
		if (b173)
		{
			vec3 v181;
			v181.yz = vec2(0.000000e+00,0.000000e+00);
			float h182;
			h182 = float((int(b2)==1));
			v181.x = h182;
			v160.xyz = v181;
			b174 = true;
		}
		b173 = true;
		if(b174) { b173 = false; };
		if (b173)
		{
			v160.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
			b174 = true;
		}
	}
	v27.xyz = v160;
	if ((!(bool(((i14>>0)&1)))||b1))
	{
		v27.xyz = (v160+(v155*v145));
	}
	h24 = 1.000000e+00;
	if ((bool(i12)||(pc4_h[4].z>0.000000e+00)))
	{
		highp vec2 v183;
		v183.xy = v32.xy;
		highp float f184;
		f184 = v32.w;
		int i185;
		highp float f186;
		highp vec4 v187;
		highp vec4 v188;
		highp float f189;
		highp float f190;
		float h191;
		h191 = 0.000000e+00;
		f190 = pc4_h[1].w;
		v188.xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00);
		v187.xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00);
		f186 = -1.000000e+00;
		i185 = 0;
		int i192;
		i192 = 0;
		for (;i192<2;)
		{
			if ((f184<pc4_h[4][i192]))
			{
				if ((i192==0))
				{
					highp vec4 v193;
					v193.w = 1.000000e+00;
					v193.x = v183.x;
					v193.y = v183.y;
					v193.z = f184;
					v188.xyzw = (pc4_h[9]+((pc4_h[8]*v193.zzzz)+((pc4_h[7]*v193.yyyy)+(pc4_h[6]*v183.xxxx))));
				}
				else
				{
					highp vec4 v194;
					v194.w = 1.000000e+00;
					v194.x = v183.x;
					v194.y = v183.y;
					v194.z = f184;
					v187.xyzw = (pc4_h[(9+(i192*4))]+((pc4_h[(8+(i192*4))]*v194.zzzz)+((pc4_h[(7+(i192*4))]*v194.yyyy)+(pc4_h[(6+(i192*4))]*v183.xxxx))));
				}
				if (((((((i192==0)&&(v188.x<(pc4_h[4].w+-1.000000e-03)))&&(v188.y<9.900000e-01))&&(v188.y>1.000000e-02))&&(v188.x>1.000000e-02))&&(v188.z<=9.999900e-01)))
				{
					i185 = (i185+(1<<i192));
					if ((f184>pc4_h[5].w))
					{
						f186 = clamp(((f184+(-pc4_h[5].w))/pc4_h[5].z),0.000000e+00,1.000000e+00);
					}
					else
					{
						break;
					}
				}
				if ((i192!=0))
				{
					i185 = (i185+(1<<i192));
				}
			}
			i192 = (i192+1);
		}
		int i195;
		i195 = (i185&1);
		int i196;
		i196 = (i185&2);
		if (((bool(i195)&&(v188.z>0.000000e+00))||(bool(i196)&&(v187.z>0.000000e+00))))
		{
			if ((i195>0))
			{
				highp float f197;
				f197 = min(v188.z,9.999900e-01);
				f189 = f197;
				highp vec2 v198;
				v198.xy = ((v188.xy*pc4_h[2].xy)+vec2(5.000000e-01,5.000000e-01));
				highp vec2 v199;
				v199.xy = (v198+(-floor(v198)));
				highp vec2 v200;
				v200.xy = (v188.xy+(-(v199*pc4_h[2].zw)));
				highp vec2 v201;
				v201.xy = (vec2(2.000000e+00,2.000000e+00)+(-v199));
				highp vec2 v202;
				v202.xy = ((1.0/(v201))*pc4_h[2].zw);
				highp vec2 v203;
				v203.xy = (vec2(1.000000e+00,1.000000e+00)+v199);
				highp vec2 v204;
				v204.xy = ((v199/v203)*pc4_h[2].zw);
				highp float f205;
				f205 = clamp((f197+(-(1.0/(f190)))),0.000000e+00,1.000000e+00);
				highp vec2 v206;
				v206.x = v204.x;
				v206.y = v202.y;
				highp vec2 v207;
				v207.x = v202.x;
				v207.y = v204.y;
				float h208;
				float h209;
				h209 = ((v201.x*v201.y)*float(textureLodOffset(ps10,vec3((v200+v202),f205),0.000000e+00,ivec2(-1,-1))));
				float h210;
				h210 = ((v203.x*v201.y)*float(textureLodOffset(ps10,vec3((v200+v206),f205),0.000000e+00,ivec2(1,-1))));
				float h211;
				h211 = ((v201.x*v203.y)*float(textureLodOffset(ps10,vec3((v200+v207),f205),0.000000e+00,ivec2(-1,1))));
				float h212;
				h212 = ((v203.x*v203.y)*float(textureLodOffset(ps10,vec3((v200+v204),f205),0.000000e+00,ivec2(1,1))));
				h208 = ((((h209+h210)+h211)+h212)/9.000000e+00);
				highp float f213;
				highp float f214;
				highp float f215;
				f215 = h208;
				f214 = ((1.000000e+00+(-f186))*f215);
				highp float f216;
				highp float f217;
				f217 = h208;
				f216 = f217;
				f213 = ((f186>=0.000000e+00))?(f214):(f216);
				float h218;
				h218 = f213;
				h191 = h218;
			}
			if ((i196>0))
			{
				f189 = (min(v187.z,9.999900e-01)+(-(f0*1.000000e-02)));
				highp vec2 v219;
				v219.xy = ((v187.xy*pc4_h[2].xy)+vec2(5.000000e-01,5.000000e-01));
				highp vec2 v220;
				v220.xy = (v219+(-floor(v219)));
				highp vec2 v221;
				v221.xy = (v187.xy+(-(v220*pc4_h[2].zw)));
				highp vec2 v222;
				v222.xy = (vec2(2.000000e+00,2.000000e+00)+(-v220));
				highp vec2 v223;
				v223.xy = ((1.0/(v222))*pc4_h[2].zw);
				highp vec2 v224;
				v224.xy = (vec2(1.000000e+00,1.000000e+00)+v220);
				highp vec2 v225;
				v225.xy = ((v220/v224)*pc4_h[2].zw);
				highp float f226;
				f226 = clamp((f189+(-(1.0/(f190)))),0.000000e+00,1.000000e+00);
				highp vec2 v227;
				v227.x = v225.x;
				v227.y = v223.y;
				highp vec2 v228;
				v228.x = v223.x;
				v228.y = v225.y;
				float h229;
				float h230;
				h230 = ((v222.x*v222.y)*float(textureLodOffset(ps10,vec3((v221+v223),f226),0.000000e+00,ivec2(-1,-1))));
				float h231;
				h231 = ((v224.x*v222.y)*float(textureLodOffset(ps10,vec3((v221+v227),f226),0.000000e+00,ivec2(1,-1))));
				float h232;
				h232 = ((v222.x*v224.y)*float(textureLodOffset(ps10,vec3((v221+v228),f226),0.000000e+00,ivec2(-1,1))));
				float h233;
				h233 = ((v224.x*v224.y)*float(textureLodOffset(ps10,vec3((v221+v225),f226),0.000000e+00,ivec2(1,1))));
				h229 = ((((h230+h231)+h232)+h233)/9.000000e+00);
				highp float f234;
				highp float f235;
				highp float f236;
				f236 = h229;
				f235 = (f186*f236);
				highp float f237;
				highp float f238;
				f238 = h229;
				f237 = f238;
				f234 = ((f186>=0.000000e+00))?(f235):(f237);
				float h239;
				h239 = f234;
				h191 = (h191+h239);
			}
			highp float f240;
			f240 = clamp(((f184*pc4_h[3].x)+pc4_h[3].y),0.000000e+00,1.000000e+00);
			highp float f241;
			f241 = h191;
			float h242;
			h242 = mix(f241,1.000000e+00,(f240*f240));
			h191 = h242;
		}
		else
		{
			h191 = 1.000000e+00;
		}
		h24 = h191;
	}
	float h243;
	highp vec3 v244;
	v244.xyz = v37;
	float h245;
	h245 = dot(v244,pc4_h[1].xyz);
	h243 = max(0.000000e+00,h245);
	highp float f246;
	f246 = 0.000000e+00;
	if ((pc4_h[0].w>f246))
	{
		highp float f247;
		f247 = (h24*h243);
		highp vec3 v248;
		v248.xyz = v145;
		vec3 v249;
		v249.xyz = ((vec3(f247)*pc4_h[0].xyz)*v248);
		v27.xyz = (v27+v249);
	}
	uvec3 v250;
	highp vec2 v251;
	v251.xy = pc0_m[0].xy;
	v250.xy = (uvec2((gl_FragCoord.xy+(-v251)))>>uvec2(u13));
	float h252;
	h252 = v20.w;
	float h253;
	h253 = pc1_h[1].x;
	float h254;
	h254 = pc1_h[1].y;
	float h255;
	h255 = pc1_h[1].z;
	float h256;
	h256 = pc1_h[0].z;
	v250.z = uint(clamp((log2(((h252*h253)+h254))*h255),0.000000e+00,(h256+-1.000000e+00)));
	highp vec3 v257;
	v257.xyz = vec3(v250);
	uint u258;
	u258 = uint(texelFetch(ps2,int(uint(((((v257.z*pc1_h[0].y)+v257.y)*pc1_h[0].x)+v257.x)))).x);
	v23.xyzw = vec4(0.000000e+00,1.000000e+00,0.000000e+00,0.000000e+00);
	v23.x = pc4_h[5].x;
	v23.y = pc4_h[5].y;
	if (bool((u258&u5)))
	{
		highp float f259;
		highp float f260;
		f260 = h24;
		f259 = f260;
		highp float f261;
		f261 = float((bool(v23.x)&&bool(float(u4))));
		highp float f262;
		f262 = v23.y;
		vec3 v263;
		v263.xyz = v27;
		highp vec3 v264;
		v264.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
		uint u265;
		float h266;
		uint u267;
		u267 = uint(pc8_h[3].w);
		h266 = 1.000000e+00;
		u265 = 0u;
		if (((u267&4u)==4u))
		{
			uint u268;
			u265 = 1u;
			u268 = 0u;
			if (((u267&1u)==1u))
			{
				highp vec3 v269;
				v269.xyz = (v36+(-pc8_h[0].xyz));
				highp vec3 v270;
				v270.xyz = abs(v269);
				highp float f271;
				f271 = max(max(v270.x,v270.y),v270.z);
				bool b272;
				b272 = (f271==v270.x);
				bool b273;
				b273 = (!(b272)&&(f271==v270.y));
				bool b274;
				b274 = (!(b272)&&!(b273));
				u268 = ((uint(int((b272&&(f271==v269.x))))+uint(((2*int(b273))+int((b273&&(f271==v269.y))))))+uint(((4*int(b274))+int((b274&&(f271==v269.z))))));
			}
			highp vec4 v275;
			v275.xyzw = (pc8_h[int((13u+(u268*4u)))]+((pc8_h[int((12u+(u268*4u)))]*v36.zzzz)+((pc8_h[int((11u+(u268*4u)))]*v36.yyyy)+(pc8_h[int((10u+(u268*4u)))]*v36.xxxx))));
			highp vec2 v276;
			v276.xy = (v275.xy/v275.ww);
			highp vec4 v277;
			v277.xyzw = pc8_h[int((4u+u268))];
			highp vec4 v278;
			v278.xyzw = pc8_h[int((4u+u268))];
			if (all(bvec2(uvec2(greaterThanEqual(v276,v277.xy))*uvec2(lessThanEqual(v276,v278.zw)))))
			{
				highp float f279;
				f279 = min(v275.z,9.999900e-01);
				highp vec4 v280;
				highp vec2 v281;
				v281.xy = (v276*pc0_h[2].xy);
				highp vec2 v282;
				v282.xy = ((floor(v281)+vec2(5.000000e-01,5.000000e-01))*pc0_h[2].zw);
				highp vec4 v283;
				v283.xyzw = textureGatherOffset(ps8,v282,ivec2(-1,-1));
				v280.xyzw = textureGatherOffset(ps8,v282,ivec2(0,0));
				highp vec3 v284;
				v284.x = v283.w;
				v284.y = v283.z;
				highp vec2 v285;
				v285.xy = vec2(1.000000e+00,-1.000000e+00);
				v284.z = textureLod(ps8,(v282+(v285*pc0_h[2].zw)),0.000000e+00).x;
				vec3 v286;
				float h287;
				float h288;
				h288 = pc8_h[3].z;
				h287 = h288;
				highp float f289;
				f289 = h287;
				highp float f290;
				f290 = h287;
				vec3 v291;
				v291.xyz = clamp(((v284*vec3(f289))+(-vec3(((f279*f290)+-1.000000e+00)))),vec3(0.000000e+00,0.000000e+00,0.000000e+00),vec3(1.000000e+00,1.000000e+00,1.000000e+00));
				v286.xyz = v291;
				highp vec3 v292;
				v292.x = v283.x;
				v292.y = v283.y;
				v292.z = v280.z;
				vec3 v293;
				float h294;
				float h295;
				h295 = pc8_h[3].z;
				h294 = h295;
				highp float f296;
				f296 = h294;
				highp float f297;
				f297 = h294;
				vec3 v298;
				v298.xyz = clamp(((v292*vec3(f296))+(-vec3(((f279*f297)+-1.000000e+00)))),vec3(0.000000e+00,0.000000e+00,0.000000e+00),vec3(1.000000e+00,1.000000e+00,1.000000e+00));
				v293.xyz = v298;
				highp vec3 v299;
				highp vec2 v300;
				v300.xy = vec2(-1.000000e+00,1.000000e+00);
				v299.x = textureLod(ps8,(v282+(v300*pc0_h[2].zw)),0.000000e+00).x;
				v299.y = v280.x;
				v299.z = v280.y;
				vec3 v301;
				float h302;
				float h303;
				h303 = pc8_h[3].z;
				h302 = h303;
				highp float f304;
				f304 = h302;
				highp float f305;
				f305 = h302;
				vec3 v306;
				v306.xyz = clamp(((v299*vec3(f304))+(-vec3(((f279*f305)+-1.000000e+00)))),vec3(0.000000e+00,0.000000e+00,0.000000e+00),vec3(1.000000e+00,1.000000e+00,1.000000e+00));
				v301.xyz = v306;
				vec2 v307;
				vec2 v308;
				v308.xy = fract(v281);
				v307.xy = v308;
				vec3 v309;
				v309.x = (v286.x*(1.000000e+00+(-v307.x)));
				v309.y = (v293.x*(1.000000e+00+(-v307.x)));
				v309.z = (v301.x*(1.000000e+00+(-v307.x)));
				v309.x = (v309.x+v286.y);
				v309.y = (v309.y+v293.y);
				v309.z = (v309.z+v301.y);
				v309.x = (v309.x+(v286.z*v307.x));
				v309.y = (v309.y+(v293.z*v307.x));
				v309.z = (v309.z+(v301.z*v307.x));
				vec3 v310;
				v310.y = 1.000000e+00;
				v310.x = (1.000000e+00+(-v307.y));
				v310.z = v307.y;
				highp float f311;
				highp float f312;
				f312 = clamp(clamp((2.500000e-01*dot(v309,v310)),0.000000e+00,1.000000e+00),0.000000e+00,1.000000e+00);
				f311 = f312;
				highp float f313;
				f313 = 1.000000e+00;
				highp float f314;
				f314 = 1.000000e+00;
				float h315;
				h315 = mix(f313,(f311*f311),f314);
				h266 = h315;
			}
		}
		if (((u267&3u)!=0u))
		{
			highp float f316;
			highp vec3 v317;
			v317.xyz = (pc8_h[0].xyz+(-v36));
			highp vec3 v318;
			v318.xyz = normalize(v317);
			float h319;
			highp vec3 v320;
			v320.xyz = v37;
			float h321;
			h321 = dot(v320,v318);
			h319 = max(0.000000e+00,h321);
			if ((pc8_h[1].w==0.000000e+00))
			{
				highp float f322;
				f322 = dot(v317,v317);
				highp float f323;
				f323 = (f322*(pc8_h[0].w*pc8_h[0].w));
				highp float f324;
				f324 = clamp((1.000000e+00+(-(f323*f323))),0.000000e+00,1.000000e+00);
				f316 = ((1.0/((f322+1.000000e+00)))*(f324*f324));
			}
			else
			{
				highp vec3 v325;
				v325.xyz = (v317*pc8_h[0].www);
				f316 = pow((1.000000e+00+(-clamp(dot(v325,v325),0.000000e+00,1.000000e+00))),pc8_h[1].w);
			}
			if (((u267&2u)==2u))
			{
				highp float f326;
				f326 = clamp(((dot(v318,(-(-pc8_h[2].xyz)))+(-pc8_h[3].x))*pc8_h[3].y),0.000000e+00,1.000000e+00);
				f316 = (f316*(f326*f326));
			}
			highp float f327;
			highp float f328;
			f328 = h266;
			f327 = (f316*f328);
			f316 = f327;
			highp float f329;
			f329 = mix((f259+f262),f259,f259);
			highp float f330;
			f330 = ((!(bool(u265))&&(f261>0.000000e+00)))?(f329):(1.000000e+00);
			highp float f331;
			f331 = (f327*min(1.000000e+00,f330));
			f316 = f331;
			highp float f332;
			f332 = h319;
			highp float f333;
			f333 = 3.183099e-01;
			v264.xyz = min(vec3(6.500000e+04,6.500000e+04,6.500000e+04),((vec3((f332*f331))*pc8_h[1].xyz)*vec3(f333)));
			highp float f334;
			f334 = h319;
			highp float f335;
			f335 = 3.141593e+00;
			highp vec3 v336;
			v336.xyz = v145;
			vec3 v337;
			v337.xyz = min(vec3(6.500000e+04,6.500000e+04,6.500000e+04),(((vec3((f331*f334))*pc8_h[1].xyz)*vec3((1.0/(f335))))*v336));
			v263.xyz = (v27+v337);
		}
		v27.xyz = v263;
		v25.xyz = v264;
	}
	v26.xyz = v25;
	if ((bool((u258&u7))&&(i3>1)))
	{
		highp float f338;
		highp float f339;
		f339 = h24;
		f338 = f339;
		highp float f340;
		f340 = float((bool(v23.x)&&bool(float(u6))));
		highp float f341;
		f341 = v23.y;
		vec3 v342;
		v342.xyz = v27;
		highp vec3 v343;
		v343.xyz = v25;
		uint u344;
		float h345;
		uint u346;
		u346 = uint(pc7_h[3].w);
		h345 = 1.000000e+00;
		u344 = 0u;
		if (((u346&4u)==4u))
		{
			uint u347;
			u344 = 1u;
			u347 = 0u;
			if (((u346&1u)==1u))
			{
				highp vec3 v348;
				v348.xyz = (v36+(-pc7_h[0].xyz));
				highp vec3 v349;
				v349.xyz = abs(v348);
				highp float f350;
				f350 = max(max(v349.x,v349.y),v349.z);
				bool b351;
				b351 = (f350==v349.x);
				bool b352;
				b352 = (!(b351)&&(f350==v349.y));
				bool b353;
				b353 = (!(b351)&&!(b352));
				u347 = ((uint(int((b351&&(f350==v348.x))))+uint(((2*int(b352))+int((b352&&(f350==v348.y))))))+uint(((4*int(b353))+int((b353&&(f350==v348.z))))));
			}
			highp vec4 v354;
			v354.xyzw = (pc7_h[int((13u+(u347*4u)))]+((pc7_h[int((12u+(u347*4u)))]*v36.zzzz)+((pc7_h[int((11u+(u347*4u)))]*v36.yyyy)+(pc7_h[int((10u+(u347*4u)))]*v36.xxxx))));
			highp vec2 v355;
			v355.xy = (v354.xy/v354.ww);
			highp vec4 v356;
			v356.xyzw = pc7_h[int((4u+u347))];
			highp vec4 v357;
			v357.xyzw = pc7_h[int((4u+u347))];
			if (all(bvec2(uvec2(greaterThanEqual(v355,v356.xy))*uvec2(lessThanEqual(v355,v357.zw)))))
			{
				highp vec2 v358;
				v358.xy = (v355*pc0_h[2].xy);
				vec4 v359;
				float h360;
				float h361;
				h361 = pc7_h[3].z;
				h360 = h361;
				highp float f362;
				f362 = h360;
				highp float f363;
				f363 = h360;
				vec4 v364;
				v364.xyzw = clamp(((textureGatherOffset(ps8,((floor(v358)+vec2(5.000000e-01,5.000000e-01))*pc0_h[2].zw),ivec2(0,0))*vec4(f362))+(-vec4(((min(v354.z,9.999900e-01)*f363)+-1.000000e+00)))),vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00),vec4(1.000000e+00,1.000000e+00,1.000000e+00,1.000000e+00));
				v359.xyzw = v364;
				vec2 v365;
				vec2 v366;
				v366.xy = fract(v358);
				v365.xy = v366;
				vec2 v367;
				v367.xy = mix(v359.wx,v359.zy,v365.xx);
				highp float f368;
				highp float f369;
				f369 = clamp(mix(v367.x,v367.y,v365.y),0.000000e+00,1.000000e+00);
				f368 = f369;
				highp float f370;
				f370 = 1.000000e+00;
				highp float f371;
				f371 = 1.000000e+00;
				float h372;
				h372 = mix(f370,(f368*f368),f371);
				h345 = h372;
			}
		}
		if (((u346&3u)!=0u))
		{
			highp float f373;
			highp vec3 v374;
			v374.xyz = (pc7_h[0].xyz+(-v36));
			highp vec3 v375;
			v375.xyz = normalize(v374);
			float h376;
			highp vec3 v377;
			v377.xyz = v37;
			float h378;
			h378 = dot(v377,v375);
			h376 = max(0.000000e+00,h378);
			if ((pc7_h[1].w==0.000000e+00))
			{
				highp float f379;
				f379 = dot(v374,v374);
				highp float f380;
				f380 = (f379*(pc7_h[0].w*pc7_h[0].w));
				highp float f381;
				f381 = clamp((1.000000e+00+(-(f380*f380))),0.000000e+00,1.000000e+00);
				f373 = ((1.0/((f379+1.000000e+00)))*(f381*f381));
			}
			else
			{
				highp vec3 v382;
				v382.xyz = (v374*pc7_h[0].www);
				f373 = pow((1.000000e+00+(-clamp(dot(v382,v382),0.000000e+00,1.000000e+00))),pc7_h[1].w);
			}
			if (((u346&2u)==2u))
			{
				highp float f383;
				f383 = clamp(((dot(v375,(-(-pc7_h[2].xyz)))+(-pc7_h[3].x))*pc7_h[3].y),0.000000e+00,1.000000e+00);
				f373 = (f373*(f383*f383));
			}
			highp float f384;
			highp float f385;
			f385 = h345;
			f384 = (f373*f385);
			f373 = f384;
			highp float f386;
			f386 = mix((f338+f341),f338,f338);
			highp float f387;
			f387 = ((!(bool(u344))&&(f340>0.000000e+00)))?(f386):(1.000000e+00);
			highp float f388;
			f388 = (f384*min(1.000000e+00,f387));
			f373 = f388;
			highp float f389;
			f389 = h376;
			highp float f390;
			f390 = 3.183099e-01;
			v343.xyz = min(vec3(6.500000e+04,6.500000e+04,6.500000e+04),(v25+((vec3((f389*f388))*pc7_h[1].xyz)*vec3(f390))));
			highp float f391;
			f391 = h376;
			highp float f392;
			f392 = 3.141593e+00;
			highp vec3 v393;
			v393.xyz = v145;
			vec3 v394;
			v394.xyz = min(vec3(6.500000e+04,6.500000e+04,6.500000e+04),(((vec3((f388*f391))*pc7_h[1].xyz)*vec3((1.0/(f392))))*v393));
			v342.xyz = (v27+v394);
		}
		v27.xyz = v342;
		v26.xyz = v343;
	}
	if ((bool((u258&u9))&&(i3>2)))
	{
		highp float f395;
		highp float f396;
		f396 = h24;
		f395 = f396;
		highp float f397;
		f397 = float((bool(v23.x)&&bool(float(u8))));
		highp float f398;
		f398 = v23.y;
		vec3 v399;
		v399.xyz = v27;
		highp vec3 v400;
		v400.xyz = v26;
		uint u401;
		float h402;
		uint u403;
		u403 = uint(pc6_h[3].w);
		h402 = 1.000000e+00;
		u401 = 0u;
		if (((u403&4u)==4u))
		{
			uint u404;
			u401 = 1u;
			u404 = 0u;
			if (((u403&1u)==1u))
			{
				highp vec3 v405;
				v405.xyz = (v36+(-pc6_h[0].xyz));
				highp vec3 v406;
				v406.xyz = abs(v405);
				highp float f407;
				f407 = max(max(v406.x,v406.y),v406.z);
				bool b408;
				b408 = (f407==v406.x);
				bool b409;
				b409 = (!(b408)&&(f407==v406.y));
				bool b410;
				b410 = (!(b408)&&!(b409));
				u404 = ((uint(int((b408&&(f407==v405.x))))+uint(((2*int(b409))+int((b409&&(f407==v405.y))))))+uint(((4*int(b410))+int((b410&&(f407==v405.z))))));
			}
			highp vec4 v411;
			v411.xyzw = (pc6_h[int((13u+(u404*4u)))]+((pc6_h[int((12u+(u404*4u)))]*v36.zzzz)+((pc6_h[int((11u+(u404*4u)))]*v36.yyyy)+(pc6_h[int((10u+(u404*4u)))]*v36.xxxx))));
			highp vec2 v412;
			v412.xy = (v411.xy/v411.ww);
			highp vec4 v413;
			v413.xyzw = pc6_h[int((4u+u404))];
			highp vec4 v414;
			v414.xyzw = pc6_h[int((4u+u404))];
			if (all(bvec2(uvec2(greaterThanEqual(v412,v413.xy))*uvec2(lessThanEqual(v412,v414.zw)))))
			{
				highp float f415;
				highp float f416;
				f416 = 1.000000e+00;
				f415 = f416;
				highp float f417;
				f417 = 1.000000e+00;
				highp float f418;
				f418 = 1.000000e+00;
				float h419;
				h419 = mix(f417,(f415*f415),f418);
				h402 = h419;
			}
		}
		if (((u403&3u)!=0u))
		{
			highp float f420;
			highp vec3 v421;
			v421.xyz = (pc6_h[0].xyz+(-v36));
			highp vec3 v422;
			v422.xyz = normalize(v421);
			float h423;
			highp vec3 v424;
			v424.xyz = v37;
			float h425;
			h425 = dot(v424,v422);
			h423 = max(0.000000e+00,h425);
			if ((pc6_h[1].w==0.000000e+00))
			{
				highp float f426;
				f426 = dot(v421,v421);
				highp float f427;
				f427 = (f426*(pc6_h[0].w*pc6_h[0].w));
				highp float f428;
				f428 = clamp((1.000000e+00+(-(f427*f427))),0.000000e+00,1.000000e+00);
				f420 = ((1.0/((f426+1.000000e+00)))*(f428*f428));
			}
			else
			{
				highp vec3 v429;
				v429.xyz = (v421*pc6_h[0].www);
				f420 = pow((1.000000e+00+(-clamp(dot(v429,v429),0.000000e+00,1.000000e+00))),pc6_h[1].w);
			}
			if (((u403&2u)==2u))
			{
				highp float f430;
				f430 = clamp(((dot(v422,(-(-pc6_h[2].xyz)))+(-pc6_h[3].x))*pc6_h[3].y),0.000000e+00,1.000000e+00);
				f420 = (f420*(f430*f430));
			}
			highp float f431;
			highp float f432;
			f432 = h402;
			f431 = (f420*f432);
			f420 = f431;
			highp float f433;
			f433 = mix((f395+f398),f395,f395);
			highp float f434;
			f434 = ((!(bool(u401))&&(f397>0.000000e+00)))?(f433):(1.000000e+00);
			highp float f435;
			f435 = (f431*min(1.000000e+00,f434));
			f420 = f435;
			highp float f436;
			f436 = h423;
			highp float f437;
			f437 = 3.183099e-01;
			v400.xyz = min(vec3(6.500000e+04,6.500000e+04,6.500000e+04),(v26+((vec3((f436*f435))*pc6_h[1].xyz)*vec3(f437))));
			highp float f438;
			f438 = h423;
			highp float f439;
			f439 = 3.141593e+00;
			highp vec3 v440;
			v440.xyz = v145;
			vec3 v441;
			v441.xyz = min(vec3(6.500000e+04,6.500000e+04,6.500000e+04),(((vec3((f435*f438))*pc6_h[1].xyz)*vec3((1.0/(f439))))*v440));
			v399.xyz = (v27+v441);
		}
		v27.xyz = v399;
		v26.xyz = v400;
	}
	if ((bool((u258&u11))&&(i3>3)))
	{
		highp float f442;
		highp float f443;
		f443 = h24;
		f442 = f443;
		highp float f444;
		f444 = float((bool(v23.x)&&bool(float(u10))));
		highp float f445;
		f445 = v23.y;
		vec3 v446;
		v446.xyz = v27;
		highp vec3 v447;
		v447.xyz = v26;
		uint u448;
		float h449;
		uint u450;
		u450 = uint(pc5_h[3].w);
		h449 = 1.000000e+00;
		u448 = 0u;
		if (((u450&4u)==4u))
		{
			uint u451;
			u448 = 1u;
			u451 = 0u;
			if (((u450&1u)==1u))
			{
				highp vec3 v452;
				v452.xyz = (v36+(-pc5_h[0].xyz));
				highp vec3 v453;
				v453.xyz = abs(v452);
				highp float f454;
				f454 = max(max(v453.x,v453.y),v453.z);
				bool b455;
				b455 = (f454==v453.x);
				bool b456;
				b456 = (!(b455)&&(f454==v453.y));
				bool b457;
				b457 = (!(b455)&&!(b456));
				u451 = ((uint(int((b455&&(f454==v452.x))))+uint(((2*int(b456))+int((b456&&(f454==v452.y))))))+uint(((4*int(b457))+int((b457&&(f454==v452.z))))));
			}
			highp vec4 v458;
			v458.xyzw = (pc5_h[int((13u+(u451*4u)))]+((pc5_h[int((12u+(u451*4u)))]*v36.zzzz)+((pc5_h[int((11u+(u451*4u)))]*v36.yyyy)+(pc5_h[int((10u+(u451*4u)))]*v36.xxxx))));
			highp vec2 v459;
			v459.xy = (v458.xy/v458.ww);
			highp vec4 v460;
			v460.xyzw = pc5_h[int((4u+u451))];
			highp vec4 v461;
			v461.xyzw = pc5_h[int((4u+u451))];
			if (all(bvec2(uvec2(greaterThanEqual(v459,v460.xy))*uvec2(lessThanEqual(v459,v461.zw)))))
			{
				highp float f462;
				highp float f463;
				f463 = 1.000000e+00;
				f462 = f463;
				highp float f464;
				f464 = 1.000000e+00;
				highp float f465;
				f465 = 1.000000e+00;
				float h466;
				h466 = mix(f464,(f462*f462),f465);
				h449 = h466;
			}
		}
		if (((u450&3u)!=0u))
		{
			highp float f467;
			highp vec3 v468;
			v468.xyz = (pc5_h[0].xyz+(-v36));
			highp vec3 v469;
			v469.xyz = normalize(v468);
			float h470;
			highp vec3 v471;
			v471.xyz = v37;
			float h472;
			h472 = dot(v471,v469);
			h470 = max(0.000000e+00,h472);
			if ((pc5_h[1].w==0.000000e+00))
			{
				highp float f473;
				f473 = dot(v468,v468);
				highp float f474;
				f474 = (f473*(pc5_h[0].w*pc5_h[0].w));
				highp float f475;
				f475 = clamp((1.000000e+00+(-(f474*f474))),0.000000e+00,1.000000e+00);
				f467 = ((1.0/((f473+1.000000e+00)))*(f475*f475));
			}
			else
			{
				highp vec3 v476;
				v476.xyz = (v468*pc5_h[0].www);
				f467 = pow((1.000000e+00+(-clamp(dot(v476,v476),0.000000e+00,1.000000e+00))),pc5_h[1].w);
			}
			if (((u450&2u)==2u))
			{
				highp float f477;
				f477 = clamp(((dot(v469,(-(-pc5_h[2].xyz)))+(-pc5_h[3].x))*pc5_h[3].y),0.000000e+00,1.000000e+00);
				f467 = (f467*(f477*f477));
			}
			highp float f478;
			highp float f479;
			f479 = h449;
			f478 = (f467*f479);
			f467 = f478;
			highp float f480;
			f480 = mix((f442+f445),f442,f442);
			highp float f481;
			f481 = ((!(bool(u448))&&(f444>0.000000e+00)))?(f480):(1.000000e+00);
			highp float f482;
			f482 = (f478*min(1.000000e+00,f481));
			f467 = f482;
			highp float f483;
			f483 = h470;
			highp float f484;
			f484 = 3.183099e-01;
			v447.xyz = min(vec3(6.500000e+04,6.500000e+04,6.500000e+04),(v26+((vec3((f483*f482))*pc5_h[1].xyz)*vec3(f484))));
			highp float f485;
			f485 = h470;
			highp float f486;
			f486 = 3.141593e+00;
			highp vec3 v487;
			v487.xyz = v145;
			vec3 v488;
			v488.xyz = min(vec3(6.500000e+04,6.500000e+04,6.500000e+04),(((vec3((f482*f485))*pc5_h[1].xyz)*vec3((1.0/(f486))))*v487));
			v446.xyz = (v27+v488);
		}
		v27.xyz = v446;
		v26.xyz = v447;
	}
	v22.xyzw = in_TEXCOORD7;
	highp float f489;
	f489 = h24;
	vec3 v490;
	v490.xyz = max((v26*((vec3((pc1_h[2].w*f489))*pc4_h[0].xyz)*pc4_h[0].www)),vec3(1.000000e+00,1.000000e+00,1.000000e+00));
	v22.xyz = (in_TEXCOORD7.xyz*v490);
	vec4 v491;
	v491.xyzw = mix(v22,vec4(0.000000e+00,0.000000e+00,0.000000e+00,1.000000e+00),vec4(h15));
	v21.xyz = (((v27+mix(max(v144,vec3(0.000000e+00,0.000000e+00,0.000000e+00)),vec3(0.000000e+00,0.000000e+00,0.000000e+00),vec3(h15)))*v491.www)+v491.xyz);
	v21.w = 1.000000e+00;
	float h492;
	h492 = gl_FragCoord.z;
	v21.w = h492;
	vec3 v493;
	v493.xyz = min(v21.xyz,vec3(6.500000e+04,6.500000e+04,6.500000e+04));
	v21.xyz = v493;
	float h494;
	h494 = f19;
	v21.xyz = (v493*vec3(h494));
	uint u495;
	u495 = uint(((i14>>1)&15));
	if (bool(u495))
	{
		v21.xyz = v160;
		v21.w = 1.000000e+00;
	}
	out_Target0.xyzw = v21;
}

// Compiled by HLSLCC 0.73
// @Inputs: f4;0:in_TEXCOORD10_centroid,f4;1:in_TEXCOORD11_centroid,f4;2:in_TEXCOORD0,f4;3:in_TEXCOORD4,f4;4:in_TEXCOORD7,f4;5:in_TEXCOORD8,f4;6:in_TEXCOORD14,f4;-1:gl_FragCoord
// @Outputs: f4;0:out_Target0
// @PackedGlobals: bShadowReceiveBiasScale(h:0,1),NumDynamicPointLights(i:0,1),bLMPValid(u:0,1),bUseLightMapSkyLight(u:4,1)
// @PackedUB: View(0): View_PreViewTranslation(280,3),View_ViewSizeAndInvSize(520,4),View_LocalLightShadowsSize(540,4),View_PreExposure(546,1),View_GameTime(702,1),View_RealTime(703,1),View_PrtDebugData(1028,4),View_PrtFlag(1012,1),View_ViewRectMin(516,4),View_Ev100(549,1),View_IndirectLightingColorScale(556,3),View_MobileSkyIrradianceEnvironmentMap_0(564,4),View_MobileSkyIrradianceEnvironmentMap_1(568,4),View_MobileSkyIrradianceEnvironmentMap_2(572,4),View_MobileSkyIrradianceEnvironmentMap_3(576,4),View_MobileSkyIrradianceEnvironmentMap_4(580,4),View_MobileSkyIrradianceEnvironmentMap_5(584,4),View_MobileSkyIrradianceEnvironmentMap_6(588,4),View_MobileSkyIrradianceEnvironmentMapForLightMap_0(620,4),View_MobileSkyIrradianceEnvironmentMapForLightMap_1(624,4),View_MobileSkyIrradianceEnvironmentMapForLightMap_2(628,4),View_MobileSkyIrradianceEnvironmentMapForLightMap_3(632,4),View_MobileSkyIrradianceEnvironmentMapForLightMap_4(636,4),View_MobileSkyIrradianceEnvironmentMapForLightMap_5(640,4),View_MobileSkyIrradianceEnvironmentMapForLightMap_6(644,4),View_SkyLightColor(648,4),View_LightMapSkyLightColor(652,4),View_SkyLightSAParameters(672,4),View_SpecularOnlyViewmodeMask(716,1)
// @PackedUB: MobileBasePass(1): MobileBasePass_CulledGridSize(4,4),MobileBasePass_LightGridZParams(8,4),MobileBasePass_Fog_ExponentialFogEnvLightingAndScale(44,4),MobileBasePass_UseCSM(14,1),MobileBasePass_LightGridPixelSizeShift(0,1)
// @PackedUB: Primitive(2): Primitive_ObjectWorldPositionAndRadius(20,4)
// @PackedUB: PrecomputedLightingBuffer(3): PrecomputedLightingBuffer_LightMapScale_0(16,4),PrecomputedLightingBuffer_LightMapAdd_0(24,4)
// @PackedUB: MobileDirectionalLight(4): MobileDirectionalLight_DirectionalLightColor(0,4),MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition(4,4),MobileDirectionalLight_DirectionalLightShadowSize(8,4),MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale(12,4),MobileDirectionalLight_DirectionalLightShadowDistances(16,4),MobileDirectionalLight_DirectionalLightShadowIntensityScale(20,4),MobileDirectionalLight_DirectionalLightScreenToShadow(24,32)
// @PackedUB: MobileMovablePointLight3(5): MobileMovablePointLight3_LightPositionAndInvRadius(4,4),MobileMovablePointLight3_LightColorAndFalloffExponent(8,4),MobileMovablePointLight3_SpotLightDirectionAndSpecularScale(12,4),MobileMovablePointLight3_SpotLightAnglesAndSoftTransitionScaleAndLightShadowType(16,4),MobileMovablePointLight3_LightShadowmapMinMax(20,24),MobileMovablePointLight3_LightShadowWorldToShadowMatrix(44,96),MobileMovablePointLight3_LightIDMask(0,1),MobileMovablePointLight3_bUseDirLightShadowEnhance(1,1)
// @PackedUB: MobileMovablePointLight2(6): MobileMovablePointLight2_LightPositionAndInvRadius(4,4),MobileMovablePointLight2_LightColorAndFalloffExponent(8,4),MobileMovablePointLight2_SpotLightDirectionAndSpecularScale(12,4),MobileMovablePointLight2_SpotLightAnglesAndSoftTransitionScaleAndLightShadowType(16,4),MobileMovablePointLight2_LightShadowmapMinMax(20,24),MobileMovablePointLight2_LightShadowWorldToShadowMatrix(44,96),MobileMovablePointLight2_LightIDMask(0,1),MobileMovablePointLight2_bUseDirLightShadowEnhance(1,1)
// @PackedUB: MobileMovablePointLight1(7): MobileMovablePointLight1_LightPositionAndInvRadius(4,4),MobileMovablePointLight1_LightColorAndFalloffExponent(8,4),MobileMovablePointLight1_SpotLightDirectionAndSpecularScale(12,4),MobileMovablePointLight1_SpotLightAnglesAndSoftTransitionScaleAndLightShadowType(16,4),MobileMovablePointLight1_LightShadowmapMinMax(20,24),MobileMovablePointLight1_LightShadowWorldToShadowMatrix(44,96),MobileMovablePointLight1_LightIDMask(0,1),MobileMovablePointLight1_bUseDirLightShadowEnhance(1,1)
// @PackedUB: MobileMovablePointLight0(8): MobileMovablePointLight0_LightPositionAndInvRadius(4,4),MobileMovablePointLight0_LightColorAndFalloffExponent(8,4),MobileMovablePointLight0_SpotLightDirectionAndSpecularScale(12,4),MobileMovablePointLight0_SpotLightAnglesAndSoftTransitionScaleAndLightShadowType(16,4),MobileMovablePointLight0_LightShadowmapMinMax(20,24),MobileMovablePointLight0_LightShadowWorldToShadowMatrix(44,96),MobileMovablePointLight0_LightIDMask(0,1),MobileMovablePointLight0_bUseDirLightShadowEnhance(1,1)
// @PackedUB: Material(9): Material_VectorExpressions_0(0,4),Material_ScalarExpressions_0(4,4),Material_ScalarExpressions_1(8,4),Material_ScalarExpressions_2(12,4),Material_ScalarExpressions_3(16,4),Material_ScalarExpressions_4(20,4),Material_ScalarExpressions_5(24,4),Material_ScalarExpressions_6(28,4)
// @PackedUBCopies: 0:280-9:h:0:3,0:520-9:h:4:4,0:540-9:h:8:4,0:546-9:h:12:1,0:702-9:h:16:1,0:703-9:h:20:1,0:1028-9:h:24:4,0:1012-9:i:0:1,0:516-9:m:0:4,0:549-9:m:4:1,0:556-9:m:8:3,0:564-9:m:12:28,0:620-9:m:40:36,0:672-9:m:76:4,0:716-9:m:80:1,1:4-1:h:0:8,1:44-1:h:8:4,1:14-1:i:0:1,1:0-1:u:0:1,2:20-8:h:0:4,3:16-7:m:0:4,3:24-7:m:4:4,4:0-2:h:0:56,5:4-6:h:0:136,5:0-6:u:0:1,5:1-6:u:4:1,6:4-5:h:0:136,6:0-5:u:0:1,6:1-5:u:4:1,7:4-4:h:0:136,7:0-4:u:0:1,7:1-4:u:4:1,8:4-3:h:0:136,8:0-3:u:0:1,8:1-3:u:4:1,9:0-0:m:0:32
// @Samplers: LightmapResourceCluster_LightMapTexture(0:1[LightmapResourceCluster_LightMapSampler]),Material_Texture2D_0(1:1[Material_Texture2D_0Sampler]),MobileBasePass_CulledLightDataGrid(2:1),Material_Texture2D_1(3:1[Material_Texture2D_1Sampler]),Material_Texture2D_6(4:1[Material_Texture2D_6Sampler]),Material_Texture2D_2(5:1[Material_Texture2D_2Sampler]),Material_Texture2D_3(6:1[Material_Texture2D_3Sampler]),Material_Texture2D_7(7:1[Material_Texture2D_7Sampler]),View_LocalLightShadows(8:1[View_LocalLightShadowsSampler]),Material_Texture2D_4(9:1[Material_Texture2D_4Sampler]),MobileDirectionalLight_DirectionalLightShadowTexture2(10:1[MobileDirectionalLight_ShadowDepthTextureComparisonSampler]),Material_Texture2D_5(11:1[Material_Texture2D_5Sampler])

//M_AdScreen/FLocalVertexFactory/TMobileBasePassPSFMobileMovableDirectionalLightAndPrtLighingPolicyINT32_MAXHDRLinear64Skylight/1_e588d11d72819386

/*

*/


