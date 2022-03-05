import React from 'react'
import Table from './Table'
import makeData from './makeData'

const Main = ( ) => {

    // const bonusColumns= [
    //     {
    //         Headers: ['azeoaze','54848', '487489']
    //     }
    // ]

    const columns = React.useMemo(
        () => [{
            Header: 'TERRAFORMERS CHART-ROOM',
            columns: [{
                    Header: 'Type',
                    accessor: 'type',
                },
                {
                    Header: 'UnboundToken',
                    accessor: 'token',
                },
                {
                    Header: 'SYM',
                    accessor: 'sym',
                },

                {
                    Header: 'TOTAL',
                    columns: [{
                            Header: 'Lands Minted',
                            accessor: 'TL',
                        },
                        {
                            Header: 'Mining Power',
                            accessor: 'TMP',
                        },
                        {
                            Header: 'Backed Wax',
                            accessor: 'TWB',
                        },
                        {
                            Header: 'Circulating Supply',
                            accessor: 'TAC',
                        },
                        {
                            Header: 'equilibrium',
                            accessor: 'TE',
                        }],
                }
            ]
            }
        ], []
    )
    
    const data = React.useMemo(() => makeData(1), [])
    // const data = React.useMemo( () => {},[])

    return (
      <>
        <Table columns={columns} data={data} />
      </>
    )

}

export default Main