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
    "url": "http://www.raspberryfactory.com",
    "github": "https://github.com/jacobira/restaurantManagerApp"
  },
  {
    "name": "Chat Application Server (No UI)",
    "url": "https://github.com/jacobira/MtechLab10-ChatClientServer",
    "github": "https://github.com/jacobira/MtechLab10-ChatClientServer"
  },
  {
    "name": "Multi-Timer App",
    "url": "http://www.baldwindev.com/multiTimer",
    "github": "https://github.com/jacobira/react-timer-project"
  }];

  navigate(item){
    window.location.href = item.url;
  }

}
