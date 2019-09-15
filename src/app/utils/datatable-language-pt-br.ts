// Translate the datatables strings to PT-BR
import 'angular-datatables';

/**
 * Function to translate static strings into data table instance.
 * @params singularObj: string, The object into data table instance in singular.
 * @params pluralObj: string, The object into data table instance in plural.
 * @params noun: string, the noun of object into data table instance. M or F.
 * @returns ptBr: LanguageSettings
 */
export function ptBrDataTable(
    singularObj: string,
    pluralObj: string,
    noun: string): DataTables.LanguageSettings {

    let ptBr: DataTables.LanguageSettings;

    if (noun === 'M') {
        ptBr = {
            emptyTable: `Nenhum ${singularObj} encontrado`,
            info: `Mostrando de _START_ até _END_ de _TOTAL_ ${pluralObj}`,
            infoEmpty: `Mostrando 0 até 0 de 0 ${pluralObj}`,
            infoFiltered: `(Filtrados de _MAX_ ${pluralObj})`,
            lengthMenu: '_MENU_ resultados por página',
            loadingRecords: 'Carregando...',
            processing: 'Processando...',
            zeroRecords: `Nenhum ${singularObj} encontrado`,
            search: 'Pesquisar',
            paginate: {
                next: 'Próximo',
                previous: 'Anterior',
                first: 'Primeiro',
                last: 'Último'
            },
            aria: {
                sortAscending: ': Ordenar colunas de forma ascendente',
                sortDescending: ': Ordenar colunas de forma descendente'
            }
        };
    } else if (noun === 'F') {
        ptBr = {
            emptyTable: `Nenhuma ${singularObj} encontrada`,
            info: `Mostrando de _START_ até _END_ de _TOTAL_ ${pluralObj}`,
            infoEmpty: `Mostrando 0 até 0 de 0 ${pluralObj}`,
            infoFiltered: `(Filtradas de _MAX_ ${pluralObj})`,
            lengthMenu: '_MENU_ resultados por página',
            loadingRecords: 'Carregando...',
            processing: 'Processando...',
            zeroRecords: `Nenhuma ${singularObj} encontrada`,
            search: 'Pesquisar',
            paginate: {
                next: 'Próximo',
                previous: 'Anterior',
                first: 'Primeiro',
                last: 'Último'
            },
            aria: {
                sortAscending: ': Ordenar colunas de forma ascendente',
                sortDescending: ': Ordenar colunas de forma descendente'
            }
        };
    }
    return ptBr;
}
