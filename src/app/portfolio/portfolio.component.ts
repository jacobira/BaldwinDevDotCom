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
    "url": "http://www.baldwindev.com/restaurantManager",
    "github": "https://github.com/jacobira/restaurantManagerApp"
  },
  {
    "name": "Chat Application Server (No UI)",
    "url": "https://github.com/jacobira/Lab10MTECH-ChatApp",
    "github": "https://github.com/jacobira/Lab10MTECH-ChatApp"
  },
  {
    "name": "Multi-Timer App",
    "url": "http://www.baldwindev.com/multiTimer",
    "github": "https://github.com/jacobira/react-timer-project"
  },
  {
    "name":"Baldwin Financial (Design Mockup)",
    "url": "http://www.baldwindev.com/baldwinFinancialMockup",
    "github": "https://github.com/jacobira/BaldwinFinancial"
  },
  {
    "name":"Golf Scorecard Application",
    "url": "http://www.baldwindev.com/golfScorecard",
    "github": "https://github.com/jacobira/MTechProject3Golf"
  }];

  navigate(item){
    window.location.href = item.url;
  }

}
