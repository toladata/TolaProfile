import { Injectable } from '@angular/core';

@Injectable()
export class ObjectHelper {

    public updateFromObject(parentObject, dataObject) {
        for (const prop in dataObject) {
            if (dataObject.hasOwnProperty(prop)) {
                parentObject[prop] = dataObject[prop];
            }
        }
    }
}
