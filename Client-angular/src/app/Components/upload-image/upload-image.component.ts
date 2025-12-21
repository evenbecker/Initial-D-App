import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CarsService } from 'src/app/Services/Cars/cars.service';

@Component({
  selector: 'app-upload-image',
  standalone: true,
  imports: [],
  templateUrl: './upload-image.component.html',
  styleUrl: './upload-image.component.scss'
})
import {
  HttpClient,
  HttpEventType,
  HttpErrorResponse,
} from '@angular/common/http';



export class UploadImageComponent implements OnInit {
  progress!: number;
  message!: string;
  @Output() public onUploadFinished = new EventEmitter();
  @Input() imageId: number = 0;

  constructor(private http: HttpClient,private carsService:CarsService) {}
  ngOnInit() {}
  uploadFile = (files: any, id: number) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, 'Car-' + id + '.jpg');

    this.carsService.PostImage(formData).subscribe({
        next: (event) => {
          if (event.type === HttpEventType.UploadProgress)
            this.progress = Math.round((100 * event.loaded) / event.total!);
          else if (event.type === HttpEventType.Response) {
            this.message = 'Upload success.';
            this.onUploadFinished.emit(event.body);
            location.reload();
          }
        },
        error: (err: HttpErrorResponse) => console.log(err),
      });
  };
}
