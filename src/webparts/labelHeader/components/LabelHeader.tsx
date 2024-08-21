import * as React from 'react';
import styles from './LabelHeader.module.scss';
import type { ILabelHeaderProps } from './ILabelHeaderProps';

export default class LabelHeader extends React.Component<ILabelHeaderProps, {}> {
  public render(): React.ReactElement<ILabelHeaderProps> {
    const { description, hasTeamsContext } = this.props;

    return (
      <section className={`${styles.labelHeader} ${hasTeamsContext ? styles.teams : ''}`}>
        <div className={styles.labelContainer}>
          <div className={styles.labelText}>{description}</div>
          <div className={styles.lineUnderContainer}>_</div>
        </div>
      </section>
    );
  }
}
