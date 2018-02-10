import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../../services/movies.service";


@Component({
    selector: 'app-movie-edit',
    templateUrl: './movie-edit.component.html',
    styleUrls: ['./movie-edit.component.scss']
})

export class MovieEditComponent implements OnInit {
    
 
    constructor(private moviesService:MoviesService) {
    }

    ngOnInit() {
        
    }
   
}