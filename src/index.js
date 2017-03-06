import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.scss';
import GithubRibbon from './components/github-ribbon/github-ribbon.jsx';
import Section from './components/section/section.jsx';
import LinkCard from './components/link-card/link-card.jsx';
const AboutNagoyaJS = `名古屋マークアップ勉強会は名古屋を中心に活動するマークアップエンジニアに必要なスキルを中心に勉強するコミュニティです。\n
勉強会を定期的に開催しています。\n
マークアップ・フロントエンドの技術に興味があればどなたでも歓迎いたします。`;

class App extends React.Component {
  render() {
    return (
      <div>
        <GithubRibbon href="https://github.com/nagoya-js/nagoya-js.github.io" />
        <div className={styles.main}>
          <div className={styles.outer}>
            <h1 className={styles.inner}>
              <div class={styles.innerText}>名古屋マークアップ勉強会</div><div class={styles.innerText}>The Final</div>
            </h1>
          </div>
          <canvas id="myCanvas" className={styles.myCanvas}></canvas>
        </div>
        <Section title="名古屋マークアップ勉強会とは"
          text={AboutNagoyaJS} />
        <Section title="次のイベント" text="">
          <LinkCard
            src="https://dzpp79ucibp5a.cloudfront.net/groups_logos/6557_normal_1442671798_54262531361cd-1_original_original_original.png"
            title="名古屋マークアップ勉強会 The Final"
            text="名古屋のフロントエンドの仲間を増やすための勉強会です。"
            href="https://758markup.doorkeeper.jp/"
          />
        </Section>
        <Section title="お問い合わせ" text="">
          <p>質問等ありましたら Twitter で <a href="https://twitter.com/KasumiMorita">@KasumiMorita</a> までお問い合わせください。</p>
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
        color: '#ffffff',
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
