import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoiceComponent implements OnInit {
  @Input() public invoicesOrder;

  constructor(private dialogRef: MatDialogRef<HomeComponent>) { }

  date:any = 'March, 3 2020';

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
    location.reload();
  }
}

