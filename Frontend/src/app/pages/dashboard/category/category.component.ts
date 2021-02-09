import { Component, OnInit } from '@angular/core';
import {AcategoryService} from 'src/app/services/acategory.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private catser:AcategoryService) { }

resData;

    
  ngOnInit() {
      this.catser.fetchCategories()
      .subscribe(res=>{
          console.log(res);
          this.resData = res;
          this.resData=this.resData.cdata;
      })
  }
    

}
