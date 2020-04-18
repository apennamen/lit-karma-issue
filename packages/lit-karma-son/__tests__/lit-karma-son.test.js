import { html, fixture, expect } from '@open-wc/testing';
import '../lib/lit-karma-son';


describe('Karma Son', () => {
    it('should be dummy', async () => {
        const el = await fixture(html`<lit-karma-son></lit-karma-son>`);
		debugger;
        expect(el).shadowDom.to.equal(`<div>dummy</div>`)
    })
});
