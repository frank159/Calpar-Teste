export enum StatusFilter {
    ALL = 'ALL',
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE'
}

export interface ClientData {
    Nome: string;
    Disponivel: boolean;
}
