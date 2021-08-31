import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  data={
    to:"",
    subject:"",
    message:""
  }
  flag:boolean=true;

  constructor(private email:BackendService,private snak:MatSnackBar) { }

  ngOnInit(): void {
  }
  doSubmitForm()
  {
    if(this.data.to=='' || this.data.subject=='' || this.data.message=='')
    {
      this.snak.open("Fields can not be empty","Ok");
      return;
    }
    console.log(this.data);
    this.flag=false;
    this.email.sendemail(this.data).subscribe(

      response=>{
        console.log(response);
        this.flag=true;
        this.snak.open("Send success","OK");
      },
      error=>{
console.log(error);

this.snak.open("Invalid Request","Error");
this.flag=true;
      }
    )
  }

}
