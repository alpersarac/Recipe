import { Component, EventEmitter, Output } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
  templateUrl:'./header.component.html',
  selector:'app-header'
})
export class HeaderComponent{
  constructor (private datastorage:DataStorageService){}
  saveOnDatabase(){
    this.datastorage.storeRecipes();
  }
}
