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
uniform highp vec4 pc0_h[6];
uniform vec4 pc7_m[2];
uniform uvec4 pc3_u[2];
uniform highp vec4 pc3_h[34];
uniform uvec4 pc4_u[2];
uniform highp vec4 pc4_h[34];
uniform uvec4 pc5_u[2];
uniform highp vec4 pc5_h[34];
uniform uvec4 pc6_u[2];
uniform highp vec4 pc6_h[34];
uniform highp vec4 pc2_h[14];
uniform uvec4 pc1_u[1];
uniform ivec4 pc1_i[2];
uniform highp vec4 pc1_h[3];
uniform uvec4 pu_u[2];
uniform ivec4 pu_i[1];
uniform highp vec4 pu_h[1];
uniform mediump samplerCube ps1;
uniform highp sampler2DShadow ps0;
uniform highp usamplerBuffer ps2;
uniform highp sampler2D ps3;
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
	i3 = pu_i[0].x;
	uint u4;
	u4 = pc6_u[1].x;
	uint u5;
	u5 = pc6_u[0].x;
	uint u6;
	u6 = pc5_u[1].x;
	uint u7;
	u7 = pc5_u[0].x;
	uint u8;
	u8 = pc4_u[1].x;
	uint u9;
	u9 = pc4_u[0].x;
	uint u10;
	u10 = pc3_u[1].x;
	uint u11;
	u11 = pc3_u[0].x;
	int i12;
	i12 = pc1_i[1].x;
	int i13;
	i13 = pc1_i[0].x;
	uint u14;
	u14 = pc1_u[0].x;
	int i15;
	i15 = pc0_i[0].x;
	float h16;
	h16 = pc0_m[15].x;
	vec3 v17;
	v17.xyz = pc0_m[4].xyz;
	vec3 v18;
	v18.xyz = pc0_m[3].xyz;
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
	highp vec4 v35;
	v35.xyzw = in_TEXCOORD10_centroid;
	vec3 v36;
	v36.xyz = v35.xyz;
	v34.xyz = v36;
	vec4 v37;
	v37.xyzw = in_TEXCOORD11_centroid;
	highp vec4 v38;
	highp vec3 v39;
	highp vec2 v40;
	v40.xy = pc0_m[0].xy;
	v39.xy = ((((gl_FragCoord.xy+(-v40))*pc0_h[2].zw)+vec2(-5.000000e-01,-5.000000e-01))*vec2(2.000000e+00,-2.000000e+00));
	v39.z = gl_FragCoord.z;
	highp vec4 v41;
	v41.w = 1.000000e+00;
	v41.xyz = v39;
	v38.xyzw = (v41*v23.wwww);
	highp vec3 v42;
	v42.xyz = (in_TEXCOORD8.xyz+(-pc0_h[1].xyz));
	highp vec3 v43;
	v43.xyz = normalize((-in_TEXCOORD8.xyz));
	vec3 v44;
	vec3 v45;
	v45.xyz = vec3(0.000000e+00,0.000000e+00,1.000000e+00);
	highp vec3 v46;
	v46.xyz = ((v37.xyz*v45.zzz)+(((cross(v37.xyz,v34)*v37.www)*v45.yyy)+(v34*v45.xxx)));
	vec3 v47;
	v47.xyz = normalize(v46);
	v44.xyz = v47;
	vec3 v48;
	highp vec3 v49;
	v49.xyz = v44;
	highp vec3 v50;
	v50.xyz = v44;
	vec3 v51;
	v51.xyz = ((-v43)+((v50*vec3(dot(v49,v43)))*vec3(2.000000e+00,2.000000e+00,2.000000e+00)));
	v48.xyz = v51;
	v33.xyz = v42;
	v32.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	v31.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	v30.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	vec3 v52;
	vec2 v53;
	vec2 v54;
	vec3 v55;
	v55.xyz = v43;
	v54.xy = ((vec2(-1.040000e+00,1.040000e+00)*vec2(((min(9.689941e-01,exp2((-9.280000e+00*max(dot(v44,v55),0.000000e+00))))*9.843750e-01)+4.207031e-02)))+vec2(1.031062e+00,-3.965625e-02));
	v53.xy = v54;
	v53.y = v54.y;
	v52.xyz = ((vec3(5.000000e-01,5.000000e-01,5.000000e-01)*v54.xxx)+v53.yyy);
	vec3 v56;
	vec3 v57;
	v57.xyz = pc0_m[13].xyz;
	vec3 v58;
	v58.xyz = pc0_m[12].xyz;
	v56.xyz = (b1)?(v57):(v58);
	vec3 v59;
	vec3 v60;
	vec4 v61;
	v61.w = 1.000000e+00;
	v61.xyz = v44;
	v60.x = dot(pc0_m[5],v61);
	v60.y = dot(pc0_m[6],v61);
	v60.z = dot(pc0_m[7],v61);
	vec4 v62;
	v62.xyzw = (v44.xyzz*v44.yzzx);
	v59.x = dot(pc0_m[8],v62);
	v59.y = dot(pc0_m[9],v62);
	v59.z = dot(pc0_m[10],v62);
	vec3 v63;
	v63.xyz = (max(vec3(0.000000e+00,0.000000e+00,0.000000e+00),((v60+v59)+(pc0_m[11].xyz*vec3(((v44.x*v44.x)+(-(v44.y*v44.y)))))))*v56);
	vec3 v64;
	v64.xyz = in_TEXCOORD14.xyz;
	float h65;
	h65 = in_TEXCOORD14.w;
	h29 = in_TEXCOORD14.w;
	vec3 v66;
	v66.xyz = (pc0_m[14].www*v63);
	float h67;
	h67 = in_TEXCOORD14.w;
	vec3 v68;
	v68.xyz = in_TEXCOORD14.xyz;
	vec3 v69;
	vec3 v70;
	v70.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	v69.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	if ((bool(((i15>>0)&1))&&!(b1)))
	{
		float h71;
		v69.xyz = v64;
		if (bool(((i15>>24)&1)))
		{
			float h72;
			h72 = fract(h65);
			h71 = h72;
			v69.xyz = (v64+(v66*vec3(clamp(((h65+(-h72))/2.550000e+02),0.000000e+00,1.000000e+00))));
		}
		else
		{
			h71 = h65;
		}
		h67 = (dot(v69,vec3(3.000000e-01,5.900000e-01,1.100000e-01))*h71);
		v70.xyz = v69;
		v68.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	}
	uint u73;
	u73 = uint(((i15>>1)&15));
	if (bool(u73))
	{
		bool b74;
		b74 = false;
		bool b75;
		b75 = false;
		if((1u==u73)) { b74 = true; };
		if (b74)
		{
			highp float f76;
			highp float f77;
			f77 = pc0_h[5].x;
			f76 = (bool(((i15>>5)&1)))?(f77):(f21);
			highp vec3 v78;
			v78.xyz = v70;
			vec3 v79;
			v79.xyz = (v78*vec3(f76));
			v68.xyz = v79;
			b75 = true;
		}
		if((2u==u73)) { b74 = true; };
		if((6u==u73)) { b74 = true; };
		if((7u==u73)) { b74 = true; };
		if(b75) { b74 = false; };
		if (b74)
		{
			v68.xyz = v70;
			b75 = true;
		}
		if((3u==u73)) { b74 = true; };
		if(b75) { b74 = false; };
		if (b74)
		{
			v68.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
			b75 = true;
		}
		if((4u==u73)) { b74 = true; };
		if(b75) { b74 = false; };
		if (b74)
		{
			vec3 v80;
			v80.yz = vec2(0.000000e+00,0.000000e+00);
			float h81;
			h81 = float(b1);
			v80.x = h81;
			v68.xyz = v80;
			b75 = true;
		}
		if((5u==u73)) { b74 = true; };
		if(b75) { b74 = false; };
		if (b74)
		{
			vec3 v82;
			v82.yz = vec2(0.000000e+00,0.000000e+00);
			float h83;
			h83 = float((int(b2)==1));
			v82.x = h83;
			v68.xyz = v82;
			b75 = true;
		}
		b74 = true;
		if(b75) { b74 = false; };
		if (b74)
		{
			v68.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
			b75 = true;
		}
	}
	h29 = h67;
	v32.xyz = v68;
	if ((!(bool(((i15>>0)&1)))||b1))
	{
		h29 = (h67+dot(v63,vec3(3.000000e-01,5.900000e-01,1.100000e-01)));
		v32.xyz = v68;
	}
	h28 = 1.000000e+00;
	if ((bool(i13)||(pc2_h[4].z>0.000000e+00)))
	{
		highp vec2 v84;
		v84.xy = v38.xy;
		highp float f85;
		f85 = v38.w;
		int i86;
		highp float f87;
		highp vec4 v88;
		highp vec4 v89;
		highp float f90;
		highp float f91;
		float h92;
		h92 = 0.000000e+00;
		f91 = pc2_h[1].w;
		v89.xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00);
		v88.xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00);
		f87 = -1.000000e+00;
		i86 = 0;
		int i93;
		i93 = 0;
		for (;i93<2;)
		{
			if ((f85<pc2_h[4][i93]))
			{
				if ((i93==0))
				{
					highp vec4 v94;
					v94.w = 1.000000e+00;
					v94.x = v84.x;
					v94.y = v84.y;
					v94.z = f85;
					v89.xyzw = (pc2_h[9]+((pc2_h[8]*v94.zzzz)+((pc2_h[7]*v94.yyyy)+(pc2_h[6]*v84.xxxx))));
				}
				else
				{
					highp vec4 v95;
					v95.w = 1.000000e+00;
					v95.x = v84.x;
					v95.y = v84.y;
					v95.z = f85;
					v88.xyzw = (pc2_h[(9+(i93*4))]+((pc2_h[(8+(i93*4))]*v95.zzzz)+((pc2_h[(7+(i93*4))]*v95.yyyy)+(pc2_h[(6+(i93*4))]*v84.xxxx))));
				}
				if (((((((i93==0)&&(v89.x<(pc2_h[4].w+-1.000000e-03)))&&(v89.y<9.900000e-01))&&(v89.y>1.000000e-02))&&(v89.x>1.000000e-02))&&(v89.z<=9.999900e-01)))
				{
					i86 = (i86+(1<<i93));
					if ((f85>pc2_h[5].w))
					{
						f87 = clamp(((f85+(-pc2_h[5].w))/pc2_h[5].z),0.000000e+00,1.000000e+00);
					}
					else
					{
						break;
					}
				}
				if ((i93!=0))
				{
					i86 = (i86+(1<<i93));
				}
			}
			i93 = (i93+1);
		}
		int i96;
		i96 = (i86&1);
		int i97;
		i97 = (i86&2);
		if (((bool(i96)&&(v89.z>0.000000e+00))||(bool(i97)&&(v88.z>0.000000e+00))))
		{
			if ((i96>0))
			{
				highp float f98;
				f98 = min(v89.z,9.999900e-01);
				f90 = f98;
				highp vec2 v99;
				v99.xy = ((v89.xy*pc2_h[2].xy)+vec2(5.000000e-01,5.000000e-01));
				highp vec2 v100;
				v100.xy = (v99+(-floor(v99)));
				highp vec2 v101;
				v101.xy = (v89.xy+(-(v100*pc2_h[2].zw)));
				highp vec2 v102;
				v102.xy = (vec2(2.000000e+00,2.000000e+00)+(-v100));
				highp vec2 v103;
				v103.xy = ((1.0/(v102))*pc2_h[2].zw);
				highp vec2 v104;
				v104.xy = (vec2(1.000000e+00,1.000000e+00)+v100);
				highp vec2 v105;
				v105.xy = ((v100/v104)*pc2_h[2].zw);
				highp float f106;
				f106 = clamp((f98+(-(1.0/(f91)))),0.000000e+00,1.000000e+00);
				highp vec2 v107;
				v107.x = v105.x;
				v107.y = v103.y;
				highp vec2 v108;
				v108.x = v103.x;
				v108.y = v105.y;
				float h109;
				float h110;
				h110 = ((v102.x*v102.y)*float(textureLodOffset(ps0,vec3((v101+v103),f106),0.000000e+00,ivec2(-1,-1))));
				float h111;
				h111 = ((v104.x*v102.y)*float(textureLodOffset(ps0,vec3((v101+v107),f106),0.000000e+00,ivec2(1,-1))));
				float h112;
				h112 = ((v102.x*v104.y)*float(textureLodOffset(ps0,vec3((v101+v108),f106),0.000000e+00,ivec2(-1,1))));
				float h113;
				h113 = ((v104.x*v104.y)*float(textureLodOffset(ps0,vec3((v101+v105),f106),0.000000e+00,ivec2(1,1))));
				h109 = ((((h110+h111)+h112)+h113)/9.000000e+00);
				highp float f114;
				highp float f115;
				highp float f116;
				f116 = h109;
				f115 = ((1.000000e+00+(-f87))*f116);
				highp float f117;
				highp float f118;
				f118 = h109;
				f117 = f118;
				f114 = ((f87>=0.000000e+00))?(f115):(f117);
				float h119;
				h119 = f114;
				h92 = h119;
			}
			if ((i97>0))
			{
				f90 = (min(v88.z,9.999900e-01)+(-(f0*1.000000e-02)));
				highp vec2 v120;
				v120.xy = ((v88.xy*pc2_h[2].xy)+vec2(5.000000e-01,5.000000e-01));
				highp vec2 v121;
				v121.xy = (v120+(-floor(v120)));
				highp vec2 v122;
				v122.xy = (v88.xy+(-(v121*pc2_h[2].zw)));
				highp vec2 v123;
				v123.xy = (vec2(2.000000e+00,2.000000e+00)+(-v121));
				highp vec2 v124;
				v124.xy = ((1.0/(v123))*pc2_h[2].zw);
				highp vec2 v125;
				v125.xy = (vec2(1.000000e+00,1.000000e+00)+v121);
				highp vec2 v126;
				v126.xy = ((v121/v125)*pc2_h[2].zw);
				highp float f127;
				f127 = clamp((f90+(-(1.0/(f91)))),0.000000e+00,1.000000e+00);
				highp vec2 v128;
				v128.x = v126.x;
				v128.y = v124.y;
				highp vec2 v129;
				v129.x = v124.x;
				v129.y = v126.y;
				float h130;
				float h131;
				h131 = ((v123.x*v123.y)*float(textureLodOffset(ps0,vec3((v122+v124),f127),0.000000e+00,ivec2(-1,-1))));
				float h132;
				h132 = ((v125.x*v123.y)*float(textureLodOffset(ps0,vec3((v122+v128),f127),0.000000e+00,ivec2(1,-1))));
				float h133;
				h133 = ((v123.x*v125.y)*float(textureLodOffset(ps0,vec3((v122+v129),f127),0.000000e+00,ivec2(-1,1))));
				float h134;
				h134 = ((v125.x*v125.y)*float(textureLodOffset(ps0,vec3((v122+v126),f127),0.000000e+00,ivec2(1,1))));
				h130 = ((((h131+h132)+h133)+h134)/9.000000e+00);
				highp float f135;
				highp float f136;
				highp float f137;
				f137 = h130;
				f136 = (f87*f137);
				highp float f138;
				highp float f139;
				f139 = h130;
				f138 = f139;
				f135 = ((f87>=0.000000e+00))?(f136):(f138);
				float h140;
				h140 = f135;
				h92 = (h92+h140);
			}
			highp float f141;
			f141 = clamp(((f85*pc2_h[3].x)+pc2_h[3].y),0.000000e+00,1.000000e+00);
			highp float f142;
			f142 = h92;
			float h143;
			h143 = mix(f142,1.000000e+00,(f141*f141));
			h92 = h143;
		}
		else
		{
			h92 = 1.000000e+00;
		}
		h28 = h92;
	}
	highp float f144;
	f144 = 0.000000e+00;
	if ((pc2_h[0].w>f144))
	{
		highp float f145;
		f145 = 1.000000e-01;
		if ((pc2_h[3].z<f145))
		{
			highp float f146;
			f146 = h28;
			highp vec3 v147;
			v147.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
			vec3 v148;
			v148.xyz = ((vec3(f146)*pc2_h[0].xyz)*v147);
			v32.xyz = (v32+v148);
		}
		else
		{
			highp float f149;
			f149 = h28;
			highp vec3 v150;
			v150.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
			vec3 v151;
			v151.xyz = ((vec3(f149)*pc2_h[0].xyz)*v150);
			v32.xyz = (v32+v151);
		}
	}
	v27.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	float h152;
	h152 = pc7_m[0].z;
	vec4 v153;
	v153.xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,1.000000e+00);
	if (bool(pc7_m[0].y))
	{
		vec4 v154;
		highp float f155;
		f155 = (-9.200001e+00+pc7_m[0].y);
		v154.xyzw = textureLod(ps1,v48,f155);
		vec3 v156;
		vec3 v157;
		v157.xyz = pc0_m[13].xyz;
		vec3 v158;
		v158.xyz = pc0_m[12].xyz;
		v156.xyz = (b1)?(v157):(v158);
		v153.xyz = (v154.xyz*v156);
	}
	else
	{
		vec4 v159;
		highp float f160;
		f160 = (-9.200001e+00+h19);
		v159.xyzw = textureLod(ps1,v48,f160);
		vec3 v161;
		v161.xyz = (v159.xyz*vec3((v159.w*h152)));
		vec3 v162;
		v162.xyz = (v161*v161);
		v153.xyz = v162;
		v153.xyz = (v162*vec3(mix(1.000000e+00,min((h29/max(pc7_m[0].x,1.000000e-04)),v17.z),smoothstep(0.000000e+00,1.000000e+00,clamp(((1.562500e-02*v17.x)+v17.y),0.000000e+00,1.000000e+00)))));
		v153.xyz = (v153.xyz*v18);
	}
	v27.xyz = (v153.xyz*pc7_m[1].xyz);
	float h163;
	h163 = dot(v27,vec3(3.000000e-01,5.900000e-01,1.100000e-01));
	vec3 v164;
	v164.x = h163;
	v164.y = h163;
	v164.z = h163;
	vec3 v165;
	v165.xyz = (v32+(mix(v164,v27,pc7_m[1].www)*v52));
	v32.xyz = v165;
	uvec3 v166;
	highp vec2 v167;
	v167.xy = pc0_m[0].xy;
	v166.xy = (uvec2((gl_FragCoord.xy+(-v167)))>>uvec2(u14));
	float h168;
	h168 = v23.w;
	float h169;
	h169 = pc1_h[1].x;
	float h170;
	h170 = pc1_h[1].y;
	float h171;
	h171 = pc1_h[1].z;
	float h172;
	h172 = pc1_h[0].z;
	v166.z = uint(clamp((log2(((h168*h169)+h170))*h171),0.000000e+00,(h172+-1.000000e+00)));
	highp vec3 v173;
	v173.xyz = vec3(v166);
	uint u174;
	u174 = uint(texelFetch(ps2,int(uint(((((v173.z*pc1_h[0].y)+v173.y)*pc1_h[0].x)+v173.x)))).x);
	v26.xyzw = vec4(0.000000e+00,1.000000e+00,0.000000e+00,0.000000e+00);
	v26.x = pc2_h[5].x;
	v26.y = pc2_h[5].y;
	if (bool((u174&u5)))
	{
		highp float f175;
		highp float f176;
		f176 = h28;
		f175 = f176;
		highp float f177;
		f177 = float((bool(v26.x)&&bool(float(u4))));
		highp float f178;
		f178 = v26.y;
		vec3 v179;
		v179.xyz = v165;
		highp vec3 v180;
		v180.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
		uint u181;
		float h182;
		uint u183;
		u183 = uint(pc6_h[3].w);
		h182 = 1.000000e+00;
		u181 = 0u;
		if (((u183&4u)==4u))
		{
			uint u184;
			u181 = 1u;
			u184 = 0u;
			if (((u183&1u)==1u))
			{
				highp vec3 v185;
				v185.xyz = (v42+(-pc6_h[0].xyz));
				highp vec3 v186;
				v186.xyz = abs(v185);
				highp float f187;
				f187 = max(max(v186.x,v186.y),v186.z);
				bool b188;
				b188 = (f187==v186.x);
				bool b189;
				b189 = (!(b188)&&(f187==v186.y));
				bool b190;
				b190 = (!(b188)&&!(b189));
				u184 = ((uint(int((b188&&(f187==v185.x))))+uint(((2*int(b189))+int((b189&&(f187==v185.y))))))+uint(((4*int(b190))+int((b190&&(f187==v185.z))))));
			}
			highp vec4 v191;
			v191.xyzw = (pc6_h[int((13u+(u184*4u)))]+((pc6_h[int((12u+(u184*4u)))]*v42.zzzz)+((pc6_h[int((11u+(u184*4u)))]*v42.yyyy)+(pc6_h[int((10u+(u184*4u)))]*v42.xxxx))));
			highp vec2 v192;
			v192.xy = (v191.xy/v191.ww);
			highp vec4 v193;
			v193.xyzw = pc6_h[int((4u+u184))];
			highp vec4 v194;
			v194.xyzw = pc6_h[int((4u+u184))];
			if (all(bvec2(uvec2(greaterThanEqual(v192,v193.xy))*uvec2(lessThanEqual(v192,v194.zw)))))
			{
				highp float f195;
				f195 = min(v191.z,9.999900e-01);
				highp vec4 v196;
				highp vec2 v197;
				v197.xy = (v192*pc0_h[3].xy);
				highp vec2 v198;
				v198.xy = ((floor(v197)+vec2(5.000000e-01,5.000000e-01))*pc0_h[3].zw);
				highp vec4 v199;
				v199.xyzw = textureGatherOffset(ps3,v198,ivec2(-1,-1));
				v196.xyzw = textureGatherOffset(ps3,v198,ivec2(0,0));
				highp vec3 v200;
				v200.x = v199.w;
				v200.y = v199.z;
				highp vec2 v201;
				v201.xy = vec2(1.000000e+00,-1.000000e+00);
				v200.z = textureLod(ps3,(v198+(v201*pc0_h[3].zw)),0.000000e+00).x;
				vec3 v202;
				float h203;
				float h204;
				h204 = pc6_h[3].z;
				h203 = h204;
				highp float f205;
				f205 = h203;
				highp float f206;
				f206 = h203;
				vec3 v207;
				v207.xyz = clamp(((v200*vec3(f205))+(-vec3(((f195*f206)+-1.000000e+00)))),vec3(0.000000e+00,0.000000e+00,0.000000e+00),vec3(1.000000e+00,1.000000e+00,1.000000e+00));
				v202.xyz = v207;
				highp vec3 v208;
				v208.x = v199.x;
				v208.y = v199.y;
				v208.z = v196.z;
				vec3 v209;
				float h210;
				float h211;
				h211 = pc6_h[3].z;
				h210 = h211;
				highp float f212;
				f212 = h210;
				highp float f213;
				f213 = h210;
				vec3 v214;
				v214.xyz = clamp(((v208*vec3(f212))+(-vec3(((f195*f213)+-1.000000e+00)))),vec3(0.000000e+00,0.000000e+00,0.000000e+00),vec3(1.000000e+00,1.000000e+00,1.000000e+00));
				v209.xyz = v214;
				highp vec3 v215;
				highp vec2 v216;
				v216.xy = vec2(-1.000000e+00,1.000000e+00);
				v215.x = textureLod(ps3,(v198+(v216*pc0_h[3].zw)),0.000000e+00).x;
				v215.y = v196.x;
				v215.z = v196.y;
				vec3 v217;
				float h218;
				float h219;
				h219 = pc6_h[3].z;
				h218 = h219;
				highp float f220;
				f220 = h218;
				highp float f221;
				f221 = h218;
				vec3 v222;
				v222.xyz = clamp(((v215*vec3(f220))+(-vec3(((f195*f221)+-1.000000e+00)))),vec3(0.000000e+00,0.000000e+00,0.000000e+00),vec3(1.000000e+00,1.000000e+00,1.000000e+00));
				v217.xyz = v222;
				vec2 v223;
				vec2 v224;
				v224.xy = fract(v197);
				v223.xy = v224;
				vec3 v225;
				v225.x = (v202.x*(1.000000e+00+(-v223.x)));
				v225.y = (v209.x*(1.000000e+00+(-v223.x)));
				v225.z = (v217.x*(1.000000e+00+(-v223.x)));
				v225.x = (v225.x+v202.y);
				v225.y = (v225.y+v209.y);
				v225.z = (v225.z+v217.y);
				v225.x = (v225.x+(v202.z*v223.x));
				v225.y = (v225.y+(v209.z*v223.x));
				v225.z = (v225.z+(v217.z*v223.x));
				vec3 v226;
				v226.y = 1.000000e+00;
				v226.x = (1.000000e+00+(-v223.y));
				v226.z = v223.y;
				highp float f227;
				highp float f228;
				f228 = clamp(clamp((2.500000e-01*dot(v225,v226)),0.000000e+00,1.000000e+00),0.000000e+00,1.000000e+00);
				f227 = f228;
				highp float f229;
				f229 = 1.000000e+00;
				highp float f230;
				f230 = 1.000000e+00;
				float h231;
				h231 = mix(f229,(f227*f227),f230);
				h182 = h231;
			}
		}
		if (((u183&3u)!=0u))
		{
			highp float f232;
			highp vec3 v233;
			v233.xyz = (pc6_h[0].xyz+(-v42));
			highp vec3 v234;
			v234.xyz = normalize(v233);
			float h235;
			highp vec3 v236;
			v236.xyz = v44;
			float h237;
			h237 = dot(v236,v234);
			h235 = max(0.000000e+00,h237);
			if ((pc6_h[1].w==0.000000e+00))
			{
				highp float f238;
				f238 = dot(v233,v233);
				highp float f239;
				f239 = (f238*(pc6_h[0].w*pc6_h[0].w));
				highp float f240;
				f240 = clamp((1.000000e+00+(-(f239*f239))),0.000000e+00,1.000000e+00);
				f232 = ((1.0/((f238+1.000000e+00)))*(f240*f240));
			}
			else
			{
				highp vec3 v241;
				v241.xyz = (v233*pc6_h[0].www);
				f232 = pow((1.000000e+00+(-clamp(dot(v241,v241),0.000000e+00,1.000000e+00))),pc6_h[1].w);
			}
			if (((u183&2u)==2u))
			{
				highp float f242;
				f242 = clamp(((dot(v234,(-(-pc6_h[2].xyz)))+(-pc6_h[3].x))*pc6_h[3].y),0.000000e+00,1.000000e+00);
				f232 = (f232*(f242*f242));
			}
			highp float f243;
			highp float f244;
			f244 = h182;
			f243 = (f232*f244);
			f232 = f243;
			highp float f245;
			f245 = mix((f175+f178),f175,f175);
			highp float f246;
			f246 = ((!(bool(u181))&&(f177>0.000000e+00)))?(f245):(1.000000e+00);
			highp float f247;
			f247 = (f243*min(1.000000e+00,f246));
			f232 = f247;
			highp float f248;
			f248 = h235;
			highp float f249;
			f249 = 3.183099e-01;
			v180.xyz = min(vec3(6.500000e+04,6.500000e+04,6.500000e+04),((vec3((f248*f247))*pc6_h[1].xyz)*vec3(f249)));
			highp float f250;
			f250 = 3.141593e+00;
			highp vec3 v251;
			v251.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
			vec3 v252;
			v252.xyz = min(vec3(6.500000e+04,6.500000e+04,6.500000e+04),(((vec3(f247)*pc6_h[1].xyz)*vec3((1.0/(f250))))*v251));
			v179.xyz = (v165+v252);
		}
		v32.xyz = v179;
		v30.xyz = v180;
	}
	v31.xyz = v30;
	if ((bool((u174&u7))&&(i3>1)))
	{
		highp float f253;
		highp float f254;
		f254 = h28;
		f253 = f254;
		highp float f255;
		f255 = float((bool(v26.x)&&bool(float(u6))));
		highp float f256;
		f256 = v26.y;
		vec3 v257;
		v257.xyz = v32;
		highp vec3 v258;
		v258.xyz = v30;
		uint u259;
		float h260;
		uint u261;
		u261 = uint(pc5_h[3].w);
		h260 = 1.000000e+00;
		u259 = 0u;
		if (((u261&4u)==4u))
		{
			uint u262;
			u259 = 1u;
			u262 = 0u;
			if (((u261&1u)==1u))
			{
				highp vec3 v263;
				v263.xyz = (v42+(-pc5_h[0].xyz));
				highp vec3 v264;
				v264.xyz = abs(v263);
				highp float f265;
				f265 = max(max(v264.x,v264.y),v264.z);
				bool b266;
				b266 = (f265==v264.x);
				bool b267;
				b267 = (!(b266)&&(f265==v264.y));
				bool b268;
				b268 = (!(b266)&&!(b267));
				u262 = ((uint(int((b266&&(f265==v263.x))))+uint(((2*int(b267))+int((b267&&(f265==v263.y))))))+uint(((4*int(b268))+int((b268&&(f265==v263.z))))));
			}
			highp vec4 v269;
			v269.xyzw = (pc5_h[int((13u+(u262*4u)))]+((pc5_h[int((12u+(u262*4u)))]*v42.zzzz)+((pc5_h[int((11u+(u262*4u)))]*v42.yyyy)+(pc5_h[int((10u+(u262*4u)))]*v42.xxxx))));
			highp vec2 v270;
			v270.xy = (v269.xy/v269.ww);
			highp vec4 v271;
			v271.xyzw = pc5_h[int((4u+u262))];
			highp vec4 v272;
			v272.xyzw = pc5_h[int((4u+u262))];
			if (all(bvec2(uvec2(greaterThanEqual(v270,v271.xy))*uvec2(lessThanEqual(v270,v272.zw)))))
			{
				highp vec2 v273;
				v273.xy = (v270*pc0_h[3].xy);
				vec4 v274;
				float h275;
				float h276;
				h276 = pc5_h[3].z;
				h275 = h276;
				highp float f277;
				f277 = h275;
				highp float f278;
				f278 = h275;
				vec4 v279;
				v279.xyzw = clamp(((textureGatherOffset(ps3,((floor(v273)+vec2(5.000000e-01,5.000000e-01))*pc0_h[3].zw),ivec2(0,0))*vec4(f277))+(-vec4(((min(v269.z,9.999900e-01)*f278)+-1.000000e+00)))),vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00),vec4(1.000000e+00,1.000000e+00,1.000000e+00,1.000000e+00));
				v274.xyzw = v279;
				vec2 v280;
				vec2 v281;
				v281.xy = fract(v273);
				v280.xy = v281;
				vec2 v282;
				v282.xy = mix(v274.wx,v274.zy,v280.xx);
				highp float f283;
				highp float f284;
				f284 = clamp(mix(v282.x,v282.y,v280.y),0.000000e+00,1.000000e+00);
				f283 = f284;
				highp float f285;
				f285 = 1.000000e+00;
				highp float f286;
				f286 = 1.000000e+00;
				float h287;
				h287 = mix(f285,(f283*f283),f286);
				h260 = h287;
			}
		}
		if (((u261&3u)!=0u))
		{
			highp float f288;
			highp vec3 v289;
			v289.xyz = (pc5_h[0].xyz+(-v42));
			highp vec3 v290;
			v290.xyz = normalize(v289);
			float h291;
			highp vec3 v292;
			v292.xyz = v44;
			float h293;
			h293 = dot(v292,v290);
			h291 = max(0.000000e+00,h293);
			if ((pc5_h[1].w==0.000000e+00))
			{
				highp float f294;
				f294 = dot(v289,v289);
				highp float f295;
				f295 = (f294*(pc5_h[0].w*pc5_h[0].w));
				highp float f296;
				f296 = clamp((1.000000e+00+(-(f295*f295))),0.000000e+00,1.000000e+00);
				f288 = ((1.0/((f294+1.000000e+00)))*(f296*f296));
			}
			else
			{
				highp vec3 v297;
				v297.xyz = (v289*pc5_h[0].www);
				f288 = pow((1.000000e+00+(-clamp(dot(v297,v297),0.000000e+00,1.000000e+00))),pc5_h[1].w);
			}
			if (((u261&2u)==2u))
			{
				highp float f298;
				f298 = clamp(((dot(v290,(-(-pc5_h[2].xyz)))+(-pc5_h[3].x))*pc5_h[3].y),0.000000e+00,1.000000e+00);
				f288 = (f288*(f298*f298));
			}
			highp float f299;
			highp float f300;
			f300 = h260;
			f299 = (f288*f300);
			f288 = f299;
			highp float f301;
			f301 = mix((f253+f256),f253,f253);
			highp float f302;
			f302 = ((!(bool(u259))&&(f255>0.000000e+00)))?(f301):(1.000000e+00);
			highp float f303;
			f303 = (f299*min(1.000000e+00,f302));
			f288 = f303;
			highp float f304;
			f304 = h291;
			highp float f305;
			f305 = 3.183099e-01;
			v258.xyz = min(vec3(6.500000e+04,6.500000e+04,6.500000e+04),(v30+((vec3((f304*f303))*pc5_h[1].xyz)*vec3(f305))));
			highp float f306;
			f306 = 3.141593e+00;
			highp vec3 v307;
			v307.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
			vec3 v308;
			v308.xyz = min(vec3(6.500000e+04,6.500000e+04,6.500000e+04),(((vec3(f303)*pc5_h[1].xyz)*vec3((1.0/(f306))))*v307));
			v257.xyz = (v32+v308);
		}
		v32.xyz = v257;
		v31.xyz = v258;
	}
	if ((bool((u174&u9))&&(i3>2)))
	{
		highp float f309;
		highp float f310;
		f310 = h28;
		f309 = f310;
		highp float f311;
		f311 = float((bool(v26.x)&&bool(float(u8))));
		highp float f312;
		f312 = v26.y;
		vec3 v313;
		v313.xyz = v32;
		highp vec3 v314;
		v314.xyz = v31;
		uint u315;
		float h316;
		uint u317;
		u317 = uint(pc4_h[3].w);
		h316 = 1.000000e+00;
		u315 = 0u;
		if (((u317&4u)==4u))
		{
			uint u318;
			u315 = 1u;
			u318 = 0u;
			if (((u317&1u)==1u))
			{
				highp vec3 v319;
				v319.xyz = (v42+(-pc4_h[0].xyz));
				highp vec3 v320;
				v320.xyz = abs(v319);
				highp float f321;
				f321 = max(max(v320.x,v320.y),v320.z);
				bool b322;
				b322 = (f321==v320.x);
				bool b323;
				b323 = (!(b322)&&(f321==v320.y));
				bool b324;
				b324 = (!(b322)&&!(b323));
				u318 = ((uint(int((b322&&(f321==v319.x))))+uint(((2*int(b323))+int((b323&&(f321==v319.y))))))+uint(((4*int(b324))+int((b324&&(f321==v319.z))))));
			}
			highp vec4 v325;
			v325.xyzw = (pc4_h[int((13u+(u318*4u)))]+((pc4_h[int((12u+(u318*4u)))]*v42.zzzz)+((pc4_h[int((11u+(u318*4u)))]*v42.yyyy)+(pc4_h[int((10u+(u318*4u)))]*v42.xxxx))));
			highp vec2 v326;
			v326.xy = (v325.xy/v325.ww);
			highp vec4 v327;
			v327.xyzw = pc4_h[int((4u+u318))];
			highp vec4 v328;
			v328.xyzw = pc4_h[int((4u+u318))];
			if (all(bvec2(uvec2(greaterThanEqual(v326,v327.xy))*uvec2(lessThanEqual(v326,v328.zw)))))
			{
				highp float f329;
				highp float f330;
				f330 = 1.000000e+00;
				f329 = f330;
				highp float f331;
				f331 = 1.000000e+00;
				highp float f332;
				f332 = 1.000000e+00;
				float h333;
				h333 = mix(f331,(f329*f329),f332);
				h316 = h333;
			}
		}
		if (((u317&3u)!=0u))
		{
			highp float f334;
			highp vec3 v335;
			v335.xyz = (pc4_h[0].xyz+(-v42));
			highp vec3 v336;
			v336.xyz = normalize(v335);
			float h337;
			highp vec3 v338;
			v338.xyz = v44;
			float h339;
			h339 = dot(v338,v336);
			h337 = max(0.000000e+00,h339);
			if ((pc4_h[1].w==0.000000e+00))
			{
				highp float f340;
				f340 = dot(v335,v335);
				highp float f341;
				f341 = (f340*(pc4_h[0].w*pc4_h[0].w));
				highp float f342;
				f342 = clamp((1.000000e+00+(-(f341*f341))),0.000000e+00,1.000000e+00);
				f334 = ((1.0/((f340+1.000000e+00)))*(f342*f342));
			}
			else
			{
				highp vec3 v343;
				v343.xyz = (v335*pc4_h[0].www);
				f334 = pow((1.000000e+00+(-clamp(dot(v343,v343),0.000000e+00,1.000000e+00))),pc4_h[1].w);
			}
			if (((u317&2u)==2u))
			{
				highp float f344;
				f344 = clamp(((dot(v336,(-(-pc4_h[2].xyz)))+(-pc4_h[3].x))*pc4_h[3].y),0.000000e+00,1.000000e+00);
				f334 = (f334*(f344*f344));
			}
			highp float f345;
			highp float f346;
			f346 = h316;
			f345 = (f334*f346);
			f334 = f345;
			highp float f347;
			f347 = mix((f309+f312),f309,f309);
			highp float f348;
			f348 = ((!(bool(u315))&&(f311>0.000000e+00)))?(f347):(1.000000e+00);
			highp float f349;
			f349 = (f345*min(1.000000e+00,f348));
			f334 = f349;
			highp float f350;
			f350 = h337;
			highp float f351;
			f351 = 3.183099e-01;
			v314.xyz = min(vec3(6.500000e+04,6.500000e+04,6.500000e+04),(v31+((vec3((f350*f349))*pc4_h[1].xyz)*vec3(f351))));
			highp float f352;
			f352 = 3.141593e+00;
			highp vec3 v353;
			v353.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
			vec3 v354;
			v354.xyz = min(vec3(6.500000e+04,6.500000e+04,6.500000e+04),(((vec3(f349)*pc4_h[1].xyz)*vec3((1.0/(f352))))*v353));
			v313.xyz = (v32+v354);
		}
		v32.xyz = v313;
		v31.xyz = v314;
	}
	if ((bool((u174&u11))&&(i3>3)))
	{
		highp float f355;
		highp float f356;
		f356 = h28;
		f355 = f356;
		highp float f357;
		f357 = float((bool(v26.x)&&bool(float(u10))));
		highp float f358;
		f358 = v26.y;
		vec3 v359;
		v359.xyz = v32;
		highp vec3 v360;
		v360.xyz = v31;
		uint u361;
		float h362;
		uint u363;
		u363 = uint(pc3_h[3].w);
		h362 = 1.000000e+00;
		u361 = 0u;
		if (((u363&4u)==4u))
		{
			uint u364;
			u361 = 1u;
			u364 = 0u;
			if (((u363&1u)==1u))
			{
				highp vec3 v365;
				v365.xyz = (v42+(-pc3_h[0].xyz));
				highp vec3 v366;
				v366.xyz = abs(v365);
				highp float f367;
				f367 = max(max(v366.x,v366.y),v366.z);
				bool b368;
				b368 = (f367==v366.x);
				bool b369;
				b369 = (!(b368)&&(f367==v366.y));
				bool b370;
				b370 = (!(b368)&&!(b369));
				u364 = ((uint(int((b368&&(f367==v365.x))))+uint(((2*int(b369))+int((b369&&(f367==v365.y))))))+uint(((4*int(b370))+int((b370&&(f367==v365.z))))));
			}
			highp vec4 v371;
			v371.xyzw = (pc3_h[int((13u+(u364*4u)))]+((pc3_h[int((12u+(u364*4u)))]*v42.zzzz)+((pc3_h[int((11u+(u364*4u)))]*v42.yyyy)+(pc3_h[int((10u+(u364*4u)))]*v42.xxxx))));
			highp vec2 v372;
			v372.xy = (v371.xy/v371.ww);
			highp vec4 v373;
			v373.xyzw = pc3_h[int((4u+u364))];
			highp vec4 v374;
			v374.xyzw = pc3_h[int((4u+u364))];
			if (all(bvec2(uvec2(greaterThanEqual(v372,v373.xy))*uvec2(lessThanEqual(v372,v374.zw)))))
			{
				highp float f375;
				highp float f376;
				f376 = 1.000000e+00;
				f375 = f376;
				highp float f377;
				f377 = 1.000000e+00;
				highp float f378;
				f378 = 1.000000e+00;
				float h379;
				h379 = mix(f377,(f375*f375),f378);
				h362 = h379;
			}
		}
		if (((u363&3u)!=0u))
		{
			highp float f380;
			highp vec3 v381;
			v381.xyz = (pc3_h[0].xyz+(-v42));
			highp vec3 v382;
			v382.xyz = normalize(v381);
			float h383;
			highp vec3 v384;
			v384.xyz = v44;
			float h385;
			h385 = dot(v384,v382);
			h383 = max(0.000000e+00,h385);
			if ((pc3_h[1].w==0.000000e+00))
			{
				highp float f386;
				f386 = dot(v381,v381);
				highp float f387;
				f387 = (f386*(pc3_h[0].w*pc3_h[0].w));
				highp float f388;
				f388 = clamp((1.000000e+00+(-(f387*f387))),0.000000e+00,1.000000e+00);
				f380 = ((1.0/((f386+1.000000e+00)))*(f388*f388));
			}
			else
			{
				highp vec3 v389;
				v389.xyz = (v381*pc3_h[0].www);
				f380 = pow((1.000000e+00+(-clamp(dot(v389,v389),0.000000e+00,1.000000e+00))),pc3_h[1].w);
			}
			if (((u363&2u)==2u))
			{
				highp float f390;
				f390 = clamp(((dot(v382,(-(-pc3_h[2].xyz)))+(-pc3_h[3].x))*pc3_h[3].y),0.000000e+00,1.000000e+00);
				f380 = (f380*(f390*f390));
			}
			highp float f391;
			highp float f392;
			f392 = h362;
			f391 = (f380*f392);
			f380 = f391;
			highp float f393;
			f393 = mix((f355+f358),f355,f355);
			highp float f394;
			f394 = ((!(bool(u361))&&(f357>0.000000e+00)))?(f393):(1.000000e+00);
			highp float f395;
			f395 = (f391*min(1.000000e+00,f394));
			f380 = f395;
			highp float f396;
			f396 = h383;
			highp float f397;
			f397 = 3.183099e-01;
			v360.xyz = min(vec3(6.500000e+04,6.500000e+04,6.500000e+04),(v31+((vec3((f396*f395))*pc3_h[1].xyz)*vec3(f397))));
			highp float f398;
			f398 = 3.141593e+00;
			highp vec3 v399;
			v399.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
			vec3 v400;
			v400.xyz = min(vec3(6.500000e+04,6.500000e+04,6.500000e+04),(((vec3(f395)*pc3_h[1].xyz)*vec3((1.0/(f398))))*v399));
			v359.xyz = (v32+v400);
		}
		v32.xyz = v359;
		v31.xyz = v360;
	}
	if (((pc6_h[2].w>1.000000e-01)&&(float(i12)>5.000000e-01)))
	{
		vec3 v401;
		v401.xyz = v32;
		highp float f402;
		f402 = distance(v33,v22);
		float h403;
		float h404;
		h404 = f402;
		h403 = h404;
		if ((h403<2.500000e+03))
		{
			vec3 v405;
			vec3 v406;
			v406.xyz = normalize((normalize((pc6_h[0].xyz+(-v42)))+v43));
			v405.xyz = v406;
			highp vec3 v407;
			highp vec3 v408;
			v408.xyz = cross(v44,v405);
			v407.xyz = v408;
			float h409;
			h409 = (max(0.000000e+00,dot(v44,v405))*2.441406e-04);
			float h410;
			highp float f411;
			f411 = (h409*h409);
			highp float f412;
			f412 = 2.441406e-04;
			float h413;
			h413 = (f412/(dot(v407,v407)+f411));
			h410 = h413;
			vec3 v414;
			v414.xyz = v30;
			v401.xyz = (v32+((((v414*vec3(clamp((1.000000e+00+(-((h403+-1.250000e+03)/1.250000e+03))),0.000000e+00,1.000000e+00)))*vec3(2.539063e-01,2.539063e-01,2.539063e-01))*vec3(min((h410*h410),h20)))*v52));
		}
		v32.xyz = v401;
	}
	v25.xyzw = in_TEXCOORD7;
	highp float f415;
	f415 = h28;
	vec3 v416;
	v416.xyz = max((v31*((vec3((pc1_h[2].w*f415))*pc2_h[0].xyz)*pc2_h[0].www)),vec3(1.000000e+00,1.000000e+00,1.000000e+00));
	v25.xyz = (in_TEXCOORD7.xyz*v416);
	vec4 v417;
	v417.xyzw = mix(v25,vec4(0.000000e+00,0.000000e+00,0.000000e+00,1.000000e+00),vec4(h16));
	v24.xyz = ((v32*v417.www)+v417.xyz);
	v24.w = 1.000000e+00;
	float h418;
	h418 = gl_FragCoord.z;
	v24.w = h418;
	vec3 v419;
	v419.xyz = min(v24.xyz,vec3(6.500000e+04,6.500000e+04,6.500000e+04));
	v24.xyz = v419;
	float h420;
	h420 = f21;
	v24.xyz = (v419*vec3(h420));
	uint u421;
	u421 = uint(((i15>>1)&15));
	if (bool(u421))
	{
		v24.xyz = v68;
		v24.w = 1.000000e+00;
	}
	out_Target0.xyzw = v24;
}

