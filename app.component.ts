import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { SpeedDialComponent, SpeedDialItemModel } from '@syncfusion/ej2-angular-buttons';
/**
 * Default Speed Dial component
 */
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('popupTempSpeeddial')
    public speeddialObj:SpeedDialComponent;

    public items: SpeedDialItemModel[] = [
        {
            text: 'Produtos Não Vinculados',
            iconCss: 'speeddial-icons speeddial-icon-cut'
        },
        {
            text: 'Abaixo do estoque mínimo',
            iconCss: 'speeddial-icons speeddial-icon-copy'
        },
        {
            text: 'Acima do estoque máximo',
            iconCss: 'speeddial-icons speeddial-icon-paste'
        }
    ];

    public closeClick() {
        this.speeddialObj.hide();
    }

    public submitClick() {
        this.speeddialObj.hide();
    }
}
