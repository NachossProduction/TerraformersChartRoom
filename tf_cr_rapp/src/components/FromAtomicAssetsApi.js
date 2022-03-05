// import DisplayResponseRaw from "./DisplayResponseRaw";


// const FromAtomicAssetsApi = (props) => {

//     let baseURL = 'https://wax.api.atomicassets.io/atomicassets/v1/';
//     let searchThrough = props?.searchThrough;
//     let collection_name = props.collection_name;
//     let schema_name = props?.schema_name;

//     let page = props?.page;
//     let limit = props?.limit;
//     let order = props?.order;
//     let match = props?.match;

//     const buildURL = () => {


//         let simpleGET = baseURL + searchThrough + '?' 
//             + 'collection_name=' + collection_name + '&'
//             + 'schema_name=' + schema_name
//             ;
//         let statsGet = baseURL + searchThrough
//             + '/' + collection_name 
//             + '/' + schema_name + '/stats'
//             ;

//         switch (searchThrough) {
//             case 'assets':
//                 break;
//             case 'collections':
//                 break;
//             case 'schemas':
//                 return (
//                     <span className="containerData">
//                         <h3>AtomicAsset ApiCall</h3>
//                          <h4>GET</h4>
//                         <p className="get">{simpleGET}</p> <hr/><hr/>
//                         <DisplayResponseRaw url={simpleGET}/>

//                           <h4>Stats</h4>
//                         <p className="stats">{statsGet}</p> <hr/><hr/>
//                         <DisplayResponseRaw url={statsGet}/>
                     
//                     </span>
//                 )
//             case 'templates':
//                 break;
//                 default:
//                     break;
//         }
//         return 'out of switch in FromAAA'
//     }




//     return (<>
//        { buildURL() }
//     </>);
// }

// export default FromAtomicAssetsApi;