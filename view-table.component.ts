import { Component, OnInit } from '@angular/core';
import { GetApiDataService } from '../get-api-data.service';

@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.scss'],
})
export class ViewTableComponent implements OnInit {
  movieArr=[];
  currentPage = 1;
  itemsPerPage = 10;
  pageSize: number;
  changeTheme =true;

  constructor(private apiService:GetApiDataService) { }

  ngOnInit() {
    this.getMovieList();
  }
  public getMovieList(){
    this.apiService.getConfig().subscribe((data:any)=>{
      this.movieArr=data;
      console.log(data);
    })
  }
  public onPageChange(pageNum: number): void {
    this.pageSize = this.itemsPerPage * (pageNum - 1);
  }

  public changePagesize(num: number): void {
    this.itemsPerPage = this.pageSize + num;
  }
  toggle(){
    this.changeTheme=!this.changeTheme
  }

}
