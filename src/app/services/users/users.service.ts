import { Injectable } from '@angular/core';
import {
  doc,
  docData,
  Firestore,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable, of, switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { UserModel } from './models/user';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private firestore: Firestore, private authService: AuthService) { }

  private currentUserProfile$ = this.authService.currentUser$.pipe(
    switchMap((user) => {
      if (!user?.uid) {
        return of(null);
      }

      const ref = doc(this.firestore, 'users', user?.uid);
      return docData(ref) as Observable<UserModel>;
    })
  );

  currentUserProfile = toSignal(this.currentUserProfile$);

  addUser(user: UserModel): Promise<void> {
    const ref = doc(this.firestore, 'users', user.uid);
    return setDoc(ref, user);
  }

  updateUser(user: UserModel): Promise<void> {
    const ref = doc(this.firestore, 'users', user.uid);
    return updateDoc(ref, { ...user });
  }
}