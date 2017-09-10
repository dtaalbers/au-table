import { AuFilter } from './AuFilter';
export interface AuTableParameters {
    search_query: string;
    skip: number;
    page_size: number;
    total_records: number;
    table_data: Array<any>;
    current_page: number;
    sort_direction: string | undefined;
    sort_column: number;
    filters: Array<AuFilter>;
}
