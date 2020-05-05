import {Component, ChangeDetectionStrategy} from '/ui/web_modules/@angular/core.js'
import {NgbModal} from "/ui/web_modules/@ng-bootstrap/ng-bootstrap.js"
import {takeUntil} from '/ui/web_modules/rxjs/operators.js';
import {Subject} from "/ui/web_modules/rxjs.js";

import {MnLifeCycleHooksToStream} from './mn.core.js';
import {MnCollectionsService} from './mn.collections.service.js';

export {MnCollectionsItemComponent};

class MnCollectionsItemComponent extends MnLifeCycleHooksToStream {
  static get annotations() { return [
    new Component({
      selector: "mn-collections-item",
      templateUrl: "app/mn.collections.item.html",
      changeDetection: ChangeDetectionStrategy.OnPush,
      inputs: [
        "collection"
      ]
    })
  ]}

  static get parameters() { return [
    MnCollectionsService,
    NgbModal
  ]}

  constructor(mnCollectionsService, modalService) {
    super();
  }
}
