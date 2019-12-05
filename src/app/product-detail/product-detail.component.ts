import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/service/product.service';
declare const require: any;

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {

  fullStar: string = require('./../../assets/img/Star-full.svg');
  star: string = require('./../../assets/img/star.svg');
  arrowRight = require('./../../assets/img/arrow-right.png');
  arrowLeft = require('./../../assets/img/arrow-left.png');
  stars = [0, 1, 2, 3, 4];
  tabToggle = 'men';
  styleCode = ['#F7F7F7', '#072348', '#BB0D0F', '#FFCF60', '#4E4E4E', '#129F7D', '#C69F97', '#000000', '#215297', '#B3926E'];
  sizeList = [{ size: 5, available: true }, { size: 5.5, available: false }, { size: 6, available: true }, { size: 6.5, available: false }, { size: 7, available: true }, { size: 7.5, available: false }, { size: 8, available: true }, { size: 8.5, available: true }, { size: 9, available: true }, { size: 9.5, available: false }, { size: 10, available: true }, { size: 10.5, available: true }, { size: 11, available: true }, { size: 11.5, available: true }, { size: 12, available: true }, { size: 12.5, available: true }, { size: 13, available: true }];
  favItems = [{ name: 'White Canvas', price: '79', desc: 'Los Angeles Favourite', url: require('./../../assets/img/canvas.png') },
  { name: 'Black Canvas', price: '79', desc: '', url: require('./../../assets/img/canvas1.png') },
  { name: 'Grey Suede', price: '98', desc: 'Sold Out', url: require('./../../assets/img/canvas2.png') },
  { name: 'White Canvas', price: '79', desc: '', url: require('./../../assets/img/canvas.png') },
  { name: 'White Canvas', price: '79', desc: 'Los Angeles Favourite', url: require('./../../assets/img/canvas1.png') },
  { name: 'Black Canvas', price: '79', desc: '', url: require('./../../assets/img/canvas2.png') },
  { name: 'Grey Suede', price: '98', desc: 'Sold Out', url: require('./../../assets/img/canvas.png') },
  { name: 'White Canvas', price: '79', desc: '', url: require('./../../assets/img/canvas1.png') }
  ];
  selectedCode: number = 8;
  selectedSize: number = 8;
  products: products.Product;
  productDetails: any = {};
  prodimg: any = [];
  proImage: any;
  selectedProId = 0;

  constructor(private productService: ProductService ) { }

  ngOnInit() {

    this.productService.getProductsList().subscribe(response=>{
      this.products = response;
      this.productDetails = this.products[6];
      this.getProduct(this.products[6].id);
    });

  }

  // get product img
  getProduct(id){
    this.productService.getSelectProductImg(id).subscribe(response=>{

      // const imgs = localArray.reduce((acc,item) => { 
      //     acc.push({url : item.url});
      //     return acc;
      //   } ,[]);

      this.prodimg = response;
      this.selectedProId = response[0]['id'];
      this.proImage =  response[0]['url'];
    });
  }

  // selected product img index
  getProductImage(item){
    this.proImage = item.url;
  }

  // Toggle btn
  onToggleTab(value) {
    this.tabToggle = value;
  }

  // style code
  onSelectStyleCode(index){
    this.selectedCode = index;
  }

  // style size 
  onSelectStyleSize(index,status){
    this.selectedSize = status ? index : this.selectedSize;
  }
  
}
