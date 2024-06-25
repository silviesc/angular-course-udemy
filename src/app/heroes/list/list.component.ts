import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroeNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Capitán América'];
  public deletedHeroe?: string;

  removeLastHeroe(): void {
    this.deletedHeroe = this.heroeNames.pop();
  }
}
