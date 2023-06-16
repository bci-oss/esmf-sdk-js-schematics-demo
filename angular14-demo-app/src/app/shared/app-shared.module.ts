/** Generated from RBS SDK JS Angular Schematics - PLEASE DO NOT CHANGE IT **/
import {HttpClient} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {ExportConfirmationDialog} from 'src/app/shared/components/export-confirmation-dialog/export-confirmation-dialog.component';
import {ResizeColumnDirective} from 'src/app/shared/directives/resize-column.directive';
import {ValidateInputDirective} from 'src/app/shared/directives/validate-input.directive';
import {ShowDescriptionPipe} from 'src/app/shared/pipes/show-description.pipe';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {HorizontalOverflowDirective} from 'src/app/shared/directives/horizontal-overflow.directive';
import {NgIf} from '@angular/common';
import {SearchStringPipe} from 'src/app/shared/pipes/search-string.pipe';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    imports: [
        TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
        MatButtonModule,
        MatDialogModule,
        MatCheckboxModule,
        MatIconModule,
        FormsModule,
        NgIf,
    ],
    exports: [
        TranslateModule,
        ExportConfirmationDialog,
        ResizeColumnDirective,
        ValidateInputDirective,
        ShowDescriptionPipe,
        HorizontalOverflowDirective,
        SearchStringPipe,
    ],
    declarations: [
        ExportConfirmationDialog,
        ResizeColumnDirective,
        ValidateInputDirective,
        ShowDescriptionPipe,
        HorizontalOverflowDirective,
        SearchStringPipe,
    ],
})
export class AppSharedModule {}
