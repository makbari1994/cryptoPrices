export { };



declare global {

    interface String {
        formatNumber(this: string): string;
    }
}

String.prototype.formatNumber = function (this: string) {
    return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}