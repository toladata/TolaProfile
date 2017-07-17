import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgxBarcodeModule } from 'ngx-barcode';
import { QRCodeModule } from 'angular2-qrcode';
import { QueueService } from '../shared/services/queue.service';
import { UserActions } from '../shared/actions/user.action';
import { HttpService } from '../shared/services/http.service';
import { NetworkService } from '../shared/services/network.service';
import { UserService } from '../shared/services/user.service';
import { ObjectHelper } from "./helpers/object.helper";
import { StorageService } from "./services/storage.service";
import { DictionaryService} from "./services/dictionary.service"
import * as localforage from 'localforage';
import Quagga from 'quagga';


export function initQueueService(queueService: QueueService): any {
  return () => {
    return queueService.load();
  }
}

// export function initDictionaryService(dictionaryService: DictionaryService): any {
//   return () => {
//     return dictionaryService.initDictionary();
//   }
// }

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgxBarcodeModule,
        QRCodeModule,
    ],
    providers: [
      { provide: 'localforage', useValue: localforage },
      { provide: 'Quagga', useValue: Quagga },
      UserActions,
      HttpService,
      UserService,
      NetworkService,
      StorageService,
      DictionaryService,
      ObjectHelper,
      QueueService,
      {
        provide: APP_INITIALIZER,
        useFactory: initQueueService,
        deps: [QueueService],
        multi: true
      },
      // {
      //   provide: APP_INITIALIZER,
      //   useFactory: initDictionaryService,
      //   deps: [DictionaryService],
      //   multi: true
      // }
    ],
    exports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgxBarcodeModule,
        QRCodeModule,
    ]
})
export class SharedModule {}
