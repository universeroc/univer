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

import React from 'react';

import type { Nullable } from '@univerjs/core';
import { LocaleService, useDependency } from '@univerjs/core';
import clsx from 'clsx';
import { ColorPicker, Dropdown } from '@univerjs/design';
import { MoreDownSingle, PaintBucket } from '@univerjs/icons';
import { CanvasView } from '@univerjs/slides';
import type { Rect } from '@univerjs/engine-render';
import styles from './index.module.less';

interface IProps {
    unitId: string;
}

export default function ArrangePanel(props: IProps) {
    const { unitId } = props;

    const localeService = useDependency(LocaleService);
    const canvasView = useDependency(CanvasView);

    const page = canvasView.getRenderUnitByPageId(unitId);
    const scene = page?.scene;
    if (!scene) return null;

    const transformer = scene.getTransformer();
    if (!transformer) return null;

    const selectedObjects = transformer.getSelectedObjectMap();
    const object = selectedObjects.values().next().value as Nullable<Rect>;
    if (!object) return null;

    const [color, setColor] = React.useState<string>(object.fill?.toString() ?? '');

    function handleChangeColor(color: string) {
        object?.setProps({ fill: color });
        setColor(color);
    }

    return (
        <div
            className={clsx(styles.imageCommonPanelGrid, styles.imageCommonPanelBorder)}
        >
            <div className={styles.imageCommonPanelGrid}>
                <div className={styles.imageCommonPanelRow}>
                    <div className={clsx(styles.imageCommonPanelColumn, styles.imageCommonPanelTitle)}>
                        <div>{localeService.t('slide.panel.fill.title')}</div>
                    </div>
                </div>
                <div className={styles.imageCommonPanelRow}>
                    <div className={clsx(styles.imageCommonPanelColumn, styles.imageCommonPanelSpan2)}>
                        <Dropdown
                            align={{
                                offset: [0, 18],
                            }}
                            overlay={(
                                <section className={styles.slidePanelColorPicker}>
                                    <ColorPicker
                                        color="#fff"
                                        onChange={handleChangeColor}
                                    />
                                </section>
                            )}
                        >
                            <a className={styles.uiPluginSheetsBorderPanelButton}>
                                <PaintBucket extend={{ colorChannel1: color ?? 'rgb(var(--primary-color))' }} />
                                <span className={styles.uiPluginSheetsBorderPanelMoreIcon}>
                                    <MoreDownSingle />
                                </span>
                            </a>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    );
}
