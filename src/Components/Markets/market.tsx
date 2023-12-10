import React, { useEffect, useRef, useState } from 'react'
import { getMarkets } from '../../Api/market-api'
import MarketList from './market-list';
import { IMarketList } from '../../Models/market-list';
import { httpConfig } from '../../Utils/http';
const Market = () => {


    const [marketData, setMarketData] = useState<IMarketList[]>([]);
    const marketDataRef = useRef<IMarketList[]>([])
    const socket = useRef<any>();

    useEffect(() => {
        getMarketList();
    }, [])

    const getMarketList = async () => {
        const res = await getMarkets();
        setMarketData([...res.results])
        marketDataRef.current = res.results;
        handleSocket();
    }




    const handleSocket = () => {
        socket.current = new WebSocket(httpConfig().socketUrl);

        socket.current.onopen = () => {
            console.log('opened')
            const priceRequest = {
                "method": "sub_to_price_info"
            }
            socket.current.send(JSON.stringify(priceRequest))
        }

        socket.current.onmessage = (message: any) => {
            const data = JSON.parse(message.data)
            Object.entries(data).map((item: any) => {
                const market_id = item[0];
                const price_info = item[1];
                const index = marketDataRef.current.findIndex((a: IMarketList) => a.id == market_id)
                if (index > -1) {
                    marketDataRef.current[index].price_info = { ...price_info };
                    setMarketData([...marketDataRef.current])
                }
            })
        }

        socket.current.onclose = () => {
            console.log('closed')
        }
    }

    return (
        <>
            <div className='col-10 mx-auto  mt-5'>
                <div className='col-12 text-bold'>Markets</div>
                <div className='col-12 mt-3 overflow-auto'>
                    <MarketList marketData={marketData} />
                </div>
            </div>
        </>
    )
}

export default Market;