import { html } from 'lit-element';
import { LitKarmaBase } from 'lit-karma-base';

export class LitKarmaSon extends LitKarmaBase {
	render() {
    return html`
      <div>dummy</div>
    `;
  }
}

window.customElements.define('lit-karma-son', LitKarmaSon);
