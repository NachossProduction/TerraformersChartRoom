// import axios from 'axios';

// const DisplayResponseRaw = (props)=> {

//     let getData = async (url) => {
//         let data = await axios.get(url).then(r => {
//             console.log('response api => ', {
//                 r,
//                 dat: r.data,
//             })
//             if (r.data.data && !(r.data.data instanceof Promise)) {
//                 return r.data.data;
//             }
//         }).catch( (e) => {
//             console.log('ErrorApiGet', e)
//         });
//         console.log('checkData', data)
//         setTimeout(()=> {
//             if (data && !(data instanceof Promise)) {
//                 return data;
//             }
//         }, 3000);
//     }

//     return (<>
//         <p>
//             {getData(props.url)}
//         </p>
//     </>);
// }
// export default DisplayResponseRaw;