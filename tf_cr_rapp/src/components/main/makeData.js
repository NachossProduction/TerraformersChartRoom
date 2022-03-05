import { axiosFetch } from "../data/axiosFetcher";

const makeData = () => {

    let init = () => {
        let m = 'MNR';
        let mineralDataInit = [
            makeYahToken("THC", "THC", m),
            makeYahToken("LSD", "LSD", m),
            makeYahToken("DMT", "DMT", m),
            makeYahToken("DEX", "DEX", m),
            makeYahToken("VITALIZE", "VITA", m),
            makeYahToken("ORICHALCUM", "ORIC", m),
            makeYahToken("VULCAN", "VULC", m),
            makeYahToken("MERCURY", "MERC", m),
            makeYahToken("JADE", "JADE", m),
            makeYahToken("MYTHRIL", "MYTH", m),
            makeYahToken("LOOP", "LOOP", m),
            makeYahToken("METEOR", "MTOR", m),
            makeYahToken("AZURESCENS", "AZUR", m),
            makeYahToken("GRAVITON", "GRAV", m),
            makeYahToken("EMERALD", "EMRLD", m),
            makeYahToken("TITANIUM", "TITAN", m),
            makeYahToken("PLUTONIUM", "PLUTO", m),
            makeYahToken("EXALTIUM", "EXALT", m),
            makeYahToken("EINSTEINIUM", "EINST", m),
            makeYahToken("AMETHYST", "AMTHY", m)
        ]


        // let v= 'variant';
        let v= 'VRA';
        let variantDataInit = [
            makeYahToken("ORGANIC", "ORGAN", v),
            makeYahToken("BIONIC", "BIONIC", v),
            makeYahToken("DIVINE", "DIVINE", v),
            makeYahToken("COSMIC", "COSMIC", v),
            makeYahToken("QUANTUM", "QUANT", v), 
       ];

       let tokenDataInit = [
        ...mineralDataInit, ...variantDataInit
       ]
       // thx pink.gg
       // this api handle CORS problems
       let testFetch = axiosFetch(
           'https://wax.api.atomicassets.io/atomicassets/v1/accounts/terraminingx'
       )
        console.log('TEST AXIOS FETCHER ', {
            testFetch,
        });
        return tokenDataInit;
    }

    let makeYahToken = ( token, sym, type ) => {
		return {
			token,
			sym,
            type,
			TL: 0, 
            TMP: 0, 
            TAC: 0, 
            TE: 0, 
            TWB: 0  
		}
	}
    // DATA TABLE 


  return init();



















}


export default makeData