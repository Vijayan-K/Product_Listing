import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/Services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  

  suggestion: string = "";
  ProductList:any=[];
  SuggestionList:any=[];
  FilterList:any=[];
  FilterProductList :any =[];
  currentPage: number = 1;
  itemperpage : number =5;
  totalPages : number =0;

  constructor(private productService:ProductServiceService) { }

  ngOnInit(): void {
    this.ProductList = this.productService.GetProduct();
    this.FilterProductList = [...this.ProductList];
    this.Pagination();
  }

  getProdList(){
    this.ProductList = this.productService.GetProduct();
      this.FilterProductList = this.ProductList;
      this.Pagination();
  }
  
  Onsercah(event: Event){
    this.suggestion = this.suggestion.toLocaleLowerCase();
    if(this.suggestion ==""){
      this.SuggestionList = [];
    }
    else{
    this.FilterList = this.ProductList.filter((value: any)=>value.name.toLowerCase().includes(this.suggestion)
    ).slice(0,5);
    this.SuggestionList = this.FilterList;
    this.currentPage = 1;
    this.Pagination();
  }
  }

  clearSuggestion(){
    this.suggestion = "";
    this.SuggestionList =[];
    this.getProdList();
  }

  SelectSuggestion(searchvalue:any){
    this.suggestion = searchvalue.name;
    this.SuggestionList =[];
    this.FilterProductList = [searchvalue];
    this.currentPage = 1;
    this.Pagination();
  }

  Pagination(){
    this.totalPages = Math.ceil(this.FilterProductList.length / this.itemperpage);
    var statIndex = (this.currentPage-1)*this.itemperpage;
    var endIndex = statIndex + this.itemperpage;
    this.ProductList = this.FilterProductList.slice(statIndex,endIndex);
  }


  nextPage(){
    if(this.currentPage < this.totalPages){
      this.currentPage++;
      this.Pagination();
    }
  }

  previousPage(){
    if(this.currentPage > 1){
      this.currentPage--;
      this.Pagination();
    }
  }
}
