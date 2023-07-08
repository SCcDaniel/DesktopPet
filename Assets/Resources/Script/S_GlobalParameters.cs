using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class S_GlobalParameters : MonoBehaviour
{
    //Malioc
    public void Malioc_EnvironmentDropdown(int optionIndex)
    {
        if (optionIndex == 0)
        {
            S_MaliOffineCompiler.ShaderEnvironment = S_MaliOffineCompiler.EEnvironment.UE4;
        }
    }
    public void Malioc_OnlySpillingVisiliable()
    {
        if (S_MaliOffineCompiler.bOnlySpilling)
            S_MaliOffineCompiler.bOnlySpilling = false;
        else
            S_MaliOffineCompiler.bOnlySpilling = true;
    }

}
