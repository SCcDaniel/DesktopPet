#version 310 es

#define HLSLCC_DX11ClipSpace 1

#ifdef GL_EXT_texture_cube_map_array
#extension GL_EXT_texture_cube_map_array : enable

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
uniform highp vec4 pc0_h[5];
uniform vec4 pc3_m[2];
uniform highp vec4 pc2_h[14];
uniform ivec4 pc1_i[2];
uniform uvec4 pu_u[2];
uniform highp vec4 pu_h[1];
uniform mediump samplerCube ps0;
uniform highp sampler2DShadow ps1;
layout(location=0) in vec4 in_TEXCOORD10_centroid;
layout(location=1) in vec4 in_TEXCOORD11_centroid;
layout(location=2) in vec4 in_TEXCOORD7;
layout(location=3) in highp vec4 in_TEXCOORD8;
layout(location=4) in vec4 in_TEXCOORD14;
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
	i3 = pc1_i[1].x;
	int i4;
	i4 = pc1_i[0].x;
	int i5;
	i5 = pc0_i[0].x;
	float h6;
	h6 = pc0_m[15].x;
	vec3 v7;
	v7.xyz = pc0_m[4].xyz;
	vec3 v8;
	v8.xyz = pc0_m[3].xyz;
	float h9;
	h9 = pc0_m[2].x;
	float h10;
	h10 = pc0_m[1].x;
	highp float f11;
	f11 = pc0_h[3].x;
	highp vec3 v12;
	highp vec4 v13;
	v13.xyzw = gl_FragCoord;
	v13.w = (1.0/(gl_FragCoord.w));
	vec4 v14;
	vec4 v15;
	vec3 v16;
	float h17;
	float h18;
	vec3 v19;
	v12.xyz = pc0_h[0].xyz;
	vec3 v20;
	highp vec4 v21;
	v21.xyzw = in_TEXCOORD10_centroid;
	vec3 v22;
	v22.xyz = v21.xyz;
	v20.xyz = v22;
	vec4 v23;
	v23.xyzw = in_TEXCOORD11_centroid;
	highp vec4 v24;
	highp vec3 v25;
	highp vec2 v26;
	v26.xy = pc0_m[0].xy;
	v25.xy = ((((gl_FragCoord.xy+(-v26))*pc0_h[2].zw)+vec2(-5.000000e-01,-5.000000e-01))*vec2(2.000000e+00,-2.000000e+00));
	v25.z = gl_FragCoord.z;
	highp vec4 v27;
	v27.w = 1.000000e+00;
	v27.xyz = v25;
	v24.xyzw = (v27*v13.wwww);
	highp vec3 v28;
	v28.xyz = normalize((-in_TEXCOORD8.xyz));
	vec3 v29;
	highp vec3 v30;
	v30.xyz = (in_TEXCOORD8.xyz+(-pc0_h[1].xyz));
	vec3 v31;
	v31.xyz = vec3(0.000000e+00,0.000000e+00,1.000000e+00);
	highp vec3 v32;
	v32.xyz = ((v23.xyz*v31.zzz)+(((cross(v23.xyz,v20)*v23.www)*v31.yyy)+(v20*v31.xxx)));
	vec3 v33;
	v33.xyz = normalize(v32);
	v29.xyz = v33;
	vec3 v34;
	highp vec3 v35;
	v35.xyz = v29;
	highp vec3 v36;
	v36.xyz = v29;
	vec3 v37;
	v37.xyz = ((-v28)+((v36*vec3(dot(v35,v28)))*vec3(2.000000e+00,2.000000e+00,2.000000e+00)));
	v34.xyz = v37;
	v19.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	vec3 v38;
	vec2 v39;
	vec2 v40;
	vec3 v41;
	v41.xyz = v28;
	v40.xy = ((vec2(-1.040000e+00,1.040000e+00)*vec2(((min(9.689941e-01,exp2((-9.280000e+00*max(dot(v29,v41),0.000000e+00))))*9.843750e-01)+4.207031e-02)))+vec2(1.031062e+00,-3.965625e-02));
	v39.xy = v40;
	v39.y = v40.y;
	v38.xyz = ((vec3(5.000000e-01,5.000000e-01,5.000000e-01)*v40.xxx)+v39.yyy);
	vec3 v42;
	vec3 v43;
	v43.xyz = pc0_m[13].xyz;
	vec3 v44;
	v44.xyz = pc0_m[12].xyz;
	v42.xyz = (b1)?(v43):(v44);
	vec3 v45;
	vec3 v46;
	vec4 v47;
	v47.w = 1.000000e+00;
	v47.xyz = v29;
	v46.x = dot(pc0_m[5],v47);
	v46.y = dot(pc0_m[6],v47);
	v46.z = dot(pc0_m[7],v47);
	vec4 v48;
	v48.xyzw = (v29.xyzz*v29.yzzx);
	v45.x = dot(pc0_m[8],v48);
	v45.y = dot(pc0_m[9],v48);
	v45.z = dot(pc0_m[10],v48);
	vec3 v49;
	v49.xyz = (max(vec3(0.000000e+00,0.000000e+00,0.000000e+00),((v46+v45)+(pc0_m[11].xyz*vec3(((v29.x*v29.x)+(-(v29.y*v29.y)))))))*v42);
	vec3 v50;
	v50.xyz = in_TEXCOORD14.xyz;
	float h51;
	h51 = in_TEXCOORD14.w;
	h18 = in_TEXCOORD14.w;
	vec3 v52;
	v52.xyz = (pc0_m[14].www*v49);
	float h53;
	h53 = in_TEXCOORD14.w;
	vec3 v54;
	v54.xyz = in_TEXCOORD14.xyz;
	vec3 v55;
	vec3 v56;
	v56.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	v55.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	if ((bool(((i5>>0)&1))&&!(b1)))
	{
		float h57;
		v55.xyz = v50;
		if (bool(((i5>>24)&1)))
		{
			float h58;
			h58 = fract(h51);
			h57 = h58;
			v55.xyz = (v50+(v52*vec3(clamp(((h51+(-h58))/2.550000e+02),0.000000e+00,1.000000e+00))));
		}
		else
		{
			h57 = h51;
		}
		h53 = (dot(v55,vec3(3.000000e-01,5.900000e-01,1.100000e-01))*h57);
		v56.xyz = v55;
		v54.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	}
	uint u59;
	u59 = uint(((i5>>1)&15));
	if (bool(u59))
	{
		bool b60;
		b60 = false;
		bool b61;
		b61 = false;
		if((1u==u59)) { b60 = true; };
		if (b60)
		{
			highp float f62;
			highp float f63;
			f63 = pc0_h[4].x;
			f62 = (bool(((i5>>5)&1)))?(f63):(f11);
			highp vec3 v64;
			v64.xyz = v56;
			vec3 v65;
			v65.xyz = (v64*vec3(f62));
			v54.xyz = v65;
			b61 = true;
		}
		if((2u==u59)) { b60 = true; };
		if((6u==u59)) { b60 = true; };
		if((7u==u59)) { b60 = true; };
		if(b61) { b60 = false; };
		if (b60)
		{
			v54.xyz = v56;
			b61 = true;
		}
		if((3u==u59)) { b60 = true; };
		if(b61) { b60 = false; };
		if (b60)
		{
			v54.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
			b61 = true;
		}
		if((4u==u59)) { b60 = true; };
		if(b61) { b60 = false; };
		if (b60)
		{
			vec3 v66;
			v66.yz = vec2(0.000000e+00,0.000000e+00);
			float h67;
			h67 = float(b1);
			v66.x = h67;
			v54.xyz = v66;
			b61 = true;
		}
		if((5u==u59)) { b60 = true; };
		if(b61) { b60 = false; };
		if (b60)
		{
			vec3 v68;
			v68.yz = vec2(0.000000e+00,0.000000e+00);
			float h69;
			h69 = float((int(b2)==1));
			v68.x = h69;
			v54.xyz = v68;
			b61 = true;
		}
		b60 = true;
		if(b61) { b60 = false; };
		if (b60)
		{
			v54.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
			b61 = true;
		}
	}
	h18 = h53;
	v19.xyz = v54;
	if ((!(bool(((i5>>0)&1)))||b1))
	{
		h18 = (h53+dot(v49,vec3(3.000000e-01,5.900000e-01,1.100000e-01)));
		v19.xyz = v54;
	}
	h17 = 1.000000e+00;
	if ((bool(i4)||(pc2_h[4].z>0.000000e+00)))
	{
		highp vec2 v70;
		v70.xy = v24.xy;
		highp float f71;
		f71 = v24.w;
		int i72;
		highp float f73;
		highp vec4 v74;
		highp vec4 v75;
		highp float f76;
		highp float f77;
		float h78;
		h78 = 0.000000e+00;
		f77 = pc2_h[1].w;
		v75.xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00);
		v74.xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00);
		f73 = -1.000000e+00;
		i72 = 0;
		int i79;
		i79 = 0;
		for (;i79<2;)
		{
			if ((f71<pc2_h[4][i79]))
			{
				if ((i79==0))
				{
					highp vec4 v80;
					v80.w = 1.000000e+00;
					v80.x = v70.x;
					v80.y = v70.y;
					v80.z = f71;
					v75.xyzw = (pc2_h[9]+((pc2_h[8]*v80.zzzz)+((pc2_h[7]*v80.yyyy)+(pc2_h[6]*v70.xxxx))));
				}
				else
				{
					highp vec4 v81;
					v81.w = 1.000000e+00;
					v81.x = v70.x;
					v81.y = v70.y;
					v81.z = f71;
					v74.xyzw = (pc2_h[(9+(i79*4))]+((pc2_h[(8+(i79*4))]*v81.zzzz)+((pc2_h[(7+(i79*4))]*v81.yyyy)+(pc2_h[(6+(i79*4))]*v70.xxxx))));
				}
				if (((((((i79==0)&&(v75.x<(pc2_h[4].w+-1.000000e-03)))&&(v75.y<9.900000e-01))&&(v75.y>1.000000e-02))&&(v75.x>1.000000e-02))&&(v75.z<=9.999900e-01)))
				{
					i72 = (i72+(1<<i79));
					if ((f71>pc2_h[5].w))
					{
						f73 = clamp(((f71+(-pc2_h[5].w))/pc2_h[5].z),0.000000e+00,1.000000e+00);
					}
					else
					{
						break;
					}
				}
				if ((i79!=0))
				{
					i72 = (i72+(1<<i79));
				}
			}
			i79 = (i79+1);
		}
		int i82;
		i82 = (i72&1);
		int i83;
		i83 = (i72&2);
		if (((bool(i82)&&(v75.z>0.000000e+00))||(bool(i83)&&(v74.z>0.000000e+00))))
		{
			if ((i82>0))
			{
				highp float f84;
				f84 = min(v75.z,9.999900e-01);
				f76 = f84;
				highp vec2 v85;
				v85.xy = ((v75.xy*pc2_h[2].xy)+vec2(5.000000e-01,5.000000e-01));
				highp vec2 v86;
				v86.xy = (v85+(-floor(v85)));
				highp vec2 v87;
				v87.xy = (v75.xy+(-(v86*pc2_h[2].zw)));
				highp vec2 v88;
				v88.xy = (vec2(2.000000e+00,2.000000e+00)+(-v86));
				highp vec2 v89;
				v89.xy = ((1.0/(v88))*pc2_h[2].zw);
				highp vec2 v90;
				v90.xy = (vec2(1.000000e+00,1.000000e+00)+v86);
				highp vec2 v91;
				v91.xy = ((v86/v90)*pc2_h[2].zw);
				highp float f92;
				f92 = clamp((f84+(-(1.0/(f77)))),0.000000e+00,1.000000e+00);
				highp vec2 v93;
				v93.x = v91.x;
				v93.y = v89.y;
				highp vec2 v94;
				v94.x = v89.x;
				v94.y = v91.y;
				float h95;
				float h96;
				h96 = ((v88.x*v88.y)*float(textureLodOffset(ps1,vec3((v87+v89),f92),0.000000e+00,ivec2(-1,-1))));
				float h97;
				h97 = ((v90.x*v88.y)*float(textureLodOffset(ps1,vec3((v87+v93),f92),0.000000e+00,ivec2(1,-1))));
				float h98;
				h98 = ((v88.x*v90.y)*float(textureLodOffset(ps1,vec3((v87+v94),f92),0.000000e+00,ivec2(-1,1))));
				float h99;
				h99 = ((v90.x*v90.y)*float(textureLodOffset(ps1,vec3((v87+v91),f92),0.000000e+00,ivec2(1,1))));
				h95 = ((((h96+h97)+h98)+h99)/9.000000e+00);
				highp float f100;
				highp float f101;
				highp float f102;
				f102 = h95;
				f101 = ((1.000000e+00+(-f73))*f102);
				highp float f103;
				highp float f104;
				f104 = h95;
				f103 = f104;
				f100 = ((f73>=0.000000e+00))?(f101):(f103);
				float h105;
				h105 = f100;
				h78 = h105;
			}
			if ((i83>0))
			{
				f76 = (min(v74.z,9.999900e-01)+(-(f0*1.000000e-02)));
				highp vec2 v106;
				v106.xy = ((v74.xy*pc2_h[2].xy)+vec2(5.000000e-01,5.000000e-01));
				highp vec2 v107;
				v107.xy = (v106+(-floor(v106)));
				highp vec2 v108;
				v108.xy = (v74.xy+(-(v107*pc2_h[2].zw)));
				highp vec2 v109;
				v109.xy = (vec2(2.000000e+00,2.000000e+00)+(-v107));
				highp vec2 v110;
				v110.xy = ((1.0/(v109))*pc2_h[2].zw);
				highp vec2 v111;
				v111.xy = (vec2(1.000000e+00,1.000000e+00)+v107);
				highp vec2 v112;
				v112.xy = ((v107/v111)*pc2_h[2].zw);
				highp float f113;
				f113 = clamp((f76+(-(1.0/(f77)))),0.000000e+00,1.000000e+00);
				highp vec2 v114;
				v114.x = v112.x;
				v114.y = v110.y;
				highp vec2 v115;
				v115.x = v110.x;
				v115.y = v112.y;
				float h116;
				float h117;
				h117 = ((v109.x*v109.y)*float(textureLodOffset(ps1,vec3((v108+v110),f113),0.000000e+00,ivec2(-1,-1))));
				float h118;
				h118 = ((v111.x*v109.y)*float(textureLodOffset(ps1,vec3((v108+v114),f113),0.000000e+00,ivec2(1,-1))));
				float h119;
				h119 = ((v109.x*v111.y)*float(textureLodOffset(ps1,vec3((v108+v115),f113),0.000000e+00,ivec2(-1,1))));
				float h120;
				h120 = ((v111.x*v111.y)*float(textureLodOffset(ps1,vec3((v108+v112),f113),0.000000e+00,ivec2(1,1))));
				h116 = ((((h117+h118)+h119)+h120)/9.000000e+00);
				highp float f121;
				highp float f122;
				highp float f123;
				f123 = h116;
				f122 = (f73*f123);
				highp float f124;
				highp float f125;
				f125 = h116;
				f124 = f125;
				f121 = ((f73>=0.000000e+00))?(f122):(f124);
				float h126;
				h126 = f121;
				h78 = (h78+h126);
			}
			highp float f127;
			f127 = clamp(((f71*pc2_h[3].x)+pc2_h[3].y),0.000000e+00,1.000000e+00);
			highp float f128;
			f128 = h78;
			float h129;
			h129 = mix(f128,1.000000e+00,(f127*f127));
			h78 = h129;
		}
		else
		{
			h78 = 1.000000e+00;
		}
		h17 = h78;
	}
	float h130;
	highp vec3 v131;
	v131.xyz = v29;
	float h132;
	h132 = dot(v131,pc2_h[1].xyz);
	h130 = max(0.000000e+00,h132);
	vec3 v133;
	vec3 v134;
	v134.xyz = normalize((v28+pc2_h[1].xyz));
	v133.xyz = v134;
	float h135;
	h135 = max(0.000000e+00,dot(v29,v133));
	highp float f136;
	f136 = 0.000000e+00;
	if ((pc2_h[0].w>f136))
	{
		highp float f137;
		f137 = 1.000000e-01;
		if ((pc2_h[3].z<f137))
		{
			highp float f138;
			f138 = h17;
			highp vec3 v139;
			v139.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
			vec3 v140;
			v140.xyz = ((vec3(f138)*pc2_h[0].xyz)*v139);
			v19.xyz = (v19+v140);
		}
		else
		{
			highp vec3 v141;
			highp vec3 v142;
			v142.xyz = cross(v29,v133);
			v141.xyz = v142;
			float h143;
			h143 = (h135*2.441406e-04);
			float h144;
			highp float f145;
			f145 = (h143*h143);
			highp float f146;
			f146 = 2.441406e-04;
			float h147;
			h147 = (f146/(dot(v141,v141)+f145));
			h144 = h147;
			highp float f148;
			f148 = h17;
			highp vec3 v149;
			v149.xyz = (v38*vec3((h130*(2.539063e-01*min((h144*h144),h10)))));
			vec3 v150;
			v150.xyz = ((vec3(f148)*pc2_h[0].xyz)*v149);
			v19.xyz = (v19+v150);
		}
	}
	v16.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	float h151;
	h151 = pc3_m[0].z;
	vec4 v152;
	v152.xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,1.000000e+00);
	if (bool(pc3_m[0].y))
	{
		vec4 v153;
		highp float f154;
		f154 = (-9.200001e+00+pc3_m[0].y);
		v153.xyzw = textureLod(ps0,v34,f154);
		vec3 v155;
		vec3 v156;
		v156.xyz = pc0_m[13].xyz;
		vec3 v157;
		v157.xyz = pc0_m[12].xyz;
		v155.xyz = (b1)?(v156):(v157);
		v152.xyz = (v153.xyz*v155);
	}
	else
	{
		vec4 v158;
		highp float f159;
		f159 = (-9.200001e+00+h9);
		v158.xyzw = textureLod(ps0,v34,f159);
		vec3 v160;
		v160.xyz = (v158.xyz*vec3((v158.w*h151)));
		vec3 v161;
		v161.xyz = (v160*v160);
		v152.xyz = v161;
		v152.xyz = (v161*vec3(mix(1.000000e+00,min((h18/max(pc3_m[0].x,1.000000e-04)),v7.z),smoothstep(0.000000e+00,1.000000e+00,clamp(((1.562500e-02*v7.x)+v7.y),0.000000e+00,1.000000e+00)))));
		v152.xyz = (v152.xyz*v8);
	}
	v16.xyz = (v152.xyz*pc3_m[1].xyz);
	float h162;
	h162 = dot(v16,vec3(3.000000e-01,5.900000e-01,1.100000e-01));
	vec3 v163;
	v163.x = h162;
	v163.y = h162;
	v163.z = h162;
	vec3 v164;
	v164.xyz = (v19+(mix(v163,v16,pc3_m[1].www)*v38));
	v19.xyz = v164;
	if ((float(i3)>5.000000e-01))
	{
		vec3 v165;
		v165.xyz = v164;
		highp float f166;
		f166 = distance(v30,v12);
		float h167;
		float h168;
		h168 = f166;
		h167 = h168;
		if ((h167<2.500000e+03))
		{
			vec3 v169;
			vec3 v170;
			v170.xyz = normalize((v28+v28));
			v169.xyz = v170;
			highp vec3 v171;
			highp vec3 v172;
			v172.xyz = cross(v29,v169);
			v171.xyz = v172;
			float h173;
			h173 = (max(0.000000e+00,dot(v29,v169))*4.649414e-02);
			float h174;
			highp float f175;
			f175 = (h173*h173);
			highp float f176;
			f176 = 4.649414e-02;
			float h177;
			h177 = (f176/(dot(v171,v171)+f175));
			h174 = h177;
			highp float f178;
			f178 = 5.000000e-01;
			vec3 v179;
			v179.xyz = (pc2_h[0].xyz*vec3((f178*pc2_h[0].w)));
			v165.xyz = (v164+((((v179*vec3(clamp((1.000000e+00+(-((h167+-1.250000e+03)/1.250000e+03))),0.000000e+00,1.000000e+00)))*vec3(3.039063e-01,3.039063e-01,3.039063e-01))*vec3(min((h174*h174),h10)))*v38));
		}
		v19.xyz = v165;
	}
	v15.xyzw = in_TEXCOORD7;
	v15.xyz = in_TEXCOORD7.xyz;
	vec4 v180;
	v180.xyzw = mix(v15,vec4(0.000000e+00,0.000000e+00,0.000000e+00,1.000000e+00),vec4(h6));
	v14.xyz = ((v19*v180.www)+v180.xyz);
	v14.w = 1.000000e+00;
	float h181;
	h181 = gl_FragCoord.z;
	v14.w = h181;
	vec3 v182;
	v182.xyz = min(v14.xyz,vec3(6.500000e+04,6.500000e+04,6.500000e+04));
	v14.xyz = v182;
	float h183;
	h183 = f11;
	v14.xyz = (v182*vec3(h183));
	uint u184;
	u184 = uint(((i5>>1)&15));
	if (bool(u184))
	{
		v14.xyz = v54;
		v14.w = 1.000000e+00;
	}
	out_Target0.xyzw = v14;
}

