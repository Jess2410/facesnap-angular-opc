import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps-service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  hasLike!:boolean;
  buttonText!: string;

  constructor(private faceSnapService: FaceSnapsService, private router: Router){}

  ngOnInit() {

    this.hasLike = false
    this.buttonText = "Like it"

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

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
