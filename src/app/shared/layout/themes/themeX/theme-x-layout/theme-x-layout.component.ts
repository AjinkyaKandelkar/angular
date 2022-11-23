import { Injector, Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ThemesLayoutBaseComponent } from '@app/shared/layout/themes/themes-layout-base.component';
import { UrlHelper } from '@shared/helpers/UrlHelper';
import { AppConsts } from '@shared/AppConsts';
import { DateTimeService } from '@app/shared/common/timing/date-time.service';
@Component({
  selector: 'app-theme-x-layout',
  templateUrl: './theme-x-layout.component.html',
  styleUrls: ['./theme-x-layout.component.css']
})
export class ThemeXLayoutComponent  extends ThemesLayoutBaseComponent implements OnInit {

  remoteServiceBaseUrl: string = AppConsts.remoteServiceBaseUrl;

    constructor(
        injector: Injector, 
        _dateTimeService: DateTimeService,
        @Inject(DOCUMENT) private document: Document) {
        super(injector, _dateTimeService);
    }

    ngOnInit() {
        this.installationMode = UrlHelper.isInstallUrl(location.href);
        if(this.currentTheme.baseSettings.menu.defaultMinimizedAside){
            this.document.body.setAttribute('data-kt-aside-minimize','on');
        }
    }

}
