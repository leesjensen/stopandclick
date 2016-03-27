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
    <div class="environmentContainer">
      <span class="environment" *ngFor="#environment of environments" [class.selected]="environment === selectedEnvironment" (click)="onPlay(environment)" (mouseenter)="onSelect(environment)">
        <img src="{{environment.image}}" />
      </span>
    </div>
    <div *ngIf="selectedEnvironment">
      <div class="txtCenter">In the mood for {{selectedEnvironment.title}}</div>
    </div>
  `})

export class AppComponent { 
	environments = ENVIRONS;
	selectedEnvironment: Environment = ENVIRONS[2];

	onSelect(environment: Environment) { this.selectedEnvironment = environment; }
  onPlay(enviornment:Environment) {}
}
