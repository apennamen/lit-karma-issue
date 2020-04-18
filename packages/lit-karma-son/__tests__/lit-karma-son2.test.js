import { html, fixture, expect } from '@open-wc/testing';
import '../lib/lit-karma-son2';


describe('Karma Son2', () => {
    it('should be dummy', async () => {
        const el = await fixture(html`<lit-karma-son2></lit-karma-son2>`);
        expect(el).shadowDom.to.equal(`<div>dummy</div>`)
    })
});
