import {Component} from 'angular2/core';

export class Environment {
	public title;
	public image;
}

var ENVIRONS: Environment[] = [ 
	{'title':'rain', 'image':'img/rain.jpg'}, 
	{'title':'ocean', 'image':'img/ocean.jpg'}, 
  {'title':'desert', 'image':'img/desert.jpg'}, 
  {'title':'night', 'image':'img/night.jpg'}, 
	{'title':'forest', 'image':'img/forest.jpg'}
];


@Component({
    selector: 'my-app',
  template:`
    <h1>{{title}}</h1>
    <h2>Environments</h2>
    <div>
      <span class="environment" *ngFor="#environment of environments" [class.selected]="environment === selectedEnvironment" (click)="onSelect(environment)">
        <img src="{{environment.image}}" />
      </span>
    </div>
    <div *ngIf="selectedEnvironment">
      <h2>{{selectedEnvironment.title}} selected</h2>
    </div>
  `})

export class AppComponent { 
	title = "Stop and Click";
	environments = ENVIRONS;
	selectedEnvironment: Environment = ENVIRONS[0];

	onSelect(environment: Environment) { this.selectedEnvironment = environment; }
}
