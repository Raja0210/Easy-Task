import {Component, EventEmitter, Input, Output} from '@angular/core';

interface User {
  id:string;
  name:string;
  avatar: string;
}


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  get imagePath(){
      return 'assets/users/'+this.user.avatar;
  }
  onSelectUser(){
    this.select.emit(this.user.id);
  }
  // selectedUser = signal (DUMMY_USERS[randomIndex]);
  //
  // imagePath = computed(()=> 'assets/users/'+this.selectedUser().avatar)
  // get imagePath(){
  //   return 'assets/users/'+this.selectedUser().avatar;
  // }
}
