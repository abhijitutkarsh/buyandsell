import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Listing } from '../types';
// import { fakeMyListings } from '../fake-data';
import { ListingsService } from '../listings.service';

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
    private listingsService: ListingsService,
  ) { }

  ngOnInit(): void {
    const id =this.route.snapshot.paramMap.get('id');
    // const fakeMyListing = fakeMyListings.find(listing => listing.id === id);

    // if (fakeMyListing !== undefined){
    //   this.listing = fakeMyListing;
    // }
    this.listingsService.getListingById(id)
    .subscribe(listing => this.listing = listing);
  }

  onSubmit({name, description, price} : {name:string, description:string , price:number}): void{
    // alert('Saving changes to the listing...')
      this.listingsService.editListing(this.listing.id, name, description, price)
      .subscribe(()=> {
        
        this.router.navigateByUrl('my-listings');
      });
  }
}
