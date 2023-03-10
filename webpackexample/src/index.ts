import Person  from "./Person";
import forEach, {filter} from "./lib";
import "./styles.css"; // css-loader

console.log("Hello World!!!");

let p:Person = new Person("Rakesh", 34);
console.log(p.getName(), p.getAge());

interface Product {
    name: string;
    price: number;
    category: string;
  }
  
  var products:Product[] = [
      {name:"iPhone 14", price:98000.00, "category": "mobile"},
      {name:"Sony Bravia", price:198000.00, "category": "tv"},   
      {name:"Samsung Z fold", price:213000.00, "category": "mobile"},
      {name:"Oppo", price:28000.00, "category": "mobile"},
      {name:"iMacbook Pro", price:128000.00, "category": "computer"},
      {name:"HDMI", price:900.00, "category": "electronics"},
  ];
  
   let mobiles:Product[] = filter(products, p=> p.category === 'mobile');

  forEach(mobiles, console.log);