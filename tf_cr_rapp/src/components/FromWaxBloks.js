

const FromWaxBloks = (props) => {

    let baseURL = 'https://wax.bloks.io/account/';
    let waxAccount = props.waxAccount;
    let account = props.account;
    let table = props.table;
    let scope = props.scope;

    const buildURL = () => {
        return baseURL + waxAccount +  '?loadContract=true&tab=tables&'
            + 'account=' + account +'&' 
            + 'table=' + table+'&' 
            + 'scope=' + scope
            ;
    }




    return (<>
       { buildURL() }
    </>);
}

export default FromWaxBloks;