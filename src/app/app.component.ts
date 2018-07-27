import { Component, OnInit  } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { RequestOptions, RequestMethod } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  constructor(private http: HttpClient){}
  ngOnInit(): void{
      const dado = {
        name: 'rafael',
        price:999.99,
        sku:'uuiu',
      }

      /*
      const delTest = this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(res => {
          console.log("GET-teste");
          console.log(res);
          console.log(delTest);
          console.log("GET-teste");
        }, 
        (err: HttpErrorResponse) => {
          console.log("GET-ERR-teste");
          console.log(err.status);
          console.log("GET-ERR-teste");
        }
      )*/
/*
  const get = this.http.get('http://angular-test.blabs.us/').subscribe(res => {
        console.log("GET");
        console.log(res);
        console.log(get);
        console.log("GET");
      }, 
      (err: HttpErrorResponse) => {
        console.log("GET-ERR");
        console.log(err.status);
        console.log("GET-ERR");
      }
    )
*/
    let httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
     }) 
    }
    
      const req = this.http.post('http://angular-test.blabs.us/',  dado, httpOptions).subscribe(res => {
        console.log("POST");  
        console.log(res);
        console.log(req);
        console.log("POST");
      }, 
      (err: HttpErrorResponse) => {
        console.log("POST-err");
        console.log(err.status);
        console.log("POST-err");
      }
    )

/*
    const deletese = this.http.delete('http://angular-test.blabs.us/' ).subscribe(res => {
      console.log("DELETE");
      console.log(res);
      console.log(deletese);
      console.log("DELETE");
    }, 
    (err: HttpErrorResponse) => {
      console.log("DELETE-err");
      console.log(err.status);
      console.log("DELETE-err");
    }
    )
*/

  }

  }

