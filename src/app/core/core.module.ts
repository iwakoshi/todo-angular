import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { HeaderComponent } from '@app/layout/header/header.component';

@NgModule({
    declarations: [
        HeaderComponent,
    ],
    imports: [
        SharedModule,
    ],
    exports: [
        SharedModule,
        HeaderComponent,
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: []
        };
    }
}
