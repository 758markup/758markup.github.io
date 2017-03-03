import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.scss';
import GithubRibbon from './components/github-ribbon/github-ribbon.jsx';
import Section from './components/section/section.jsx';
import LinkCard from './components/link-card/link-card.jsx';
const AboutNagoyaJS = `Nagoya.js (なごやじぇいえす) は名古屋を中心に活動する JavaScript ユーザーのコミュニティです。\n
勉強会を定期的に開催しています。\n
JavaScript に興味があればどなたでも歓迎いたします。`;

class App extends React.Component {
  render() {
    return (
      <div>
        <GithubRibbon href="https://github.com/nagoya-js/nagoya-js.github.io" />
        <div className={styles.main}>
          <div className={styles.outer}>
            <h1 className={styles.inner}>
              Nagoya.js
            </h1>
          </div>
          <canvas id="myCanvas" className={styles.myCanvas}></canvas>
        </div>
        <Section title="Nagoya.jsとは"
          text={AboutNagoyaJS} />
        <Section title="次のイベント" text="">
          <LinkCard
            src="https://dzpp79ucibp5a.cloudfront.net/assets/doorkeeper_group_normal-125b448b722fa8c158516cf4b86aafda26b442af55a001418b0eb2acf7117961.gif"
            title="Nagoya.js #2"
            text="名古屋のフロントエンドの仲間を増やすためのJavaScript勉強会です。"
            href="https://nagoya-js.doorkeeper.jp/events/56872"
          />
        </Section>
        <Section title="お問い合わせ" text="">
          <p>質問等ありましたら Twitter で <a href="https://twitter.com/steelydylan">@steelydylan</a> までお問い合わせください。</p>
        </Section>
      </div>
    );
  }

  componentDidMount() {
    setTimeout(() => {
      let particles = 100;
      if(window.innerWidth <= 767){
        particles = 30;
      }
      Particles.init({
        selector: '#myCanvas',
        color: '#323330',
        connectParticles: true,
        minDistance: 140,
        maxParticles: particles
      });
    },1000);
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
