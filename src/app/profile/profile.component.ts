import { Component, OnInit } from '@angular/core';
import { Galleria } from 'primeng/primeng';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileImage: string;

  images = [
    { source: 'http://i.pravatar.cc/300?u=Anne', title: 'Anne' },
    { source: 'http://i.pravatar.cc/300?u=Kerri', title: 'Kerri' },
    { source: 'http://i.pravatar.cc/300?u=Mary', title: 'Mary' },
    { source: 'http://i.pravatar.cc/300?u=Nancy', title: 'Nancy' },
    { source: 'http://i.pravatar.cc/300?u=Peta', title: 'Peta' },
  ];

  selectedProfile: any;

  constructor() { }

  ngOnInit() {
  }

  onImageSelected(event) {
    console.log(JSON.stringify(event));
  }

  onDragStart(galleria: Galleria) {
    this.selectedProfile = this.images[galleria.activeIndex];
    galleria.stopSlideshow();
  }

  onPicDrop() {
    this.profileImage = this.selectedProfile.source;
  }
}
