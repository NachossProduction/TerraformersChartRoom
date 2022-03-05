
import axios from 'axios'

export const axiosFetch = async ( url ) => {

    let endpointUrl = 'http://wax.api.atomicassets.io/atomicassets/v1';

    let endpointUrl_Format = {
        index_position: 1,
        json: true,
        key_type: "",
        limit: "1000",
        lower_bound: null,
        reverse: false,
        show_payer: false,
        code: "terraminingx",
        table: "pools",
        scope: "unboundtoken",
    }

    let fetched = await axios.get(url, {
        // params: endpointUrl_Format,
        // responseType: 'json',

        headers: {
// 'Access-Control-Allow-Credentials': 'true',
'Access-Control-Allow-Headers': ',',
'Access-Control-Allow-Methods': 'OPTIONS, GET, PUT, POST',
'Access-Control-Allow-Orgin': '*',
'Accept': 'application/json',
// 'accept: application/json',
        },
    })
    .then((json = {}) => json.data)
    .then( (res) => {
        let strResponse = JSON.stringify(res);
        // let objResponse = JSON.parse(strResponse);

        return  res;
    })
    .catch( (err) => console.log('%c AXIOS GET ERROR ', 'color: purple', err ))
    .finally( (resu) => {
        // alert('Axios Fetcher Promise FINALLY ')

    });

    // fetched = fetched

    return fetched;
}

export const patchTargetedData = ({key, fetchedTarget, patchOn}) => {
    let patched = patchOn.get(key).useState(fetchedTarget);
    return patched;
}

export const reqBuilder = (props) => {



    // let load = () => {

    // }

    return (<></>
        // <ApiGetter from={props.from} params={props} />
    )
}