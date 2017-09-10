import { AuDatatableParameters } from '../au-datatable-contracts/AuDatatableParameters';
import { AuDatatableFilter } from '../au-datatable-contracts/AuDatatableFilter';
export declare class AuDatatableFilterComponent {
    on_filter: Function;
    columns: Array<number>;
    btn_classes: string;
    filters: Array<AuDatatableFilter>;
    label_clear_filter: string;
    parameters: AuDatatableParameters;
    private amount_of_columns;
    private au_table_filter;
    private filter_elements;
    private active_filter_btn;
    private filter_values;
    attached(): void;
    detached(): void;
    should_generate_content(column: number): boolean;
    should_add_filter(filter: AuDatatableFilter, column: number): boolean;
    select_filter(event: any, filter: AuDatatableFilter, column: number): Promise<void>;
    is_selected_filter(filter: AuDatatableFilter, column: number): boolean;
    show_filters(event: any): void;
    input_changed(column: number): Promise<void>;
    clear_filter(event: any, column: number): Promise<void>;
    private get_columns_count();
    private hide_filter_dropdowns(event);
    private show_input_warning(event);
    private set_active_label_filter(event);
    private remove_filters_for_column(column);
    private remove_active_labels_for_column(column);
    private reset();
}
