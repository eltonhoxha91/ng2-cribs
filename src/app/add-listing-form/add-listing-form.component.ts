import { Component,OnInit,ViewChild} from '@angular/core';
import { CribsService } from '../services/cribs.service';
import { NgForm } from '@angular/forms';
import { UtilService } from './../services/util.service';
@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {
  @ViewChild('newCribForm') newCribForm: NgForm;
  propertyTypes: Array<string> = ['Condo', 'Duplex', 'House'];
  constructor(
    private cribsService: CribsService,
    public  utilService: UtilService )
  {}



  ngOnInit() {

  }
  onCribSubmit(data:any): void {
    console.log(data);
    this.cribsService.addCrib(data);
   this.newCribForm.reset();
  }

}
