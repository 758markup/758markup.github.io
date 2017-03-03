import React from 'react';
import styles from './link-card.scss';

export default class LinkCard extends React.Component {
  render() {
    return (
      <a className={styles.linkCard} href={this.props.href}>
        <img src={this.props.src} className={styles.linkCardImg} />
        <div className={styles.linkCardDesc}>
          <h2 className={styles.linkCardTitle}>{this.props.title}</h2>
          <p className={styles.linkCardText}>{this.props.text}</p>
        </div>
      </a>
    );
  }
}
