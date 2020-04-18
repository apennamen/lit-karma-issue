import { html, fixture, expect } from '@open-wc/testing';
import { LitKarmaBase } from '../lib/lit-karma-base';

window.customElements.define('lit-karma-base', LitKarmaBase);


describe('Karma Base', () => {
    it('should be dummy', async () => {
        const el = await fixture(html`<lit-karma-base></lit-karma-base>`);
        expect(el).shadowDom.to.equal(`<div>dummy</div>`)
    })
});
