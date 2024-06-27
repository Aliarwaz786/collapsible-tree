import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  constructor() {
  }

  margin = { top: 0, right: 130, bottom: 0, left: 80 };
  treeData = {
    name: 'Top Level',
    children: [
      {
        name: 'Level 2: A',

      },
      {
        name: 'Level 2: B',
        children: [
          {
            name: 'Son of B',
            children: [{ name: 'Son of X' }, { name: 'Daugther of X' }],
          },
          { name: 'Son of D' },
        ],
      },
      {
        name: 'Level 2: A',

      },
      {
        name: 'Level 2: B',
        children: [
          {
            name: 'Son of B',
            children: [{ name: 'Son of X' }, { name: 'Daugther of X' }, { name: 'Son of X', children: [{ name: 'Son of X' }, { name: 'Daugther of X' }, { name: 'Son of X' }, { name: 'Daugther of X' }] }, { name: 'Daugther of X' }],
          },
          { name: 'Son of D' },
        ],
      },
    ],
  };
}
