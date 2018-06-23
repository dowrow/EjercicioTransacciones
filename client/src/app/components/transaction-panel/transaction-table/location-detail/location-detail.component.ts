import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "location-detail",
  templateUrl: "./location-detail.component.html",
  styleUrls: ["./location-detail.component.scss"]
})
export class LocationDetailComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<LocationDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public location: Location
  ) {}

  ngOnInit() {}

  onCloseClick() {
    this.dialogRef.close();
  }
}
