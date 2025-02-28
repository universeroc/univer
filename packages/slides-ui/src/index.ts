/**
 * Copyright 2023-present DreamNum Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export { UniverSlidesUIPlugin } from './slides-ui-plugin';
export { SlidesUIController } from './controllers/slide-ui.controller';
export { SlideSideBar } from './components/slide-bar/SlideBar';

export { SlideCanvasPopMangerService } from './services/slide-popup-manager.service';
export type { IUniverSlidesDrawingConfig } from './controllers/slide-ui.controller';

// #region - all commands

export { ActivateSlidePageOperation } from './commands/operations/activate.operation';
export { SetSlidePageThumbOperation } from './commands/operations/set-thumb.operation';

// #endregion
