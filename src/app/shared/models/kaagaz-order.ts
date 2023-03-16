import { KaagazDocument } from "./kaagaz-document";

export enum KaagazOrderStatus {
    PLACING = 1,
    PLACED = 2,
    TRANSIT = 3,
    DELIVERED = 4,
    FAILED = 5
}

export enum KaagazPageType {
    A4 = 1,
    A5 = 2,
    A6 = 3,
}

export enum KaagazPageOrientation {
    PORTRAIT = 1,
    LANDSCAPE = 2,
}

export class KaagazPagesToPrintRange {
    start: number;
    end: number;
}

export class KaagazPagesToPrint {
    all: boolean;
    range: boolean;
    selected: boolean;
    selectedPages: string;
    pagesRange: KaagazPagesToPrintRange;
}

export enum kaagazPageLayout {
    ONE_on_ONE = 1,
    TWO_on_ONE = 2,
    THREE_on_ONE = 3,
    FOUR_on_ONE = 4,
    FIVE_on_ONE = 5,
    SIX_on_ONE = 6,
}

export enum KaagazPrintType {
    ONE_SIDED = 1,
    BOTH_SIDED = 2,
    BOOKLET_PRINTING = 3,
}

export enum KaagazCollateType {
    COLLATE = 1,
    STAPLE = 2,
    GROUP = 3,
}

export class KaagazOrder {
    copies: number;
    bill: KaagazOrderBill;
    pageType: KaagazPageType;
    printType: KaagazPrintType;
    fileToPrint: KaagazDocument;
    pageLayout: kaagazPageLayout;
    orderStatus: KaagazOrderStatus;
    collateType: KaagazCollateType;
    pagesToPrint: KaagazPagesToPrint;
    pageOrientation: KaagazPageOrientation;
}

export class KaagazOrderBill {
    // total: number;
    tax: number;
    deliveryCharges: number;
    grossTotal: number;

    constructor(public total: number) {
        this.tax = Math.floor(((total * 18) / 100) * 100) / 100;
        // this.tax = parseInt(((total * 18) / 100).toFixed(2), 10);
        this.deliveryCharges = total > 150 ? 0 : 50;
        this.grossTotal = Math.floor((total + this.tax + this.deliveryCharges) * 100) / 100;
    }
}