import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-participationmodal',
  templateUrl: './participationmodal.component.html',
  styleUrls: ['./participationmodal.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ParticipationmodalComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content);
  }
}
