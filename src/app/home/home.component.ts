import { Component, OnInit, AfterViewChecked } from '@angular/core';

declare const PR: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
code = ` // File: routes/web.php

Route :: get ( '/' , 'WelcomeController@index' );// File: app/Http/Controllers/WelcomeController.php namespace app\Http\Controllers ;
class WelcomeController
{public function index ()
 {
return 'Hello, World!' ;
{
}`

  constructor() { }

  ngOnInit(): void {
  }

  prettify(){

    PR.prettyPrintOne(this.code,'', false);
  }
  // public ngAfterViewChecked(): any {
  //   PR.prettyPrint();
  // }

}
