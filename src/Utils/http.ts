
export interface ISettings {
    baseUrl: string;
    socketUrl: string;
}
export const httpConfig = (): ISettings => {
    const baseUrl: any = process.env.REACT_APP_BASE_URL;
    const socketUrl: any = process.env.REACT_APP_SOCKET_URL

    return {
        baseUrl,
        socketUrl
    }
}