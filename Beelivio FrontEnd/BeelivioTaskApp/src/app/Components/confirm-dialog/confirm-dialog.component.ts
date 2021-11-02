import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  toBeDeleted:boolean= false;
  constructor(private dialogRef:NbDialogRef<ConfirmDialogComponent>) { }

  ngOnInit(): void {
  }
 
  accept(){
    this.toBeDeleted = true;
    this.dialogRef.close(true)
  }
  dismiss(){
    this.dialogRef.close(false)
  }
  decline(){
    this.dialogRef.close(false)
  }
}
