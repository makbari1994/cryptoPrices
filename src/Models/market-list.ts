export interface IMarketList {
    id: string;
    code: string;
    volume_24h: string;
    market_cap: string;
    all_time_high: string;
    price_info: priceInfo;
}

interface priceInfo {
    change: string;
    created_at: string;
    max: string;
    min: string;
    price: string;
}