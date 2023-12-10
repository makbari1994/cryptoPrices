import React from 'react';
import { IMarketList } from '../../Models/market-list';


type propsType = {
    marketData: IMarketList[]
}
const MarketList = (props: propsType) => {

    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">coin</th>
                        <th scope="col">price</th>
                        <th scope="col">min price</th>
                        <th scope="col">max price</th>
                        <th scope="col">change</th>
                        <th scope="col">volume </th>
                        <th scope="col">market cap </th>
                        <th scope="col">all time high </th>

                    </tr>
                </thead>
                <tbody>
                    {props?.marketData?.map((item: IMarketList, index: number) => {
                        return (
                            <tr key={item.code}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.code}</td>
                                <td>{item.price_info.price?.formatNumber()}</td>
                                <td>{item.price_info.min?.formatNumber()}</td>
                                <td>{item.price_info.max?.formatNumber()}</td>
                                <td>{item.price_info.change}</td>
                                <td>{Number(item.volume_24h).toFixed(2)?.formatNumber()}</td>
                                <td>{Number(item.market_cap).toFixed(2)?.formatNumber()}</td>
                                <td>{Number(item.all_time_high).toFixed(2)?.formatNumber()}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </>
    )
}

export default MarketList;