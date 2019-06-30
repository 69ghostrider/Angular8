import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, OnDestroy, ElementRef, ViewChild} from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm }from '@angular/forms';
import { Subscription } from 'rxjs'
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit , OnDestroy{
  subscription : Subscription;
  editMode = false;
  editedItemIndex : number;
  deleteItemIndex: number;
  editedItem : Ingredient;
  @ViewChild ('form' ,{static:true}) slForm: NgForm;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
   this.subscription = this.slService.startedEditing.subscribe(
     (index:number) => {
       this.editMode = true;
       this.editedItemIndex = index;
       this.deleteItemIndex = index;
       this.editedItem = this.slService.getIngredient(index);
       this.slForm.setValue(
         {
           name : this.editedItem.name,
           amount: this.editedItem.amount
         }
       )
     }
   )
  }
  onAddItem (form: NgForm){
   const value = form.value;
   const newIngredient= new Ingredient(value.name , value.amount);
   if(this.editMode == true){
     this.slService.updateIngredient(this.editedItemIndex, newIngredient);
   }else{
     this.slService.addIngredient(newIngredient)
   }
   this.editMode = false;
   form.reset();
  }

  onClear(){
    this.slForm.reset();
    this.editMode =false;
  }
  
  onDelete(){
   this.slService.deleteIngredient(this.deleteItemIndex);
   this.onClear();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