// Compiled by HLSLCC 0.73
// @Inputs: f4;0:in_TEXCOORD10_centroid,f4;1:in_TEXCOORD11_centroid,f4;2:in_TEXCOORD7,f4;3:in_TEXCOORD8,f4;4:in_TEXCOORD14,f4;-1:gl_FragCoord
// @Outputs: f4;0:out_Target0
// @PackedGlobals: bShadowReceiveBiasScale(h:0,1),NumDynamicPointLights(i:0,1),bLMPValid(u:0,1),bUseLightMapSkyLight(u:4,1)
// @PackedUB: View(0): View_WorldCameraOrigin(268,3),View_PreViewTranslation(280,3),View_ViewSizeAndInvSize(520,4),View_LocalLightShadowsSize(540,4),View_PreExposure(546,1),View_PrtDebugData(992,4),View_PrtFlag(976,1),View_ViewRectMin(516,4),View_GGXTweak(550,1),View_ReflectionCubemapMaxMip(552,1),View_IndirectLightingColorScale(556,3),View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight(560,3),View_MobileSkyIrradianceEnvironmentMap_0(564,4),View_MobileSkyIrradianceEnvironmentMap_1(568,4),View_MobileSkyIrradianceEnvironmentMap_2(572,4),View_MobileSkyIrradianceEnvironmentMap_3(576,4),View_MobileSkyIrradianceEnvironmentMap_4(580,4),View_MobileSkyIrradianceEnvironmentMap_5(584,4),View_MobileSkyIrradianceEnvironmentMap_6(588,4),View_SkyLightColor(620,4),View_LightMapSkyLightColor(624,4),View_SkyLightSAParameters(636,4),View_SpecularOnlyViewmodeMask(680,1)
// @PackedUB: MobileBasePass(1): MobileBasePass_CulledGridSize(4,4),MobileBasePass_LightGridZParams(8,4),MobileBasePass_Fog_ExponentialFogEnvLightingAndScale(44,4),MobileBasePass_UseCSM(14,1),MobileBasePass_UseFakeSpec(15,1),MobileBasePass_LightGridPixelSizeShift(0,1)
// @PackedUB: MobileDirectionalLight(2): MobileDirectionalLight_DirectionalLightColor(0,4),MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition(4,4),MobileDirectionalLight_DirectionalLightShadowSize(8,4),MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale(12,4),MobileDirectionalLight_DirectionalLightShadowDistances(16,4),MobileDirectionalLight_DirectionalLightShadowIntensityScale(20,4),MobileDirectionalLight_DirectionalLightScreenToShadow(24,32)
// @PackedUB: MobileMovablePointLight3(3): MobileMovablePointLight3_LightPositionAndInvRadius(4,4),MobileMovablePointLight3_LightColorAndFalloffExponent(8,4),MobileMovablePointLight3_SpotLightDirectionAndSpecularScale(12,4),MobileMovablePointLight3_SpotLightAnglesAndSoftTransitionScaleAndLightShadowType(16,4),MobileMovablePointLight3_LightShadowmapMinMax(20,24),MobileMovablePointLight3_LightShadowWorldToShadowMatrix(44,96),MobileMovablePointLight3_LightIDMask(0,1),MobileMovablePointLight3_bUseDirLightShadowEnhance(1,1)
// @PackedUB: MobileMovablePointLight2(4): MobileMovablePointLight2_LightPositionAndInvRadius(4,4),MobileMovablePointLight2_LightColorAndFalloffExponent(8,4),MobileMovablePointLight2_SpotLightDirectionAndSpecularScale(12,4),MobileMovablePointLight2_SpotLightAnglesAndSoftTransitionScaleAndLightShadowType(16,4),MobileMovablePointLight2_LightShadowmapMinMax(20,24),MobileMovablePointLight2_LightShadowWorldToShadowMatrix(44,96),MobileMovablePointLight2_LightIDMask(0,1),MobileMovablePointLight2_bUseDirLightShadowEnhance(1,1)
// @PackedUB: MobileMovablePointLight1(5): MobileMovablePointLight1_LightPositionAndInvRadius(4,4),MobileMovablePointLight1_LightColorAndFalloffExponent(8,4),MobileMovablePointLight1_SpotLightDirectionAndSpecularScale(12,4),MobileMovablePointLight1_SpotLightAnglesAndSoftTransitionScaleAndLightShadowType(16,4),MobileMovablePointLight1_LightShadowmapMinMax(20,24),MobileMovablePointLight1_LightShadowWorldToShadowMatrix(44,96),MobileMovablePointLight1_LightIDMask(0,1),MobileMovablePointLight1_bUseDirLightShadowEnhance(1,1)
// @PackedUB: MobileMovablePointLight0(6): MobileMovablePointLight0_LightPositionAndInvRadius(4,4),MobileMovablePointLight0_LightColorAndFalloffExponent(8,4),MobileMovablePointLight0_SpotLightDirectionAndSpecularScale(12,4),MobileMovablePointLight0_SpotLightAnglesAndSoftTransitionScaleAndLightShadowType(16,4),MobileMovablePointLight0_LightShadowmapMinMax(20,24),MobileMovablePointLight0_LightShadowWorldToShadowMatrix(44,96),MobileMovablePointLight0_LightIDMask(0,1),MobileMovablePointLight0_bUseDirLightShadowEnhance(1,1)
// @PackedUB: MobileReflectionCapture(7): MobileReflectionCapture_Params(0,4),MobileReflectionCapture_ReflectionColor(4,4)
// @PackedUBCopies: 0:268-7:h:0:3,0:280-7:h:4:3,0:520-7:h:8:4,0:540-7:h:12:4,0:546-7:h:16:1,0:992-7:h:20:4,0:976-7:i:0:1,0:516-7:m:0:4,0:550-7:m:4:1,0:552-7:m:8:1,0:556-7:m:12:3,0:560-7:m:16:3,0:564-7:m:20:28,0:620-7:m:48:8,0:636-7:m:56:4,0:680-7:m:60:1,1:4-0:h:0:8,1:44-0:h:8:4,1:14-0:i:0:1,1:15-0:i:4:1,1:0-0:u:0:1,2:0-1:h:0:56,3:4-5:h:0:136,3:0-5:u:0:1,3:1-5:u:4:1,4:4-4:h:0:136,4:0-4:u:0:1,4:1-4:u:4:1,5:4-3:h:0:136,5:0-3:u:0:1,5:1-3:u:4:1,6:4-2:h:0:136,6:0-2:u:0:1,6:1-2:u:4:1,7:0-6:m:0:8
// @Samplers: MobileDirectionalLight_DirectionalLightShadowTexture2(0:1[MobileDirectionalLight_ShadowDepthTextureComparisonSampler]),MobileReflectionCapture_Texture(1:1[MobileReflectionCapture_TextureSampler]),MobileBasePass_CulledLightDataGrid(2:1),View_LocalLightShadows(3:1[View_LocalLightShadowsSampler])

//NewMaterial/FLocalVertexFactory/TMobileBasePassPSFMobileMovableDirectionalLightAndPrtLighingPolicyINT32_MAXHDRLinear64Skylight/0_8802b1aa7c370742

/*

*/

