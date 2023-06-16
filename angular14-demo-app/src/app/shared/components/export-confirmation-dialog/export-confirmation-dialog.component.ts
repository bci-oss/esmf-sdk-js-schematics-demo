/** Generated from RBS JS SDK Angular Schematics - PLEASE DO NOT CHANGE IT **/
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AfterViewInit, Component, Inject, ViewChild} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MatCheckbox} from '@angular/material/checkbox';
import {ChangeDetectorRef} from '@angular/core';

@Component({
    selector: 'export-confirmation-dialog',
    templateUrl: 'export-confirmation-dialog.component.html',
    styleUrls: ['./export-confirmation-dialog.component.scss'],
})
export class ExportConfirmationDialog implements AfterViewInit {
    @ViewChild('exportAllPages') exportAllPages!: MatCheckbox;
    @ViewChild('exportAllColumns') exportAllColumns!: MatCheckbox;

    dialogDescription = '';
    showAllColumnsBox = true;

    constructor(
        @Inject(MAT_DIALOG_DATA)
        public data: {
            extendedCsvExporter: boolean;
            allColumns: number;
            displayedColumns: number;
            maxExportRows: number;
        },
        public dialogRef: MatDialogRef<ExportConfirmationDialog>,
        private translateService: TranslateService,
        private cdRef: ChangeDetectorRef
    ) {}

    ngAfterViewInit() {
        this.showAllColumnsBox = this.data.displayedColumns === this.data.allColumns;

        this.setDialogDescription();
        this.cdRef.detectChanges();
    }

    setDialogDescription() {
        const {maxExportRows, allColumns, displayedColumns} = this.data;

        const isExportAllPagesChecked = this.exportAllPages.checked;
        const isExportAllColumnsChecked = this.exportAllColumns?.checked;

        if (isExportAllPagesChecked && isExportAllColumnsChecked) {
            this.dialogDescription = this.translateService.instant('exportData.description.caseOne', {
                maxExportRows,
                allColumns,
            });
        } else if (isExportAllPagesChecked && !isExportAllColumnsChecked) {
            this.dialogDescription = this.translateService.instant(
                displayedColumns > 1 ? 'exportData.description.caseTwo.plural' : 'exportData.description.caseTwo.singular',
                {
                    maxExportRows,
                    displayedColumns,
                }
            );
        } else if (!isExportAllPagesChecked && !isExportAllColumnsChecked) {
            this.dialogDescription = this.translateService.instant(
                displayedColumns > 1 ? 'exportData.description.caseThree.plural' : 'exportData.description.caseThree.singular',
                {
                    displayedColumns,
                }
            );
        } else if (!isExportAllPagesChecked && isExportAllColumnsChecked) {
            this.dialogDescription = this.translateService.instant('exportData.description.caseFour', {
                allColumns,
            });
        } else {
            this.dialogDescription = this.translateService.instant('exportData.description.default');
        }
    }

    closeDialog() {
        this.dialogRef.close();
    }

    exportData() {
        this.dialogRef.close({
            exportAllPages: this.exportAllPages.checked,
            exportAllColumns: this.exportAllColumns?.checked,
        });
    }
}
