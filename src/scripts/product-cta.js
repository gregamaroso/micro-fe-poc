const prices = {
  t_porsche: '66,00 €',
  t_fendt: '54,00 €',
  t_eicher: '58,00 €',
};

class ProductCTA extends HTMLElement {
    static get observedAttributes() {
      return ['sku'];
    }

    constructor() {
      super();
      this.render();
      console.log();
    }

    render() {
      const sku = this.getAttribute('sku');
      const price = prices[sku];
      this.innerHTML = `<button type="button">buy for ${price}</button>`;
    }

    attributeChangedCallback(attr, oldValue, newValue) {
      this.render();
    }

    disconnectedCallback() {
    }
}
  
  window.customElements.define('product-cta', ProductCTA);