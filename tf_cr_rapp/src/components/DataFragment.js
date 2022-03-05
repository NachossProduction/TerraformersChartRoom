

const DataFragment = (props) => {
    const result = () => {
        switch(props.code) {
            case 1:
                return (<>1</>);
            case 2: 
                return (<>2</>);
            case 3:
                return (<></>);
            case 4:
                return (<></>);
            case 5:
                return (<></>);
            case 6:
                return (<></>);
            case 7:
                return (<></>); 
            default:
                return (
                    <>
                        DataFragment
                    </>
                );
        }
    }

    return (result());

}

export default DataFragment;