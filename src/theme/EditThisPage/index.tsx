/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Translate from '@docusaurus/Translate';
import { Github } from '@theme/icons';

import type { Props } from '@theme/EditThisPage';

import styles from './styles.module.scss';
import clsx from 'clsx';

export default function EditThisPage({
  editUrl,
  ...props
}: Props): JSX.Element {
  return (
    <a
      href={editUrl}
      target="_blank"
      rel="noreferrer noopener"
      {...props}
      className={clsx(props.className, 'edit-this-page', styles.editThisPage)}
    >
      <Github />
      <Translate
        id="theme.common.editThisPage"
        description="The link label to edit the current page"
      >
        Submit an edit
      </Translate>
    </a>
  );
}
