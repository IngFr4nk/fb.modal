class Modal {
  constructor (modalConfig) {
    this.modalConfig = modalConfig
    this.url = modalConfig.source
  }


  insertElement (referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling)
  }

  closeModal (elementClose, domElement) {
    elementClose.addEventListener('click', () => {
      document.querySelector(`.modal.${domElement}`).classList.remove('modal-show')
      const element = document.querySelector(`.modal-inner.${domElement}`)
      if(element){
        element.remove()
      }
    })
  }

  addElement (element, dom) {
    dom.appendChild(element)
  }

  init () {
    const modal = this.modalConfig
    // load css styles in html
    const styles = document.createElement('style')
    styles.innerHTML = `
      iframe{
        border:0;
      }
      .modal {
        opacity: 0;
        visibility: hidden;
        transform: scale(1.2);
        transition: all 0.3s ease-out;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(51, 51, 51, 0.94);
        text-align: center;
        z-index: 5;
      }

      .modal-header {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }

      .modal-inner {
        flex: 1;
        margin: auto;
        margin-top: 180px;
      }

      .modal img {
        width: 20%;
        max-width: 100%;
      }

      .close {
        position: absolute;
        top: 20px;
        right: 20px;
        text-decoration: none;
        font-family: verdana;
        color: white;
        cursor: pointer;
      }

      .modal-show {
        opacity: 1;
        visibility: visible;
        transform: scale(1);
      }
    `
    // add styles to modal element
    document.head.appendChild(styles)

    // create a container of modal
    const container = document.createElement('div')
    container.classList.add('modal')
    container.classList.add(modal.domElement)

    // convert hex color to rgba
    const rgbColor = []
    rgbColor.push(parseInt(modal.background.slice(1, 3), 16))
    rgbColor.push(parseInt(modal.background.slice(3, 5), 16))
    rgbColor.push(parseInt(modal.background.slice(5, 7), 16))

    // set color background to modal
    container.style.background = `rgba(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]}, ${modal.opacity})`

    // create inner html in modal for modal container
    const modalHeader = document.createElement('div')
    modalHeader.classList.add('modal-header')

    // create modal inner dom element
    const modalInner = document.createElement('div')
    modalInner.classList.add('modal-inner')
    modalInner.classList.add(modal.domElement)

    // create inner html for modal header
    const closeButton = document.createElement('a')
    closeButton.classList.add('close')
    closeButton.innerText = 'x'
    closeButton.classList.add(`${modal.domElement}`)
    modalHeader.appendChild(closeButton)

    const domElement = document.querySelector(`.${modal.domElement}`)
    domElement.style.cursor = 'pointer'

    domElement.addEventListener('click', () => {
      this.addElement(modalInner, container)
      const close = document.querySelector(`.close.${modal.domElement}`)
      document.querySelector(`.modal.${modal.domElement}`).classList.add('modal-show')
      if (modal.elementType === 'video') {
        document.querySelector(`.video.${modal.domElement}`).play()
      }
      this.closeModal(close, modal.domElement)
    })

    // create a custom element for modal
    let elementType = ''
    if (modal.elementType) {
      if (modal.elementType === 'video') {
        // create source element and add class
        const source = document.createElement('source')
        source.setAttribute('src', modal.source)
        source.innerText = 'Your browser does not support HTML5 video.'
        // create video element and add class and attributes
        elementType = document.createElement(modal.elementType)
        elementType.setAttribute('class', modal.elementType)
        elementType.classList.add(modal.domElement)
        elementType.setAttribute('width', modal.width)
        elementType.setAttribute('controls', 'controls')
        // assembling elements
        this.addElement(source, elementType)
        this.addElement(modalHeader, container)
        this.addElement(elementType, modalInner)
        this.addElement(modalInner, container)
        this.addElement(container, document.querySelector('body'))
      } else if (modal.elementType === 'youtube') {
        elementType = document.createElement('iframe')
        elementType.setAttribute('src', modal.source)
        elementType.setAttribute('width', modal.width)
        elementType.setAttribute('height', modal.height)
        elementType.setAttribute('controls', 'controls')
        this.addElement(modalHeader, container)
        this.addElement(elementType, modalInner)
        this.addElement(container, document.querySelector('body'))
      } else {
        console.error(`Attribute source for element ${modal.elementType} is not found`)
      }
    }
  }
}