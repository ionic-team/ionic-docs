---
title: 原生界面
tableOfContents: false
---

<p class='intro'>建立本地驱动的应用体验，收藏开源插件和高级插件以及集成，使其很容易添加本地设备功能到任何具有电容器或 Cordova 的Ion应用中。</p>

<docs-cards class="static-width"> <docs-card header="Capacitor plugins" href="https://capacitorjs.com/docs/plugins" img="/docs/assets/img/native/capacitor@2x.png"> 

A modern, open source native runtime built and maintained by the Ionic team and the Capacitor community. Our recommended native solution.</docs-card>

<docs-card header="Cordova plugins" href="/docs/native/community" img="/docs/assets/img/native/cordova@2x.png"> 

A collection of free Cordova plugins, built and maintained by the community, with TypeScript wrappers and a consistent API and naming convention.</docs-card> </docs-cards>

<a id="native-enterprise" href="https://ionic.io/docs"></p> 

<div class="image-wrapper">
  <img src="/docs/assets/img/native/native-enterprise@2x.png" width="476" height="228" />
</div>

<div class="heading-group">
  <header> Ionic Native Enterprise Edition </header> 
  
  <p>
    Premium, supported Capacitor and Cordova plugins, third-party integrations, and pre-built native solutions for building enterprise-grade apps.
  </p>
</div>

<p>
  </a>
</p>

<style scoped>
  .Card-with-image a {
    border-radius: 16px;
  }

  #native-enterprise {
    margin-top: 2rem;

    border-radius: 16px;
    overflow: hidden;

    display: flex;
    align-items: center;
    background: #1F2A40;    

    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08), 0px 4px 8px rgba(0, 0, 0, 0.1);

    transition: transform 150ms ease, box-shadow 150ms ease;
  }

  @media (max-width: 767px) {
    #native-enterprise {
      flex-direction: column;
    }
  }

  #native-enterprise:hover,
  #native-enterprise:active,
  #native-enterprise:focus {
    transform: translateY(-1px);
    box-shadow: 0 0.35em 1.175em rgba(2, 8, 20, 0.1), 0 0.175em 0.5em rgba(2, 8, 20, 0.08);
  }

  #native-enterprise > * {
    flex-basis: 50%;
  }

  #native-enterprise .heading-group {
    padding: 2rem;
    padding-left: 3rem;
  }

  #native-enterprise .image-wrapper {
    align-self: stretch;
  }
  
  #native-enterprise img {
    height: 100%;
    object-fit: cover;    
  }

  #native-enterprise header {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.02em;

    color: #fff;
  }

  #native-enterprise p {
    font-size: 14px;
    line-height: 160%;
    letter-spacing: -0.01em;

    color: #E9EDF3;
  }


</style>

<blockquote>
  <p>
    这些文档适用于使用 Ionic Framework 4.0.0 或更大版本构建的应用。 关于旧的 Ionic v3 项目，请 <a href="/docs/v3/native">在这里查看</a>。
  </p>
</blockquote>