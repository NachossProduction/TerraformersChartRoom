// import FromAtomicAssetsApi from "./FromAtomicAssetsApi";
// import FromWaxBloks from "./FromWaxBloks";

// const ApiGetter = (props) => {
//     let from = 'bloks' | 'atomic';

//     const apiCall = () => {
//         switch(props.from) {
//             case 'bloks': 
//                 let baseUrl = 'https://wax.bloks.io/account/' 
//                 return (<>
//                     <FromWaxBloks 
//                         waxAccount={props.waxAccount| undefined }
//                         account={props.account| undefined } 
//                         table={props.table| undefined } 
//                         scope={props.scope| undefined }
//                     />
//                 </>);
//             case 'atomic':
//                 return (<>
//                     <FromAtomicAssetsApi 
//                         searchThrough={props.search| undefined }
//                         collection_name={props.collection| undefined }
//                         schema_name={props?.schema| undefined }
//                     />
//                 </>);
//             default: 
//                 return (<>
//                     data
//                 </>)
//         | undefined }
        
//     | undefined }

//     return (
//         <>
//             <h2>ApiGetter</h2>
//             <hr/>
//             <div className="containerData">{apiCall(props) | undefined }</div>
//         </>
//     )
// | undefined }

// export default ApiGetter;