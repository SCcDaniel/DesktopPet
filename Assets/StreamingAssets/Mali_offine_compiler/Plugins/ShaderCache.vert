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
uniform vec4 vc0_m[10];
uniform ivec4 vc0_i[10];
uniform highp vec4 vc0_h[27];
uniform vec4 vc2_m[1];
uniform highp vec4 vc2_h[1];
uniform highp vec4 vc3_h[1];
uniform highp vec4 vc1_h[9];
uniform vec4 vc4_m[1];
uniform vec4 vc5_m[7];
uniform uvec4 vu_u[1];
uniform ivec4 vu_i[1];
uniform mediump sampler3D vs0;
uniform mediump sampler3D vs1;
layout(location=0) in highp vec4 in_ATTRIBUTE0;
layout(location=1) in vec3 in_ATTRIBUTE1;
layout(location=2) in vec4 in_ATTRIBUTE2;
layout(location=3) in vec4 in_ATTRIBUTE3;
layout(location=4) in highp vec4 in_ATTRIBUTE4;
layout(location=5) in highp vec4 in_ATTRIBUTE5;
layout(location=8) in highp vec4 in_ATTRIBUTE8;
layout(location=9) in vec4 in_ATTRIBUTE9;
layout(location=10) in vec4 in_ATTRIBUTE10;
layout(location=11) in vec4 in_ATTRIBUTE11;
layout(location=15) in highp vec2 in_ATTRIBUTE15;
layout(location=0) out vec4 var_TEXCOORD10_centroid;
layout(location=1) out vec4 var_TEXCOORD11_centroid;
layout(location=2) out vec4 var_COLOR0;
layout(location=3) out highp vec4 var_TEXCOORD0;
layout(location=4) out highp vec4 var_TEXCOORD1;
layout(location=5) out highp vec4 var_TEXCOORD2;
layout(location=6) out highp vec4 var_TEXCOORD3;
layout(location=7) out vec4 var_TEXCOORD4;
layout(location=8) out vec4 var_TEXCOORD7;
layout(location=9) out highp vec4 var_TEXCOORD8;
layout(location=10) out vec4 var_TEXCOORD14;
void main()
{
	bool b0;
	b0 = bool(vu_u[0].x);
	int i1;
	i1 = vu_i[0].x;
	highp vec3 v2;
	v2.xyz = vc2_h[0].xyz;
	highp vec3 v3;
	v3.xyz = vc0_h[9].xyz;
	highp float f4;
	f4 = vc0_h[8].x;
	int i5;
	i5 = vc0_i[9].x;
	int i6;
	i6 = vc0_i[8].x;
	int i7;
	i7 = vc0_i[7].x;
	int i8;
	i8 = vc0_i[6].x;
	int i9;
	i9 = vc0_i[5].x;
	int i10;
	i10 = vc0_i[4].x;
	int i11;
	i11 = vc0_i[3].x;
	int i12;
	i12 = vc0_i[2].x;
	int i13;
	i13 = vc0_i[1].x;
	int i14;
	i14 = vc0_i[0].x;
	highp vec3 v15;
	v15.xyz = vc0_h[6].xyz;
	highp vec3 v16;
	v16.xyz = vc0_h[5].xyz;
	highp vec3 v17;
	v17.xyz = vc0_h[4].xyz;
	highp vec4 v18;
	highp vec4 v19;
	vec4 v20;
	highp vec4 v21;
	float h22;
	vec3 v23;
	v23.xyz = (cross((cross(in_ATTRIBUTE2.xyz,in_ATTRIBUTE1)*in_ATTRIBUTE2.www),in_ATTRIBUTE2.xyz)*in_ATTRIBUTE2.www);
	mat3 m24;
	mat3 m25;
	m25[0].xyz = in_ATTRIBUTE9.xyz;
	m25[1].xyz = in_ATTRIBUTE10.xyz;
	m25[2].xyz = in_ATTRIBUTE11.xyz;
	m24 = m25;
	m24[0].xyz = normalize(m25[0]);
	m24[1].xyz = normalize(m24[1]);
	m24[2].xyz = normalize(m24[2]);
	vec3 v26;
	vec3 v27;
	v26.xyz = ((v23.zzz*m24[2])+((v23.yyy*m24[1])+(v23.xxx*m24[0])));
	v27.xyz = ((in_ATTRIBUTE2.zzz*m24[2])+((in_ATTRIBUTE2.yyy*m24[1])+(in_ATTRIBUTE2.xxx*m24[0])));
	highp float f28;
	f28 = in_ATTRIBUTE2.w;
	highp float f29;
	f29 = vc2_m[0].w;
	float h30;
	h30 = (f28*f29);
	h22 = h30;
	highp vec4 v31;
	v31.w = 0.000000e+00;
	highp vec3 v32;
	v32.xyz = in_ATTRIBUTE9.xyz;
	v31.xyz = v32;
	highp vec4 v33;
	v33.w = 0.000000e+00;
	highp vec3 v34;
	v34.xyz = in_ATTRIBUTE10.xyz;
	v33.xyz = v34;
	highp vec4 v35;
	v35.w = 0.000000e+00;
	highp vec3 v36;
	v36.xyz = in_ATTRIBUTE11.xyz;
	v35.xyz = v36;
	highp vec4 v37;
	v37.w = 1.000000e+00;
	v37.xyz = ((((in_ATTRIBUTE8.xyz+(v31.xyz*in_ATTRIBUTE0.xxx))+(v33.xyz*in_ATTRIBUTE0.yyy))+(v35.xyz*in_ATTRIBUTE0.zzz))+v15);
	v21.xyzw = v37;
	highp vec2 t38[4];
	t38[0].xy = vec2(0.000000e+00,0.000000e+00);
	t38[1].xy = vec2(0.000000e+00,0.000000e+00);
	t38[2].xy = vec2(0.000000e+00,0.000000e+00);
	t38[3].xy = vec2(0.000000e+00,0.000000e+00);
	highp vec4 v39;
	v39.w = 0.000000e+00;
	highp vec3 v40;
	v40.xyz = in_ATTRIBUTE9.xyz;
	v39.xyz = v40;
	highp vec4 v41;
	v41.w = 0.000000e+00;
	highp vec3 v42;
	v42.xyz = in_ATTRIBUTE10.xyz;
	v41.xyz = v42;
	highp vec4 v43;
	v43.w = 0.000000e+00;
	highp vec3 v44;
	v44.xyz = in_ATTRIBUTE11.xyz;
	v43.xyz = v44;
	t38[0].xy = in_ATTRIBUTE4.xy;
	t38[1].xy = in_ATTRIBUTE4.zw;
	t38[2].xy = in_ATTRIBUTE5.xy;
	t38[(2+1)].xy = in_ATTRIBUTE5.zw;
	highp vec2 v45;
	highp float f46;
	f46 = vc5_m[5].w;
	v45.xy = (t38[0]*vec2(f46));
	highp float f47;
	highp float f48;
	f48 = vc5_m[6].y;
	f47 = (vc0_h[7].x*f48);
	highp vec3 v49;
	highp float f50;
	f50 = vc5_m[6].x;
	v49.x = f50;
	v49.yz = v45;
	highp float f51;
	f51 = (v49.x*1.745329e-02);
	highp vec2 v52;
	v52.xy = (vec2(-5.000000e-01,-5.000000e-01)+v45);
	highp float f53;
	f53 = sin(f51);
	highp float f54;
	f54 = cos(f51);
	highp vec2 v55;
	v55.x = f54;
	v55.y = (f53*-1.000000e+00);
	highp vec2 v56;
	v56.x = f53;
	v56.y = f54;
	highp vec2 v57;
	v57.x = dot(v52,v55);
	v57.y = dot(v52,v56);
	highp vec3 v58;
	highp float f59;
	f59 = vc5_m[6].x;
	v58.x = f59;
	v58.yz = v45;
	highp vec4 v60;
	v60.xyz = v58;
	v60.w = f47;
	highp vec3 v61;
	highp float f62;
	f62 = vc5_m[6].x;
	v61.x = f62;
	v61.yz = v45;
	highp float f63;
	f63 = ((v61.x+3.000000e+01)*1.745329e-02);
	highp vec2 v64;
	v64.xy = (vec2(-5.000000e-01,-5.000000e-01)+v45);
	highp float f65;
	f65 = sin(f63);
	highp float f66;
	f66 = cos(f63);
	highp vec2 v67;
	v67.x = f66;
	v67.y = (f65*-1.000000e+00);
	highp vec2 v68;
	v68.x = f65;
	v68.y = f66;
	highp vec2 v69;
	v69.x = dot(v64,v67);
	v69.y = dot(v64,v68);
	highp vec3 v70;
	highp float f71;
	f71 = vc5_m[6].x;
	v70.x = f71;
	v70.yz = v45;
	highp vec4 v72;
	v72.xyz = v70;
	v72.w = f47;
	highp float f73;
	highp float f74;
	f74 = vc5_m[6].z;
	f73 = (((sin((((v60.w*2.000000e+00)+(2.000000e+00*(vec2(5.000000e-01,5.000000e-01)+v57).x))*6.280000e+00))*2.000000e+00)+(cos((((v72.w*1.500000e+00)+(vec2(5.000000e-01,5.000000e-01)+v69).x)*6.280000e+00))*2.000000e+00))*f74);
	highp vec3 v75;
	highp float f76;
	f76 = vc5_m[6].w;
	highp float f77;
	f77 = in_ATTRIBUTE3.z;
	highp vec3 v78;
	v78.xyz = vc5_m[0].xyz;
	highp vec3 v79;
	v79.xyz = v27;
	v75.xyz = ((vec3(mix((f73*f76),f73,f77))*v78)*v79);
	float h80;
	h80 = abs((vc5_m[6].z+-1.000000e-02));
	highp vec3 v81;
	v81.xyz = ((vc5_m[6].z>=1.000000e-02))?(v75):(vec3(0.000000e+00,0.000000e+00,0.000000e+00));
	highp vec3 v82;
	v82.xyz = ((h80>1.000000e-05))?(v81):(vec3(0.000000e+00,0.000000e+00,0.000000e+00));
	v21.xyz = (v37.xyz+v82);
	highp vec4 v83;
	v83.xyzw = (vc0_h[3]+((vc0_h[2]*v21.zzzz)+((vc0_h[1]*v21.yyyy)+(vc0_h[0]*v21.xxxx))));
	v19.xyzw = v21;
	highp vec3 v84;
	v84.xyz = (v21.xyz+(-v16));
	vec4 v85;
	highp vec3 v86;
	v86.xyz = ((v84+v16)+(-v15));
	bool b87;
	highp float f88;
	highp float f89;
	highp float f90;
	highp vec3 v91;
	float h92;
	float h93;
	h93 = vc1_h[2].w;
	h92 = h93;
	highp float f94;
	f94 = min(v17.z,vc1_h[0].z);
	highp vec3 v95;
	v95.xy = v17.xy;
	v95.z = f94;
	v91.xyz = v84;
	v91.z = (v84.z+(v17.z+(-f94)));
	highp float f96;
	f96 = dot(v91,v91);
	highp float f97;
	f97 = inversesqrt(f96);
	highp float f98;
	f98 = (f96*f97);
	f90 = vc1_h[0].x;
	f89 = f98;
	f88 = v91.z;
	highp float f99;
	f99 = max(0.000000e+00,vc1_h[0].w);
	if ((f99>0.000000e+00))
	{
		highp float f100;
		f100 = (f99*f97);
		highp float f101;
		f101 = (f100*v91.z);
		f89 = ((1.000000e+00+(-f100))*f98);
		f88 = (v91.z+(-f101));
		f90 = (vc1_h[3].x*exp2((-max(-1.270000e+02,(vc1_h[0].y*((v95.z+f101)+(-vc1_h[3].y)))))));
	}
	highp float f102;
	f102 = max(-1.270000e+02,(vc1_h[0].y*f88));
	highp float f103;
	f103 = ((1.000000e+00+(-exp2((-f102))))/f102);
	highp float f104;
	f104 = (6.931472e-01+(-(2.402265e-01*f102)));
	highp float f105;
	f105 = abs(f102);
	highp float f106;
	f106 = ((f105>1.000000e-02))?(f103):(f104);
	vec3 v107;
	vec3 v108;
	v108.xyz = vc1_h[2].xyz;
	v107.xyz = v108;
	float h109;
	highp float f110;
	f110 = h92;
	float h111;
	h111 = max(clamp(exp2((-((f90*f106)*f89))),0.000000e+00,1.000000e+00),f110);
	h109 = h111;
	b87 = ((vc1_h[3].w>0.000000e+00)&&(f98>vc1_h[3].w));
	float h112;
	h112 = (b87)?(1.000000e+00):(h109);
	vec3 v113;
	v113.xyz = (b87)?(vec3(0.000000e+00,0.000000e+00,0.000000e+00)):(vec3(0.000000e+00,0.000000e+00,0.000000e+00));
	vec3 v114;
	v114.xyz = ((v107*vec3((1.000000e+00+(-h112))))+v113);
	vec4 v115;
	v115.xyz = v114;
	v115.w = h112;
	v85.xyzw = v115;
	highp float f116;
	f116 = length((v86+(-v17)));
	vec4 v117;
	v117.xyzw = v115;
	highp float f118;
	f118 = (1.000000e+00+(-v115.w));
	highp vec3 v119;
	v119.xyz = v114;
	vec3 v120;
	v120.xyz = mix(v119,((vc1_h[5].xyz*vec3(f118))*vc1_h[1].zzz),vec3((clamp(pow((f116/vc1_h[4].x),vc1_h[1].y),0.000000e+00,1.000000e+00)*vc1_h[1].z)));
	v117.xyz = v120;
	v85.xyz = v117.xyz;
	float h121;
	h121 = vc1_h[4].y;
	v85.xyz = (v85.xyz*vec3(h121));
	highp vec3 v122;
	v122.xyz = normalize((v86+(-v17)));
	highp float f123;
	f123 = (1.000000e+00+(-v115.w));
	highp vec3 v124;
	v124.xyz = v85.xyz;
	vec3 v125;
	v125.xyz = mix(v124,vc1_h[7].xyz,vec3((((clamp(smoothstep((1.000000e+00+(-vc1_h[6].w)),((1.000000e+00+(-vc1_h[6].w))+vc1_h[6].y),(((dot((v122+(-(vec3(0.000000e+00,0.000000e+00,1.000000e+00)*vec3(dot(v122,vec3(0.000000e+00,0.000000e+00,1.000000e+00)))))),(vc1_h[8].xyz+(-(vec3(0.000000e+00,0.000000e+00,1.000000e+00)*vec3(dot(vc1_h[8].xyz,vec3(0.000000e+00,0.000000e+00,1.000000e+00)))))))*(1.000000e+00+(-clamp(dot(v122,vec3(0.000000e+00,0.000000e+00,1.000000e+00)),0.000000e+00,1.000000e+00))))+1.000000e+00)*5.000000e-01)),0.000000e+00,1.000000e+00)*f123)*clamp((f116/vc1_h[6].z),0.000000e+00,1.000000e+00))*vc1_h[6].x)));
	v85.xyz = v125;
	highp vec2 v126;
	highp vec2 v127;
	highp vec2 v128;
	highp vec2 v129;
	highp vec2 v130;
	highp vec2 v131;
	v129.xy = v126;
	v130.xy = v127;
	v131.xy = v128;
	highp vec4 v132;
	highp vec4 v133;
	v133.xyzw = vc4_m[0];
	v132.xyzw = v133;
	highp float f134;
	highp float f135;
	f135 = vc5_m[1].x;
	f134 = f135;
	highp float f136;
	highp float f137;
	f137 = vc5_m[1].y;
	f136 = f137;
	highp vec3 v138;
	highp vec3 v139;
	v139.xyz = v27;
	v138.xyz = v139;
	highp float f140;
	highp float f141;
	f141 = vc5_m[1].z;
	f140 = f141;
	highp float f142;
	highp float f143;
	f143 = vc5_m[1].w;
	f142 = f143;
	highp float f144;
	highp float f145;
	f145 = vc5_m[2].x;
	f144 = f145;
	highp float f146;
	highp float f147;
	f147 = vc5_m[2].y;
	f146 = f147;
	highp float f148;
	highp float f149;
	f149 = vc5_m[2].z;
	f148 = f149;
	highp float f150;
	highp float f151;
	f151 = vc5_m[2].w;
	f150 = f151;
	highp float f152;
	highp float f153;
	f153 = vc5_m[3].x;
	f152 = f153;
	highp float f154;
	highp float f155;
	f155 = vc5_m[3].y;
	f154 = f155;
	highp float f156;
	highp float f157;
	f157 = vc5_m[3].z;
	f156 = f157;
	highp float f158;
	highp float f159;
	f159 = vc5_m[3].w;
	f158 = f159;
	highp float f160;
	highp float f161;
	f161 = vc5_m[4].x;
	f160 = f161;
	highp vec4 v162;
	v162.xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00);
	vec3 v163;
	vec3 v164;
	vec3 v165;
	v165.xyz = in_ATTRIBUTE0.xyz;
	v164.xyz = v165;
	v163.xyz = v164;
	highp vec3 v166;
	v166.x = dot(v39.xyz,v138);
	v166.y = dot(v41.xyz,v138);
	v166.z = dot(v43.xyz,v138);
	if (((f160>=5.000000e-01)&&(v132.z<5.000000e-01)))
	{
		highp float f167;
		f167 = abs(v166.x);
		highp float f168;
		f168 = abs(v166.y);
		highp float f169;
		f169 = abs(v166.z);
		if ((f150>=5.000000e-01))
		{
			float h170;
			float h171;
			h171 = sin(f154);
			h170 = h171;
			float h172;
			float h173;
			h173 = cos(f154);
			h172 = h173;
			float h174;
			float h175;
			h175 = sin(f156);
			h174 = h175;
			float h176;
			float h177;
			h177 = cos(f156);
			h176 = h177;
			float h178;
			float h179;
			h179 = sin(f158);
			h178 = h179;
			float h180;
			float h181;
			h181 = cos(f158);
			h180 = h181;
			highp vec3 v182;
			highp float f183;
			f183 = ((v164.x*h172)+(-(v164.y*h170)));
			v182.x = f183;
			highp float f184;
			f184 = ((v164.x*h170)+(v164.y*h172));
			v182.y = f184;
			highp float f185;
			f185 = v164.z;
			v182.z = f185;
			vec3 v186;
			vec3 v187;
			v187.xyz = v182;
			v186.xyz = v187;
			highp vec3 v188;
			highp float f189;
			f189 = v186.x;
			v188.x = f189;
			highp float f190;
			f190 = ((v186.y*h176)+(-(v186.z*h174)));
			v188.y = f190;
			highp float f191;
			f191 = ((v186.y*h174)+(v186.z*h176));
			v188.z = f191;
			vec3 v192;
			vec3 v193;
			v193.xyz = v188;
			v192.xyz = v193;
			highp vec3 v194;
			highp float f195;
			f195 = ((v192.z*h178)+(v192.x*h180));
			v194.x = f195;
			highp float f196;
			f196 = v192.y;
			v194.y = f196;
			highp float f197;
			f197 = ((v192.z*h180)+(-(v192.x*h178)));
			v194.z = f197;
			vec3 v198;
			vec3 v199;
			v199.xyz = v194;
			v198.xyz = v199;
			v163.xyz = v198;
			if ((f152>=5.000000e-01))
			{
				float h200;
				vec2 v201;
				highp float f202;
				f202 = v198.y;
				float h203;
				h203 = (((f202+(-v2.y))+(-f136))/(f134/f142));
				v163.y = h203;
				if ((f167>f168))
				{
					if ((f167>f169))
					{
						vec2 v204;
						highp float f205;
						f205 = v163.z;
						float h206;
						h206 = (f205+f140);
						v204.x = h206;
						v204.y = v163.y;
						highp vec2 v207;
						v207.xy = v204;
						vec2 v208;
						v208.xy = (v207/vec2((-abs(f142))));
						v201.xy = v208;
					}
					else
					{
						vec2 v209;
						highp float f210;
						f210 = v163.x;
						float h211;
						h211 = (f210+(-f140));
						v209.x = h211;
						v209.y = v163.y;
						highp vec2 v212;
						v212.xy = v209;
						vec2 v213;
						v213.xy = (v212/vec2((-abs(f142))));
						v201.xy = v213;
					}
				}
				else
				{
					if ((f168>f169))
					{
						vec2 v214;
						v214.x = v163.x;
						v214.y = v163.z;
						highp vec2 v215;
						v215.xy = v214;
						vec2 v216;
						v216.xy = (v215/vec2((-abs(f144))));
						v201.xy = v216;
					}
					else
					{
						vec2 v217;
						highp float f218;
						f218 = v163.x;
						float h219;
						h219 = (f218+(-f140));
						v217.x = h219;
						v217.y = v163.y;
						highp vec2 v220;
						v220.xy = v217;
						vec2 v221;
						v221.xy = (v220/vec2((-abs(f142))));
						v201.xy = v221;
					}
				}
				if ((f167<f168))
				{
					if ((f167<f169))
					{
						float h222;
						h222 = abs((f168+(-f169)));
						h200 = h222;
					}
					else
					{
						float h223;
						h223 = abs((f168+(-f167)));
						h200 = h223;
					}
				}
				else
				{
					if ((f168<f169))
					{
						float h224;
						h224 = abs((f169+(-f167)));
						h200 = h224;
					}
					else
					{
						float h225;
						h225 = abs((f168+(-f167)));
						h200 = h225;
					}
				}
				vec4 v226;
				v226.xy = v201;
				highp float f227;
				f227 = h200;
				float h228;
				h228 = clamp((f227/f146),0.000000e+00,1.000000e+00);
				v226.z = h228;
				float h229;
				h229 = f148;
				v226.w = h229;
				highp vec4 v230;
				v230.xyzw = v226;
				v162.xyzw = v230;
			}
			else
			{
				float h231;
				vec2 v232;
				float h233;
				float h234;
				h234 = v2.x;
				v163.x = (v163.x+(-h234));
				highp float f235;
				f235 = v163.x;
				highp float f236;
				f236 = v163.x;
				if (((f235>f134)||(f236<f136)))
				{
					h233 = 0.000000e+00;
				}
				else
				{
					float h237;
					h237 = f148;
					h233 = h237;
				}
				highp float f238;
				f238 = v163.x;
				float h239;
				h239 = ((f238+(-f136))/(f134/f142));
				v163.x = h239;
				if ((f167>f168))
				{
					if ((f167>f169))
					{
						vec2 v240;
						v240.x = v163.z;
						v240.y = v163.y;
						highp vec2 v241;
						v241.xy = v240;
						vec2 v242;
						v242.xy = (v241/vec2((-abs(f144))));
						v232.xy = v242;
					}
					else
					{
						vec2 v243;
						highp float f244;
						f244 = v163.y;
						float h245;
						h245 = (f244+(-f140));
						v243.x = h245;
						v243.y = v163.x;
						highp vec2 v246;
						v246.xy = v243;
						vec2 v247;
						v247.xy = (v246/vec2((-abs(f142))));
						v232.xy = v247;
					}
				}
				else
				{
					if ((f168>f169))
					{
						vec2 v248;
						highp float f249;
						f249 = v163.z;
						float h250;
						h250 = (f249+f140);
						v248.x = h250;
						v248.y = v163.x;
						highp vec2 v251;
						v251.xy = v248;
						vec2 v252;
						v252.xy = (v251/vec2((-abs(f142))));
						v232.xy = v252;
					}
					else
					{
						vec2 v253;
						highp float f254;
						f254 = v163.y;
						float h255;
						h255 = (f254+(-f140));
						v253.x = h255;
						v253.y = v163.x;
						highp vec2 v256;
						v256.xy = v253;
						vec2 v257;
						v257.xy = (v256/vec2((-abs(f142))));
						v232.xy = v257;
					}
				}
				if ((f167<f168))
				{
					if ((f167<f169))
					{
						float h258;
						h258 = abs((f168+(-f169)));
						h231 = h258;
					}
					else
					{
						float h259;
						h259 = abs((f168+(-f167)));
						h231 = h259;
					}
				}
				else
				{
					if ((f168<f169))
					{
						float h260;
						h260 = abs((f169+(-f167)));
						h231 = h260;
					}
					else
					{
						float h261;
						h261 = abs((f168+(-f167)));
						h231 = h261;
					}
				}
				vec4 v262;
				v262.xy = v232;
				highp float f263;
				f263 = h231;
				float h264;
				h264 = clamp((f263/f146),0.000000e+00,1.000000e+00);
				v262.z = h264;
				v262.w = h233;
				highp vec4 v265;
				v265.xyzw = v262;
				v162.xyzw = v265;
			}
		}
		else
		{
			float h266;
			vec2 v267;
			float h268;
			highp float f269;
			f269 = v163.z;
			highp float f270;
			f270 = v163.z;
			if (((f269>f134)||(f270<f136)))
			{
				h268 = 0.000000e+00;
			}
			else
			{
				float h271;
				h271 = f148;
				h268 = h271;
			}
			highp float f272;
			f272 = v163.z;
			float h273;
			h273 = ((f272+(-f136))/(f134/f142));
			v163.z = h273;
			if ((f167>f168))
			{
				if ((f167>f169))
				{
					vec2 v274;
					highp float f275;
					f275 = v163.y;
					float h276;
					h276 = (f275+(-f140));
					v274.x = h276;
					v274.y = v163.z;
					highp vec2 v277;
					v277.xy = v274;
					vec2 v278;
					v278.xy = (v277/vec2((-abs(f142))));
					v267.xy = v278;
				}
				else
				{
					vec2 v279;
					v279.x = v163.x;
					v279.y = v163.y;
					highp vec2 v280;
					v280.xy = v279;
					vec2 v281;
					v281.xy = (v280/vec2((-abs(f144))));
					v267.xy = v281;
				}
			}
			else
			{
				if ((f168>f169))
				{
					vec2 v282;
					highp float f283;
					f283 = v163.x;
					float h284;
					h284 = (f283+f140);
					v282.x = h284;
					v282.y = v163.z;
					highp vec2 v285;
					v285.xy = v282;
					vec2 v286;
					v286.xy = (v285/vec2((-abs(f142))));
					v267.xy = v286;
				}
				else
				{
					vec2 v287;
					v287.x = v163.x;
					v287.y = v163.y;
					highp vec2 v288;
					v288.xy = v287;
					vec2 v289;
					v289.xy = (v288/vec2((-abs(f144))));
					v267.xy = v289;
				}
			}
			if ((f167<f168))
			{
				if ((f167<f169))
				{
					float h290;
					h290 = abs((f168+(-f169)));
					h266 = h290;
				}
				else
				{
					float h291;
					h291 = abs((f168+(-f167)));
					h266 = h291;
				}
			}
			else
			{
				if ((f168<f169))
				{
					float h292;
					h292 = abs((f169+(-f167)));
					h266 = h292;
				}
				else
				{
					float h293;
					h293 = abs((f168+(-f167)));
					h266 = h293;
				}
			}
			vec4 v294;
			v294.xy = v267;
			highp float f295;
			f295 = h266;
			float h296;
			h296 = clamp((f295/f146),0.000000e+00,1.000000e+00);
			v294.z = h296;
			v294.w = h268;
			highp vec4 v297;
			v297.xyzw = v294;
			v162.xyzw = v297;
		}
	}
	else
	{
		v162.xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00);
	}
	v129.x = v162.x;
	highp vec4 v298;
	highp vec4 v299;
	v299.xyzw = vc4_m[0];
	v298.xyzw = v299;
	highp float f300;
	highp float f301;
	f301 = vc5_m[1].x;
	f300 = f301;
	highp float f302;
	highp float f303;
	f303 = vc5_m[1].y;
	f302 = f303;
	highp vec3 v304;
	highp vec3 v305;
	v305.xyz = v27;
	v304.xyz = v305;
	highp float f306;
	highp float f307;
	f307 = vc5_m[1].z;
	f306 = f307;
	highp float f308;
	highp float f309;
	f309 = vc5_m[1].w;
	f308 = f309;
	highp float f310;
	highp float f311;
	f311 = vc5_m[2].x;
	f310 = f311;
	highp float f312;
	highp float f313;
	f313 = vc5_m[2].y;
	f312 = f313;
	highp float f314;
	highp float f315;
	f315 = vc5_m[2].z;
	f314 = f315;
	highp float f316;
	highp float f317;
	f317 = vc5_m[2].w;
	f316 = f317;
	highp float f318;
	highp float f319;
	f319 = vc5_m[3].x;
	f318 = f319;
	highp float f320;
	highp float f321;
	f321 = vc5_m[3].y;
	f320 = f321;
	highp float f322;
	highp float f323;
	f323 = vc5_m[3].z;
	f322 = f323;
	highp float f324;
	highp float f325;
	f325 = vc5_m[3].w;
	f324 = f325;
	highp float f326;
	highp float f327;
	f327 = vc5_m[4].x;
	f326 = f327;
	highp vec4 v328;
	v328.xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00);
	vec3 v329;
	vec3 v330;
	vec3 v331;
	v331.xyz = in_ATTRIBUTE0.xyz;
	v330.xyz = v331;
	v329.xyz = v330;
	highp vec3 v332;
	v332.x = dot(v39.xyz,v304);
	v332.y = dot(v41.xyz,v304);
	v332.z = dot(v43.xyz,v304);
	if (((f326>=5.000000e-01)&&(v298.z<5.000000e-01)))
	{
		highp float f333;
		f333 = abs(v332.x);
		highp float f334;
		f334 = abs(v332.y);
		highp float f335;
		f335 = abs(v332.z);
		if ((f316>=5.000000e-01))
		{
			float h336;
			float h337;
			h337 = sin(f320);
			h336 = h337;
			float h338;
			float h339;
			h339 = cos(f320);
			h338 = h339;
			float h340;
			float h341;
			h341 = sin(f322);
			h340 = h341;
			float h342;
			float h343;
			h343 = cos(f322);
			h342 = h343;
			float h344;
			float h345;
			h345 = sin(f324);
			h344 = h345;
			float h346;
			float h347;
			h347 = cos(f324);
			h346 = h347;
			highp vec3 v348;
			highp float f349;
			f349 = ((v330.x*h338)+(-(v330.y*h336)));
			v348.x = f349;
			highp float f350;
			f350 = ((v330.x*h336)+(v330.y*h338));
			v348.y = f350;
			highp float f351;
			f351 = v330.z;
			v348.z = f351;
			vec3 v352;
			vec3 v353;
			v353.xyz = v348;
			v352.xyz = v353;
			highp vec3 v354;
			highp float f355;
			f355 = v352.x;
			v354.x = f355;
			highp float f356;
			f356 = ((v352.y*h342)+(-(v352.z*h340)));
			v354.y = f356;
			highp float f357;
			f357 = ((v352.y*h340)+(v352.z*h342));
			v354.z = f357;
			vec3 v358;
			vec3 v359;
			v359.xyz = v354;
			v358.xyz = v359;
			highp vec3 v360;
			highp float f361;
			f361 = ((v358.z*h344)+(v358.x*h346));
			v360.x = f361;
			highp float f362;
			f362 = v358.y;
			v360.y = f362;
			highp float f363;
			f363 = ((v358.z*h346)+(-(v358.x*h344)));
			v360.z = f363;
			vec3 v364;
			vec3 v365;
			v365.xyz = v360;
			v364.xyz = v365;
			v329.xyz = v364;
			if ((f318>=5.000000e-01))
			{
				float h366;
				vec2 v367;
				highp float f368;
				f368 = v364.y;
				float h369;
				h369 = (((f368+(-v2.y))+(-f302))/(f300/f308));
				v329.y = h369;
				if ((f333>f334))
				{
					if ((f333>f335))
					{
						vec2 v370;
						highp float f371;
						f371 = v329.z;
						float h372;
						h372 = (f371+f306);
						v370.x = h372;
						v370.y = v329.y;
						highp vec2 v373;
						v373.xy = v370;
						vec2 v374;
						v374.xy = (v373/vec2((-abs(f308))));
						v367.xy = v374;
					}
					else
					{
						vec2 v375;
						highp float f376;
						f376 = v329.x;
						float h377;
						h377 = (f376+(-f306));
						v375.x = h377;
						v375.y = v329.y;
						highp vec2 v378;
						v378.xy = v375;
						vec2 v379;
						v379.xy = (v378/vec2((-abs(f308))));
						v367.xy = v379;
					}
				}
				else
				{
					if ((f334>f335))
					{
						vec2 v380;
						v380.x = v329.x;
						v380.y = v329.z;
						highp vec2 v381;
						v381.xy = v380;
						vec2 v382;
						v382.xy = (v381/vec2((-abs(f310))));
						v367.xy = v382;
					}
					else
					{
						vec2 v383;
						highp float f384;
						f384 = v329.x;
						float h385;
						h385 = (f384+(-f306));
						v383.x = h385;
						v383.y = v329.y;
						highp vec2 v386;
						v386.xy = v383;
						vec2 v387;
						v387.xy = (v386/vec2((-abs(f308))));
						v367.xy = v387;
					}
				}
				if ((f333<f334))
				{
					if ((f333<f335))
					{
						float h388;
						h388 = abs((f334+(-f335)));
						h366 = h388;
					}
					else
					{
						float h389;
						h389 = abs((f334+(-f333)));
						h366 = h389;
					}
				}
				else
				{
					if ((f334<f335))
					{
						float h390;
						h390 = abs((f335+(-f333)));
						h366 = h390;
					}
					else
					{
						float h391;
						h391 = abs((f334+(-f333)));
						h366 = h391;
					}
				}
				vec4 v392;
				v392.xy = v367;
				highp float f393;
				f393 = h366;
				float h394;
				h394 = clamp((f393/f312),0.000000e+00,1.000000e+00);
				v392.z = h394;
				float h395;
				h395 = f314;
				v392.w = h395;
				highp vec4 v396;
				v396.xyzw = v392;
				v328.xyzw = v396;
			}
			else
			{
				float h397;
				vec2 v398;
				float h399;
				float h400;
				h400 = v2.x;
				v329.x = (v329.x+(-h400));
				highp float f401;
				f401 = v329.x;
				highp float f402;
				f402 = v329.x;
				if (((f401>f300)||(f402<f302)))
				{
					h399 = 0.000000e+00;
				}
				else
				{
					float h403;
					h403 = f314;
					h399 = h403;
				}
				highp float f404;
				f404 = v329.x;
				float h405;
				h405 = ((f404+(-f302))/(f300/f308));
				v329.x = h405;
				if ((f333>f334))
				{
					if ((f333>f335))
					{
						vec2 v406;
						v406.x = v329.z;
						v406.y = v329.y;
						highp vec2 v407;
						v407.xy = v406;
						vec2 v408;
						v408.xy = (v407/vec2((-abs(f310))));
						v398.xy = v408;
					}
					else
					{
						vec2 v409;
						highp float f410;
						f410 = v329.y;
						float h411;
						h411 = (f410+(-f306));
						v409.x = h411;
						v409.y = v329.x;
						highp vec2 v412;
						v412.xy = v409;
						vec2 v413;
						v413.xy = (v412/vec2((-abs(f308))));
						v398.xy = v413;
					}
				}
				else
				{
					if ((f334>f335))
					{
						vec2 v414;
						highp float f415;
						f415 = v329.z;
						float h416;
						h416 = (f415+f306);
						v414.x = h416;
						v414.y = v329.x;
						highp vec2 v417;
						v417.xy = v414;
						vec2 v418;
						v418.xy = (v417/vec2((-abs(f308))));
						v398.xy = v418;
					}
					else
					{
						vec2 v419;
						highp float f420;
						f420 = v329.y;
						float h421;
						h421 = (f420+(-f306));
						v419.x = h421;
						v419.y = v329.x;
						highp vec2 v422;
						v422.xy = v419;
						vec2 v423;
						v423.xy = (v422/vec2((-abs(f308))));
						v398.xy = v423;
					}
				}
				if ((f333<f334))
				{
					if ((f333<f335))
					{
						float h424;
						h424 = abs((f334+(-f335)));
						h397 = h424;
					}
					else
					{
						float h425;
						h425 = abs((f334+(-f333)));
						h397 = h425;
					}
				}
				else
				{
					if ((f334<f335))
					{
						float h426;
						h426 = abs((f335+(-f333)));
						h397 = h426;
					}
					else
					{
						float h427;
						h427 = abs((f334+(-f333)));
						h397 = h427;
					}
				}
				vec4 v428;
				v428.xy = v398;
				highp float f429;
				f429 = h397;
				float h430;
				h430 = clamp((f429/f312),0.000000e+00,1.000000e+00);
				v428.z = h430;
				v428.w = h399;
				highp vec4 v431;
				v431.xyzw = v428;
				v328.xyzw = v431;
			}
		}
		else
		{
			float h432;
			vec2 v433;
			float h434;
			highp float f435;
			f435 = v329.z;
			highp float f436;
			f436 = v329.z;
			if (((f435>f300)||(f436<f302)))
			{
				h434 = 0.000000e+00;
			}
			else
			{
				float h437;
				h437 = f314;
				h434 = h437;
			}
			highp float f438;
			f438 = v329.z;
			float h439;
			h439 = ((f438+(-f302))/(f300/f308));
			v329.z = h439;
			if ((f333>f334))
			{
				if ((f333>f335))
				{
					vec2 v440;
					highp float f441;
					f441 = v329.y;
					float h442;
					h442 = (f441+(-f306));
					v440.x = h442;
					v440.y = v329.z;
					highp vec2 v443;
					v443.xy = v440;
					vec2 v444;
					v444.xy = (v443/vec2((-abs(f308))));
					v433.xy = v444;
				}
				else
				{
					vec2 v445;
					v445.x = v329.x;
					v445.y = v329.y;
					highp vec2 v446;
					v446.xy = v445;
					vec2 v447;
					v447.xy = (v446/vec2((-abs(f310))));
					v433.xy = v447;
				}
			}
			else
			{
				if ((f334>f335))
				{
					vec2 v448;
					highp float f449;
					f449 = v329.x;
					float h450;
					h450 = (f449+f306);
					v448.x = h450;
					v448.y = v329.z;
					highp vec2 v451;
					v451.xy = v448;
					vec2 v452;
					v452.xy = (v451/vec2((-abs(f308))));
					v433.xy = v452;
				}
				else
				{
					vec2 v453;
					v453.x = v329.x;
					v453.y = v329.y;
					highp vec2 v454;
					v454.xy = v453;
					vec2 v455;
					v455.xy = (v454/vec2((-abs(f310))));
					v433.xy = v455;
				}
			}
			if ((f333<f334))
			{
				if ((f333<f335))
				{
					float h456;
					h456 = abs((f334+(-f335)));
					h432 = h456;
				}
				else
				{
					float h457;
					h457 = abs((f334+(-f333)));
					h432 = h457;
				}
			}
			else
			{
				if ((f334<f335))
				{
					float h458;
					h458 = abs((f335+(-f333)));
					h432 = h458;
				}
				else
				{
					float h459;
					h459 = abs((f334+(-f333)));
					h432 = h459;
				}
			}
			vec4 v460;
			v460.xy = v433;
			highp float f461;
			f461 = h432;
			float h462;
			h462 = clamp((f461/f312),0.000000e+00,1.000000e+00);
			v460.z = h462;
			v460.w = h434;
			highp vec4 v463;
			v463.xyzw = v460;
			v328.xyzw = v463;
		}
	}
	else
	{
		v328.xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00);
	}
	v129.y = v328.y;
	highp vec4 v464;
	highp vec4 v465;
	v465.xyzw = vc4_m[0];
	v464.xyzw = v465;
	highp float f466;
	highp float f467;
	f467 = vc5_m[1].x;
	f466 = f467;
	highp float f468;
	highp float f469;
	f469 = vc5_m[1].y;
	f468 = f469;
	highp vec3 v470;
	highp vec3 v471;
	v471.xyz = v27;
	v470.xyz = v471;
	highp float f472;
	highp float f473;
	f473 = vc5_m[1].z;
	f472 = f473;
	highp float f474;
	highp float f475;
	f475 = vc5_m[1].w;
	f474 = f475;
	highp float f476;
	highp float f477;
	f477 = vc5_m[2].x;
	f476 = f477;
	highp float f478;
	highp float f479;
	f479 = vc5_m[2].y;
	f478 = f479;
	highp float f480;
	highp float f481;
	f481 = vc5_m[2].z;
	f480 = f481;
	highp float f482;
	highp float f483;
	f483 = vc5_m[2].w;
	f482 = f483;
	highp float f484;
	highp float f485;
	f485 = vc5_m[3].x;
	f484 = f485;
	highp float f486;
	highp float f487;
	f487 = vc5_m[3].y;
	f486 = f487;
	highp float f488;
	highp float f489;
	f489 = vc5_m[3].z;
	f488 = f489;
	highp float f490;
	highp float f491;
	f491 = vc5_m[3].w;
	f490 = f491;
	highp float f492;
	highp float f493;
	f493 = vc5_m[4].x;
	f492 = f493;
	highp vec4 v494;
	v494.xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00);
	vec3 v495;
	vec3 v496;
	vec3 v497;
	v497.xyz = in_ATTRIBUTE0.xyz;
	v496.xyz = v497;
	v495.xyz = v496;
	highp vec3 v498;
	v498.x = dot(v39.xyz,v470);
	v498.y = dot(v41.xyz,v470);
	v498.z = dot(v43.xyz,v470);
	if (((f492>=5.000000e-01)&&(v464.z<5.000000e-01)))
	{
		highp float f499;
		f499 = abs(v498.x);
		highp float f500;
		f500 = abs(v498.y);
		highp float f501;
		f501 = abs(v498.z);
		if ((f482>=5.000000e-01))
		{
			float h502;
			float h503;
			h503 = sin(f486);
			h502 = h503;
			float h504;
			float h505;
			h505 = cos(f486);
			h504 = h505;
			float h506;
			float h507;
			h507 = sin(f488);
			h506 = h507;
			float h508;
			float h509;
			h509 = cos(f488);
			h508 = h509;
			float h510;
			float h511;
			h511 = sin(f490);
			h510 = h511;
			float h512;
			float h513;
			h513 = cos(f490);
			h512 = h513;
			highp vec3 v514;
			highp float f515;
			f515 = ((v496.x*h504)+(-(v496.y*h502)));
			v514.x = f515;
			highp float f516;
			f516 = ((v496.x*h502)+(v496.y*h504));
			v514.y = f516;
			highp float f517;
			f517 = v496.z;
			v514.z = f517;
			vec3 v518;
			vec3 v519;
			v519.xyz = v514;
			v518.xyz = v519;
			highp vec3 v520;
			highp float f521;
			f521 = v518.x;
			v520.x = f521;
			highp float f522;
			f522 = ((v518.y*h508)+(-(v518.z*h506)));
			v520.y = f522;
			highp float f523;
			f523 = ((v518.y*h506)+(v518.z*h508));
			v520.z = f523;
			vec3 v524;
			vec3 v525;
			v525.xyz = v520;
			v524.xyz = v525;
			highp vec3 v526;
			highp float f527;
			f527 = ((v524.z*h510)+(v524.x*h512));
			v526.x = f527;
			highp float f528;
			f528 = v524.y;
			v526.y = f528;
			highp float f529;
			f529 = ((v524.z*h512)+(-(v524.x*h510)));
			v526.z = f529;
			vec3 v530;
			vec3 v531;
			v531.xyz = v526;
			v530.xyz = v531;
			v495.xyz = v530;
			if ((f484>=5.000000e-01))
			{
				float h532;
				vec2 v533;
				highp float f534;
				f534 = v530.y;
				float h535;
				h535 = (((f534+(-v2.y))+(-f468))/(f466/f474));
				v495.y = h535;
				if ((f499>f500))
				{
					if ((f499>f501))
					{
						vec2 v536;
						highp float f537;
						f537 = v495.z;
						float h538;
						h538 = (f537+f472);
						v536.x = h538;
						v536.y = v495.y;
						highp vec2 v539;
						v539.xy = v536;
						vec2 v540;
						v540.xy = (v539/vec2((-abs(f474))));
						v533.xy = v540;
					}
					else
					{
						vec2 v541;
						highp float f542;
						f542 = v495.x;
						float h543;
						h543 = (f542+(-f472));
						v541.x = h543;
						v541.y = v495.y;
						highp vec2 v544;
						v544.xy = v541;
						vec2 v545;
						v545.xy = (v544/vec2((-abs(f474))));
						v533.xy = v545;
					}
				}
				else
				{
					if ((f500>f501))
					{
						vec2 v546;
						v546.x = v495.x;
						v546.y = v495.z;
						highp vec2 v547;
						v547.xy = v546;
						vec2 v548;
						v548.xy = (v547/vec2((-abs(f476))));
						v533.xy = v548;
					}
					else
					{
						vec2 v549;
						highp float f550;
						f550 = v495.x;
						float h551;
						h551 = (f550+(-f472));
						v549.x = h551;
						v549.y = v495.y;
						highp vec2 v552;
						v552.xy = v549;
						vec2 v553;
						v553.xy = (v552/vec2((-abs(f474))));
						v533.xy = v553;
					}
				}
				if ((f499<f500))
				{
					if ((f499<f501))
					{
						float h554;
						h554 = abs((f500+(-f501)));
						h532 = h554;
					}
					else
					{
						float h555;
						h555 = abs((f500+(-f499)));
						h532 = h555;
					}
				}
				else
				{
					if ((f500<f501))
					{
						float h556;
						h556 = abs((f501+(-f499)));
						h532 = h556;
					}
					else
					{
						float h557;
						h557 = abs((f500+(-f499)));
						h532 = h557;
					}
				}
				vec4 v558;
				v558.xy = v533;
				highp float f559;
				f559 = h532;
				float h560;
				h560 = clamp((f559/f478),0.000000e+00,1.000000e+00);
				v558.z = h560;
				float h561;
				h561 = f480;
				v558.w = h561;
				highp vec4 v562;
				v562.xyzw = v558;
				v494.xyzw = v562;
			}
			else
			{
				float h563;
				vec2 v564;
				float h565;
				float h566;
				h566 = v2.x;
				v495.x = (v495.x+(-h566));
				highp float f567;
				f567 = v495.x;
				highp float f568;
				f568 = v495.x;
				if (((f567>f466)||(f568<f468)))
				{
					h565 = 0.000000e+00;
				}
				else
				{
					float h569;
					h569 = f480;
					h565 = h569;
				}
				highp float f570;
				f570 = v495.x;
				float h571;
				h571 = ((f570+(-f468))/(f466/f474));
				v495.x = h571;
				if ((f499>f500))
				{
					if ((f499>f501))
					{
						vec2 v572;
						v572.x = v495.z;
						v572.y = v495.y;
						highp vec2 v573;
						v573.xy = v572;
						vec2 v574;
						v574.xy = (v573/vec2((-abs(f476))));
						v564.xy = v574;
					}
					else
					{
						vec2 v575;
						highp float f576;
						f576 = v495.y;
						float h577;
						h577 = (f576+(-f472));
						v575.x = h577;
						v575.y = v495.x;
						highp vec2 v578;
						v578.xy = v575;
						vec2 v579;
						v579.xy = (v578/vec2((-abs(f474))));
						v564.xy = v579;
					}
				}
				else
				{
					if ((f500>f501))
					{
						vec2 v580;
						highp float f581;
						f581 = v495.z;
						float h582;
						h582 = (f581+f472);
						v580.x = h582;
						v580.y = v495.x;
						highp vec2 v583;
						v583.xy = v580;
						vec2 v584;
						v584.xy = (v583/vec2((-abs(f474))));
						v564.xy = v584;
					}
					else
					{
						vec2 v585;
						highp float f586;
						f586 = v495.y;
						float h587;
						h587 = (f586+(-f472));
						v585.x = h587;
						v585.y = v495.x;
						highp vec2 v588;
						v588.xy = v585;
						vec2 v589;
						v589.xy = (v588/vec2((-abs(f474))));
						v564.xy = v589;
					}
				}
				if ((f499<f500))
				{
					if ((f499<f501))
					{
						float h590;
						h590 = abs((f500+(-f501)));
						h563 = h590;
					}
					else
					{
						float h591;
						h591 = abs((f500+(-f499)));
						h563 = h591;
					}
				}
				else
				{
					if ((f500<f501))
					{
						float h592;
						h592 = abs((f501+(-f499)));
						h563 = h592;
					}
					else
					{
						float h593;
						h593 = abs((f500+(-f499)));
						h563 = h593;
					}
				}
				vec4 v594;
				v594.xy = v564;
				highp float f595;
				f595 = h563;
				float h596;
				h596 = clamp((f595/f478),0.000000e+00,1.000000e+00);
				v594.z = h596;
				v594.w = h565;
				highp vec4 v597;
				v597.xyzw = v594;
				v494.xyzw = v597;
			}
		}
		else
		{
			float h598;
			vec2 v599;
			float h600;
			highp float f601;
			f601 = v495.z;
			highp float f602;
			f602 = v495.z;
			if (((f601>f466)||(f602<f468)))
			{
				h600 = 0.000000e+00;
			}
			else
			{
				float h603;
				h603 = f480;
				h600 = h603;
			}
			highp float f604;
			f604 = v495.z;
			float h605;
			h605 = ((f604+(-f468))/(f466/f474));
			v495.z = h605;
			if ((f499>f500))
			{
				if ((f499>f501))
				{
					vec2 v606;
					highp float f607;
					f607 = v495.y;
					float h608;
					h608 = (f607+(-f472));
					v606.x = h608;
					v606.y = v495.z;
					highp vec2 v609;
					v609.xy = v606;
					vec2 v610;
					v610.xy = (v609/vec2((-abs(f474))));
					v599.xy = v610;
				}
				else
				{
					vec2 v611;
					v611.x = v495.x;
					v611.y = v495.y;
					highp vec2 v612;
					v612.xy = v611;
					vec2 v613;
					v613.xy = (v612/vec2((-abs(f476))));
					v599.xy = v613;
				}
			}
			else
			{
				if ((f500>f501))
				{
					vec2 v614;
					highp float f615;
					f615 = v495.x;
					float h616;
					h616 = (f615+f472);
					v614.x = h616;
					v614.y = v495.z;
					highp vec2 v617;
					v617.xy = v614;
					vec2 v618;
					v618.xy = (v617/vec2((-abs(f474))));
					v599.xy = v618;
				}
				else
				{
					vec2 v619;
					v619.x = v495.x;
					v619.y = v495.y;
					highp vec2 v620;
					v620.xy = v619;
					vec2 v621;
					v621.xy = (v620/vec2((-abs(f476))));
					v599.xy = v621;
				}
			}
			if ((f499<f500))
			{
				if ((f499<f501))
				{
					float h622;
					h622 = abs((f500+(-f501)));
					h598 = h622;
				}
				else
				{
					float h623;
					h623 = abs((f500+(-f499)));
					h598 = h623;
				}
			}
			else
			{
				if ((f500<f501))
				{
					float h624;
					h624 = abs((f501+(-f499)));
					h598 = h624;
				}
				else
				{
					float h625;
					h625 = abs((f500+(-f499)));
					h598 = h625;
				}
			}
			vec4 v626;
			v626.xy = v599;
			highp float f627;
			f627 = h598;
			float h628;
			h628 = clamp((f627/f478),0.000000e+00,1.000000e+00);
			v626.z = h628;
			v626.w = h600;
			highp vec4 v629;
			v629.xyzw = v626;
			v494.xyzw = v629;
		}
	}
	else
	{
		v494.xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00);
	}
	v130.x = v494.z;
	highp vec4 v630;
	highp vec4 v631;
	v631.xyzw = vc4_m[0];
	v630.xyzw = v631;
	highp float f632;
	highp float f633;
	f633 = vc5_m[1].x;
	f632 = f633;
	highp float f634;
	highp float f635;
	f635 = vc5_m[1].y;
	f634 = f635;
	highp vec3 v636;
	highp vec3 v637;
	v637.xyz = v27;
	v636.xyz = v637;
	highp float f638;
	highp float f639;
	f639 = vc5_m[1].z;
	f638 = f639;
	highp float f640;
	highp float f641;
	f641 = vc5_m[1].w;
	f640 = f641;
	highp float f642;
	highp float f643;
	f643 = vc5_m[2].x;
	f642 = f643;
	highp float f644;
	highp float f645;
	f645 = vc5_m[2].y;
	f644 = f645;
	highp float f646;
	highp float f647;
	f647 = vc5_m[2].z;
	f646 = f647;
	highp float f648;
	highp float f649;
	f649 = vc5_m[2].w;
	f648 = f649;
	highp float f650;
	highp float f651;
	f651 = vc5_m[3].x;
	f650 = f651;
	highp float f652;
	highp float f653;
	f653 = vc5_m[3].y;
	f652 = f653;
	highp float f654;
	highp float f655;
	f655 = vc5_m[3].z;
	f654 = f655;
	highp float f656;
	highp float f657;
	f657 = vc5_m[3].w;
	f656 = f657;
	highp float f658;
	highp float f659;
	f659 = vc5_m[4].x;
	f658 = f659;
	highp vec4 v660;
	v660.xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00);
	vec3 v661;
	vec3 v662;
	vec3 v663;
	v663.xyz = in_ATTRIBUTE0.xyz;
	v662.xyz = v663;
	v661.xyz = v662;
	highp vec3 v664;
	v664.x = dot(v39.xyz,v636);
	v664.y = dot(v41.xyz,v636);
	v664.z = dot(v43.xyz,v636);
	if (((f658>=5.000000e-01)&&(v630.z<5.000000e-01)))
	{
		highp float f665;
		f665 = abs(v664.x);
		highp float f666;
		f666 = abs(v664.y);
		highp float f667;
		f667 = abs(v664.z);
		if ((f648>=5.000000e-01))
		{
			float h668;
			float h669;
			h669 = sin(f652);
			h668 = h669;
			float h670;
			float h671;
			h671 = cos(f652);
			h670 = h671;
			float h672;
			float h673;
			h673 = sin(f654);
			h672 = h673;
			float h674;
			float h675;
			h675 = cos(f654);
			h674 = h675;
			float h676;
			float h677;
			h677 = sin(f656);
			h676 = h677;
			float h678;
			float h679;
			h679 = cos(f656);
			h678 = h679;
			highp vec3 v680;
			highp float f681;
			f681 = ((v662.x*h670)+(-(v662.y*h668)));
			v680.x = f681;
			highp float f682;
			f682 = ((v662.x*h668)+(v662.y*h670));
			v680.y = f682;
			highp float f683;
			f683 = v662.z;
			v680.z = f683;
			vec3 v684;
			vec3 v685;
			v685.xyz = v680;
			v684.xyz = v685;
			highp vec3 v686;
			highp float f687;
			f687 = v684.x;
			v686.x = f687;
			highp float f688;
			f688 = ((v684.y*h674)+(-(v684.z*h672)));
			v686.y = f688;
			highp float f689;
			f689 = ((v684.y*h672)+(v684.z*h674));
			v686.z = f689;
			vec3 v690;
			vec3 v691;
			v691.xyz = v686;
			v690.xyz = v691;
			highp vec3 v692;
			highp float f693;
			f693 = ((v690.z*h676)+(v690.x*h678));
			v692.x = f693;
			highp float f694;
			f694 = v690.y;
			v692.y = f694;
			highp float f695;
			f695 = ((v690.z*h678)+(-(v690.x*h676)));
			v692.z = f695;
			vec3 v696;
			vec3 v697;
			v697.xyz = v692;
			v696.xyz = v697;
			v661.xyz = v696;
			if ((f650>=5.000000e-01))
			{
				float h698;
				vec2 v699;
				highp float f700;
				f700 = v696.y;
				float h701;
				h701 = (((f700+(-v2.y))+(-f634))/(f632/f640));
				v661.y = h701;
				if ((f665>f666))
				{
					if ((f665>f667))
					{
						vec2 v702;
						highp float f703;
						f703 = v661.z;
						float h704;
						h704 = (f703+f638);
						v702.x = h704;
						v702.y = v661.y;
						highp vec2 v705;
						v705.xy = v702;
						vec2 v706;
						v706.xy = (v705/vec2((-abs(f640))));
						v699.xy = v706;
					}
					else
					{
						vec2 v707;
						highp float f708;
						f708 = v661.x;
						float h709;
						h709 = (f708+(-f638));
						v707.x = h709;
						v707.y = v661.y;
						highp vec2 v710;
						v710.xy = v707;
						vec2 v711;
						v711.xy = (v710/vec2((-abs(f640))));
						v699.xy = v711;
					}
				}
				else
				{
					if ((f666>f667))
					{
						vec2 v712;
						v712.x = v661.x;
						v712.y = v661.z;
						highp vec2 v713;
						v713.xy = v712;
						vec2 v714;
						v714.xy = (v713/vec2((-abs(f642))));
						v699.xy = v714;
					}
					else
					{
						vec2 v715;
						highp float f716;
						f716 = v661.x;
						float h717;
						h717 = (f716+(-f638));
						v715.x = h717;
						v715.y = v661.y;
						highp vec2 v718;
						v718.xy = v715;
						vec2 v719;
						v719.xy = (v718/vec2((-abs(f640))));
						v699.xy = v719;
					}
				}
				if ((f665<f666))
				{
					if ((f665<f667))
					{
						float h720;
						h720 = abs((f666+(-f667)));
						h698 = h720;
					}
					else
					{
						float h721;
						h721 = abs((f666+(-f665)));
						h698 = h721;
					}
				}
				else
				{
					if ((f666<f667))
					{
						float h722;
						h722 = abs((f667+(-f665)));
						h698 = h722;
					}
					else
					{
						float h723;
						h723 = abs((f666+(-f665)));
						h698 = h723;
					}
				}
				vec4 v724;
				v724.xy = v699;
				highp float f725;
				f725 = h698;
				float h726;
				h726 = clamp((f725/f644),0.000000e+00,1.000000e+00);
				v724.z = h726;
				float h727;
				h727 = f646;
				v724.w = h727;
				highp vec4 v728;
				v728.xyzw = v724;
				v660.xyzw = v728;
			}
			else
			{
				float h729;
				vec2 v730;
				float h731;
				float h732;
				h732 = v2.x;
				v661.x = (v661.x+(-h732));
				highp float f733;
				f733 = v661.x;
				highp float f734;
				f734 = v661.x;
				if (((f733>f632)||(f734<f634)))
				{
					h731 = 0.000000e+00;
				}
				else
				{
					float h735;
					h735 = f646;
					h731 = h735;
				}
				highp float f736;
				f736 = v661.x;
				float h737;
				h737 = ((f736+(-f634))/(f632/f640));
				v661.x = h737;
				if ((f665>f666))
				{
					if ((f665>f667))
					{
						vec2 v738;
						v738.x = v661.z;
						v738.y = v661.y;
						highp vec2 v739;
						v739.xy = v738;
						vec2 v740;
						v740.xy = (v739/vec2((-abs(f642))));
						v730.xy = v740;
					}
					else
					{
						vec2 v741;
						highp float f742;
						f742 = v661.y;
						float h743;
						h743 = (f742+(-f638));
						v741.x = h743;
						v741.y = v661.x;
						highp vec2 v744;
						v744.xy = v741;
						vec2 v745;
						v745.xy = (v744/vec2((-abs(f640))));
						v730.xy = v745;
					}
				}
				else
				{
					if ((f666>f667))
					{
						vec2 v746;
						highp float f747;
						f747 = v661.z;
						float h748;
						h748 = (f747+f638);
						v746.x = h748;
						v746.y = v661.x;
						highp vec2 v749;
						v749.xy = v746;
						vec2 v750;
						v750.xy = (v749/vec2((-abs(f640))));
						v730.xy = v750;
					}
					else
					{
						vec2 v751;
						highp float f752;
						f752 = v661.y;
						float h753;
						h753 = (f752+(-f638));
						v751.x = h753;
						v751.y = v661.x;
						highp vec2 v754;
						v754.xy = v751;
						vec2 v755;
						v755.xy = (v754/vec2((-abs(f640))));
						v730.xy = v755;
					}
				}
				if ((f665<f666))
				{
					if ((f665<f667))
					{
						float h756;
						h756 = abs((f666+(-f667)));
						h729 = h756;
					}
					else
					{
						float h757;
						h757 = abs((f666+(-f665)));
						h729 = h757;
					}
				}
				else
				{
					if ((f666<f667))
					{
						float h758;
						h758 = abs((f667+(-f665)));
						h729 = h758;
					}
					else
					{
						float h759;
						h759 = abs((f666+(-f665)));
						h729 = h759;
					}
				}
				vec4 v760;
				v760.xy = v730;
				highp float f761;
				f761 = h729;
				float h762;
				h762 = clamp((f761/f644),0.000000e+00,1.000000e+00);
				v760.z = h762;
				v760.w = h731;
				highp vec4 v763;
				v763.xyzw = v760;
				v660.xyzw = v763;
			}
		}
		else
		{
			float h764;
			vec2 v765;
			float h766;
			highp float f767;
			f767 = v661.z;
			highp float f768;
			f768 = v661.z;
			if (((f767>f632)||(f768<f634)))
			{
				h766 = 0.000000e+00;
			}
			else
			{
				float h769;
				h769 = f646;
				h766 = h769;
			}
			highp float f770;
			f770 = v661.z;
			float h771;
			h771 = ((f770+(-f634))/(f632/f640));
			v661.z = h771;
			if ((f665>f666))
			{
				if ((f665>f667))
				{
					vec2 v772;
					highp float f773;
					f773 = v661.y;
					float h774;
					h774 = (f773+(-f638));
					v772.x = h774;
					v772.y = v661.z;
					highp vec2 v775;
					v775.xy = v772;
					vec2 v776;
					v776.xy = (v775/vec2((-abs(f640))));
					v765.xy = v776;
				}
				else
				{
					vec2 v777;
					v777.x = v661.x;
					v777.y = v661.y;
					highp vec2 v778;
					v778.xy = v777;
					vec2 v779;
					v779.xy = (v778/vec2((-abs(f642))));
					v765.xy = v779;
				}
			}
			else
			{
				if ((f666>f667))
				{
					vec2 v780;
					highp float f781;
					f781 = v661.x;
					float h782;
					h782 = (f781+f638);
					v780.x = h782;
					v780.y = v661.z;
					highp vec2 v783;
					v783.xy = v780;
					vec2 v784;
					v784.xy = (v783/vec2((-abs(f640))));
					v765.xy = v784;
				}
				else
				{
					vec2 v785;
					v785.x = v661.x;
					v785.y = v661.y;
					highp vec2 v786;
					v786.xy = v785;
					vec2 v787;
					v787.xy = (v786/vec2((-abs(f642))));
					v765.xy = v787;
				}
			}
			if ((f665<f666))
			{
				if ((f665<f667))
				{
					float h788;
					h788 = abs((f666+(-f667)));
					h764 = h788;
				}
				else
				{
					float h789;
					h789 = abs((f666+(-f665)));
					h764 = h789;
				}
			}
			else
			{
				if ((f666<f667))
				{
					float h790;
					h790 = abs((f667+(-f665)));
					h764 = h790;
				}
				else
				{
					float h791;
					h791 = abs((f666+(-f665)));
					h764 = h791;
				}
			}
			vec4 v792;
			v792.xy = v765;
			highp float f793;
			f793 = h764;
			float h794;
			h794 = clamp((f793/f644),0.000000e+00,1.000000e+00);
			v792.z = h794;
			v792.w = h766;
			highp vec4 v795;
			v795.xyzw = v792;
			v660.xyzw = v795;
		}
	}
	else
	{
		v660.xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00);
	}
	v130.y = v660.w;
	highp vec3 v796;
	highp vec3 v797;
	v797.xyz = v27;
	v796.xyz = v797;
	highp vec3 v798;
	v798.x = dot(v39.xyz,v796);
	v798.y = dot(v41.xyz,v796);
	v798.z = dot(v43.xyz,v796);
	highp float f799;
	highp float f800;
	f800 = vc5_m[2].w;
	f799 = f800;
	highp float f801;
	highp float f802;
	f802 = vc5_m[3].x;
	f801 = f802;
	highp float f803;
	f803 = 0.000000e+00;
	if ((f799>=5.000000e-01))
	{
		if ((f801>=5.000000e-01))
		{
			f803 = abs(v798.y);
		}
		else
		{
			f803 = abs(v798.x);
		}
	}
	else
	{
		f803 = abs(v798.z);
	}
	v131.x = f803;
	highp vec4 t804[4];
	t804[0].xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00);
	t804[1].xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00);
	t804[2].xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00);
	t804[3].xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00);
	t804[(0/2)].xy = t38[0];
	highp vec4 t805[4];
	t805[0].xyzw = t804[0];
	t805[1].xyzw = t804[1];
	t805[2].xyzw = t804[2];
	t805[3].xyzw = t804[3];
	t805[(1/2)].zw = t38[1];
	highp vec4 t806[4];
	t806[0].xyzw = t805[0];
	t806[1].xyzw = t805[1];
	t806[2].xyzw = t805[2];
	t806[3].xyzw = t805[3];
	t806[(2/2)].xy = t38[2];
	highp vec4 t807[4];
	t807[0].xyzw = t806[0];
	t807[1].xyzw = t806[1];
	t807[2].xyzw = t806[2];
	t807[3].xyzw = t806[3];
	t807[(3/2)].zw = t38[3];
	highp vec4 t808[4];
	t808[0].xyzw = t807[0];
	t808[1].xyzw = t807[1];
	t808[2].xyzw = t807[2];
	t808[3].xyzw = t807[3];
	t808[(4/2)].xy = v129;
	highp vec4 t809[4];
	t809[0].xyzw = t808[0];
	t809[1].xyzw = t808[1];
	t809[2].xyzw = t808[2];
	t809[3].xyzw = t808[3];
	t809[(5/2)].zw = v130;
	highp vec4 t810[4];
	t810[0].xyzw = t809[0];
	t810[1].xyzw = t809[1];
	t810[2].xyzw = t809[2];
	t810[3].xyzw = t809[3];
	t810[(6/2)].xy = v131;
	vec4 v811;
	v811.xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00);
	vec2 v812;
	v812.xy = ((in_ATTRIBUTE15*vc3_h[0].xy)+vc3_h[0].zw);
	v811.xy = v812;
	v811.zw = vec2(0.000000e+00,0.000000e+00);
	highp vec4 v813;
	v813.w = 0.000000e+00;
	highp vec3 v814;
	v814.xyz = v26;
	v813.xyz = v814;
	highp vec4 v815;
	highp vec3 v816;
	v816.xyz = v27;
	v815.xyz = v816;
	highp float f817;
	f817 = h22;
	v815.w = f817;
	vec4 v818;
	vec4 v819;
	vec4 v820;
	vec4 v821;
	v821.xyzw = v813;
	v818.xyzw = v821;
	vec4 v822;
	v822.xyzw = v815;
	v819.xyzw = v822;
	v820.xyzw = in_ATTRIBUTE3.zyxw;
	v19.w = v83.w;
	v20.xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,1.000000e-02);
	if ((bool(((i14>>0)&1))&&!(b0)))
	{
		vec3 v823;
		vec3 v824;
		v824.xyz = vc0_m[8].xyz;
		vec3 v825;
		v825.xyz = vc0_m[7].xyz;
		v823.xyz = (b0)?(v824):(v825);
		highp vec3 v826;
		highp vec3 v827;
		v827.xyz = v27;
		v826.xyz = v827;
		vec3 v828;
		vec3 v829;
		v829.xyz = v826;
		v828.xyz = v829;
		vec3 v830;
		vec3 v831;
		vec4 v832;
		v832.w = 1.000000e+00;
		v832.xyz = v828;
		v831.x = dot(vc0_m[0],v832);
		v831.y = dot(vc0_m[1],v832);
		v831.z = dot(vc0_m[2],v832);
		vec4 v833;
		v833.xyzw = (v828.xyzz*v828.yzzx);
		v830.x = dot(vc0_m[3],v833);
		v830.y = dot(vc0_m[4],v833);
		v830.z = dot(vc0_m[5],v833);
		vec3 v834;
		v834.xyz = ((vc0_m[9].www*max(vec3(0.000000e+00,0.000000e+00,0.000000e+00),((v831+v830)+(vc0_m[6].xyz*vec3(((v828.x*v828.x)+(-(v828.y*v828.y))))))))*v823);
		highp vec4 v835;
		v835.w = 0.000000e+00;
		v835.xyz = v15;
		highp vec3 v836;
		v836.xyz = (v21+(-v835)).xyz;
		float h837;
		vec3 v838;
		highp vec3 v839;
		highp vec3 v840;
		int i841;
		i841 = -1;
		v840.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
		v839.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
		if ((i13>0))
		{
			highp vec3 v842;
			v842.xyz = ((v836*vc0_h[18].xyz)+vc0_h[21].xyz);
			v840.xyz = v842;
			bool b843;
			b843 = all(lessThanEqual(vc0_h[12].xyz,v842));
			bool b844;
			b844 = all(lessThanEqual(v842,vc0_h[15].xyz));
			if ((b843&&b844))
			{
				i841 = 0;
				v839.xyz = vc0_h[24].xyz;
			}
			if (((i841==-1)&&(i13>1)))
			{
				highp vec3 v845;
				v845.xyz = ((v836*vc0_h[19].xyz)+vc0_h[22].xyz);
				v840.xyz = v845;
				bool b846;
				b846 = all(lessThanEqual(vc0_h[13].xyz,v845));
				bool b847;
				b847 = all(lessThanEqual(v845,vc0_h[16].xyz));
				if ((b846&&b847))
				{
					i841 = 1;
					v839.xyz = vc0_h[25].xyz;
				}
				if (((i841==-1)&&(i13>2)))
				{
					highp vec3 v848;
					v848.xyz = ((v836*vc0_h[20].xyz)+vc0_h[23].xyz);
					v840.xyz = v848;
					bool b849;
					b849 = all(lessThanEqual(vc0_h[14].xyz,v848));
					bool b850;
					b850 = all(lessThanEqual(v848,vc0_h[17].xyz));
					if ((b849&&b850))
					{
						i841 = 2;
						v839.xyz = vc0_h[26].xyz;
					}
				}
			}
		}
		v838.xyz = v834;
		h837 = 1.000000e+00;
		if ((i841!=-1))
		{
			highp vec3 v851;
			v851.xyz = ((fract((v840+v839))*vc0_h[10].xyz)+vc0_h[11].xyz);
			v840.xyz = v851;
			vec4 v852;
			vec4 v853;
			vec4 v854;
			vec3 v855;
			bool b856;
			vec2 v857;
			highp float f858;
			highp float f859;
			highp float f860;
			highp float f861;
			f858 = float(i841);
			f859 = float(i13);
			f860 = float(i8);
			f861 = float(i10);
			highp vec3 v862;
			v862.xy = v851.xy;
			v862.z = ((v851.z+2.000000e+00)*3.333333e-01);
			highp vec3 v863;
			v863.xyz = v862;
			v863.z = ((v862.z+f858)/f859);
			v863.z = ((v863.z+f860)/f861);
			vec4 v864;
			v864.xyzw = textureLod(vs0,v863,0.000000e+00);
			vec2 v865;
			v865.xy = v864.yz;
			v857.xy = v864.yz;
			b856 = true;
			f860 = float(i9);
			if ((i1!=0))
			{
				f860 = float((i11+i1));
				b856 = false;
			}
			f861 = float(i12);
			vec3 v866;
			highp vec3 v867;
			v867.xyz = v851;
			v867.z = ((v851.z+f858)/f859);
			v867.z = ((v867.z+f860)/f861);
			v866.xyz = textureLod(vs1,v867,0.000000e+00).xyz;
			v855.xyz = v866;
			v854.xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00);
			v853.xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00);
			v852.xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00);
			if (b856)
			{
				f860 = float(i8);
				f861 = float(i10);
				highp vec3 v868;
				v868.xy = v851.xy;
				v868.z = (v851.z*3.333333e-01);
				highp vec3 v869;
				v869.xyz = v868;
				v869.z = ((v868.z+f858)/f859);
				v869.z = ((v869.z+f860)/f861);
				highp vec3 v870;
				v870.xy = v851.xy;
				v870.z = ((v851.z+1.000000e+00)*3.333333e-01);
				highp vec3 v871;
				v871.xyz = v870;
				v871.z = ((v870.z+f858)/f859);
				v871.z = ((v871.z+f860)/f861);
				vec4 v872;
				v872.xyzw = ((textureLod(vs0,v869,0.000000e+00)*vec4(2.000000e+00,2.000000e+00,2.000000e+00,2.000000e+00))+vec4(-1.000000e+00,-1.000000e+00,-1.000000e+00,-1.000000e+00));
				vec4 v873;
				v873.xyzw = ((textureLod(vs0,v871,0.000000e+00)*vec4(2.000000e+00,2.000000e+00,2.000000e+00,2.000000e+00))+vec4(-1.000000e+00,-1.000000e+00,-1.000000e+00,-1.000000e+00));
				vec3 v874;
				v874.x = v872.w;
				v874.y = v873.w;
				v874.z = ((v864.x*2.000000e+00)+-1.000000e+00);
				v852.xyz = v874;
				vec4 v875;
				v875.xyzw = (v872*v866.xxxx);
				v854.xyzw = v875;
				vec4 v876;
				v876.xyzw = (v873*v866.yyyy);
				v853.xyzw = v876;
				vec4 v877;
				v877.xyzw = (v852*v866.zzzz);
				v852.xyzw = v877;
				if ((b856&&(float(i6)>5.000000e-01)))
				{
					f860 = float(i7);
					f861 = float(i12);
					vec3 v878;
					highp vec3 v879;
					v879.xyz = v851;
					v879.z = ((v851.z+f858)/f859);
					v879.z = ((v879.z+f860)/f861);
					v878.xyz = textureLod(vs1,v879,0.000000e+00).xyz;
					highp vec3 v880;
					v880.xyz = v866;
					highp vec3 v881;
					v881.xyz = v878;
					vec3 v882;
					v882.xyz = mix(v880,v881,vec3(f4));
					v855.xyz = v882;
					if ((float(i5)>5.000000e-01))
					{
						vec4 v883;
						f861 = float(i10);
						highp vec3 v884;
						v884.xy = v851.xy;
						v884.z = (v851.z*3.333333e-01);
						highp vec3 v885;
						v885.xyz = v884;
						v885.z = ((v884.z+f858)/f859);
						v885.z = ((v885.z+f860)/f861);
						highp vec3 v886;
						v886.xy = v851.xy;
						v886.z = ((v851.z+1.000000e+00)*3.333333e-01);
						highp vec3 v887;
						v887.xyz = v886;
						v887.z = ((v886.z+f858)/f859);
						v887.z = ((v887.z+f860)/f861);
						highp vec3 v888;
						v888.xy = v851.xy;
						v888.z = ((v851.z+2.000000e+00)*3.333333e-01);
						highp vec3 v889;
						v889.xyz = v888;
						v889.z = ((v888.z+f858)/f859);
						v889.z = ((v889.z+f860)/f861);
						vec4 v890;
						v890.xyzw = textureLod(vs0,v889,0.000000e+00);
						v883.xyzw = v890;
						vec4 v891;
						v891.xyzw = ((textureLod(vs0,v885,0.000000e+00)*vec4(2.000000e+00,2.000000e+00,2.000000e+00,2.000000e+00))+vec4(-1.000000e+00,-1.000000e+00,-1.000000e+00,-1.000000e+00));
						vec4 v892;
						v892.xyzw = ((textureLod(vs0,v887,0.000000e+00)*vec4(2.000000e+00,2.000000e+00,2.000000e+00,2.000000e+00))+vec4(-1.000000e+00,-1.000000e+00,-1.000000e+00,-1.000000e+00));
						vec3 v893;
						v893.x = v891.w;
						v893.y = v892.w;
						v893.z = ((v890.x*2.000000e+00)+-1.000000e+00);
						v883.xyz = v893;
						vec4 v894;
						v894.xyzw = (v883*v878.zzzz);
						v883.xyzw = v894;
						highp vec4 v895;
						v895.xyzw = v875;
						highp vec4 v896;
						v896.xyzw = (v891*v878.xxxx);
						vec4 v897;
						v897.xyzw = mix(v895,v896,vec4(f4));
						v854.xyzw = v897;
						highp vec4 v898;
						v898.xyzw = v876;
						highp vec4 v899;
						v899.xyzw = (v892*v878.yyyy);
						vec4 v900;
						v900.xyzw = mix(v898,v899,vec4(f4));
						v853.xyzw = v900;
						highp vec4 v901;
						v901.xyzw = v877;
						highp vec4 v902;
						v902.xyzw = v894;
						vec4 v903;
						v903.xyzw = mix(v901,v902,vec4(f4));
						v852.xyzw = v903;
						highp vec2 v904;
						v904.xy = v865;
						highp vec2 v905;
						v905.xy = v890.yz;
						vec2 v906;
						v906.xy = mix(v904,v905,vec2(f4));
						v857.xy = v906;
					}
				}
				v854.xyzw = (v854*vec4(1.732051e+00,1.732051e+00,1.732051e+00,3.872979e+00));
				v853.xyzw = (v853*vec4(1.732051e+00,1.732051e+00,1.732051e+00,3.872979e+00));
				v852.xyzw = (v852*vec4(1.732051e+00,1.732051e+00,1.732051e+00,3.872979e+00));
			}
			float h907;
			highp float f908;
			f908 = v857.y;
			float h909;
			h909 = mix(v3.z,v3.y,f908);
			h907 = h909;
			vec4 v910;
			v910.x = v855.x;
			v910.yzw = v854.xyz;
			vec4 v911;
			v911.x = v855.y;
			v911.yzw = v853.xyz;
			vec4 v912;
			v912.x = v855.z;
			v912.yzw = v852.xyz;
			h837 = v857.x;
			vec3 v913;
			vec3 v914;
			v914.xyz = v826;
			v913.xyz = v914;
			vec4 v915;
			vec4 v916;
			v916.x = 2.820950e-01;
			v916.y = (-4.886030e-01*v913.y);
			v916.z = (4.886030e-01*v913.z);
			v916.w = (-4.886030e-01*v913.x);
			v915.xyzw = v916;
			v915.x = 8.862275e-01;
			v915.yzw = (v916.yzw*vec3(2.094395e+00,2.094395e+00,2.094395e+00));
			vec3 v917;
			v917.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
			v917.x = dot((v910*vec4(h907)),v915);
			v917.y = dot((v911*vec4(h907)),v915);
			v917.z = dot((v912*vec4(h907)),v915);
			v838.xyz = (max(vec3(0.000000e+00,0.000000e+00,0.000000e+00),v917)/vec3(3.141593e+00,3.141593e+00,3.141593e+00));
		}
		vec3 v918;
		float h919;
		h919 = v3.x;
		v918.xyz = (v838*vec3(h919));
		v838.xyz = v918;
		float h920;
		highp vec3 v921;
		v921.xyz = v918;
		highp float f922;
		f922 = h837;
		float h923;
		h923 = (dot(v921,vec3(3.000000e-01,5.900000e-01,1.100000e-01))*f922);
		h920 = h923;
		vec3 v924;
		v924.xyz = v918;
		uint u925;
		u925 = uint(((i14>>1)&15));
		if (bool(u925))
		{
			bool b926;
			b926 = false;
			bool b927;
			b927 = false;
			if((6u==u925)) { b926 = true; };
			if (b926)
			{
				bool b928;
				b928 = false;
				bool b929;
				b929 = false;
				if((0==i1)) { b928 = true; };
				if (b928)
				{
					v924.xyz = vec3(1.000000e+00,1.000000e+00,1.000000e+00);
					b929 = true;
				}
				if((1==i1)) { b928 = true; };
				if(b929) { b928 = false; };
				if (b928)
				{
					v924.xyz = vec3(1.445300e-01,1.750500e-01,3.152000e-02);
					b929 = true;
				}
				if((2==i1)) { b928 = true; };
				if(b929) { b928 = false; };
				if (b928)
				{
					v924.xyz = vec3(3.811000e-01,2.883300e-01,1.970200e-01);
					b929 = true;
				}
				b928 = true;
				if(b929) { b928 = false; };
				if (b928)
				{
					v924.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
					b929 = true;
				}
				b927 = true;
			}
			if((2u==u925)) { b926 = true; };
			if(b927) { b926 = false; };
			if (b926)
			{
				v924.xyz = vec3(0.000000e+00,1.000000e+00,0.000000e+00);
				b927 = true;
			}
			if((7u==u925)) { b926 = true; };
			if(b927) { b926 = false; };
			if (b926)
			{
				bool b930;
				b930 = false;
				bool b931;
				b931 = false;
				if((0==i841)) { b930 = true; };
				if (b930)
				{
					v924.xyz = vec3(1.000000e+00,0.000000e+00,0.000000e+00);
					b931 = true;
				}
				if((1==i841)) { b930 = true; };
				if(b931) { b930 = false; };
				if (b930)
				{
					v924.xyz = vec3(0.000000e+00,1.000000e+00,0.000000e+00);
					b931 = true;
				}
				if((2==i841)) { b930 = true; };
				if(b931) { b930 = false; };
				if (b930)
				{
					v924.xyz = vec3(0.000000e+00,0.000000e+00,1.000000e+00);
					b931 = true;
				}
				b930 = true;
				if(b931) { b930 = false; };
				if (b930)
				{
					v924.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
					b931 = true;
				}
				b927 = true;
			}
		}
		v838.xyz = v924;
		v20.xyz = v924;
		v20.w = h920;
	}
	v18.xyzw = v83;
	var_TEXCOORD10_centroid.xyzw = v818;
	var_TEXCOORD11_centroid.xyzw = v819;
	var_COLOR0.xyzw = v820;
	var_TEXCOORD0.xyzw = t810[0];
	var_TEXCOORD1.xyzw = t810[1];
	var_TEXCOORD2.xyzw = t810[2];
	var_TEXCOORD3.xyzw = t810[3];
	var_TEXCOORD4.xyzw = v811;
	var_TEXCOORD7.xyzw = v85;
	var_TEXCOORD8.xyzw = v19;
	var_TEXCOORD14.xyzw = v20;
	compiler_internal_AdjustOutputSemantic(v18);
	gl_Position.xyzw = v18;
}

