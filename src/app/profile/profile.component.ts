import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
