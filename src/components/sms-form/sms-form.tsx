import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'sms-form',
  styleUrl: 'sms-form.css'
})
export class SmsForm {
  @State() value: string;

  componentDidLoad() {
    /* tslint:disable */
    // Use branch.io to send SMS link to download DevApp from app stores
    (function(b,r,a,n,c,h,_,s,d,k){if(!b[n]||!b[n]._q){for(;s<_.length;)c(h,_[s++]);d=r.createElement(a);d.async=1;d.src="https://cdn.branch.io/branch-latest.min.js";k=r.getElementsByTagName(a)[0];k.parentNode.insertBefore(d,k);b[n]=h}})(window,document,"script","branch",function(b,r){b[r]=function(){b._q.push([r,arguments])}},{_q:[],_v:1},"addListener applyCode autoAppIndex banner closeBanner closeJourney creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode trackCommerceEvent".split(" "), 0);
    (window as any).branch.init('key_live_egwSa60sfZm1rIZp7QRMofjdFrjBL1M1', function(err){ if(err) console.log(err); });
    /* tslint:enable */
  }

  handleSubmit(e) {
    e.preventDefault();

    const linkData: any = {
      campaign: 'DevApp Docs',
      channel: 'ionic-site'
    };

    const linkOptions: any = {
      make_new_link: false
    };

    (window as any).branch.sendSMS(this.value, linkData, linkOptions, (err) => {
     if (err) {
       console.log(err);
     } else {
       console.log('message sent');
       this.value = '';
     }
   });
  }

  handleChange(event) {
    this.value = event.target.value;
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <h6>Phone # (include country code):</h6>
        <input type="tel" value={this.value} onInput={(event) => this.handleChange(event)}/>
        <button type="submit">Text Me the Link</button>
      </form>
    );
  }
}
