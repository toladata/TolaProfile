import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tola-list-page',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  projects = [
    {
      id: 1,
      title: 'Skills and livelihood training to IDPs and refugees',
      stage: 'ongoing',
      owner: 'MJ',
      start_date: '21.01.2017',
      budget: '$20.000',
      status: 'red',
      details: true,
      items: [
        {
          id: 34,
          title: 'Stakeholder Engagement Meeting',
          stage: 'ongoing',
          owner: 'GL',
          start_date: '21.01.2017',
          budget: '$20.000',
          status: 'green',
          details: false
        },
        {
          id: 35,
          title: 'Beneficiary selection',
          stage: 'Pending',
          owner: 'GL',
          start_date: '21.01.2017',
          budget: '$20.000',
          status: 'green',
          details: false
        }
      ],
      active: true,
      indicators: [
        {
          title: 'Total number of male and female individuals participating in the training',
          progress: 70
        },
        {
          title: 'Total number of skills traning conducted',
          progress: 50
        },
      ]
    },
    {
      id: 2,
      title: 'Psychosocial support for youth ',
      stage: 'Done',
      owner: 'LN',
      start_date: '21..1.2017',
      budget: '$20.000',
      status: 'green',
      details: false,
      items: [],
      active: false,
      indicators: []
    }
  ]
  ngOnInit() {}
}
