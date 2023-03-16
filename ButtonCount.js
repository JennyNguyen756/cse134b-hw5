class ButtonCount extends HTMLElement {
    constructor() {
        super();

        //new shadow root for the component
        const shadowRoot = this.attachShadow({ mode: 'open'});

        const button = document.createElement('button');
        button.innerHTML = 'Times Clicked : ';

        let counter = document.createElement('output');

        counter.textContent = 0;

        button.append(counter);

        let slot = document.createElement('slot');

        button.append(slot);

        button.addEventListener('click', () => {
            let initialValue = Number(counter.textContent);
            counter.textContent = initialValue+1;
        });

        this.shadowRoot.append(button);

    }


}
customElements.define('button-count', ButtonCount);