---
title: Ionic Native edición Enterprise
---

Acelerar el desarrollo con soluciones poderosas a casos de uso comunes de empresas - todo construido y respaldado por el equipo Ionic. La creciente biblioteca de soluciones de Ionic está lista para desplegar en cualquiera de las aplicaciones que construyas con Ionic Native edición Enterprise

Ionic Native edición Enterprise incluye un conjunto fiable de APIs nativas y funcionalidades que puedes usar en tu aplicación Ionic, controlada y mantenida por el equipo Ionic.

## ¿Qué es Ionic Native edición Enterprise?

<div class="native-ee-pricing">
  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <td>
            <span class="native-ee-pricing-table">Características</span>
          </td>
          <th>
            <div class="plan-wrap">
              <span class="native-ee-pricing-table">Edición comunitaria</span>
              <div class="price">$0/mes </div>
            </div>
          </th>
          <th>
            <div class="plan-wrap">
              <span class="native-ee-pricing-table">Edición Enterprise</span>
              <div class="price" data-toggle="billing-team">
                Contáctanos</div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="stripe">
          <th>
            Mantenedor
          </th>
          <td>Comunidad de Software Libre</td>
          <td>Ionic</td>
        </tr>
        <tr>
          <th>
            Ciclos de lanzamiento regular y actualizaciones
          </th>
          <td>No</td>
          <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"/></svg></td>
        </tr>
        <tr class="stripe">
          <th>
            Soporte SLA y sistema de Ticketing
          </th>
          <td>No</td>
          <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"/></svg></td>
        </tr>
        <tr>
          <th>
            Asesoramiento y soporte
          </th>
          <td>No</td>
          <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"/></svg></td>
        </tr>
        <tr class="stripe">
          <th>
            Seguridad y corrección de errores
          </th>
          <td>Comunidad de Software Libre</td>
          <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"/></svg></td>
        </tr>
        <tr>
          <th>
            Asistencia en la implementación
          </th>
          <td>No</td>
          <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"/></svg></td>
        </tr>
        <tr class="stripe">
          <th>
            SLA garantizado
          </th>
          <td>No</td>
          <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"/></svg></td>
        </tr>
          <th></th>
          <td></td>
          <td><a class="btn"
                href="https://ionicframework.com/enterprise-edition">Aprende más</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

## Regístrate para acceder a Ionic Native edición Enterprise

<hubspot-form form-id="7c2c6529-48c0-4d17-86a0-bfd40c849bb1"></hubspot-form>

## Configuración

Para proporcionar la mejor experiencia, debes asegurarte de que estás usando la CLI de Ionic Enterprise Cordova, ya que la versión regular puede tener problemas con algunos plugins.

<command-line> <command-prompt>npm uninstall -g cordova</command-prompt> <command-prompt>npm install -g @ionic-enterprise/cordova</command-prompt> </command-line>

## Registra tu clave de producto

Si ya tienes una app, puedes simplemente registrar la clave de producto para tu aplicación usando la CLI de Ionic y siguiendo las instrucciones proporcionadas.

<command-line> <command-prompt># in your app root</command-prompt> <command-prompt>ionic enterprise register</command-prompt> </command-line>

Running the register command should generate a `.npmrc` file in you app directory and update your `ionic.config.json` it is safe to commit both these changes to version control so that CI and other team members can restore the plugins from a fresh clone of the repo. Now you should be able to install Ionic Enterprise plugins that you have access to by following the instructions on the plugin docs page.

<command-line> <command-prompt>ionic cordova plugin add @ionic-enterprise/plugin-name</command-prompt> </command-line>

## Plugins

### Authentication & Security

- [Auth Connect](/docs/enterprise/auth-connect)
- [Identity Vault](/docs/enterprise/identity-vault)

### Common Device Features

- [Android Permissions](/docs/enterprise/android-permissions)
- [App Version](/docs/enterprise/app-version)
- [Badge](/docs/enterprise/badge)
- [Browser](/docs/enterprise/inappbrowser)
- [Calendar](/docs/enterprise/calendar)
- [Camera](/docs/enterprise/camera)
- [Clipboard](/docs/enterprise/clipboard)
- [Device](/docs/enterprise/device)
- [Dialogs](/docs/enterprise/dialogs)
- [Email Composer](/docs/enterprise/email-composer)
- [Filesystem](/docs/enterprise/filesystem)
- [Geolocation](/docs/enterprise/geolocation)
- [Haptics & Vibration](/docs/enterprise/vibration)
- [Media](/docs/enterprise/media)
- [Media Capture](/docs/enterprise/media-capture)
- [Native Storage](/docs/enterprise/nativestorage)
- [Network Information](/docs/enterprise/network-information)
- [Screen Orientation](/docs/enterprise/screen-orientation)
- [Splash Screen](/docs/enterprise/splashscreen)
- [Status Bar](/docs/enterprise/statusbar)

### Integrated Services

- [Active Directory](https://ionicframework.com/integrations/ms-activedirectory-ms-adal)
- [mParticle](/docs/enterprise/mparticle)

### Offline & Data

- [Couchbase Lite](https://ionicframework.com/integrations/couchbase-lite)
- [Offline Support](https://ionicframework.com/integrations/couchbase-lite)

### Payments

- [Apple Wallet](/docs/enterprise/apple-wallet)