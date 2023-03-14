import { KaagazDocument } from "./kaagaz-document";

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
    pageType: KaagazPageType;
    printType: KaagazPrintType;
    fileToPrint: KaagazDocument;
    pageLayout: kaagazPageLayout;
    collateType: KaagazCollateType;
    pagesToPrint: KaagazPagesToPrint;
    pageOrientation: KaagazPageOrientation;
}
