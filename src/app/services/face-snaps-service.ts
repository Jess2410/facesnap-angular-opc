import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
         {
        id: 1,
        title: 'One Piece',
        description: 'Luffy : Le roi des pirates',
        createdDate: new Date,
        likes: 20,
        imageUrl:'https://toppng.com/uploads/preview/luffy-anime-one-piece-luffy-115628753714bjr6ypxar.png',
        location:'Grand Line'
        },
       {
        id: 2,
        title: 'One Piece',
        description: 'Zoro : Le manieur de sabres',
        createdDate: new Date,
        likes: 140,
        imageUrl:'https://i.pinimg.com/474x/f4/e6/0c/f4e60c86eefed2dd71d4eb90e835d2ba.jpg'
        },
       {
        id: 3,
        title: 'One Piece',
        description: 'Ussopp : Snipper King',
        createdDate: new Date,
        likes: 0,
        imageUrl:'https://i.pinimg.com/474x/ac/b0/54/acb054e60c5cdd98829a19bd7759ff68--one-piece-planning.jpg'
        }
      //   this.mySnap3 = new FaceSnap(
      //    'One Piece',
      //    'Ussopp : Snipper King',
      //     new Date,
      //     0,
      //     'https://i.pinimg.com/474x/ac/b0/54/acb054e60c5cdd98829a19bd7759ff68--one-piece-planning.jpg'
      //   );
    ];

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    };

    getFaceSnapById(faceSnapId:number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId)
        if (!faceSnap) {
            throw new Error('FaceSnap not found !')
        } else {
            return faceSnap;
        }
    }


    LikeFaceSnapById(faceSnapId:number, snapType: 'snap' | 'unSnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ?  faceSnap.likes++ : faceSnap.likes--; 
    }
}