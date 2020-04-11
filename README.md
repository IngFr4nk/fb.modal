# fb-modal #

### plugin para implememtar modales con video en falabella.com.co ###
 
#### **Modo de uso** ####

**paso 1**

En el html se crean los elementos que serviran para lanzar el modal:

<code>
    <body>
        <p class="modal1">youtube video</p>   
        <p class="modal2">source video</p>
    <body>
</code>


**paso 2**

Incluir el script en la página:


<code>
    <body>
        <p class="modal1">youtube video</p>   
        <p class="modal2">source video</p>
        <script src="../fb-modal.min.js"></script>
    <body>
</code>


**paso 3**

Despues de cargar la librería se instancia la clase y se inicia el complemento, se envian las opciones para crear el modal:

video YouTube:

<pre>
    <script type="text/javascript">
        const modalVideo1 = new Modal({
            domElement: 'modal1',
            elementType:'youtube',
            source: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1',
            background: '#aad500',
            opacity: .95,
            width: 600,
            height: 300
        })
    </script>
</pre>


Fuente de video:

<pre>
    <script type="text/javascript">
        const modalVideo2 = new Modal({
            domElement: 'modal2',
            elementType: 'video',
            source: 'https://www.w3schools.com/html/mov_bbb.mp4',
            background: '#e4022d',
            opacity: .70
        })
    </script>
</pre>



**paso 4**

Despues de instanciar la clase y definir las opciones se inicializa cada instancia:

<pre>
    <script type="text/javascript">
        modalVideo1.init()
        modalVideo2.init()
    </script>
</pre>
