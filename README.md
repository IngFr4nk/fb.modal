# fb-modal #

### plugin para implememtar modales con video en falabella.com.co ###
 
#### **Modo de uso** ####

**paso 1**

en el html se crean los elementos que serviran para lanzar el modal:


    <code>
        <body>
            <p class="moda1">youtube video</p>   
            <p class="modal2">source video</p>
        <body>
    </code>


**paso 2**

incluir el script en la página:


    <code>
        <body>
            <p class="modal1">youtube video</p>   
            <p class="modal2">source video</p>
            <script src="../fb-modal.min.js"></script>
        <body>
    </code>


**paso 3**

despues de cargar la librería se instancia la clase y se inicia el complemento, se envian las opciones para crear el modal:

video YouTube:

    <code>
        <script type="text/javascript">
            const modal = new Modal({
                domElement: 'moda1',
                elementType:'youtube',
                source: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1',
                background: '#aad500',
                opacity: .95,
                width: 600,
                height: 300
            })
        </script>
    </code>


Fuente de video:

    <code>
        <script type="text/javascript">
            const video = new Modal({
                domElement: 'modal2',
                elementType: 'video',
                source: 'https://www.w3schools.com/html/mov_bbb.mp4',
                background: '#e4022d',
                opacity: .70
            })
        </script>
    </code>