// Compiled by HLSLCC 0.73
// @Inputs: f4;0:in_ATTRIBUTE0,f3;1:in_ATTRIBUTE1,f4;2:in_ATTRIBUTE2,f4;3:in_ATTRIBUTE3,f4;4:in_ATTRIBUTE4,f4;5:in_ATTRIBUTE5,f4;8:in_ATTRIBUTE8,f4;9:in_ATTRIBUTE9,f4;10:in_ATTRIBUTE10,f4;11:in_ATTRIBUTE11,f2;15:in_ATTRIBUTE15
// @Outputs: f4;0:var_TEXCOORD10_centroid,f4;1:var_TEXCOORD11_centroid,f4;2:var_COLOR0,f4;3:var_TEXCOORD0,f4;4:var_TEXCOORD1,f4;5:var_TEXCOORD2,f4;6:var_TEXCOORD3,f4;7:var_TEXCOORD4,f4;8:var_TEXCOORD7,f4;9:var_TEXCOORD8,f4;10:var_TEXCOORD14,f4;-1:gl_Position
// @PackedGlobals: PrtLightingChannel(i:0,1),bUseLightMapSkyLight(u:0,1)
// @PackedUB: View(0): View_TranslatedWorldToClip(0,16),View_WorldCameraOrigin(268,3),View_TranslatedWorldCameraOrigin(272,3),View_PreViewTranslation(280,3),View_GameTime(666,1),View_PrtLerp(986,1),View_PrtLightingColorScale(988,3),View_PrtIrradianceVolumeUVPadScale(1000,4),View_PrtIrradianceVolumeUVPadOffset(1004,4),View_PrtIrradianceVolumeUVClampMin_0(1036,4),View_PrtIrradianceVolumeUVClampMin_1(1040,4),View_PrtIrradianceVolumeUVClampMin_2(1044,4),View_PrtIrradianceVolumeUVClampMax_0(1048,4),View_PrtIrradianceVolumeUVClampMax_1(1052,4),View_PrtIrradianceVolumeUVClampMax_2(1056,4),View_PrtIrradianceVolumeWorldToUVScale_0(1060,4),View_PrtIrradianceVolumeWorldToUVScale_1(1064,4),View_PrtIrradianceVolumeWorldToUVScale_2(1068,4),View_PrtIrradianceVolumeWorldToUVOffset_0(1072,4),View_PrtIrradianceVolumeWorldToUVOffset_1(1076,4),View_PrtIrradianceVolumeWorldToUVOffset_2(1080,4),View_PrtIrradianceVolumeUVWrapOffset_0(1084,4),View_PrtIrradianceVolumeUVWrapOffset_1(1088,4),View_PrtIrradianceVolumeUVWrapOffset_2(1092,4),View_PrtFlag(976,1),View_PrtNumLods(977,1),View_PrtNumAmbientsParts(978,1),View_PrtAmbientsPartChannelOffset(979,1),View_PrtNumSHCoefParts(980,1),View_PrtCurAmbientPartIndex(981,1),View_PrtCurSHCoefPartIndex(982,1),View_PrtNextAmbientPartIndex(983,1),View_PrtAmbientLerpEnabled(984,1),View_PrtSHCoefLerpEnabled(985,1),View_MobileSkyIrradianceEnvironmentMap_0(564,4),View_MobileSkyIrradianceEnvironmentMap_1(568,4),View_MobileSkyIrradianceEnvironmentMap_2(572,4),View_MobileSkyIrradianceEnvironmentMap_3(576,4),View_MobileSkyIrradianceEnvironmentMap_4(580,4),View_MobileSkyIrradianceEnvironmentMap_5(584,4),View_MobileSkyIrradianceEnvironmentMap_6(588,4),View_SkyLightColor(620,4),View_LightMapSkyLightColor(624,4),View_SkyLightSAParameters(636,4)
// @PackedUB: MobileBasePass(1): MobileBasePass_Fog_ExponentialFogParameters(20,4),MobileBasePass_Fog_ExponentialFogParameters2(24,4),MobileBasePass_Fog_ExponentialFogColorParameter(28,4),MobileBasePass_Fog_ExponentialFogParameters3(32,4),MobileBasePass_Fog_ExponentialFogEnvLightingAndScale(44,4),MobileBasePass_Fog_FogSecondColor(48,4),MobileBasePass_Fog_FogThirdParameters(52,4),MobileBasePass_Fog_FogThirdColor(56,4),MobileBasePass_Fog_SunDirection(60,4)
// @PackedUB: Primitive(2): Primitive_LocalObjectBoundsMin(76,3),Primitive_InvNonUniformScaleAndDeterminantSign(16,4)
// @PackedUB: PrecomputedLightingBuffer(3): PrecomputedLightingBuffer_LightMapCoordinateScaleBias(8,4)
// @PackedUB: MaterialCollection0(4): MaterialCollection0_Vectors_1(4,4)
// @PackedUB: Material(5): Material_VectorExpressions_3(12,4),Material_ScalarExpressions_0(16,4),Material_ScalarExpressions_1(20,4),Material_ScalarExpressions_2(24,4),Material_ScalarExpressions_3(28,4),Material_ScalarExpressions_10(56,4),Material_ScalarExpressions_11(60,4)
// @PackedUBCopies: 0:0-5:h:0:16,0:268-5:h:16:3,0:272-5:h:20:3,0:280-5:h:24:3,0:666-5:h:28:1,0:986-5:h:32:1,0:988-5:h:36:3,0:1000-5:h:40:8,0:1036-5:h:48:60,0:976-5:i:0:1,0:977-5:i:4:1,0:978-5:i:8:1,0:979-5:i:12:1,0:980-5:i:16:1,0:981-5:i:20:1,0:982-5:i:24:1,0:983-5:i:28:1,0:984-5:i:32:1,0:985-5:i:36:1,0:564-5:m:0:28,0:620-5:m:28:8,0:636-5:m:36:4,1:20-2:h:0:16,1:44-2:h:16:20,2:76-4:h:0:3,2:16-4:m:0:4,3:8-3:h:0:4,4:4-1:m:0:4,5:12-0:m:0:20,5:56-0:m:20:8
// @Samplers: View_PrtSHCoefficients(0:1[View_PrtSHCoefficientsSampler]),View_PrtAmbientVector(1:1[View_PrtAmbientSampler])

//M_TD_Item_Base_L00/FLocalVertexFactory/TMobileBasePassVSFMobileMovableDirectionalLightAndPrtLighingPolicyHDRLinear64/0_3ea3b0994427d18c

/*

*/