// Compiled by HLSLCC 0.73
// @Inputs: f4;0:in_TEXCOORD10_centroid,f4;1:in_TEXCOORD11_centroid,f4;2:in_TEXCOORD7,f4;3:in_TEXCOORD8,f4;4:in_TEXCOORD14,f4;-1:gl_FragCoord
// @Outputs: f4;0:out_Target0
// @PackedGlobals: bShadowReceiveBiasScale(h:0,1),bLMPValid(u:0,1),bUseLightMapSkyLight(u:4,1)
// @PackedUB: View(0): View_WorldCameraOrigin(268,3),View_PreViewTranslation(280,3),View_ViewSizeAndInvSize(520,4),View_PreExposure(546,1),View_PrtDebugData(992,4),View_PrtFlag(976,1),View_ViewRectMin(516,4),View_GGXTweak(550,1),View_ReflectionCubemapMaxMip(552,1),View_IndirectLightingColorScale(556,3),View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight(560,3),View_MobileSkyIrradianceEnvironmentMap_0(564,4),View_MobileSkyIrradianceEnvironmentMap_1(568,4),View_MobileSkyIrradianceEnvironmentMap_2(572,4),View_MobileSkyIrradianceEnvironmentMap_3(576,4),View_MobileSkyIrradianceEnvironmentMap_4(580,4),View_MobileSkyIrradianceEnvironmentMap_5(584,4),View_MobileSkyIrradianceEnvironmentMap_6(588,4),View_SkyLightColor(620,4),View_LightMapSkyLightColor(624,4),View_SkyLightSAParameters(636,4),View_SpecularOnlyViewmodeMask(680,1)
// @PackedUB: MobileBasePass(1): MobileBasePass_UseCSM(14,1),MobileBasePass_UseFakeSpec(15,1)
// @PackedUB: MobileDirectionalLight(2): MobileDirectionalLight_DirectionalLightColor(0,4),MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition(4,4),MobileDirectionalLight_DirectionalLightShadowSize(8,4),MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale(12,4),MobileDirectionalLight_DirectionalLightShadowDistances(16,4),MobileDirectionalLight_DirectionalLightShadowIntensityScale(20,4),MobileDirectionalLight_DirectionalLightScreenToShadow(24,32)
// @PackedUB: MobileReflectionCapture(3): MobileReflectionCapture_Params(0,4),MobileReflectionCapture_ReflectionColor(4,4)
// @PackedUBCopies: 0:268-3:h:0:3,0:280-3:h:4:3,0:520-3:h:8:4,0:546-3:h:12:1,0:992-3:h:16:4,0:976-3:i:0:1,0:516-3:m:0:4,0:550-3:m:4:1,0:552-3:m:8:1,0:556-3:m:12:3,0:560-3:m:16:3,0:564-3:m:20:28,0:620-3:m:48:8,0:636-3:m:56:4,0:680-3:m:60:1,1:14-0:i:0:1,1:15-0:i:4:1,2:0-1:h:0:56,3:0-2:m:0:8
// @Samplers: MobileReflectionCapture_Texture(0:1[MobileReflectionCapture_TextureSampler]),MobileDirectionalLight_DirectionalLightShadowTexture2(1:1[MobileDirectionalLight_ShadowDepthTextureComparisonSampler])

//NewMaterial/FLocalVertexFactory/TMobileBasePassPSFMobileMovableDirectionalLightAndPrtLighingPolicy0HDRLinear64Skylight/0_8802b1aa7c370742

/*

*/

