import {  Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Comment } from '@angular/compiler';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  
  userId: string | null = null;  // Inicializado con null
  commentForm: FormGroup;

  constructor(private fb: FormBuilder, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      this.userId = user?.uid || null;  // Utilizamos el operador de encadenamiento opcional
    });

    this.commentForm = this.fb.group({
      comment: ['', Validators.required],
    });
  }
}