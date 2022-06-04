import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Listing } from '../types';
import { fakeMyListings } from '../fake-data';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css']
})
export class EditListingPageComponent implements OnInit {

  listing!: Listing;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const id =this.route.snapshot.paramMap.get('id');
    const fakeMyListing = fakeMyListings.find(listing => listing.id === id);

    if (fakeMyListing !== undefined){
      this.listing = fakeMyListing;
    }
  }

  onSubmit(): void{
    alert('Saving changes to the listing...')
    this.router.navigateByUrl('my-listings');
  }
}
