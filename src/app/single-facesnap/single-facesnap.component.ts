import { Component} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps-service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-single-facesnap',
  templateUrl: './single-facesnap.component.html',
  styleUrls: ['./single-facesnap.component.scss']
})
export class SingleFacesnapComponent {
  faceSnap!: FaceSnap;
  hasLike!:boolean;
  buttonText!: string;

  constructor(
    private faceSnapService: FaceSnapsService,
    private route: ActivatedRoute){}

  ngOnInit() {
    this.hasLike = false
    this.buttonText = "Like it"

    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  onHasLiked(){
    if(!this.hasLike){
      this.faceSnapService.LikeFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText="Unlike it";
      this.hasLike=true;
    }
   else {
      this.faceSnapService.LikeFaceSnapById(this.faceSnap.id, 'unSnap');
      this.buttonText="Like it";
      this.hasLike=false;
    }
  }
}
