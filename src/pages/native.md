---
meta:
  title: Native APIs - Build Open-Source Native Application Experiences
  description: Build native application experiences with open-source Native APIs. Easily add native device functionality to any Ionic app with Capacitor or Cordova.
tableOfContents: false
---

# Native APIs

<p class='intro'>Build native-powered app experiences with a collection of open source and premium plugins and integrations that make it easy to add native device functionality to any Ionic app with Capacitor or Cordova.</p>

<div id="native-enterprise-cards">
  <a href="https://capacitorjs.com/docs/plugins">
    <div class="image-wrapper">
      <img src="/docs/assets/img/native/capacitor@2x.png" width="440" height="222" alt="capacitor logo"/>
    </div>
    <div class="heading-group">
      <header>Capacitor plugins</header>
      <p>A modern, open source native runtime built and maintained by the Ionic team and the Capacitor community. Our recommended native solution.</p>
    </div>
  </a>

  <a href="/docs/native/community">
    <div class="image-wrapper">
      <img src="/docs/assets/img/native/cordova@2x.png" width="440" height="222" alt="cordova logo"/>
    </div>
    <div class="heading-group">
      <header>Cordova plugins</header>
      <p>A collection of free Cordova plugins, built and maintained by the community, with TypeScript wrappers and a consistent API and naming convention.</p>
    </div>
  </a>
</div>

<a id="native-enterprise" href="https://ionicframework.com/native">
  <div class="image-wrapper">
    <img src="/docs/assets/img/native/native-enterprise@2x.png" width="476" height="228" />
  </div>
  
  <div class="heading-group">    
    <header>
      Ionic Native Enterprise Edition
    </header>
    <p>
      Premium, supported Capacitor and Cordova plugins, third-party integrations, and pre-built native solutions for building enterprise-grade apps.
    </p>
  </div>
</a>

<style scoped>
  #native-enterprise-cards {
    display: flex;

    margin-inline-start: -1.5rem;
    margin-block-start: -1.5rem;
  }

  @media (max-width: 767px) {
    #native-enterprise-cards {
      flex-direction: column;
    }
    #native-enterprise-cards .image-wrapper img {
      max-height: 10rem;
    }
  }

  #native-enterprise-cards > a {
    display: block;
    margin-inline-start: 1.5rem;
    margin-block-start: 1.5rem;

    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08), 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    overflow: hidden;

    transition: all 150ms ease;
  }

  #native-enterprise-cards > a:hover,
  #native-enterprise-cards > a:active,
  #native-enterprise-cards > a:focus {
    transform: translateY(-1px);
    box-shadow: 0 0.35em 1.175em rgba(2, 8, 20, 0.1), 0 0.175em 0.5em rgba(2, 8, 20, 0.08);
  }

  #native-enterprise-cards .heading-group {
    padding: 2rem;
  }

  #native-enterprise-cards .image-wrapper > img {
    object-fit: cover;
    width: 100%;
  }

  #native-enterprise-cards header {
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: #010610;
  }

  #native-enterprise-cards p {
    font-size: .875rem;
    line-height: 160%;
    letter-spacing: -0.01em;
    color: #5B708B;
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
    #native-enterprise .image-wrapper img{
      max-height: 10rem;
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
    overflow: hidden;
  }
  
  #native-enterprise img {
    height: 100%;
    max-height: 100%;
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

> These docs are for apps built with Ionic Framework 4.0.0 and greater. For older Ionic v3 projects, please [see here](/docs/v3/native).
