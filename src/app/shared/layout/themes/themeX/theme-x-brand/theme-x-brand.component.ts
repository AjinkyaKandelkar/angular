import { Injector, Component, ViewEncapsulation, Inject, OnInit } from '@angular/core';
import { AppConsts } from '@shared/AppConsts';
import { AppComponentBase } from '@shared/common/app-component-base';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-theme-x-brand',
  templateUrl: './theme-x-brand.component.html',
  styleUrls: ['./theme-x-brand.component.css']
})
export class ThemeXBrandComponent  extends AppComponentBase{

  remoteServiceBaseUrl: string = AppConsts.remoteServiceBaseUrl;

  constructor(injector: Injector, @Inject(DOCUMENT) private document: Document) {
      super(injector);
  }

}
