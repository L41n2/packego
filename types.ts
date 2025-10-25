import type { FC, SVGProps } from 'react';

export enum View {
    Packing = 'PACKING',
    List = 'LIST',
}

export enum Category {
    ComfortViaggio = 'Comfort e Viaggio',
    IgienePersonale = 'Igiene Personale',
    AbbigliamentoBase = 'Abbigliamento - Base e Intimo',
    AbbigliamentoGiornaliero = 'Abbigliamento - Giornaliero',
    AbbigliamentoEsterno = 'Abbigliamento - Esterno e Protezione',
    CalzatureAccessori = 'Calzature e Accessori',
    DocumentiSicurezza = 'Documenti e Sicurezza',
    SaluteFarmacia = 'Salute e Farmacia',
    TecnologiaVarie = 'Tecnologia e Varie',
}

export interface FoldOption {
    name: string;
    volumeMultiplier: number; // e.g., 1 for flat, 0.6 for rolled
    dimensions: {
        width: number;
        height: number;
    };
}

export interface Item {
    id: number;
    name: string;
    category: Category;
    icon: FC<SVGProps<SVGSVGElement>>;
    baseVolume: number; // Represents space units
    baseWeight: number; // in kilograms
    foldOptions: FoldOption[];
}

export interface PackedItem {
    instanceId: number;
    item: Item;
    fold: FoldOption;
}

export interface SuitcaseSettings {
    name: string;
    maxVolume: number;
    maxWeight: number;
    type: 'trolley' | 'backpack';
}

export interface GroupedItem {
    id: string;
    item: Item;
    fold: FoldOption;
    count: number;
    instanceIds: number[];
}
