import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { fakeListings } from '../fake-data';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.css']
})
export class ListingDetailPageComponent implements OnInit {

  isLoading:boolean = true;

  listing!: Listing;

  constructor(
    private route: ActivatedRoute,
    private listingsService: ListingsService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // const fakeListing = fakeListings.find(listing => listing.id === id);
    this.listingsService.getListingById(id)
      .subscribe(listing => {
        this.listing = listing;
        this.isLoading = false;
      });
      
      this.listingsService.addViewToListing(id)
      .subscribe(()=>console.log('Views updated!'))

    // if (fakeListing !== undefined){
    //   this.listing = fakeListing;
    // }
  }
}
