---
meta:
  title: APIs nativas - Construye experiencias de aplicación nativa de código abierto
  description: Construye experiencias de aplicaciones nativas con APIs nativas de código abierto. Añada fácilmente funcionalidades nativas del dispositivo a cualquier aplicación Ionic con Capacitor o Cordova.
tableOfContents: false
---

# APIs nativas

<p class='intro'>Construye experiencias de aplicaciones con tecnología nativa con una colección de plugins de código abierto e integraciones premium que facilitan la adición de funcionalidades nativas de los dispositivos a cualquier aplicación Ionic con Capacitor o Cordova.</p>

<div id="native-enterprise-cards">
  <a href="https://capacitorjs.com/docs/plugins">
    <div class="image-wrapper">
      <img src="/docs/assets/img/native/capacitor@2x.png" width="440" height="222" alt="capacitor logo"/>
    </div>
    <div class="heading-group">
      <header>Plugins de Capacitor</header>
      <p>Un moderno, de código abierto runtime nativo construido y mantenido por el equipo de Ionic y la comunidad de Capacitor. Nuestra solución nativa recomendada.</p>
    </div>
  </a>

  <a href="/docs/native/community">
    <div class="image-wrapper">
      <img src="/docs/assets/img/native/cordova@2x.png" width="440" height="222" alt="cordova logo"/>
    </div>
    <div class="heading-group">
      <header>Plugins de Cordova</header>
      <p>Una colección de plugins gratuitos de Cordova, construido y mantenido por la comunidad, con ficheros TypeScript, una consistente API y convención de nombramiento.</p>
    </div>
  </a>
</div>

<a id="native-enterprise" href="https://ionicframework.com/native"></p> 

<div class="image-wrapper">
  <img src="/docs/assets/img/native/native-enterprise@2x.png" width="476" height="228" />
</div>

<div class="heading-group">
  <header> Ionic Native Enterprise Edition </header> 
  
  <p>
    Premium, soporta plugins de Capacitor y Cordova, integraciones de terceros y soluciones nativas prefabricadas para construir aplicaciones de grado superior.
  </p>
</div>

<p>
  </a>
</p>

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

<blockquote>
  <p>
    Estos documentos son para aplicaciones construidas con Ionic Framework 4.0.0 y mayores. Para proyectos Ionic v3 más antiguos, por favor <a href="/docs/v3/native">vea aquí</a>.
  </p>
</blockquote>