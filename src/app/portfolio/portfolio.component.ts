import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  portfolioItems: any[] = [{
    "name": "Efficient - Restaurant Management",
    "url": "",
    "github": "https://github.com/jacobira/restaurantManagerApp"
  },
  {
    "name": "Chat Application Server (No UI)",
    "url": "",
    "github": "https://github.com/jacobira/MtechLab10-ChatClientServer"
  },
  {
    "name": "Multi-Timer App",
    "url": "",
    "github": "https://github.com/jacobira/react-timer-project"
  }];

}
