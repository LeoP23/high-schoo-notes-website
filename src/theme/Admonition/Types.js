import React from 'react';
import AdmonitionTypeNote from '@theme/Admonition/Type/Note';
import AdmonitionTypeTip from '@theme/Admonition/Type/Tip';
import AdmonitionTypeInfo from '@theme/Admonition/Type/Info';
import AdmonitionTypeWarning from '@theme/Admonition/Type/Warning';
import AdmonitionTypeDanger from '@theme/Admonition/Type/Danger';
import AdmonitionTypeCaution from '@theme/Admonition/Type/Caution';
import AdmonitionLayout from '@theme/Admonition/Layout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faPuzzlePiece, faBookOpen } from '@fortawesome/free-solid-svg-icons';

const admonitionTypes = {
  note: AdmonitionTypeNote,
  tip: AdmonitionTypeTip,
  info: AdmonitionTypeInfo,
  warning: AdmonitionTypeWarning,
  danger: AdmonitionTypeDanger,
};

const admonitionAliases = {
  secondary: (props) => <AdmonitionTypeNote title="secondary" {...props} />,
  important: (props) => <AdmonitionTypeInfo title="important" {...props} />,
  success: (props) => <AdmonitionTypeTip title="success" {...props} />,
  caution: AdmonitionTypeCaution,
};

const admonitionCustomTypes = {
  goal: (props) => (
    <AdmonitionLayout
      {...props}
      className="alert--goal"
      title={props.title ?? 'Goal'}
      icon={<FontAwesomeIcon icon={faBullseye} />}
    >
      {props.children}
    </AdmonitionLayout>
  ),
  theorem: (props) => (
    <AdmonitionLayout
      {...props}
      className="alert--theorem"
      title={props.title ?? 'Theorem'}
      icon={<FontAwesomeIcon icon={faPuzzlePiece} />}
    >
      {props.children}
    </AdmonitionLayout>
  ),
  definition: (props) => (
    <AdmonitionLayout
      {...props}
      className="alert--definition"
      title={props.title ?? 'Definition'}
      icon={<FontAwesomeIcon icon={faBookOpen} />}
    >
      {props.children}
    </AdmonitionLayout>
  ),
};

export default {
  ...admonitionTypes,
  ...admonitionAliases,
  ...admonitionCustomTypes,
};