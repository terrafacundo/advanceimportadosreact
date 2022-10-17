const productos=[
    {   
        id:'001',
        secid:'mb-m2-air-13',
        nombre:'MacBook M2 AIR 13,6"',
        foto:["https://http2.mlstatic.com/D_NQ_NP_637313-MLA51356401031_082022-O.webp","https://http2.mlstatic.com/D_NQ_NP_797680-MLA51356381245_082022-O.webp","https://http2.mlstatic.com/D_NQ_NP_604604-MLA51356381315_082022-O.webp","https://http2.mlstatic.com/D_NQ_NP_708839-MLA51356236557_082022-O.webp","https://http2.mlstatic.com/D_NQ_NP_613040-MLA51356222696_082022-O.webp","https://http2.mlstatic.com/D_NQ_NP_619023-MLA51356202957_082022-O.webp","https://http2.mlstatic.com/D_NQ_NP_781541-MLA51356417291_082022-O.webp","https://http2.mlstatic.com/D_NQ_NP_600061-MLA51356401446_082022-O.webp","https://http2.mlstatic.com/D_NQ_NP_876302-MLA51356381627_082022-O.webp","https://http2.mlstatic.com/D_NQ_NP_817689-MLA51356381077_082022-O.webp","https://http2.mlstatic.com/D_NQ_NP_798982-MLA51356381076_082022-O.webp","https://http2.mlstatic.com/D_NQ_NP_687018-MLA51356222876_082022-O.webp"],
        precio:"1140",
        memoria:['256GB','512GB','1TB','2TB'],
        ram:['8GB','16GB', '24GB'],
        componentes:['CPU 8GB/8GB GPU','CPU 8GB/10GB GPU'],
        descripcion:[
            {
            info:{
                titulo:"Chip M2 de Apple",
                lista:["CPU de 8 núcleos con 4 núcleos de rendimiento y 4 de eficiencia / CPU de 8 núcleos con 4 núcleos de rendimiento y 4 de eficiencia","GPU de 8 núcleos / GPU de 10 núcleos","Neural Engine de 16 núcleos","100 GB/s de ancho de banda de memoria"]}
            },
            {
            info:{
                titulo:"Motor multimedia",
                lista:["H.264, HEVC, ProRes y ProRes RAW con aceleración por hardware","Motor de decodificación de video","Motor de codificación de video","Motor de codificación y decodificación ProRes"]}
            },
            {
            info:{
                titulo:"Pantalla Liquid Retina",
                lista:["Pantalla de 13.6 pulgadas (diagonal) retroiluminada por LED con tecnología IPS;1 resolución nativa de 2560 x 1664 a 224 pixeles por pulgada compatible con 1,000 millones de colores","Brillo de 500 nits","Amplia gama de colores (P3)","Tecnología True Tone"]
            }},
            {
            info:{
                titulo:"Batería y energía",
                lista:["Hasta 18 horas de reproducción de video en la app Apple TV","Hasta 15 horas de navegación web inalámbrica","Batería de polímero de litio de 52.6 Wh","Adaptador de corriente USB-C de 30 W (incluido en las MacBook Air con chip M2 con GPU de 8 núcleos)","Adaptador de corriente compacto de 35 W con dos puertos USB-C (incluido en las MacBook Air con chip M2 con GPU de 10 núcleos y 512 GB de almacenamiento; opcional en las MacBook Air con chip M2 con GPU de 8 núcleos)","Cable de USB-C a MagSafe 3","Carga rápida con el adaptador de corriente USB-C de 67 W"]}
            },
            {
            info:{
                titulo:"Carga y expansión",
                lista:["Puerto de carga MagSafe 3","Entrada de 3.5 mm para audífonos","Batería de polímero de litio de 52.6 Wh","Dos puertos Thunderbolt/USB 4 compatibles con: Carga, DisplayPort, Thunderbolt 3 (hasta 40 Gb/s), USB 4 (hasta 40 Gb/s), USB 3.1 de segunda generación (hasta 10 Gb/s)"]}
            },
            {
            info:{
                titulo:"Memoria",
                lista:["8 GB (Memoria unificada de 8 GB)","Configurable con: 16 GB o 24 GB"]}
            },
            {
            info:{
                titulo:"Teclado y trackpad",
                lista:["78 (EE.UU.) o 79 (ISO) teclas, incluidas 12 teclas de función de altura estándar y 4 teclas de flecha en forma de “T” invertida","Touch ID","Sensor de luz ambiental","Trackpad Force Touch con control preciso del cursor y sensibilidad a la presión. Permite clics fuertes, aceleradores, trazos sensibles a la presión y gestos Multi‑Touch."]}
            },
            {
            info:{
                titulo:"Cámara",
                lista:["1080p","Cámara FaceTime HD","Procesador de señal de imagen avanzado con video computacional"]}
            },
            {
            info:{
                titulo:"Audio",
                lista:["Sistema de sonido de cuatro bocinas","Amplio sonido estéreo","Compatible con audio espacial al reproducir música o video con Dolby Atmos en las bocinas integradas","Audio espacial con seguimiento dinámico de la cabeza al usar los AirPods (tercera generación), AirPods Pro y AirPods Max","Sistema de tres micrófonos con tecnología beamforming direccional","Entrada de 3.5 mm para audífonos con compatibilidad avanzada para audífonos de alta impedancia"]}
            },
            {
            info:{
                titulo:"Compatibilidad con monitores",
                lista:["Es compatible simultáneamente con la resolución nativa de la pantalla integrada en 1,000 millones de colores y, un monitor externo con resolución de hasta 6K a 60 Hz","Salida de video digital Thunderbolt 3","Salida DisplayPort nativa a través de USB‑C","Compatible con salidas VGA, HDMI, DVI y Thunderbolt 2 mediante adaptadores (se venden por separado)"]}
            },
            {
            info:{
                titulo:"Tamaño y peso",
                lista:["Grosor: 1.13 cm","Ancho: 30.41 cm","Salida DisplayPort nativa a través de USB‑C","Profundidad: 21.50 cm","Peso: 1.24 kg"]}
            }
        ],
        color: ['space','silver','midnight','gold'],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['macbook','all']},
    {   
        id:'002', 
        nombre:'MacBook M2 PRO 13,6"',
        secid:'mb-m2-pro-13',
        foto:["https://images-na.ssl-images-amazon.com/images/I/61L5QgPvgqL.__AC_SY445_SX342_QL70_FMwebp_.jpg","https://m.media-amazon.com/images/I/71K+bhq9bZL._AC_SX679_.jpg","https://m.media-amazon.com/images/I/61bX2AoGj2L._AC_SX679_.jpg","https://m.media-amazon.com/images/I/71cZWwc6ZOL._AC_SX679_.jpg"],
        precio:"1495",
        memoria:['256GB','512GB','1TB','2TB'],
        ram:['8GB','16GB', '24GB'],
        componentes:['CPU 8GB/8GB GPU'],
        descripcion:[
            {
            info:{
                titulo:"Chip M2 de Apple",
                lista:["CPU de 8 núcleos con 4 núcleos de rendimiento y 4 de eficiencia","GPU de 10 núcleos","Neural Engine de 16 núcleos","100 GB/s de ancho de banda de memoria"]}
            },
            {
            info:{
                titulo:"Motor multimedia",
                lista:["H.264, HEVC, ProRes y ProRes RAW con aceleración por hardware","Motor de decodificación de video","Motor de codificación de video","Motor de codificación y decodificación ProRes"]}
            },
            {
            info:{
                titulo:"Pantalla Retina",
                lista:["Pantalla de 13.3 pulgadas (diagonal) retroiluminada por LED con tecnología IPS; resolución nativa de 2560 x 1600 a 227 pixeles por pulgada compatible con millones de colores","Brillo de 500 nits","Amplia gama de colores (P3)","Tecnología True Tone"]
            }},
            {
            info:{
                titulo:"Batería y energía",
                lista:["Hasta 20 horas de reproducción de video en la app Apple TV","Hasta 17 horas de navegación web inalámbrica","Batería de polímero de litio de 58.2 Wh","Adaptador de corriente USB-C de 67 W"]}
            },
            {
            info:{
                titulo:"Carga y Expansión",
                lista:["Dos puertos Thunderbolt / USB 4 compatibles","DisplayPort","Thunderbolt 3 (hasta 40 Gb/s)","USB 4 (hasta 40 Gb/s)","USB 3.1 de segunda generación (hasta 10 Gb/s)"]}
            },
            {
            info:{
                titulo:"Memoria",
                lista:["8 GB (Memoria unificada de 8 GB)","Configurable con: 16 GB o 24 GB"]}
            },
            {
            info:{
                titulo:"Teclado y trackpad",
                lista:["65 (EE.UU.) o 66 (ISO) teclas, incluidas 4 teclas de flecha en forma de “T” invertida","Touch Bar","Touch ID","Sensor de luz ambiental","Trackpad Force Touch con control preciso del cursor y sensibilidad a la presión. Permite clics fuertes, aceleradores, trazos sensibles a la presión y gestos Multi‑Touch."]}
            },
            {
            info:{
                titulo:"Cámara",
                lista:["Cámara FaceTime HD de 720p","Procesador de señal de imagen avanzado con video computacional"]}
            },
            {
            info:{
                titulo:"Audio",
                lista:["Bocinas estéreo con alto rango dinámico","Amplio sonido estéreo","Compatible con audio espacial al reproducir música o video con Dolby Atmos en las bocinas integradas","Audio espacial con seguimiento dinámico de la cabeza al usar los AirPods (tercera generación), AirPods Pro y AirPods Max","Sistema de tres micrófonos con tecnología beamforming direccional","Entrada de 3.5 mm para audífonos con compatibilidad avanzada para audífonos de alta impedancia"]}
            },
            {
            info:{
                titulo:"Compatibilidad con monitores",
                lista:["Es compatible simultáneamente con la resolución nativa de la pantalla integrada en millones de colores y un monitor externo con resolución de hasta 6K a 60 Hz","Salida de video digital Thunderbolt 3","Salida DisplayPort nativa a través de USB‑C","Compatible con salidas VGA, HDMI, DVI y Thunderbolt 2 mediante adaptadores (se venden por separado)"]}
            },
            {
            info:{
                titulo:"Tamaño y peso",
                lista:["Grosor: 1.56 cm","Ancho: 30.41 cm","Profundidad: 21.24 cm","Peso: 1.4 kg"]}
            }
        ],
        color: ['space','silver'],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['macbook','all']},
    {   
        id:'003',
        nombre:'MacBook M1 AIR 13,3"',
        secid:'mb-m1-air-13',
        foto:["https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SX342_SY445_.jpg","https://m.media-amazon.com/images/I/712v9WGWDBL._AC_SX679_.jpg","https://m.media-amazon.com/images/I/91YEUMzK8cL._AC_SX679_.jpg","https://m.media-amazon.com/images/I/71TPda7cwUL._AC_SX679_.jpg","https://m.media-amazon.com/images/I/719BHaUQ46L._AC_SX679_.jpg","https://m.media-amazon.com/images/I/91etkaXZjEL._AC_SX679_.jpg","https://m.media-amazon.com/images/I/71vFKBpKakL._AC_SX679_.jpg","https://m.media-amazon.com/images/I/81HZAfCGZ5L._AC_SX679_.jpg","https://m.media-amazon.com/images/I/81PeNcC5W4L._AC_SX679_.jpg"],
        precio:"1040",
        memoria:['256GB','512GB','1TB','2TB'],
        ram:['8GB','16GB'],
        componentes:['CPU 8GB/7GB GPU'],
        descripcion:[
            {
            info:{
                titulo:"Chip M1 de Apple",
                lista:["CPU de 8 núcleos con 4 núcleos de rendimiento y 4 de eficiencia","GPU de 7 núcleos","Neural Engine de 16 núcleos"]}
            },
            {
            info:{
                titulo:"Pantalla Retina",
                lista:["Pantalla de 13.3 pulgadas (diagonal) retroiluminada por LED con tecnología IPS; resolución nativa de 2560 x 1600 a 227 pixeles por pulgada compatible con millones de colores","Brillo de 400 nits","Amplia gama de colores (P3)","Tecnología True Tone"]
            }},
            {
            info:{
                titulo:"Batería y energía",
                lista:["Hasta 15 horas de navegación web inalámbrica","Hasta 18 horas de reproducción de video en la app Apple TV","Batería de polímero de litio integrada de 49.9 Wh","Adaptador de corriente USB-C de 30 W"]}
            },
            {
            info:{
                titulo:"Carga y Expansión",
                lista:["Dos puertos Thunderbolt / USB 4 compatibles","DisplayPort","Thunderbolt 3 (hasta 40 Gb/s)","USB 4 (hasta 40 Gb/s)","USB 3.1 de segunda generación (hasta 10 Gb/s)"]}
            },
            {
            info:{
                titulo:"Memoria",
                lista:["8 GB (Memoria unificada de 8 GB)","Configurable con: 16 GB"]}
            },
            {
            info:{
                titulo:"Teclado y trackpad",
                lista:["78 (EE.UU.) o 79 (ISO) teclas, incluidas 12 teclas de función y 4 teclas de flecha en forma de “T” invertida","Sensor de luz ambiental","Sensor Touch ID","Trackpad Force Touch con control preciso del cursor y sensibilidad a la presión. Permite clics fuertes, aceleradores, trazos sensibles a la presión y gestos Multi‑Touch."]}
            },
            {
            info:{
                titulo:"Cámara",
                lista:["Cámara FaceTime HD de 720p","Procesador de señal de imagen avanzado con video computacional"]}
            },
            {
            info:{
                titulo:"Audio",
                lista:["Bocinas estéreo","Amplio sonido estéreo","Compatible con Dolby Atmos","Sistema de tres micrófonos con tecnología beamforming direccional","Sistema de tres micrófonos con tecnología beamforming direccional","Entrada de 3.5 mm para audífonos"]}
            },
            {
            info:{
                titulo:"Compatibilidad con monitores",
                lista:["Es compatible simultáneamente con la resolución nativa de la pantalla integrada en millones de colores y un monitor externo con resolución de hasta 6K a 60 Hz","Salida de video digital Thunderbolt 3","Salida DisplayPort nativa a través de USB‑C","Compatible con salidas VGA, HDMI, DVI y Thunderbolt 2 mediante adaptadores (se venden por separado)"]}
            },
            {
            info:{
                titulo:"Tamaño y peso",
                lista:["Grosor: 0.41 a 1.61 cm","Ancho: 30.41 cm","Profundidad: 21.24 cm","Peso: 1.29 kg"]}
            }
        ],
        color: ['space','silver','gold'],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['macbook','all']},
    {   
        id:'004',
        nombre:'MacBook M1 PRO 14,2"',
        secid:'mb-m1-pro-14',
        foto:["https://m.media-amazon.com/images/I/61vFO3R5UNL._AC_SX679_.jpg","https://m.media-amazon.com/images/I/71YhRQy50oL._AC_SX679_.jpg","https://m.media-amazon.com/images/I/61cCf94xIEL._AC_SX679_.jpg","https://m.media-amazon.com/images/I/71AKE565U4L._AC_SX679_.jpg"],
        precio:"",
        memoria:['256GB','512GB','1TB','2TB','4TB','8TB'],
        ram:['16GB', '32GB'],
        componentes:['CPU 8GB/14GB GPU','CPU 10GB/14GB GPU','CPU 10GB/16GB GPU'],
        descripcion:[
            {
            info:{
                titulo:"Chip M1 Pro de Apple",
                lista:["CPU de 8 núcleos con 6 núcleos de rendimiento y 2 de eficiencia","GPU de 14 núcleos","Neural Engine de 16 núcleos","200 GB/s de ancho de banda de memoria"]}
            },
            {
            info:{
                titulo:"Motor multimedia",
                lista:["H.264, HEVC, ProRes y ProRes RAW con aceleración por hardware","Motor de decodificación de video","Motor de codificación de video"]}
            },
            {
            info:{
                titulo:"XDR (rango dinámico extremo)",
                lista:["Relación de contraste 1,000,000:1","XDR: 1,000 nits de brillo constante (pantalla completa), 1,600 nits de brillo máximo2 (sólo contenido HDR)","SDR: 500 nits de brillo"]
            }},
            {
            info:{
                titulo:"Frecuencias de actualización",
                lista:["Tecnología ProMotion con frecuencias de actualización adaptativas de hasta 120 Hz","Frecuencias de actualización fijas: 47.95 Hz, 48 Hz, 50 Hz, 59.94 Hz, 60 Hz"]
            }},
            {
            info:{
                titulo:"Color",
                lista:["1,000 millones de colores","Amplia gama de colores (P3)","Tecnología True Tone"]
            }},
            {
            info:{
                titulo:"Batería y energía",
                lista:["Hasta 17 horas de reproducción de video en la app Apple TV","Hasta 11 horas de navegación web inalámbrica","Batería de polímero de litio de 70 Wh","Adaptador de corriente USB‑C de 67 W (incluido en las MacBook Pro con chip M1 Pro con CPU de 8 núcleos)","Adaptador de corriente USB‑C de 96 W (incluido en las MacBook Pro con chip M1 Pro con CPU de 10 núcleos o con chip M1 Max, opcional en las MacBook Pro con chip M1 Pro con CPU de 8 núcleos)","Cable de USB‑C a MagSafe 3","Carga rápida con el adaptador de corriente USB‑C de 96 W"]}
            },
            {
            info:{
                titulo:"Carga y Expansión",
                lista:["Ranura para tarjeta SDXC","Puerto HDMI","Puerto HDMI","Puerto MagSafe 3","Tres puertos Thunderbolt 4 (USB-C)"]}
            },
            {
            info:{
                titulo:"Memoria",
                lista:["16 GB (Memoria unificada de 16 GB)","32 GB (M1 Pro o M1 Max) o 64 GB (M1 Max)"]}
            },
            {
            info:{
                titulo:"Teclado y trackpad",
                lista:["65 (EE.UU.) o 66 (ISO) teclas, incluidas 4 teclas de flecha en forma de “T” invertida","Touch ID","Sensor de luz ambiental","Trackpad Force Touch con control preciso del cursor y sensibilidad a la presión. Permite clics fuertes, aceleradores, trazos sensibles a la presión y gestos Multi‑Touch."]}
            },
            {
            info:{
                titulo:"Cámara",
                lista:["Cámara FaceTime HD de 1080p","Procesador de señal de imagen avanzado con video computacional"]}
            },
            {
            info:{
                titulo:"Audio",
                lista:["Bocinas estéreo con alto rango dinámico","Amplio sonido estéreo","Compatible con audio espacial al reproducir música o video con Dolby Atmos en las bocinas integradas","Audio espacial con seguimiento dinámico de la cabeza al usar los AirPods (tercera generación), AirPods Pro y AirPods Max","Sistema de tres micrófonos con tecnología beamforming direccional","Entrada de 3.5 mm para audífonos con compatibilidad avanzada para audífonos de alta impedancia"]}
            },
            {
            info:{
                titulo:"Compatibilidad con monitores",
                lista:["Es compatible simultáneamente con la resolución nativa de la pantalla integrada en millones de colores y un monitor externo con resolución de hasta 6K a 60 Hz","Salida de video digital Thunderbolt 3","Salida DisplayPort nativa a través de USB‑C","Compatible con salidas VGA, HDMI, DVI y Thunderbolt 2 mediante adaptadores (se venden por separado)"]}
            },
            {
            info:{
                titulo:"Tamaño y peso",
                lista:["Grosor: 1.55 cm","Ancho: 31.26cm","Profundidad: 22.12 cm","Peso: 1.61 kg"]}
            }
        ],
        color: ['space','silver'],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['macbook','all']},
    {   
        id:'005',
        nombre:'MacBook M1 MAX',
        secid:'mb-m1-MAX',
        foto:["https://m.media-amazon.com/images/I/61vFO3R5UNL._AC_SX569_.jpg","https://m.media-amazon.com/images/I/71YhRQy50oL._AC_SX569_.jpg","https://m.media-amazon.com/images/I/91hFzfaHeNL._AC_SX569_.jpg"],
        precio:"",
        memoria:['512GB','1TB','2TB','4TB','8TB'],
        ram:['32GB','64GB'],
        componentes:['CPU 10GB/24GB GPU','CPU 10GB/32GB GPU'],
        descripcion:[
            {
            info:{
                titulo:"Chip M1 Pro de Apple",
                lista:["CPU de 8 núcleos con 6 núcleos de rendimiento y 2 de eficiencia","GPU de 14 núcleos","Neural Engine de 16 núcleos","200 GB/s de ancho de banda de memoria"]}
            },
            {
            info:{
                titulo:"Motor multimedia",
                lista:["H.264, HEVC, ProRes y ProRes RAW con aceleración por hardware","Motor de decodificación de video","Motor de codificación de video"]}
            },
            {
            info:{
                titulo:"XDR (rango dinámico extremo)",
                lista:["Relación de contraste 1,000,000:1","XDR: 1,000 nits de brillo constante (pantalla completa), 1,600 nits de brillo máximo2 (sólo contenido HDR)","SDR: 500 nits de brillo"]
            }},
            {
            info:{
                titulo:"Frecuencias de actualización",
                lista:["Tecnología ProMotion con frecuencias de actualización adaptativas de hasta 120 Hz","Frecuencias de actualización fijas: 47.95 Hz, 48 Hz, 50 Hz, 59.94 Hz, 60 Hz"]
            }},
            {
            info:{
                titulo:"Color",
                lista:["1,000 millones de colores","Amplia gama de colores (P3)","Tecnología True Tone"]
            }},
            {
            info:{
                titulo:"Batería y energía",
                lista:["Hasta 17 horas de reproducción de video en la app Apple TV","Hasta 11 horas de navegación web inalámbrica","Batería de polímero de litio de 70 Wh","Adaptador de corriente USB‑C de 67 W (incluido en las MacBook Pro con chip M1 Pro con CPU de 8 núcleos)","Adaptador de corriente USB‑C de 96 W (incluido en las MacBook Pro con chip M1 Pro con CPU de 10 núcleos o con chip M1 Max, opcional en las MacBook Pro con chip M1 Pro con CPU de 8 núcleos)","Cable de USB‑C a MagSafe 3","Carga rápida con el adaptador de corriente USB‑C de 96 W"]}
            },
            {
            info:{
                titulo:"Carga y Expansión",
                lista:["Ranura para tarjeta SDXC","Puerto HDMI","Puerto HDMI","Puerto MagSafe 3","Tres puertos Thunderbolt 4 (USB-C)"]}
            },
            {
            info:{
                titulo:"Memoria",
                lista:["16 GB (Memoria unificada de 16 GB)","32 GB (M1 Pro o M1 Max) o 64 GB (M1 Max)"]}
            },
            {
            info:{
                titulo:"Teclado y trackpad",
                lista:["65 (EE.UU.) o 66 (ISO) teclas, incluidas 4 teclas de flecha en forma de “T” invertida","Touch ID","Sensor de luz ambiental","Trackpad Force Touch con control preciso del cursor y sensibilidad a la presión. Permite clics fuertes, aceleradores, trazos sensibles a la presión y gestos Multi‑Touch."]}
            },
            {
            info:{
                titulo:"Cámara",
                lista:["Cámara FaceTime HD de 1080p","Procesador de señal de imagen avanzado con video computacional"]}
            },
            {
            info:{
                titulo:"Audio",
                lista:["Bocinas estéreo con alto rango dinámico","Amplio sonido estéreo","Compatible con audio espacial al reproducir música o video con Dolby Atmos en las bocinas integradas","Audio espacial con seguimiento dinámico de la cabeza al usar los AirPods (tercera generación), AirPods Pro y AirPods Max","Sistema de tres micrófonos con tecnología beamforming direccional","Entrada de 3.5 mm para audífonos con compatibilidad avanzada para audífonos de alta impedancia"]}
            },
            {
            info:{
                titulo:"Compatibilidad con monitores",
                lista:["Es compatible simultáneamente con la resolución nativa de la pantalla integrada en millones de colores y un monitor externo con resolución de hasta 6K a 60 Hz","Salida de video digital Thunderbolt 3","Salida DisplayPort nativa a través de USB‑C","Compatible con salidas VGA, HDMI, DVI y Thunderbolt 2 mediante adaptadores (se venden por separado)"]}
            },
            {
            info:{
                titulo:"Tamaño y peso",
                lista:["Grosor: 1.55 cm","Ancho: 31.26cm","Profundidad: 22.12 cm","Peso: 1.61 kg"]}
            }
        ],
        color: ['space','silver','midnight','gold'],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['macbook','all']},
    {   
        id:'006',
        nombre:'MacBook M1 PRO 16,2"',
        secid:'mb-m1-pro-16',
        foto:["https://m.media-amazon.com/images/I/61aUBxqc5PL._AC_SX466_.jpg","https://m.media-amazon.com/images/I/71ooAuqn7sL._AC_SX466_.jpg","https://m.media-amazon.com/images/I/61Y30DpqRVL._AC_SX466_.jpg","https://m.media-amazon.com/images/I/716QjdQOR+L._AC_SX466_.jpg"],
        precio:"",
        memoria:['512GB','1TB','2TB','4TB','8TB'],
        ram:['16GB','32GB'],
        componentes:['CPU 10GB/16GB GPU','CPU 10GB/24GB GPU'],
        descripcion:[
            {
            info:{
                titulo:"Chip M1 Pro de Apple",
                lista:["CPU de 8 núcleos con 6 núcleos de rendimiento y 2 de eficiencia","GPU de 14 núcleos","Neural Engine de 16 núcleos","200 GB/s de ancho de banda de memoria"]}
            },
            {
            info:{
                titulo:"Motor multimedia",
                lista:["H.264, HEVC, ProRes y ProRes RAW con aceleración por hardware","Motor de decodificación de video","Motor de codificación de video"]}
            },
            {
            info:{
                titulo:"XDR (rango dinámico extremo)",
                lista:["Relación de contraste 1,000,000:1","XDR: 1,000 nits de brillo constante (pantalla completa), 1,600 nits de brillo máximo2 (sólo contenido HDR)","SDR: 500 nits de brillo"]
            }},
            {
            info:{
                titulo:"Frecuencias de actualización",
                lista:["Tecnología ProMotion con frecuencias de actualización adaptativas de hasta 120 Hz","Frecuencias de actualización fijas: 47.95 Hz, 48 Hz, 50 Hz, 59.94 Hz, 60 Hz"]
            }},
            {
            info:{
                titulo:"Color",
                lista:["1,000 millones de colores","Amplia gama de colores (P3)","Tecnología True Tone"]
            }},
            {
            info:{
                titulo:"Batería y energía",
                lista:["Hasta 17 horas de reproducción de video en la app Apple TV","Hasta 11 horas de navegación web inalámbrica","Batería de polímero de litio de 70 Wh","Adaptador de corriente USB‑C de 67 W (incluido en las MacBook Pro con chip M1 Pro con CPU de 8 núcleos)","Adaptador de corriente USB‑C de 96 W (incluido en las MacBook Pro con chip M1 Pro con CPU de 10 núcleos o con chip M1 Max, opcional en las MacBook Pro con chip M1 Pro con CPU de 8 núcleos)","Cable de USB‑C a MagSafe 3","Carga rápida con el adaptador de corriente USB‑C de 96 W"]}
            },
            {
            info:{
                titulo:"Carga y Expansión",
                lista:["Ranura para tarjeta SDXC","Puerto HDMI","Puerto HDMI","Puerto MagSafe 3","Tres puertos Thunderbolt 4 (USB-C)"]}
            },
            {
            info:{
                titulo:"Memoria",
                lista:["16 GB (Memoria unificada de 16 GB)","32 GB (M1 Pro o M1 Max) o 64 GB (M1 Max)"]}
            },
            {
            info:{
                titulo:"Teclado y trackpad",
                lista:["65 (EE.UU.) o 66 (ISO) teclas, incluidas 4 teclas de flecha en forma de “T” invertida","Touch ID","Sensor de luz ambiental","Trackpad Force Touch con control preciso del cursor y sensibilidad a la presión. Permite clics fuertes, aceleradores, trazos sensibles a la presión y gestos Multi‑Touch."]}
            },
            {
            info:{
                titulo:"Cámara",
                lista:["Cámara FaceTime HD de 1080p","Procesador de señal de imagen avanzado con video computacional"]}
            },
            {
            info:{
                titulo:"Audio",
                lista:["Bocinas estéreo con alto rango dinámico","Amplio sonido estéreo","Compatible con audio espacial al reproducir música o video con Dolby Atmos en las bocinas integradas","Audio espacial con seguimiento dinámico de la cabeza al usar los AirPods (tercera generación), AirPods Pro y AirPods Max","Sistema de tres micrófonos con tecnología beamforming direccional","Entrada de 3.5 mm para audífonos con compatibilidad avanzada para audífonos de alta impedancia"]}
            },
            {
            info:{
                titulo:"Compatibilidad con monitores",
                lista:["Es compatible simultáneamente con la resolución nativa de la pantalla integrada en millones de colores y un monitor externo con resolución de hasta 6K a 60 Hz","Salida de video digital Thunderbolt 3","Salida DisplayPort nativa a través de USB‑C","Compatible con salidas VGA, HDMI, DVI y Thunderbolt 2 mediante adaptadores (se venden por separado)"]}
            },
            {
            info:{
                titulo:"Tamaño y peso",
                lista:["Grosor: 1.55 cm","Ancho: 31.26cm","Profundidad: 22.12 cm","Peso: 1.61 kg"]}
            }
        ],
        color: ['space','silver'],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['macbook','all']},
    
    //productos apple fin

    //Gafas VR
    {
        id:'007',
        nombre:'Vive Cosmos Elite Virtual Reality System',
        foto:["https://images-na.ssl-images-amazon.com/images/I/41MYq8EhyCS._SX300_SY300_QL70_FMwebp_.jpg","https://m.media-amazon.com/images/I/61yy3iem43L._SX425_.jpg","https://m.media-amazon.com/images/I/51ieMz+I4RL._SX522_.jpg","https://m.media-amazon.com/images/I/71xZdKNJwmL._SX425_.jpg","https://m.media-amazon.com/images/I/51EK33M5t4L._SX522_.jpg"],
        precio:"749.00",
        memoria:["-"],
        ram:["-"],
        componentes:["-"],
        descripcion:[{
            info:{
                titulo:"Sobre el producto",
                lista:["Seguimiento del faro: la estación base 1.0 proporciona hasta 160 pies cuadrados. Pies de espacio de juego para aquellos que exigen lo mejor en juegos Vive VR.","Gráficos nítidos: ve el mundo virtual a través de una resolución de píxeles combinada de 2880 x 1700. Los nuevos paneles LCD reducen la distancia entre píxeles, minimizando el efecto de la puerta de la pantalla.","Diseño abatible: combina fácilmente entre la realidad y la realidad virtual con el diseño abatible, sin interrumpir tu viaje de realidad virtual.","Profundidad: 21.50 cm","Puerto Vive: aprovecha al máximo la realidad virtual con Infinity. Disfruta de acceso ilimitado a cientos de juegos, aplicaciones y videos de realidad virtual.","Sistema de realidad Vive - El sistema de realidad Vive te permite navegar sin problemas entre experiencias virtuales. Descubre contenido nuevo, inicia títulos desde tu biblioteca, reproduce un video o navega por la web."]}
            },
            {
                info:{
                    titulo:"Dimensiones del producto",
                    lista:["6.3 x 8.27 x 3.46 pulgadas.","12.85 Libras"]}
                },
            {
                info:{
                    titulo:"Pilas",
                    lista:["4 Polímero de litio necesaria(s), incluida(s)"]}
                }],
        color: ['black'],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['vr','all']}, 

    {
        id:'008',
        nombre:'Vive Pro 2 Headset Only',
        foto:["https://m.media-amazon.com/images/I/61iR+WmZZhS._SX522_.jpg","https://m.media-amazon.com/images/I/61dY-VzO7vL._SX466_.jpg","https://m.media-amazon.com/images/I/61c7Ow2tHoL._SX466_.jpg","https://m.media-amazon.com/images/I/61aHWjDleqL._SX466_.jpg","https://m.media-amazon.com/images/I/61mikUEOMWL._SX466_.jpg"],
        precio:"824.98",
        memoria:["-"],
        ram:["-"],
        componentes:["-"],
        descripcion:[{
            info:{
                titulo:"Sobre el producto",
                lista:["Visualiza en claridad 5K, saca los detalles más finos con resolución combinada de 4896 x 2448. La resolución 5K puede estar sujeta a compatibilidad de procesamiento","Ve más de tu entorno: un amplio campo de visión de 120 grados (FOV) amplía la experiencia de visualización de realidad virtual. El ángulo aumentado se alinea mejor con los ojos humanos, lo que te permite ver de forma más natural","Experimenta imágenes sin problemas: aumenta tu comodidad visual en juegos y aplicaciones intensivos de gráficos con una frecuencia de actualización de 120 Hz.","Disfruta de la realidad virtual con horas en el extremo de la comodidad, construcción equilibrada y ajuste que proporciona un ajuste cómodo para sesiones de realidad virtual de cualquier longitud y propósito. Los auriculares se adaptan a una amplia gama de tamaños de cabeza y tipos de visión, incluso gafas","Puerto Vive: aprovecha al máximo la realidad virtual con Infinity. Disfruta de acceso ilimitado a cientos de juegos, aplicaciones y videos de realidad virtual.","Encuentra tu punto dulce, minimiza la fatiga ocular con el dial de ajuste IPD. Distancia interpupilar (ipd): la distancia medida en mm entre los centros de las pupilas oculares","Consulta el manual de usuario adjunto y la guía del producto PDF a continuación"]}
            },
            {
                info:{
                    titulo:"Dimensiones del producto",
                    lista:["13.2 x 13.1 x 7.3 pulgadas.","6.62 Libras"]}
                }],
        color: ['black'],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['vr','all']}, 
    

    {
        id:'009',
        nombre:'Vive Pro Eye Office Full System - PC',
        foto:["https://m.media-amazon.com/images/I/61m5jK5vvoS._SX466_.jpg","https://m.media-amazon.com/images/I/613hkpXpGcS._SX342_.jpg","https://m.media-amazon.com/images/I/61MaNWDU7gS._SX342_.jpg","https://m.media-amazon.com/images/I/61xMmCXEY4S._SX342_.jpg","https://m.media-amazon.com/images/I/51YxSgo4BBS._SX342_.jpg","https://m.media-amazon.com/images/I/511r0F0wZ1S._SX342_.jpg"],
        precio:"",
        memoria:["-"],
        ram:["-"],
        componentes:["-"],
        descripcion:[{
            info:{
                titulo:"Sobre el producto",
                lista:["Seguimiento de vapor VR 2.0: desde sentado hasta de pie hasta escala de habitación completa de 22 pies 11 pulgadas x 22 pies 11 pulgadas. Ideal para entornos multiusuario para precisión de seguimiento submilímetros","Pantalla de alta resolución: pantallas OLED dobles con resolución líder en la industria de 2880 x 1600 píxeles para una fidelidad visual inigualable de gráficos, texto y texturas","Audio espacial con cancelación de ruido: auriculares de alta resolución, alta impedancia, sonido espacial 3D con cancelación activa de ruido para una experiencia inmersiva sin distracciones de sonidos del mundo real","Multiusuario y uso extendido: distribución uniforme del peso de los auriculares, fácil de poner y quitar, y ajustes para el tamaño de la cabeza, gafas y distancia interpupilar (IPD) hace que el uso multiusuario y prolongado sea más fácil que nunca","ECOSISTEMA DE TRACKER VIVE: amplía los casos de uso comercial añadiendo objetos reales al rastreador VIVE llevando el objeto a tu simulación virtual. Ideal para captura de movimiento, automoción, aeroespacial o simulación de equipos pesados.","Infinidad de VIVEPORT: obtén 2 meses de juego ilimitado de realidad virtual de más de 700 juegos y aplicaciones. Código incluido en la caja"]}
            },
            {
                info:{
                    titulo:"Dimensiones del producto",
                    lista:["2 x 4 x 8 pulgadas.","3.82 Libras"]}
                },
            {
                info:{
                    titulo:"Pilas",
                    lista:["4 Polímero de litio necesaria(s), incluida(s)"]}
                }],
        color: ['blue'],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['vr','all']}, 
    

    {
        id:'010',
        nombre:'Quest 2',
        foto:["https://m.media-amazon.com/images/I/61kwRNPtMpL._SX466_.jpg"],
        precio:"399.99",
        secid:"quest2",
        memoria:['128GB','256GB'],
        ram:["-"],
        componentes:["-"],
        descripcion:[{
            info:{
                titulo:"Sobre el producto",
                lista:["Compra Meta Quest 2. Obtén el sable Beat. Por tiempo limitado, obtén el exitoso juego de ritmo de realidad virtual incluido cuando compres Meta Quest 2. Mantén tu experiencia suave y sin costuras, incluso cuando la acción de alta velocidad se despliega a tu alrededor con un procesador súper rápido y pantalla de alta resolución.","Experimenta una inmersión total con audio posicional 3D, seguimiento manual y retroalimentación háptica, trabajando juntos para hacer que los mundos virtuales se sientan reales.","Explora un universo en expansión de más de 350 títulos en juegos, fitness, social/multijugador y entretenimiento, incluyendo lanzamientos exclusivos de taquilla y experiencias de realidad virtual totalmente únicas.","Viaja universos en fantasías de taquilla, asusta sin ingenio en aventuras de terror o colabora con colegas en espacios de trabajo innovadores.","Únete en increíbles espacios sociales y arenas multijugador mientras llevas en eventos en vivo con amigos y familiares, encuentra tu nuevo equipo de entrenamiento o únete a misiones con compañeros aventureros.","Sé realmente libre de vagar en realidad virtual con auriculares inalámbricos, controles intuitivos, una batería incorporada, fácil configuración y no necesita PC o consola*","Juega sin preocupaciones, ya que un límite Guardian fácil de usar te permite establecer tu espacio de juego designado y te avisa si te mueves fuera de él.","Lleva VR tu Quest 2 ligero y portátil dondequiera que vayas en el mundo real."]},
            }],
        color: ['silver'],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['vr','all']}, 

    //Notebooks
    {
        id:'011',
        nombre:'Notebook Asus X512JA-211.VBGB',
        foto:["https://m.media-amazon.com/images/I/71JrAvjc3qS._AC_SX569_.jpg","https://m.media-amazon.com/images/I/61U2pPSZ-pS._AC_SX522_.jpg","https://m.media-amazon.com/images/I/71R2pQun6lS._AC_SX522_.jpg","https://m.media-amazon.com/images/I/81sdhkMx5nS._AC_SX522_.jpg","https://m.media-amazon.com/images/I/51i9IpUtNvS._AC_SX522_.jpg","https://m.media-amazon.com/images/I/51YvEhCetPS._AC_SX522_.jpg","https://m.media-amazon.com/images/I/51I-VQqytVS._AC_SX425_.jpg"],
        precio:"",
        memoria:['256GB SSD'],
        ram:['8GB INTEGRADA'],
        componentes:['Core i7-1065G7 / Intel HD Graphics 6000'],
        descripcion:[{
            info:{
                titulo:"Pantalla con gran impacto visual",
                lista:["Su pantalla LED de 15.6' y 1920x1080 px de resolución te brindará colores más vivos y definidos.","Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle."]},
            },
        {
            info:{
                titulo:"Alta eficiencia a tu alcance",
                lista:["Su procesador Intel Core i7 de 4 núcleos, está pensado para quienes buscan la máxima exigencia en la productividad. ","Está destinado a personas que trabajan con programas de diseño, de edición o tienen un nivel de juego alto. Llevará a cabo varios procesos de forma simultánea, sin frenos y te brindará una experiencia excepcional."]},
            },
        {
            info:{
                titulo:"Potente disco sólido",
                lista:["El disco sólido de 256 GB hace que el equipo funcione a gran velocidad y por lo tanto te brinda mayor agilidad para operar con diversos programas."]},
            },
            {
                info:{
                    titulo:"Un procesador exclusivo para los gráficos",
                    lista:["Su placa de video Intel Iris Plus Graphics G7 convierte a este dispositivo en una gran herramienta de trabajo para cualquier profesional del diseño. Te permitirá lograr una gran performance en todos tus juegos y en otras tareas cotidianas que impliquen procesamiento gráfico."]},
                }],
        color: ['silver'],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['notebook','all']},
        

    {
        id:'012',
        nombre:'Notebook Asus X515EA-212.V15TB',
        foto:["https://images.fravega.com/f300/61f84c858f312e7544336ae7aab3dce4.jpg.webp","https://images.fravega.com/f300/78e6b1cac9b6432dbc2ece87529099e0.jpg.webp","https://images.fravega.com/f300/67c92bcc013b63479afaf1fefadf9780.jpg.webp","https://images.fravega.com/f300/d4c7a656a71f2bc7d6f927f0cd6acdb7.jpg.webp"],
        precio:"",
        memoria:['256GB SSD'],
        ram:['8GB INTEGRADA'],
        componentes:['Intel Core i3 / Intel HD Graphics 6000'],
        descripcion:[{
            info:{
                titulo:"Pantalla con gran impacto visual",
                lista:["Su pantalla LED de 15.6' y 1920x1080 px de resolución te brindará colores más vivos y definidos.","Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle."]},
            },
        {
            info:{
                titulo:"Alta eficiencia a tu alcance",
                lista:["Su procesador Intel Core i5 de 4 núcleos, está pensado para aquellas personas generadoras y consumidoras de contenidos. Con esta unidad central, la máquina llevará a cabo varios procesos de forma simultánea, desde edición de videos hasta retoques fotográficos con programas profesionales."]},
            },
        {
            info:{
                titulo:"Potente disco sólido",
                lista:["El disco sólido de 256 GB hace que el equipo funcione a gran velocidad y por lo tanto te brinda mayor agilidad para operar con diversos programas."]},
            },
            {
                info:{
                    titulo:"Un procesador exclusivo para los gráficos",
                    lista:["Su placa de video Intel Iris Xe Graphics G7 80EUs convierte a este dispositivo en una gran herramienta de trabajo para cualquier profesional del diseño. Te permitirá lograr una gran performance en todos tus juegos y en otras tareas cotidianas que impliquen procesamiento gráfico."]},
                }],
        color: ['silver'],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['notebook','all']},


    {
        id:'013',
        nombre:'Notebook ASUS X515JA-212.V15BB-11',
        foto:["https://http2.mlstatic.com/D_NQ_NP_685993-MLA51326243130_082022-O.webp","https://http2.mlstatic.com/D_NQ_NP_841525-MLA51326243101_082022-O.webp","https://http2.mlstatic.com/D_NQ_NP_914662-MLA51326162785_082022-O.webp","https://http2.mlstatic.com/D_NQ_NP_743768-MLA51326243137_082022-O.webp","https://http2.mlstatic.com/D_NQ_NP_872555-MLA51326243135_082022-O.webp","https://http2.mlstatic.com/D_NQ_NP_833461-MLA51326162745_082022-O.webp"],
        precio:"",
        memoria:['256GB SSD'],
        ram:['8GB RAM'],
        componentes:['Intel Core i3 1005G1 / Intel UHD Graphics G1 (Ice Lake 32 EU'],
        descripcion:[{
            info:{
                titulo:"Pantalla con gran impacto visual",
                lista:["Su pantalla LED de 15.6' y 1366x768 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle."]},
            },
        {
            info:{
                titulo:"Alta eficiencia a tu alcance",
                lista:["Su procesador Intel Core i3 de 2 núcleos, está pensado para aquellas personas generadoras y consumidoras de contenidos. En base a esto, permite el desempeño necesario para la edición de fotografías o videos en programas básicos."]},
            },
        {
            info:{
                titulo:"Potente disco sólido",
                lista:["El disco sólido de 256 GB hace que el equipo funcione a gran velocidad y por lo tanto te brinda mayor agilidad para operar con diversos programas."]},
            },
            {
                info:{
                    titulo:"Un procesador exclusivo para los gráficos",
                    lista:["Su placa de video Intel UHD Graphics G1 (Ice Lake 32 EU) convierte a este dispositivo en una gran herramienta de trabajo para cualquier profesional del diseño. Te permitirá lograr una gran performance en todos tus juegos y en otras tareas cotidianas que impliquen procesamiento gráfico."]},
                }],
        color: ['silver'],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['notebook','all']},

    //placas de video
    {
        id:'014',
        nombre:'RTX 2060 12GB REVEL DUAL FAN (12GB GDDR6)',
        foto:["https://http2.mlstatic.com/D_NQ_NP_727800-MLA45713390694_042021-O.webp","https://http2.mlstatic.com/D_NQ_NP_723596-MLA45713338880_042021-O.webp","https://http2.mlstatic.com/D_NQ_NP_708917-MLA45713338896_042021-O.webp","https://http2.mlstatic.com/D_NQ_NP_974659-MLA45713440524_042021-O.webp"],
        precio:"",
        memoria:[""],
        ram:["12GB GDDR6"],
        componentes:[""],
        descripcion:[{
            info:{
                titulo:"Sobre la 'VIDEO GEFORCE RTX 2060 12GB PNY REVEL DUAL FAN'",
                lista:["Nvidia es el fabricante líder de placas de video; su calidad asegura una experiencia positiva en el desarrollo del motor gráfico de tu computadora. Además, sus procesadores usan tecnología de punta para que puedas disfrutar de un producto veloz y duradero."]},
            },
            {
                info:{
                    titulo:"Velocidad en cada lectura",
                    lista:["Como cuenta con 1920 núcleos, los cálculos para el procesamiento de gráficos se realizarán de forma simultánea logrando un resultado óptimo del trabajo de la placa. Esto le permitirá ejecutar lecturas dispersas y rápidas de y hacia la GPU."]},
                },
            {
                info:{
                    titulo:"Calidad de imagen",
                    lista:["Criterio fundamental a la hora de elegir una placa de video, su resolución de 7680x4320 no te defraudará. La decodificación de los píxeles en tu pantalla te harán ver hasta los detalles más ínfimos en cada ilustración."]},
                }],
        color: ["black"],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['mineria','all']},

    {
        id:'015',
        nombre:'RTX 2060 12GB REVEL DUAL FAN (12GB GDDR6)',
        foto:["https://http2.mlstatic.com/D_NQ_NP_727800-MLA45713390694_042021-O.webp","https://http2.mlstatic.com/D_NQ_NP_723596-MLA45713338880_042021-O.webp","https://http2.mlstatic.com/D_NQ_NP_708917-MLA45713338896_042021-O.webp","https://http2.mlstatic.com/D_NQ_NP_974659-MLA45713440524_042021-O.webp"],
        precio:"",
        memoria:[""],
        ram:["12GB GDDR6"],
        componentes:[""],
        descripcion:[{
            info:{
                titulo:"Sobre la 'VIDEO GEFORCE RTX 2060 12GB PNY REVEL DUAL FAN'",
                lista:["Nvidia es el fabricante líder de placas de video; su calidad asegura una experiencia positiva en el desarrollo del motor gráfico de tu computadora. Además, sus procesadores usan tecnología de punta para que puedas disfrutar de un producto veloz y duradero."]},
            },
            {
                info:{
                    titulo:"Velocidad en cada lectura",
                    lista:["Como cuenta con 1920 núcleos, los cálculos para el procesamiento de gráficos se realizarán de forma simultánea logrando un resultado óptimo del trabajo de la placa. Esto le permitirá ejecutar lecturas dispersas y rápidas de y hacia la GPU."]},
                },
            {
                info:{
                    titulo:"Calidad de imagen",
                    lista:["Criterio fundamental a la hora de elegir una placa de video, su resolución de 7680x4320 no te defraudará. La decodificación de los píxeles en tu pantalla te harán ver hasta los detalles más ínfimos en cada ilustración."]},
                }],
        color: ["black"],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['mineria','all']}, 

    {
        id:'016',
        nombre:"RTX 3060 GAMING Z TRIO 12G (12GB GDDR6)",
        foto:["https://http2.mlstatic.com/D_NQ_NP_842844-MLA51562583055_092022-O.webp","https://http2.mlstatic.com/D_NQ_NP_736523-MLA51562390948_092022-O.webp","https://http2.mlstatic.com/D_NQ_NP_675271-MLA51562475690_092022-O.webp"],
        precio:"",
        memoria:[""],
        ram:["12GB GDDR6"],
        componentes:[""],
        descripcion:[{
            info:{
                titulo:"",
                lista:["GeForce RTX™ 3060 GAMING Z TRIO 12G","NVIDIA® GeForce RTX™ 3060","PCI Express® Gen 4","Boost: 1867 MHz","3584 Units","15 Gbps","12GB GDDR6","192-bit","DisplayPort x 3 (v1.4a) / HDMI x 1 (Supports 4K@120Hz as specified in HDMI 2.1)","170W","8-pin x 2","550W","324 x 140 x 57mm","1460 g / 2288 g"]}
            }],
        color: ["black"],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['mineria','all']},
    {
        id:'017',
        nombre:'RTX 3060 TI VENTUS 3X 8G OC (8GB GDDR6)',
        foto:["https://http2.mlstatic.com/D_NQ_NP_738876-MLA48688406522_122021-O.webp","https://http2.mlstatic.com/D_NQ_NP_898892-MLA48688363943_122021-O.webp","https://http2.mlstatic.com/D_NQ_NP_793677-MLA48688406523_122021-O.webp"],
        precio:"",
        memoria:[""],
        ram:["8GB GDDR6"],
        componentes:[""],
        descripcion:[{
            info:{
                titulo:"RTX 3060 TI VENTUS 3X 8G OC (8GB GDDR6)",
                lista:["Nvidia es el fabricante líder de placas de video; su calidad asegura una experiencia positiva en el desarrollo del motor gráfico de tu computadora. Además, sus procesadores usan tecnología de punta para que puedas disfrutar de un producto veloz y duradero."]},
            },
            {
                info:{
                    titulo:"Velocidad en cada lectura",
                    lista:["Cuenta con 4864 núcleos, por lo que la interfaz de la placa será algo sorprendente. Este tipo de estructura es apropiado para el procesamiento de tecnologías más complejas y modernas caracterizadas por grandes volúmenes de datos."]},
                },
            {
                info:{
                    titulo:"Calidad de imagen",
                    lista:["Criterio fundamental a la hora de elegir una placa de video, su resolución de 7680x4320 no te defraudará. La decodificación de los píxeles en tu pantalla te harán ver hasta los detalles más ínfimos en cada ilustración."]},
                }],
        color: ["black"],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['mineria','all']},

    {
        id:'018',
        nombre:'RTX 3070 VENTUS 2X 8GB',
        foto:["https://http2.mlstatic.com/D_NQ_NP_716321-MLA44833373951_022021-O.webp","https://http2.mlstatic.com/D_NQ_NP_827131-MLA44835106191_022021-O.webp","https://http2.mlstatic.com/D_NQ_NP_914954-MLA44833373952_022021-O.webp"],
        precio:"",
        memoria:[""],
        ram:["8GB"],
        componentes:[""],
        descripcion:[{
            info:{
                titulo:"RTX 3070 VENTUS 2X 8GB",
                lista:["Nvidia es el fabricante líder de placas de video; su calidad asegura una experiencia positiva en el desarrollo del motor gráfico de tu computadora. Además, sus procesadores usan tecnología de punta para que puedas disfrutar de un producto veloz y duradero."]},
            },
            {
                info:{
                    titulo:"Velocidad en cada lectura",
                    lista:["Cuenta con 5888 núcleos, por lo que la interfaz de la placa será algo sorprendente. Este tipo de estructura es apropiado para el procesamiento de tecnologías más complejas y modernas caracterizadas por grandes volúmenes de datos."]},
                },
            {
                info:{
                    titulo:"Calidad de imagen",
                    lista:["Criterio fundamental a la hora de elegir una placa de video, su resolución de 7680x4320 no te defraudará. La decodificación de los píxeles en tu pantalla te harán ver hasta los detalles más ínfimos en cada ilustración."]},
                }],
        color: ["black"],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['mineria','all']},

    {
        id:'019',
        nombre:'RTX 3070 TI VENTUS 3X 8G OC (8GB GDDR6X)',
        foto:["https://http2.mlstatic.com/D_NQ_NP_617574-MLA48654681863_122021-O.webp","https://http2.mlstatic.com/D_NQ_NP_648066-MLA48654665840_122021-O.webp","https://http2.mlstatic.com/D_NQ_NP_765825-MLA48654681862_122021-O.webp","https://http2.mlstatic.com/D_NQ_NP_857623-MLA50400215679_062022-O.webp"],
        precio:"",
        memoria:[""],
        ram:["8GB GDDR6"],
        componentes:[""],
        descripcion:[{
            info:{
                titulo:"RTX 3070 VENTUS 2X 8GB",
                lista:["Nvidia es el fabricante líder de placas de video; su calidad asegura una experiencia positiva en el desarrollo del motor gráfico de tu computadora. Además, sus procesadores usan tecnología de punta para que puedas disfrutar de un producto veloz y duradero."]},
            },
            {
                info:{
                    titulo:"Velocidad en cada lectura",
                    lista:["Cuenta con 6144 núcleos, por lo que la interfaz de la placa será algo sorprendente. Este tipo de estructura es apropiado para el procesamiento de tecnologías más complejas y modernas caracterizadas por grandes volúmenes de datos."]},
                },
            {
                info:{
                    titulo:"Calidad de imagen",
                    lista:["Criterio fundamental a la hora de elegir una placa de video, su resolución de 7680x4320 no te defraudará. La decodificación de los píxeles en tu pantalla te harán ver hasta los detalles más ínfimos en cada ilustración."]},
                }],
        color: ["black"],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['mineria','all']},

    {
        id:'020',
        nombre:'RTX 3070 TI VENTUS 3X 8G OC (8GB GDDR6X)',
        foto:"",
        memoria:[""],
        ram:["8GB GDDR6"],
        componentes:[""],
        descripcion:[{
            info:{
                titulo:"RTX 3070 VENTUS 2X 8GB",
                lista:["Nvidia es el fabricante líder de placas de video; su calidad asegura una experiencia positiva en el desarrollo del motor gráfico de tu computadora. Además, sus procesadores usan tecnología de punta para que puedas disfrutar de un producto veloz y duradero."]},
            },
            {
                info:{
                    titulo:"Velocidad en cada lectura",
                    lista:["Cuenta con 6144 núcleos, por lo que la interfaz de la placa será algo sorprendente. Este tipo de estructura es apropiado para el procesamiento de tecnologías más complejas y modernas caracterizadas por grandes volúmenes de datos."]},
                },
            {
                info:{
                    titulo:"Calidad de imagen",
                    lista:["Criterio fundamental a la hora de elegir una placa de video, su resolución de 7680x4320 no te defraudará. La decodificación de los píxeles en tu pantalla te harán ver hasta los detalles más ínfimos en cada ilustración."]},
                }],
        color: ["black"],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['mineria','all']},

    {
        id:'021',
        nombre:'RTX 3070 TI XLR8 GAMING REVEL EPIC-X RGB 3xFAN 8GB GDDR6X',
        foto:["https://http2.mlstatic.com/D_NQ_NP_876213-MLA49200884523_022022-O.webp","https://http2.mlstatic.com/D_NQ_NP_871373-MLA49200941119_022022-O.webp","https://http2.mlstatic.com/D_NQ_NP_844874-MLA49200928247_022022-O.webp","https://http2.mlstatic.com/D_NQ_NP_859319-MLA49200877536_022022-O.webp","https://http2.mlstatic.com/D_NQ_NP_631227-MLA49200786907_022022-O.webp"],
        precio:"",
        memoria:[""],
        ram:["8GB GDDR6X"],
        componentes:[""],
        descripcion:[{
            info:{
                titulo:"Sobre 'RTX 3070 TI XLR8 GAMING REVEL EPIC-X RGB 3xFAN 8GB GDDR6X'",
                lista:["Núcleos de trazado de rayos de segunda generación","Núcleos de tensor de tercera generación","PCI Express ® Gen 4","Microsoft DirectX ® 12 Ultimate","Memoria gráfica GDDR6X","NVIDIA DLS","NVIDIA ® GeForce Experience","NVIDIA G-SYNC ®","NVIDIA GPU Boost ™","Controladores Game Ready","API Vulkan RT, OpenGL 4.6","Admite HDR 4k 120Hz, HDR 8K 60Hz y frecuencia de actualización variable como se especifica en HDMI 2.1","Codificador NVIDIA de séptima generación","Decodificador NVIDIA de 5.a generación","HDCP 2.3","Listo para VR Número de pieza de PNY VCG3070T8TFXMPB","Código UPC 751492647760","Núcleos CUDA 6144","Velocidad de reloj 1575 MHz","Velocidad de impulso 1770 MHz","Velocidad de memoria (Gbps) 19","Tamaño de la memoria GDDR6X de 8 GB","interfaz de memoria 256 bits","Ancho de banda de memoria (GB / seg) 608","TDP 290 W","NVLink No soportado","Salidas DisplayPort 1.4 (x3), HDMI 2.1","Pantalla multiple 4","Resolución 7680 × 4320 @ 60Hz (digital)","Entrada de alimentación Dos de 8 pines","Tipo de bus PCI-Express 4.0 × 16","Dimensiones de la tarjeta 12.48 “x 4.53” x 2.36 “; 3 ranuras","Dimensiones de la caja 7.48 “x 14.96” x 3.54 “"]}}],
        color: ["black"],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['mineria','all']},


    {
        id:'022',
        nombre:'RTX 3080 LHR UPRISING TRIPLE FAN 12GB GDDR6X',
        foto:["https://http2.mlstatic.com/D_NQ_NP_856124-MLA51604839769_092022-O.webp"],
        precio:"",
        memoria:[""],
        ram:["12GB GDDR6X"],
        componentes:[],
        descripcion:[{
            info:{
                titulo:"Sobre 'RTX 3080 LHR UPRISING TRIPLE FAN 12GB GDDR6X'",
                lista:["2nd Gen Ray Tracing Cores","3rd Gen Tensor Cores","PCI Express® Gen 4","Microsoft DirectX® 12 Ultimate","GDDR6 Graphics Memory","NVIDIA DLSS","NVIDIA® GeForce Experience™","NVIDIA G-SYNC®","NVIDIA GPU Boost™","Game Ready Drivers","Vulkan RT API, OpenGL 4.6","DisplayPort 1.4a","7th Gen NVIDIA Encoder","5th Gen NVIDIA Decoder","HDCP 2.3","Supports 4k 120Hz HDR, 8K 60Hz HDR and Variable Refresh Rate as specified in HDMI 2.1","VR Ready","LHR 52 MH/s ETH hash rate (est.)"]}}],
        color: ["black"],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['mineria','all']},


    {
        id:'024',
        nombre:'RTX 3080 TI XLR8 GAMING REVEL EPIC-X RGB 3xFAN 12GB GDDR6X',
        foto:["https://http2.mlstatic.com/D_NQ_NP_898724-MLA50584496604_072022-O.webp","https://http2.mlstatic.com/D_NQ_NP_705704-MLA50584496608_072022-O.webp","https://http2.mlstatic.com/D_NQ_NP_911594-MLA50584496607_072022-O.webp"],
        precio:"",
        memoria:[""],
        ram:["12GB GDDRA6X"],
        componentes:[""],
        descripcion:[{
            info:{
                titulo:"RTX 3080 TI XLR8 GAMING REVEL EPIC-X RGB 3xFAN 12GB GDDR6X",
                lista:["Nvidia es el fabricante líder de placas de video; su calidad asegura una experiencia positiva en el desarrollo del motor gráfico de tu computadora. Además, sus procesadores usan tecnología de punta para que puedas disfrutar de un producto veloz y duradero."]},
            },
            {
                info:{
                    titulo:"Velocidad en cada lectura",
                    lista:["Cuenta con 10240 núcleos, por lo que la interfaz de la placa será algo sorprendente. Este tipo de estructura es apropiado para el procesamiento de tecnologías más complejas y modernas caracterizadas por grandes volúmenes de datos."]},
                },
            {
                info:{
                    titulo:"Calidad de imagen",
                    lista:["Criterio fundamental a la hora de elegir una placa de video, su resolución de 7680x4320 no te defraudará. La decodificación de los píxeles en tu pantalla te harán ver hasta los detalles más ínfimos en cada ilustración."]},
                }],
        color: ["black"],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['mineria','all']},

    
    {
        id:'025',
        nombre:'RTX 3090 VENTUS 3X 24G OC (2476)',
        foto:["https://http2.mlstatic.com/D_NQ_NP_692818-MLA44385884034_122020-O.webp","https://http2.mlstatic.com/D_NQ_NP_781131-MLA44385614407_122020-O.webp"],
        precio:"",
        memoria:[""],
        ram:["24GB"],
        componentes:[""],
        descripcion:[{
            info:{
                titulo:"RTX 3090 VENTUS 3X 24G OC (2476)",
                lista:["Nvidia es el fabricante líder de placas de video; su calidad asegura una experiencia positiva en el desarrollo del motor gráfico de tu computadora. Además, sus procesadores usan tecnología de punta para que puedas disfrutar de un producto veloz y duradero."]},
            },
            {
                info:{
                    titulo:"Velocidad en cada lectura",
                    lista:["Cuenta con 10496 núcleos, por lo que la interfaz de la placa será algo sorprendente. Este tipo de estructura es apropiado para el procesamiento de tecnologías más complejas y modernas caracterizadas por grandes volúmenes de datos."]},
                },
            {
                info:{
                    titulo:"Calidad de imagen",
                    lista:["Criterio fundamental a la hora de elegir una placa de video, su resolución de 7680x4320 no te defraudará. La decodificación de los píxeles en tu pantalla te harán ver hasta los detalles más ínfimos en cada ilustración."]},
                }],
        color: ["black"],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['mineria','all']},

    {
        id:'026',
        nombre:'RTX 3090 TI XLR8 GAMING UPRISING EPIC-X RGB 3xFAN 24GB GDDR6X',
        foto:["https://http2.mlstatic.com/D_NQ_NP_640210-MLA50149474308_052022-O.webp","https://http2.mlstatic.com/D_NQ_NP_951892-MLA50149504184_052022-O.webp","https://http2.mlstatic.com/D_NQ_NP_740502-MLA50149525070_052022-O.webp","https://http2.mlstatic.com/D_NQ_NP_817254-MLA50149508181_052022-O.webp"],
        precio:"",
        memoria:[""],
        ram:["24GB GDRR6X"],
        componentes:[""],
        descripcion:[{
            info:{
                titulo:"Visión general",
                lista:["La GeForce RTX™ 3090 es una GPU grande y feroz (BFGPU) con un rendimiento de clase TITAN. Está alimentado por Ampere, la arquitectura RTX de segunda generación de NVIDIA, que duplica el trazado de rayos y el rendimiento de IA con RT Cores, Tensor Cores mejorados y nuevos multiprocesadores de transmisión. Además, cuenta con una asombrosa memoria G6X de 24 GB, todo para brindar la mejor experiencia de juego."]},
            },
            {
                info:{
                    titulo:"Nuevo enfoque",
                    lista:["La nueva arquitectura NVIDIA Ampere presenta nuevos núcleos Ray Tracing de segunda generación y núcleos Tensor de tercera generación con mayor rendimiento. Los multiprocesadores de transmisión NVIDIA Ampere son los componentes básicos de la GPU más rápida y eficiente del mundo para jugadores y creadores."]},
                },
            {
                info:{
                    titulo:"Tecnología de vanguardia",
                    lista:["Las GPU de la serie GeForce RTX 30 cuentan con la tecnología de la arquitectura RTX de segunda generación de NVIDIA, lo que ofrece el máximo rendimiento, gráficos con trazado de rayos y aceleración de IA para jugadores y creadores."]},
                },
                {
                    info:{
                        titulo:"CARACTERÍSTICAS CLAVE",
                        lista:["Núcleos de trazado de rayos de segunda generación","Núcleos de tensor de tercera generación","PCI Express® Gen 4","Microsoft DirectX® 12 Ultimate","Memoria gráfica GDDR6X","NVIDIA DLSS","NVIDIA® GeForce Experience ™","NVIDIA G- SYNC®","NVIDIA GPU Boost™","NVIDIA NVLink™ (listo para SLI)","Controladores listos para juegos","API VulkanRT, OpenGL 4.6","HDCP 2.3","Listo para realidad virtual","Admite 4k 120Hz HDR, 8K 60Hz HDR y frecuencia de actualización variable como se especifica en HDMI 2.1"]},
                    }],
        color: ["black"],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['mineria','all']},



//MONITORES

{
    id:'027',
    nombre:'ASUS - Monitor para juegos IPS de 1ms FreeSync Extreme Low Motion Blur Eye Care DisplayPort HDMI VGA, Negro',
    foto:["https://m.media-amazon.com/images/I/91G9etn8L4L._AC_SX425_.jpg","https://m.media-amazon.com/images/I/81e9oegCAAL._AC_SX425_.jpg","https://m.media-amazon.com/images/I/81-nlV0dprL._AC_SY355_.jpg","https://m.media-amazon.com/images/I/81n0rn8O4cL._AC_SY355_.jpg","https://m.media-amazon.com/images/I/81x3Ob1Zj-L._AC_SY355_.jpg","https://m.media-amazon.com/images/I/91A15BoQLxL._AC_SY355_.jpg","https://m.media-amazon.com/images/I/81adV8A3UpL._AC_SY355_.jpg"],
    precio:"159.99",
    memoria:["-"],
    ram:["-"],
    componentes:["-"],
    descripcion:[
        {
        info:{
            titulo:"Sobre este artículo.",
            lista:["23. 8 inch Full HD (1920x1080) LED backlit display with IPS 178° wide viewing angle panel","Up to 144Hz refresh rate with Adaptive-Sync (FreeSync ) technology to eliminate tracing and ensure crisp and clear video playback","ASUS Extreme Low Motion Blur (ELMB ) technology enables a 1ms response time (MPRT) together, eliminating ghosting and tearing for sharp gaming visuals with high frame rates","ASUS Eye Care technology with flicker-free backlighting and blue light filter to minimize eye","Extensive connectivity including DisplayPort, HDMI and D-sub ports and VESA wall-mountable to save on desktop space"]},
        },
        
        
        {
        info:{
            titulo:"Construido para la victoria.",
            lista:["La pantalla para juegos ASUS VP249QGR cuenta con un panel IPS Full HD, una frecuencia de actualización de 144 Hz con Adaptive-Sync (FreeSync) y un MPRT de 1 ms para cuando los juegos visuales, desdibuja la línea entre lo que es virtual y lo real para atraerte a mundos de juego realmente inmersivos. Incluso incluye funciones centradas en los jugadores, como las tecnologías ASUS GamePlus, para llevar tu experiencia de juego a un nivel completamente nuevo."]},
        },
        {
            info:{
                titulo:"Disfruta de una experiencia de juego sin trozos",
                lista:["Frecuencia de actualización de hasta 144 Hz con tecnología Adaptive-Sync (FreeSync) y MPRT de 1 ms decimbra el desenfoque de retardo y movimiento para darte la ventaja en los tiradores en primera persona, corredores, estrategia en tiempo real y títulos deportivos. Esta velocidad de actualización ultrarrápida te permite jugar con los ajustes visuales más altos y te permite reaccionar al instante a lo que aparece en la pantalla para que tengas el primer golpe."]},
            },
        {
            info:{
                titulo:"Características centradas en el jugador",
                lista:["ASUS VP249QGR incluye el GamePlus exclusivo de ASUS para ofrecerte mejoras en el juego que te ayudarán a sacar más partido de tu juego. Estas herramientas permiten a los jugadores practicar y mejorar sus habilidades de juego.","Esta función se desarrolla conjuntamente con la aportación de los jugadores profesionales, lo que les permite practicar y mejorar sus habilidades de juego"]},
            },
            {
                info:{
                    titulo:"Tecnología Shadow Boost.",
                    lista:["La tecnología ASUS Shadow Boost aclara las zonas oscuras del mundo del juego sin sobreexponer las zonas más brillantes, lo que mejora la visualización general y facilita la detección de enemigos ocultos en zonas oscuras del mapa."]},
                },
            {
                info:{
                    titulo:"Conectividad robusta",
                    lista:["Ya sea que estés jugando o transmitiendo vídeos, ASUS VP249QGR te ofrece una experiencia de juego fluida de 144 Hz a través de puertos DisplayPort y HDMI."]},
                },
            {
                info:{
                    titulo:"Tecnología de luz azul ultra baja.",
                    lista:["La tecnología ASUS Ultra-Low Blue Light reduce la cantidad de luz azul dañina emitida por VP249QGR. Puede acceder y seleccionar cuatro configuraciones de filtro diferentes en la pantalla fácilmente a través del menú OSD para encontrar la mejor que se adapte a la tarea que se encuentre."]},
                },
            {
                info:{
                    titulo:"Tecnología sin parpadeos.",
                    lista:["La tecnología sin parpadeo reduce el parpadeo para ofrecerte una experiencia de juego cómoda. Esto minimiza los casos de fatiga ocular y otras dolencias oculares potencialmente dañinas cuando estás inmerso en largas sesiones de juego."]},
                }],
    color: ['black'],
    estado:'En stock',
    tendencia:false,
    marca:'apple',
    categoria:['monitores','all']},

{
    id:'049',
    nombre:'Monitor AOC para videojuegos, curvado, sin marco, FHD 1ms VA 24"',
    foto:["https://m.media-amazon.com/images/I/81GJkTKuLnL._AC_SX425_.jpg","https://m.media-amazon.com/images/I/61DJUumg+pL._AC_SX425_.jpg","https://m.media-amazon.com/images/I/71nN489-odL._AC_SX425_.jpg","https://m.media-amazon.com/images/I/51QIgIn1k6L._AC_SX425_.jpg","https://m.media-amazon.com/images/I/517TyQbxqgL._AC_SX425_.jpg","https://m.media-amazon.com/images/I/51jeC9ov2pL._AC_SX425_.jpg","https://m.media-amazon.com/images/I/41wdKKSo0IL._AC_SX425_.jpg"],
    precio:"209.99",
    memoria:["-"],
    ram:["-"],
    componentes:["-"],
    descripcion:[
        {
        info:{
            titulo:"Sobre este artículo.",
            lista:["Clase de 24 pulgadas, monitor de juegos AOC visible de 23.6 pulgadas con resolución Full HD de 1920 x 1080.","Monitor curvado 1500R que envuelve tu visión para una experiencia de juego envolvente. Compra varios C24G1As para una estación de batalla aún más inmersiva.","Respuesta rápida de 1 ms (MPRT) y ahora con frecuencia de actualización de 165 Hz (a través de puerto DP 1.2) con AMD FreeSync Premium para un juego competitivo más suave (48-165 Hz LFC compatible a través de DP).","Diseño sin marco de 3 lados con bordes ultra estrechos para la configuración definitiva de múltiples monitores.","Soporte de altura ajustable con giro, inclinación y liberación rápida para una óptima ergonomía | Opciones de montaje VESA compatibles con montaje en pared/escritorio.","RE-SPONDAD: 3 años de punto cero, 3 años de reemplazo de avance, 1 año (una vez) daño accidental.","119,76% sRGB y 88,29% de cobertura de gama de colores DCI-P3 para una reproducción precisa del color e imágenes realistas.","DisplayPort, 2 entradas HDMI, VGA con salida de línea de audio para mayor comodidad.","Modo de retardo de entrada baja AOC para reducir el retraso de entrada para un tiempo de reacción más rápido cuando más importa.","Modo AOC LowBlue y sin parpadeo para bienestar durante largas sesiones de juego."]}
        }],
    color: ['black'],
    estado:'En stock',
    tendencia:false,
    marca:'apple',
    categoria:['monitores','all']},


{
    id:'050',
    nombre:'Monitor SAMSUNG FHD de 24 pulgadas con diseño sin bisel, LS24R350FHNXZA, gris azul oscuro',
    foto:["https://m.media-amazon.com/images/I/91l+VjqPr7L._AC_SX425_.jpg","https://m.media-amazon.com/images/I/81vI5EDzkEL._AC_SX425_.jpg","https://m.media-amazon.com/images/I/81DCTekuZsL._AC_SX425_.jpg","https://m.media-amazon.com/images/I/61PWv7XKs8L._AC_SX425_.jpg"],
    precio:"152.93",
    memoria:["-"],
    ram:["-"],
    componentes:["-"],
    descripcion:[
        {
        info:{
            titulo:"Sobre este artículo.",
            lista:["Monitor de 24 pulgadas con pantalla sin bisel de 3 lados para una máxima visualización y uso de doble monitor","Montaje en pared (tamaño mm): 75 x 75","Amd Radeon Free Sync proporciona una experiencia de juego sensible sin desgarros de pantalla","La frecuencia de actualización de 75 Hz ofrece una imagen más fluida","El modo de juego proporciona ajustes de color óptimos y contraste de imagen para escenas más vívidas","Más fácil para los ojos con modo libre de parpadeo y protector de ojos para reducir las emisiones de luz azul que son perjudiciales para la retina","Toda la acción, sin demora, experiencia de entretenimiento superfluida. AMD Radeon FreeSync mantiene la frecuencia de actualización de tu monitor y tarjeta gráfica en sincronización para reducir el desgarro de la imagen y el tartamudeo. Mira películas y juega juegos sin interrupciones. Incluso las escenas de acción rápida se ven claras y sin costuras.","Más ajustes de juego ideales para juegos te dan la ventaja al instante. Obtén ajustes de color óptimos y contraste de imagen para ver escenas más vívidamente y detectar a los enemigos escondidos en la oscuridad. El modo de juego ajusta cualquier juego para llenar tu pantalla con cada detalle a la vista.","Se mueve con el flujo: ahora, toda la acción se ve impecable. La frecuencia de actualización de 75 Hz ofrece una imagen más fluida. Ya sea que estés poniendo al día con tu drama de televisión favorito, viendo un video o jugando un juego, tu entretenimiento es suave sin retrasos ni efecto fantasma.","Verdadera versatilidad: conéctate a más. Con puertos HDMI y D-sub, varios dispositivos se pueden conectar directamente a tu monitor para una flexibilidad completa. Ahora, tu entorno informático es aún más conveniente con posibilidades de entrada adicionales."]}
        }],
    color: ['black'],
    estado:'En stock',
    tendencia:false,
    marca:'apple',
    categoria:['monitores','all']},

{
    id:'051',
    nombre:'Monitor LG 34GP83A-B 34´´ 21: 9 UltraGear Curvo QHD (3440 x 1440) 1 ms Nano IPS con 160Hz - Negro',
    foto:["https://m.media-amazon.com/images/I/71UnbkzLquL.__AC_SX300_SY300_QL70_FMwebp_.jpg","https://m.media-amazon.com/images/I/71vmlCSjLML._AC_SX425_.jpg","https://m.media-amazon.com/images/I/71nwpsHJjIL._AC_SX425_.jpg"],
    precio:"599.99",
    memoria:["-"],
    ram:["-"],
    componentes:["-"],
    descripcion:[
        {
        info:{
            titulo:"Sobre este artículo.",
            lista:["Pantalla Nano IPS curvada de 34' UltraWide QHD (3440 x 1440)","Tiempo de respuesta IPS de 1 ms - Frecuencia de actualización de 160 Hz","Compatible con NVIDIA G-SYNC","Gama de colores DCI-P3 98% con VESA DisplayHDR 400","Diseño prácticamente sin bordes de 3 lados con soporte de inclinación o altura ajustable. Ajustes de posición de visualización: inclinación/altura"]}
                }],
    color: ['black'],
    estado:'En stock',
    tendencia:false,
    marca:'apple',
    categoria:['monitores','all']},

{
    id:'052',
    nombre:'Monitor LG 32GN650-B Monitor de 32´´ QHD (2560 x 1440), frecuencia de actualización de 165 Hz, 1 ms MBR, HDR 10, sRGB 95%, Negro',
    foto:["https://m.media-amazon.com/images/I/51DG5X9vJlL._AC_SX425_.jpg","https://m.media-amazon.com/images/I/515DS3iB7KL._AC_SX425_.jpg","https://m.media-amazon.com/images/I/41Zanqo8O9L._AC_SX425_.jpg"],
    precio:"396.99",
    memoria:["-"],
    ram:["-"],
    componentes:["-"],
    descripcion:[
        {
        info:{
            titulo:"Sobre este artículo.",
            lista:["Pantalla QHD de 32' (2560 x 1440)","Frecuencia de actualización de 165 Hz con reducción de desenfoque de movimiento de 1 ms","AMD FreeSync","Gama de colores SRGB 95% con HDR 10","Pantalla prácticamente sin bordes de 3 lados con soporte ajustable de inclinación, altura, pivote"]}
                }],
    color: ['black'],
    estado:'En stock',
    tendencia:false,
    marca:'apple',
    categoria:['monitores','all']},

{
    id:'053',
    nombre:'Monitor LG 34GL750-B 21: 9 Ultragear Monitor curvado para juegos compatible con Wfhd (2560 X 1080) IPS 144Hz G-SYNC, 34 pulgadas, negro',
    foto:["https://m.media-amazon.com/images/I/71S9dis6PRL._AC_SX425_.jpg","https://m.media-amazon.com/images/I/51qCI4g2L0L._AC_SY879_.jpg","https://m.media-amazon.com/images/I/71sXSda+FML._AC_SX425_.jpg"],
    precio:"449.99",
    memoria:["-"],
    ram:["-"],
    componentes:["-"],
    descripcion:[
        {
        info:{
            titulo:"Sobre este artículo.",
            lista:["Compatible con sincronización G.","Pantalla IPS de 34 pulgadas ultra ancha 21:9 Full HD (2560 x 1080)","144 Tasa de actualización de Hertz","Reducción de desenfoque de movimiento de 1 ms","Compatible con HDR10.","Tecnología Adaptive Sync","Soporte de altura ajustable."]}
                }],
    color: ['black'],
    estado:'En stock',
    tendencia:false,
    marca:'apple',
    categoria:['monitores','all']},

{
    id:'054',
    nombre:'Monitor SAMSUNG de juegos de 49 pulgadas, monitor curvado ultra-ancho, 240 Hz 1 ms, Quantum Mini LED, G-Sync, monitor de altura ajustable, HDR 2000, Odyssey Neo G9, G95NA (LS49AG952NXZA)',
    foto:["https://m.media-amazon.com/images/I/81gf+wgrcfS._AC_SX679_.jpg","https://m.media-amazon.com/images/I/61FF3XndPaS._AC_SX679_.jpg","https://m.media-amazon.com/images/I/71RPplzYxKL._AC_SX425_.jpg","https://m.media-amazon.com/images/I/81FOvKTE7qL._AC_SX425_.jpg","https://m.media-amazon.com/images/I/71Y2qybV9+L._AC_SX425_.jpg"],
    precio:"449.99",
    memoria:["-"],
    ram:["-"],
    componentes:["-"],
    descripcion:[
        {
        info:{
            titulo:"Sobre este artículo.",
            lista:["TECNOLOGÍA QUANTUM MATRIX: Los mini LED permiten zonas de atenuación más discretas. Las zonas de atenuación más pequeñas proporcionan una retroiluminación más controlada que aporta una mejor distinción entre la luz y la oscuridad y menos.","IMPRESIONANTE VISTA DE JUEGO: La inmersión completa desde el monitor curvado 1000R y las expresiones detalladas de color y contrastes de QLED, HDR 2000 y DQHD maximizan el placer de ver al reproducir el contenido original del juego.","COLORES REALES: La tecnología Quantum Matrix proporciona la reproducción de color más pura y precisa, proporcionando una mejor distinción entre luz y oscuridad y menos efecto halo.","TRANSICIONES SUAVES DE JUEGO: Velocidad de actualización rápida de 240 Hz con tiempo de respuesta de 1 ms que garantiza acciones de juego impecables sin ningún desenfoque de movimiento o retraso de entrada.","BRILLO MAXIMO HDR 2000: El Odyssey G95NA es el primer monitor que soporta un brillo máximo de 2000 nits, con una relación de contraste de 1.000.000:1, en comparación con la relación media del monitor IPS de 1.000:1.","MAS DETALLES & CONSTRUCCIONES REALES: La resolución QHD dual te permite ver más contenido con mayor detalle y permite realizar múltiples tareas sin una configuración de múltiples monitores.","MÁXIMO RENDIMIENTO PARA JUGADORES: La compatibilidad con bajo retraso de entrada y G Sync mejora la precisión de respuesta con movimiento preciso y juego sin problemas al reducir el desgarro y el tartamudeo de la imagen."]}
                }],
    color: ['black'],
    estado:'En stock',
    tendencia:false,
    marca:'apple',
    categoria:['monitores','all']},
    
{
        id:'055',
        nombre:'ASUS TUF Gaming - Monitor curvado 1080P de 23.6 pulgadas',
        foto:["https://m.media-amazon.com/images/I/81GL+Sz8RkL._AC_SX425_.jpg","https://m.media-amazon.com/images/I/81zpqg3iUCL._AC_SX425_.jpg","https://m.media-amazon.com/images/I/812F3BZDUBL._AC_SX425_.jpg","https://m.media-amazon.com/images/I/81V76jOljOL._AC_SX425_.jpg","https://m.media-amazon.com/images/I/81l2t1GXo3L._AC_SX425_.jpg"],
        precio:"449.99",
        memoria:["-"],
        ram:["-"],
        componentes:["-"],
        descripcion:[
            {
            info:{
                titulo:"Sobre este artículo.",
                lista:["Monitor de juegos Full HD de 23.6 pulgadas (1920 x 1080) 1500R con frecuencia de actualización ultrarrápida de 165 Hz (soporta 144 Hz) diseñado para jugadores profesionales y juegos inmersivos","ASUS La tecnología Extreme Low Motion Blur (ELMB) permite un tiempo de respuesta de 1 ms (MPRT), eliminando el efecto fantasma para imágenes nítidas de juego","Tecnología FreeSync Premium para eliminar el desgarro de la pantalla y las velocidades de fotogramas cortadas","Shadow Boost mejora los detalles de la imagen en zonas oscuras, iluminando escenas sin sobreexponer áreas brillantes","Compatible con tarjetas gráficas NVIDIA GeForce* y FreeSync con tarjetas gráficas AMD Radeon. Compatible con NVIDIA GeForce GTX 10, GTX 16, RTX 20 y tarjetas gráficas más recientes","Conectividad robusta con puertos DisplayPort (v1.2) y HDMI (v1.4) x2","Contenido de la caja: cable DisplayPort (5.9 ft), cable HDMI (5.9 ft), cable de alimentación, adaptador de corriente, tarjeta de garantía, guía de inicio rápido"]}
                    }],
        color: ['black'],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
    categoria:['monitores','all']},
        
    //más apple
{
        id:'056',
        nombre:'IPHONE 14',
        secid:'iphone-14',
        foto:["https://www.tradeinn.com/f/13933/139331609/apple-iphone-14-256gb-6.1.jpg","https://www.tradeinn.com/f/13933/139331609_2/apple-iphone-14-256gb-6.1.jpg?_gl=1*wyo0qk*_up*MQ..&gclid=CjwKCAjw7p6aBhBiEiwA83fGust9CwdGbwoW3CiICByrALJlp8jaPWRkjGFeZe_xj0aDOJIkZDdzMxoCCQoQAvD_BwE","https://www.tradeinn.com/f/13933/139331609_3/apple-iphone-14-256gb-6.1.jpg?_gl=1*17u16f3*_up*MQ..&gclid=CjwKCAjw7p6aBhBiEiwA83fGust9CwdGbwoW3CiICByrALJlp8jaPWRkjGFeZe_xj0aDOJIkZDdzMxoCCQoQAvD_BwE"],
        precio:"1080",
        memoria:["128GB","256GB"],
        ram:["-"],
        componentes:["A15 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)"],
        descripcion:[
            {
            info:{
                titulo:"Pantalla",
                lista:["Pantalla Super Retina XDR","Pantalla OLED de 6.1 pulgadas (diagonal) sin marco","Resolución de 2532 x 1170 pixeles a 460 ppi","La pantalla del iPhone 14 tiene esquinas redondeadas que siguen el elegante diseño curvo del teléfono, y las esquinas se encuentran dentro de un rectángulo estándar. Si se mide en forma de rectángulo estándar, la pantalla tiene 6.06 pulgadas en diagonal (el área real de visualización es menor).","Pantalla HDR","True Tone","Amplia gama de colores (P3)","Toque con respuesta háptica","Relación de contraste 2,000,000:1 (normal)","Brillo máximo de 800 nits (normal); pico de brillo de 1,200 nits (HDR)","Revestimiento oleofóbico resistente a huellas dactilares","Compatibilidad para mostrar varios idiomas y caracteres simultáneamente"]}
        },
        {
            info:{
                titulo:"Resistencia a las salpicaduras, al agua y al polvo",
                lista:["Clasificación IP68 (hasta 30 minutos a una profundidad máxima de 6 metros) según la norma IEC 60529"]}
        },    
        {
            info:{
                titulo:"Chip",
                lista:["Chip A15 Bionic","CPU de 6 núcleos con 2 núcleos de rendimiento y 4 de eficiencia","GPU de 5 núcleos","Neural Engine de 16 núcleos"]}
        },   
        {
            info:{
                titulo:"Sistema de dos cámaras",
                lista:["Gran angular de 12 MP: 26 mm, apertura de ƒ/1.5, estabilización óptica de imagen por desplazamiento de sensor, lente de siete elementos, 100% Focus Pixels","Ultra gran angular de 12 MP: 13 mm, apertura de ƒ/2.4 y ángulo de visión de 120°, lente de cinco elementos","Zoom óptico de 2x para alejar; zoom digital de hasta 5x","Cubierta del lente de cristal de zafiro","Flash True Tone","Photonic Engine","Deep Fusion","HDR Inteligente 4","Modo Retrato con bokeh avanzado y Control de Profundidad","Iluminación de Retrato con seis efectos (Luz Natural, Luz de Estudio Fotográfico, Luz al Contorno, Reflector, Reflector B y N, Clave Alta en B y N)","Modo Noche","Fotos panorámicas (hasta 63 MP)","Estilos Fotográficos","Amplia gama de colores en fotos y Live Photos","Corrección de lente (cámara ultra gran angular)","Corrección avanzada de ojos rojos","Estabilización automática de imagen","Modo Ráfaga","Geoetiquetado de fotos","Captura de imagen en formatos HEIF y JPEG"]}
        },
        {
            info:{
                titulo:"Grabación de video",
                lista:["Grabación de video 4K a 24 cps, 25 cps, 30 cps o 60 cps","Grabación de video HD de 1080p a 25 cps, 30 cps o 60 cps","Grabación de video HD de 720p a 30 cps","Modo Cine de hasta 4K HDR a 30 cps","Modo Acción de hasta 2.8K a 60 cps","Grabación de video HDR en Dolby Vision de hasta 4K a 60 cps","Video en cámara lenta de 1080p a 120 cps o 240 cps","Video en cámara rápida con estabilización","Cámara rápida con modo Noche","Video QuickTake","Estabilización óptica de imagen para video por desplazamiento de sensor (cámara gran angular)","Zoom óptico de 2x para alejar","Zoom digital de hasta 3x","Zoom de audio","Flash True Tone","Estabilización cinemática de video (4K, 1080p y 720p)","Video con autoenfoque continuo","Toma fotos de 8 MP mientras graba videos 4K","Zoom de reproducción","Grabación de video en formatos HEVC y H.264","Grabación estéreo"]}
        },
        {
            info:{
                titulo:"Cámara TrueDepth",
                lista:["Cámara de 12 MP","Apertura de ƒ/1.9","Autoenfoque con Focus Pixels","Lente de seis elementos","Retina Flash","Photonic Engine","Deep Fusion","HDR Inteligente 4","Modo Retrato con bokeh avanzado y Control de Profundidad","Iluminación de Retrato con seis efectos (Luz Natural, Luz de Estudio Fotográfico, Luz al Contorno, Reflector, Reflector B y N, Clave Alta en B y N)","Animoji y Memoji","Modo Noche","Estilos Fotográficos","Amplia gama de colores en fotos y Live Photos","Corrección de lente","Estabilización automática de imagen","Modo Ráfaga","Grabación de video 4K a 24 cps, 25 cps, 30 cps o 60 cps","Grabación de video HD de 1080p a 25 cps, 30 cps o 60 cps","Modo Cine de hasta 4K HDR a 30 cps","Grabación de video HDR en Dolby Vision de hasta 4K a 60 cps","Video en cámara lenta de 1080p a 120 cps","Video en cámara rápida con estabilización","Cámara rápida con modo Noche","Video QuickTake","Estabilización cinemática de video (4K, 1080p y 720p)"]}
        },
        {
            info:{
                titulo:"Face ID",
                lista:["Reconocimiento facial por medio de la cámara TrueDepth"]}
        },
        {
            info:{
                titulo:"Seguridad",
                lista:["Emergencia SOS","Detección de Choques"]}
        },
        {
            info:{
                titulo:"Todos los modelos",
                lista:["5G (sub-6 GHz) con MIMO 4x45","Gigabit LTE con MIMO 4x4 y LAA5","Wi‑Fi 6 (802.11ax) con MIMO 2x2","Bluetooth 5.3","Chip de banda ultraancha para la detección espacial6","NFC con modo de lectura","Tarjetas Express con carga de reserva"]}
        },
        {
            info:{
                titulo:"Ubicación",
                lista:["GPS, GLONASS, Galileo, QZSS y BeiDou","Brújula digital","Wi‑Fi","Red celular","Microlocalización iBeacon"]}
        },
        {
            info:{
                titulo:"Llamadas de video",
                lista:["Llamadas de video de FaceTime a través de red celular o Wi-Fi","Llamadas de video de FaceTime HD (1080p) a través de 5G o Wi-Fi","Comparte experiencias como películas, programas de TV, música y apps en una llamada de FaceTime mediante SharePlay","Compartir Pantalla","Modo Retrato en llamadas de video de FaceTime","Audio espacial","Modos de micrófono: Aislamiento de Voz y Espectro Amplio","Zoom con la cámara trasera"]}
        },
        {
            info:{
                titulo:"Llamadas de audio",
                lista:["Llamadas de audio de FaceTime","Comparte experiencias como películas, programas de TV, música y apps en una llamada de FaceTime mediante SharePlay","Compartir Pantalla","Audio espacial","Modos de micrófono: Aislamiento de Voz y Espectro Amplio"]}
        },
        {
            info:{
                titulo:"Reproducción de audio",
                lista:["Los formatos compatibles incluyen AAC, MP3, Apple Lossless, FLAC, Dolby Digital, Dolby Digital Plus y Dolby Atmos","Reproducción de audio espacial","Volumen máximo configurable por el usuario"]}
        },
        {
            info:{
                titulo:"Reproducción de video",
                lista:["Los formatos compatibles incluyen HEVC, H.264 y ProRes","HDR con Dolby Vision, HDR10 y HLG"," AirPlay para duplicación de pantalla y reproducción de fotos y videos hasta 4K HDR a través del Apple TV (segunda generación o posterior) o de una smart TV compatible con AirPlay 2","Compatibilidad con duplicación de video y salida de video: hasta 1080p a través del adaptador de Lightning a AV digital y del adaptador de Lightning a VGA (los adaptadores se venden por separado)"]}
        },
        {
            info:{
                titulo:"Energía y batería",
                lista:["Reproducción de video: Hasta 20 horas","Reproducción de video en streaming: Hasta 16 horas","Reproducción de audio: Hasta 80 horas","Carga rápida: Hasta un 50% de carga en aproximadamente 30 minutos10 con un adaptador de 20 W o superior (disponible por separado)"]}
        },
        {
            info:{
                titulo:"Ambos modelos:",
                lista:["Batería de iones de litio recargable integrada","Carga inalámbrica de hasta 15 W con cargadores MagSafe11","Carga inalámbrica de hasta 7.5 W con cargadores Qi11","Carga mediante el puerto USB de una computadora o con un adaptador de corriente"]}
        },
        {
            info:{
                titulo:"MagSafe",
                lista:["Carga inalámbrica de hasta 15 W11","Anillo magnético","Imán de alineación","Identificación de accesorios mediante NFC2","Magnetómetro"]}
        },
        {
            info:{
                titulo:"Sensores",
                lista:["Face ID","Barómetro","Giroscopio de alto rango dinámico","Acelerómetro de alta fuerza g","Sensor de proximidad","Dos sensores de luz ambiental"]}
        },
        {
            info:{
                titulo:"Sistema operativo",
                lista:["iOS16 es el sistema operativo móvil más personal y seguro del mundo. Incluye funcionalidades avanzadas y está diseñado para proteger tu privacidad."]}
        },

        ],
        color: ["midnight","blue","purple","red","starlight"],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
    categoria:['iphone','all']},

{
            id:'057',
            nombre:'IPHONE 14 PRO',
            secid:'iphone-14-pro',
            foto:["https://http2.mlstatic.com/D_NQ_NP_667208-MLA51806499537_102022-O.webp"],
            precio:"1080",
            memoria:["128GB","256GB","512GB"],
            ram:["-"],
            componentes:["A16 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)"],
            descripcion:[
                {
                info:{
                    titulo:"Pantalla",
                    lista:["Pantalla Super Retina XDR","Pantalla OLED de 6.1 pulgadas (diagonal) sin marco","Resolución de 2532 x 1170 pixeles a 460 ppi","La pantalla del iPhone 14 tiene esquinas redondeadas que siguen el elegante diseño curvo del teléfono, y las esquinas se encuentran dentro de un rectángulo estándar. Si se mide en forma de rectángulo estándar, la pantalla tiene 6.06 pulgadas en diagonal (el área real de visualización es menor).","Pantalla HDR","True Tone","Amplia gama de colores (P3)","Toque con respuesta háptica","Relación de contraste 2,000,000:1 (normal)","Brillo máximo de 800 nits (normal); pico de brillo de 1,200 nits (HDR)","Revestimiento oleofóbico resistente a huellas dactilares","Compatibilidad para mostrar varios idiomas y caracteres simultáneamente"]}
            },
            {
                info:{
                    titulo:"Resistencia a las salpicaduras, al agua y al polvo",
                    lista:["Clasificación IP68 (hasta 30 minutos a una profundidad máxima de 6 metros) según la norma IEC 60529"]}
            },    
            {
                info:{
                    titulo:"Chip",
                    lista:["Chip A16 Bionic","CPU de 6 núcleos con 2 núcleos de rendimiento y 4 de eficiencia","GPU de 5 núcleos","Neural Engine de 16 núcleos"]}
            },   
            {
                info:{
                    titulo:"Sistema de dos cámaras",
                    lista:["Gran angular de 48 MP: 24 mm, apertura de ƒ/1.78, estabilización óptica de imagen (OIS) por desplazamiento de sensor de segunda generación, lente de siete elementos, 100% Focus Pixels","  Ultra gran angular de 12 MP: 13 mm, apertura de ƒ/2.2 y ángulo de visión de 120°, lente de seis elementos, 100% Focus Pixels","Teleobjetivo de 2x de 12 MP (por medio del sensor quad pixel): 48 mm, apertura de ƒ/1.78, estabilización óptica de imagen (OIS) por desplazamiento de sensor de segunda generación, lente de siete elementos, 100% Focus Pixels","Teleobjetivo de 3x de 12 MP: 77 mm, apertura de ƒ/2.8, estabilización óptica de imagen (OIS), lente de seis elementos","Zoom óptico de 2x para alejar; zoom digital de hasta 5x","Cubierta del lente de cristal de zafiro","Flash True Tone","Photonic Engine","Deep Fusion","HDR Inteligente 4","Modo Retrato con bokeh avanzado y Control de Profundidad","Iluminación de Retrato con seis efectos (Luz Natural, Luz de Estudio Fotográfico, Luz al Contorno, Reflector, Reflector B y N, Clave Alta en B y N)","Modo Noche","Fotos panorámicas (hasta 63 MP)","Estilos Fotográficos","Amplia gama de colores en fotos y Live Photos","Corrección de lente (cámara ultra gran angular)","Corrección avanzada de ojos rojos","Estabilización automática de imagen","Modo Ráfaga","Geoetiquetado de fotos","Captura de imagen en formatos HEIF y JPEG"]}
            },
            {
                info:{
                    titulo:"Grabación de video",
                    lista:["Grabación de video 4K a 24 cps, 25 cps, 30 cps o 60 cps","Grabación de video HD de 1080p a 25 cps, 30 cps o 60 cps","Grabación de video HD de 720p a 30 cps","Modo Cine de hasta 4K HDR a 30 cps","Modo Acción de hasta 2.8K a 60 cps","Grabación de video HDR en Dolby Vision de hasta 4K a 60 cps","Video en cámara lenta de 1080p a 120 cps o 240 cps","Video en cámara rápida con estabilización","Cámara rápida con modo Noche","Video QuickTake","Estabilización óptica de imagen para video por desplazamiento de sensor (cámara gran angular)","Zoom óptico de 2x para alejar","Zoom digital de hasta 3x","Zoom de audio","Flash True Tone","Estabilización cinemática de video (4K, 1080p y 720p)","Video con autoenfoque continuo","Toma fotos de 8 MP mientras graba videos 4K","Zoom de reproducción","Grabación de video en formatos HEVC y H.264","Grabación estéreo"]}
            },
            {
                info:{
                    titulo:"Cámara TrueDepth",
                    lista:["Cámara de 12 MP","Apertura de ƒ/1.9","Autoenfoque con Focus Pixels","Lente de seis elementos","Retina Flash","Photonic Engine","Deep Fusion","HDR Inteligente 4","Modo Retrato con bokeh avanzado y Control de Profundidad","Iluminación de Retrato con seis efectos (Luz Natural, Luz de Estudio Fotográfico, Luz al Contorno, Reflector, Reflector B y N, Clave Alta en B y N)","Animoji y Memoji","Modo Noche","Estilos Fotográficos","Amplia gama de colores en fotos y Live Photos","Corrección de lente","Estabilización automática de imagen","Modo Ráfaga","Grabación de video 4K a 24 cps, 25 cps, 30 cps o 60 cps","Grabación de video HD de 1080p a 25 cps, 30 cps o 60 cps","Modo Cine de hasta 4K HDR a 30 cps","Grabación de video HDR en Dolby Vision de hasta 4K a 60 cps","Video en cámara lenta de 1080p a 120 cps","Video en cámara rápida con estabilización","Cámara rápida con modo Noche","Video QuickTake","Estabilización cinemática de video (4K, 1080p y 720p)"]}
            },
            {
                info:{
                    titulo:"Face ID",
                    lista:["Reconocimiento facial por medio de la cámara TrueDepth"]}
            },
            {
                info:{
                    titulo:"Seguridad",
                    lista:["Emergencia SOS","Detección de Choques"]}
            },
            {
                info:{
                    titulo:"Todos los modelos",
                    lista:["5G (sub-6 GHz) con MIMO 4x45","Gigabit LTE con MIMO 4x4 y LAA5","Wi‑Fi 6 (802.11ax) con MIMO 2x2","Bluetooth 5.3","Chip de banda ultraancha para la detección espacial6","NFC con modo de lectura","Tarjetas Express con carga de reserva"]}
            },
            {
                info:{
                    titulo:"Ubicación",
                    lista:["GPS, GLONASS, Galileo, QZSS y BeiDou","Brújula digital","Wi‑Fi","Red celular","Microlocalización iBeacon"]}
            },
            {
                info:{
                    titulo:"Llamadas de video",
                    lista:["Llamadas de video de FaceTime a través de red celular o Wi-Fi","Llamadas de video de FaceTime HD (1080p) a través de 5G o Wi-Fi","Comparte experiencias como películas, programas de TV, música y apps en una llamada de FaceTime mediante SharePlay","Compartir Pantalla","Modo Retrato en llamadas de video de FaceTime","Audio espacial","Modos de micrófono: Aislamiento de Voz y Espectro Amplio","Zoom con la cámara trasera"]}
            },
            {
                info:{
                    titulo:"Llamadas de audio",
                    lista:["Llamadas de audio de FaceTime","Comparte experiencias como películas, programas de TV, música y apps en una llamada de FaceTime mediante SharePlay","Compartir Pantalla","Audio espacial","Modos de micrófono: Aislamiento de Voz y Espectro Amplio"]}
            },
            {
                info:{
                    titulo:"Reproducción de audio",
                    lista:["Los formatos compatibles incluyen AAC, MP3, Apple Lossless, FLAC, Dolby Digital, Dolby Digital Plus y Dolby Atmos","Reproducción de audio espacial","Volumen máximo configurable por el usuario"]}
            },
            {
                info:{
                    titulo:"Reproducción de video",
                    lista:["Los formatos compatibles incluyen HEVC, H.264 y ProRes","HDR con Dolby Vision, HDR10 y HLG"," AirPlay para duplicación de pantalla y reproducción de fotos y videos hasta 4K HDR a través del Apple TV (segunda generación o posterior) o de una smart TV compatible con AirPlay 2","Compatibilidad con duplicación de video y salida de video: hasta 1080p a través del adaptador de Lightning a AV digital y del adaptador de Lightning a VGA (los adaptadores se venden por separado)"]}
            },
            {
                info:{
                    titulo:"Energía y batería",
                    lista:["Reproducción de video: Hasta 23 horas","Reproducción de video en streaming: Hasta 20 horas","Reproducción de audio: Hasta 75 horas","Carga rápida: Hasta un 50% de carga en aproximadamente 30 minutos con un adaptador de 20 W o superior (disponible por separado)"]}
            },
            {
                info:{
                    titulo:"Ambos modelos:",
                    lista:["Batería de iones de litio recargable integrada","Carga inalámbrica de hasta 15 W con cargadores MagSafe","Carga inalámbrica de hasta 7.5 W con cargadores Qi","Carga mediante el puerto USB de una computadora o con un adaptador de corriente"]}
            },
            {
                info:{
                    titulo:"MagSafe",
                    lista:["Carga inalámbrica de hasta 15 W11","Anillo magnético","Imán de alineación","Identificación de accesorios mediante NFC2","Magnetómetro"]}
            },
            {
                info:{
                    titulo:"Sensores",
                    lista:["Face ID","Barómetro","Giroscopio de alto rango dinámico","Acelerómetro de alta fuerza g","Sensor de proximidad","Dos sensores de luz ambiental"]}
            },
            {
                info:{
                    titulo:"Sistema operativo",
                    lista:["iOS16 es el sistema operativo móvil más personal y seguro del mundo. Incluye funcionalidades avanzadas y está diseñado para proteger tu privacidad."]}
            },
    
            ],
            color: ["black","purple","silver","gold"],
            estado:'En stock',
            tendencia:false,
            marca:'apple',
    categoria:['iphone','all']},

{
            id:'058',
            nombre:'IPHONE 14 PRO MAX',
            secid:'iphone-14-pro-max',
            foto:["https://http2.mlstatic.com/D_NQ_NP_739588-MLA51742980801_092022-O.webp","https://http2.mlstatic.com/D_NQ_NP_665816-MLA51743061611_092022-O.webp","https://http2.mlstatic.com/D_NQ_NP_686308-MLA51743082518_092022-O.webp"],
            precio:"1710",
            memoria:["128GB","256GB","512GB","1TB"],
            ram:["-"],
            componentes:["A16 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)"],
            descripcion:[
                {
                info:{
                    titulo:"Pantalla",
                    lista:["Pantalla Super Retina XDR","Pantalla OLED de 6.7 pulgadas (diagonal) sin marco","Resolución de 2796 x 1290 pixeles a 460 ppi","La pantalla del iPhone 14 tiene esquinas redondeadas que siguen el elegante diseño curvo del teléfono, y las esquinas se encuentran dentro de un rectángulo estándar. Si se mide en forma de rectángulo estándar, la pantalla tiene 6.06 pulgadas en diagonal (el área real de visualización es menor).","Pantalla HDR","True Tone","Amplia gama de colores (P3)","Toque con respuesta háptica","Relación de contraste 2,000,000:1 (normal)","Brillo máximo de 800 nits (normal); pico de brillo de 1,200 nits (HDR)","Revestimiento oleofóbico resistente a huellas dactilares","Compatibilidad para mostrar varios idiomas y caracteres simultáneamente"]}
            },
            {
                info:{
                    titulo:"Resistencia a las salpicaduras, al agua y al polvo",
                    lista:["Clasificación IP68 (hasta 30 minutos a una profundidad máxima de 6 metros) según la norma IEC 60529"]}
            },    
            {
                info:{
                    titulo:"Chip",
                    lista:["Chip A16 Bionic","CPU de 6 núcleos con 2 núcleos de rendimiento y 4 de eficiencia","GPU de 5 núcleos","Neural Engine de 16 núcleos"]}
            },   
            {
                info:{
                    titulo:"Sistema de dos cámaras",
                    lista:["Gran angular de 48 MP: 24 mm, apertura de ƒ/1.78, estabilización óptica de imagen (OIS) por desplazamiento de sensor de segunda generación, lente de siete elementos, 100% Focus Pixels","  Ultra gran angular de 12 MP: 13 mm, apertura de ƒ/2.2 y ángulo de visión de 120°, lente de seis elementos, 100% Focus Pixels","Teleobjetivo de 2x de 12 MP (por medio del sensor quad pixel): 48 mm, apertura de ƒ/1.78, estabilización óptica de imagen (OIS) por desplazamiento de sensor de segunda generación, lente de siete elementos, 100% Focus Pixels","Teleobjetivo de 3x de 12 MP: 77 mm, apertura de ƒ/2.8, estabilización óptica de imagen (OIS), lente de seis elementos","Zoom óptico de 2x para alejar; zoom digital de hasta 5x","Cubierta del lente de cristal de zafiro","Flash True Tone","Photonic Engine","Deep Fusion","HDR Inteligente 4","Modo Retrato con bokeh avanzado y Control de Profundidad","Iluminación de Retrato con seis efectos (Luz Natural, Luz de Estudio Fotográfico, Luz al Contorno, Reflector, Reflector B y N, Clave Alta en B y N)","Modo Noche","Fotos panorámicas (hasta 63 MP)","Estilos Fotográficos","Amplia gama de colores en fotos y Live Photos","Corrección de lente (cámara ultra gran angular)","Corrección avanzada de ojos rojos","Estabilización automática de imagen","Modo Ráfaga","Geoetiquetado de fotos","Captura de imagen en formatos HEIF y JPEG"]}
            },
            {
                info:{
                    titulo:"Grabación de video",
                    lista:["Grabación de video 4K a 24 cps, 25 cps, 30 cps o 60 cps","Grabación de video HD de 1080p a 25 cps, 30 cps o 60 cps","Grabación de video HD de 720p a 30 cps","Modo Cine de hasta 4K HDR a 30 cps","Modo Acción de hasta 2.8K a 60 cps","Grabación de video HDR en Dolby Vision de hasta 4K a 60 cps","Video en cámara lenta de 1080p a 120 cps o 240 cps","Video en cámara rápida con estabilización","Cámara rápida con modo Noche","Video QuickTake","Estabilización óptica de imagen para video por desplazamiento de sensor (cámara gran angular)","Zoom óptico de 2x para alejar","Zoom digital de hasta 3x","Zoom de audio","Flash True Tone","Estabilización cinemática de video (4K, 1080p y 720p)","Video con autoenfoque continuo","Toma fotos de 8 MP mientras graba videos 4K","Zoom de reproducción","Grabación de video en formatos HEVC y H.264","Grabación estéreo"]}
            },
            {
                info:{
                    titulo:"Cámara TrueDepth",
                    lista:["Cámara de 12 MP","Apertura de ƒ/1.9","Autoenfoque con Focus Pixels","Lente de seis elementos","Retina Flash","Photonic Engine","Deep Fusion","HDR Inteligente 4","Modo Retrato con bokeh avanzado y Control de Profundidad","Iluminación de Retrato con seis efectos (Luz Natural, Luz de Estudio Fotográfico, Luz al Contorno, Reflector, Reflector B y N, Clave Alta en B y N)","Animoji y Memoji","Modo Noche","Estilos Fotográficos","Amplia gama de colores en fotos y Live Photos","Corrección de lente","Estabilización automática de imagen","Modo Ráfaga","Grabación de video 4K a 24 cps, 25 cps, 30 cps o 60 cps","Grabación de video HD de 1080p a 25 cps, 30 cps o 60 cps","Modo Cine de hasta 4K HDR a 30 cps","Grabación de video HDR en Dolby Vision de hasta 4K a 60 cps","Video en cámara lenta de 1080p a 120 cps","Video en cámara rápida con estabilización","Cámara rápida con modo Noche","Video QuickTake","Estabilización cinemática de video (4K, 1080p y 720p)"]}
            },
            {
                info:{
                    titulo:"Face ID",
                    lista:["Reconocimiento facial por medio de la cámara TrueDepth"]}
            },
            {
                info:{
                    titulo:"Seguridad",
                    lista:["Emergencia SOS","Detección de Choques"]}
            },
            {
                info:{
                    titulo:"Todos los modelos",
                    lista:["5G (sub-6 GHz) con MIMO 4x45","Gigabit LTE con MIMO 4x4 y LAA5","Wi‑Fi 6 (802.11ax) con MIMO 2x2","Bluetooth 5.3","Chip de banda ultraancha para la detección espacial6","NFC con modo de lectura","Tarjetas Express con carga de reserva"]}
            },
            {
                info:{
                    titulo:"Ubicación",
                    lista:["GPS, GLONASS, Galileo, QZSS y BeiDou","Brújula digital","Wi‑Fi","Red celular","Microlocalización iBeacon"]}
            },
            {
                info:{
                    titulo:"Llamadas de video",
                    lista:["Llamadas de video de FaceTime a través de red celular o Wi-Fi","Llamadas de video de FaceTime HD (1080p) a través de 5G o Wi-Fi","Comparte experiencias como películas, programas de TV, música y apps en una llamada de FaceTime mediante SharePlay","Compartir Pantalla","Modo Retrato en llamadas de video de FaceTime","Audio espacial","Modos de micrófono: Aislamiento de Voz y Espectro Amplio","Zoom con la cámara trasera"]}
            },
            {
                info:{
                    titulo:"Llamadas de audio",
                    lista:["Llamadas de audio de FaceTime","Comparte experiencias como películas, programas de TV, música y apps en una llamada de FaceTime mediante SharePlay","Compartir Pantalla","Audio espacial","Modos de micrófono: Aislamiento de Voz y Espectro Amplio"]}
            },
            {
                info:{
                    titulo:"Reproducción de audio",
                    lista:["Los formatos compatibles incluyen AAC, MP3, Apple Lossless, FLAC, Dolby Digital, Dolby Digital Plus y Dolby Atmos","Reproducción de audio espacial","Volumen máximo configurable por el usuario"]}
            },
            {
                info:{
                    titulo:"Reproducción de video",
                    lista:["Los formatos compatibles incluyen HEVC, H.264 y ProRes","HDR con Dolby Vision, HDR10 y HLG"," AirPlay para duplicación de pantalla y reproducción de fotos y videos hasta 4K HDR a través del Apple TV (segunda generación o posterior) o de una smart TV compatible con AirPlay 2","Compatibilidad con duplicación de video y salida de video: hasta 1080p a través del adaptador de Lightning a AV digital y del adaptador de Lightning a VGA (los adaptadores se venden por separado)"]}
            },
            {
                info:{
                    titulo:"Energía y batería",
                    lista:["Reproducción de video: Hasta 29 horas","Reproducción de video en streaming: Hasta 25 horas","Reproducción de audio: Hasta 95 horas","Carga rápida: Hasta un 50% de carga en aproximadamente 30 minutos con un adaptador de 20 W o superior (disponible por separado)"]}
            },
            {
                info:{
                    titulo:"Ambos modelos:",
                    lista:["Batería de iones de litio recargable integrada","Carga inalámbrica de hasta 15 W con cargadores MagSafe","Carga inalámbrica de hasta 7.5 W con cargadores Qi","Carga mediante el puerto USB de una computadora o con un adaptador de corriente"]}
            },
            {
                info:{
                    titulo:"MagSafe",
                    lista:["Carga inalámbrica de hasta 15 W11","Anillo magnético","Imán de alineación","Identificación de accesorios mediante NFC2","Magnetómetro"]}
            },
            {
                info:{
                    titulo:"Sensores",
                    lista:["Face ID","Barómetro","Giroscopio de alto rango dinámico","Acelerómetro de alta fuerza g","Sensor de proximidad","Dos sensores de luz ambiental"]}
            },
            {
                info:{
                    titulo:"Sistema operativo",
                    lista:["iOS16 es el sistema operativo móvil más personal y seguro del mundo. Incluye funcionalidades avanzadas y está diseñado para proteger tu privacidad."]}
            },
    
            ],
            color: ["black","purple","silver","gold"],
            estado:'En stock',
            tendencia:false,
            marca:'apple',
    categoria:['iphone','all']},

{
            id:'059',
            nombre:'IPHONE 13',
            secid:'iphone-13',
            foto:["https://www.macstation.com.ar/img/productos/2582-2.jpg","https://www.macstation.com.ar/img/productos/2581-1.jpg","https://www.macstation.com.ar/img/productos/2585-3.jpg","https://www.macstation.com.ar/img/productos/2635-2583-5.jpg"],
            precio:"900",
            memoria:["128GB","512GB"],
            ram:["-"],
            componentes:["A15 Bionic(CPU de 6 núcleos / GPU de 4 núcleos)"],
            descripcion:[
                {
                info:{
                    titulo:"Pantalla",
                    lista:["Pantalla Super Retina XDR","Pantalla OLED de 6.1 pulgadas (diagonal) sin marco","Resolución de 2532 x 1170 pixeles a 460 ppi","La pantalla del iPhone 13 tiene esquinas redondeadas que siguen el elegante diseño curvo del teléfono, y las esquinas se encuentran dentro de un rectángulo estándar. Si se mide en forma de rectángulo estándar, la pantalla tiene 6.06 pulgadas en diagonal (el área real de visualización es menor).","Pantalla HDR","True Tone","Amplia gama de colores (P3)","Toque con respuesta háptica","Relación de contraste 2,000,000:1 (normal)","Brillo máximo de 800 nits (normal); pico de brillo de 1,200 nits (HDR)","Revestimiento oleofóbico resistente a huellas dactilares","Compatibilidad para mostrar varios idiomas y caracteres simultáneamente"]}
            },
            {
                info:{
                    titulo:"Resistencia a las salpicaduras, al agua y al polvo",
                    lista:["Clasificación IP68 (hasta 30 minutos a una profundidad máxima de 6 metros) según la norma IEC 60529"]}
            },    
            {
                info:{
                    titulo:"Chip",
                    lista:["Chip A15 Bionic","CPU de 6 núcleos con 2 núcleos de rendimiento y 4 de eficiencia","GPU de 4 núcleos","Neural Engine de 16 núcleos"]}
            },   
            {
                info:{
                    titulo:"Sistema de dos cámaras",
                    lista:["Sistema de dos cámaras de 12 MP: gran angular y ultra gran angular","Gran angular: apertura de ƒ/1.6","Ultra gran angular: apertura de ƒ/2.4 y ángulo de visión de 120°","Zoom óptico de 2x para alejar","Zoom digital de hasta 5x","Modo Retrato con bokeh avanzado y Control de Profundidad","Iluminación de Retrato con seis efectos (Luz Natural, Luz de Estudio Fotográfico, Luz al Contorno, Reflector, Reflector B y N, Clave Alta en B + y N)","Estabilización óptica de imagen por desplazamiento de sensor (cámara gran angular)","Lente de siete elementos (cámara gran angular); lente de cinco elementos (cámara ultra gran angular)","Flash True Tone con sincronización lenta","Fotos panorámicas (hasta 63 MP)","Cubierta del lente de cristal de zafiro","100% Focus Pixels (cámara gran angular)","Modo Noche","Deep Fusion","HDR Inteligente 4","Estilos Fotográficos","Amplia gama de colores en fotos y Live Photos","Corrección de lente (cámara ultra gran angular)","Corrección avanzada de ojos rojos","Estabilización automática de imagen","Modo Ráfaga","Geoetiquetado de fotos","Captura de imagen en formatos HEIF y JPEG"]}
            },
            {
                info:{
                    titulo:"Grabación de video",
                    lista:["Modo Cine para grabar videos con baja profundidad de campo (1080p a 30 cps)","Grabación de video HDR en Dolby Vision de hasta 4K a 60 cps","Grabación de video 4K a 24 cps, 25 cps, 30 cps o 60 cps","Grabación de video HD de 1080p a 25 cps, 30 cps o 60 cps","Grabación de video HD de 720p a 30 cps","Estabilización óptica de imagen para video (cámara gran angular)","Zoom óptico de 2x para alejar","Zoom digital de hasta 3x","Zoom de audio","Flash True Tone","Video QuickTake","Video en cámara lenta de 1080p a 120 cps o 240 cps","Video en cámara rápida con estabilización","Cámara rápida con modo Noche","Estabilización cinemática de video (4K, 1080p y 720p)","Video con autoenfoque continuo","Toma fotos de 8 MP mientras graba videos 4K","Zoom de reproducción","Grabación de video en formatos HEVC y H.264","Grabación estéreo"]}
            },
            {
                info:{
                    titulo:"Cámara TrueDepth",
                    lista:["Cámara de 12 MP","Apertura de ƒ/2.2","Modo Retrato con bokeh avanzado y Control de Profundidad","Iluminación de Retrato con seis efectos (Luz Natural, Luz de Estudio Fotográfico, Luz al Contorno, Reflector, Reflector B y N, Clave Alta en B y N)","Animoji y Memoji","Modo Noche","Deep Fusion","HDR Inteligente 4","Estilos Fotográficos","Modo Cine para grabar videos con baja profundidad de campo (1080p a 30 cps)","Grabación de video HDR en Dolby Vision de hasta 4K a 60 cps","Grabación de video 4K a 24 cps, 25 cps, 30 cps o 60 cps","Grabación de video HD de 1080p a 25 cps, 30 cps o 60 cps","Video en cámara lenta de 1080p a 120 cps","Video en cámara rápida con estabilización","Cámara rápida con modo Noche","Estabilización cinemática de video (4K, 1080p y 720p)" ,"Video QuickTake","Amplia gama de colores en fotos y Live Photos","Corrección de lente ","Retina Flash","Estabilización automática de imagen","Modo Ráfaga"]}
            },
            {
                info:{
                    titulo:"Face ID",
                    lista:["Reconocimiento facial por medio de la cámara TrueDepth"]}
            },
            {
                info:{
                    titulo:"Seguridad",
                    lista:["Emergencia SOS","Detección de Choques"]}
            },
            {
                info:{
                    titulo:"Todos los modelos",
                    lista:["5G (sub-6 GHz) con MIMO 4x45","Gigabit LTE con MIMO 4x4 y LAA5","Wi‑Fi 6 (802.11ax) con MIMO 2x2","Bluetooth 5.3","Chip de banda ultraancha para la detección espacial6","NFC con modo de lectura","Tarjetas Express con carga de reserva"]}
            },
            {
                info:{
                    titulo:"Ubicación",
                    lista:["GPS, GLONASS, Galileo, QZSS y BeiDou","Brújula digital","Wi‑Fi","Red celular","Microlocalización iBeacon"]}
            },
            {
                info:{
                    titulo:"Llamadas de video",
                    lista:["Llamadas de video de FaceTime a través de red celular o Wi-Fi","Llamadas de video de FaceTime HD (1080p) a través de 5G o Wi-Fi","Comparte experiencias como películas, programas de TV, música y apps en una llamada de FaceTime mediante SharePlay","Compartir Pantalla","Modo Retrato en llamadas de video de FaceTime","Audio espacial","Modos de micrófono: Aislamiento de Voz y Espectro Amplio","Zoom con la cámara trasera"]}
            },
            {
                info:{
                    titulo:"Llamadas de audio",
                    lista:["Llamadas de audio de FaceTime","Comparte experiencias como películas, programas de TV, música y apps en una llamada de FaceTime mediante SharePlay","Compartir Pantalla","Audio espacial","Modos de micrófono: Aislamiento de Voz y Espectro Amplio"]}
            },
            {
                info:{
                    titulo:"Reproducción de audio",
                    lista:["Los formatos compatibles incluyen AAC, MP3, Apple Lossless, FLAC, Dolby Digital, Dolby Digital Plus y Dolby Atmos","Reproducción de audio espacial","Volumen máximo configurable por el usuario"]}
            },
            {
                info:{
                    titulo:"Reproducción de video",
                    lista:["Los formatos compatibles incluyen HEVC, H.264 y ProRes","HDR con Dolby Vision, HDR10 y HLG"," AirPlay para duplicación de pantalla y reproducción de fotos y videos hasta 4K HDR a través del Apple TV (segunda generación o posterior) o de una smart TV compatible con AirPlay 2","Compatibilidad con duplicación de video y salida de video: hasta 1080p a través del adaptador de Lightning a AV digital y del adaptador de Lightning a VGA (los adaptadores se venden por separado)"]}
            },
            {
                info:{
                    titulo:"Energía y batería",
                    lista:["Reproducción de video: Hasta 19 horas","Reproducción de video en streaming: Hasta 15 horas","Reproducción de audio: Hasta 75 horas","Carga rápida: Hasta un 50% de carga en aproximadamente 30 minutos con un adaptador de 20 W o superior (disponible por separado)"]}
            },
            {
                info:{
                    titulo:"Ambos modelos:",
                    lista:["Batería de iones de litio recargable integrada","Carga inalámbrica de hasta 15 W con cargadores MagSafe","Carga inalámbrica de hasta 7.5 W con cargadores Qi","Carga mediante el puerto USB de una computadora o con un adaptador de corriente"]}
            },
            {
                info:{
                    titulo:"MagSafe",
                    lista:["Carga inalámbrica de hasta 15 W11","Anillo magnético","Imán de alineación","Identificación de accesorios mediante NFC2","Magnetómetro"]}
            },
            {
                info:{
                    titulo:"Sensores",
                    lista:["Face ID","Barómetro","Giroscopio de alto rango dinámico","Acelerómetro de alta fuerza g","Sensor de proximidad","Dos sensores de luz ambiental"]}
            },
            {
                info:{
                    titulo:"Sistema operativo",
                    lista:["iOS15 es el sistema operativo móvil más personal y seguro del mundo. Incluye funcionalidades avanzadas y está diseñado para proteger tu privacidad."]}
            },
    
            ],
            color: ["blue","green","red","midnight","starlight"],
            estado:'En stock',
            tendencia:false,
            marca:'apple',
    categoria:['iphone','all']},

{
            id:'060',
            nombre:'IPHONE 13 PRO',
            secid:'iphone-13-pro',
            foto:["https://www.macstation.com.ar/img/productos/2911-2590-1.jpg","https://www.macstation.com.ar/img/productos/2595-2.jpg","https://www.macstation.com.ar/img/productos/2596-3.jpg"],
            precio:"1170",
            memoria:["128GB"],
            ram:["-"],
            componentes:["A15 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)"],
            descripcion:[
                {
                info:{
                    titulo:"Pantalla",
                    lista:["Pantalla Super Retina XDR","Pantalla OLED de 6.1 pulgadas (diagonal) sin marco","Resolución de 2532 x 1170 pixeles a 460 ppi","La pantalla del iPhone 13 Pro tiene esquinas redondeadas que siguen el elegante diseño curvo del teléfono, y las esquinas se encuentran dentro de un rectángulo estándar. Si se mide en forma de rectángulo estándar, la pantalla tiene 6.06 pulgadas en diagonal (el área real de visualización es menor).","Pantalla HDR","True Tone","Amplia gama de colores (P3)","Toque con respuesta háptica","Relación de contraste 2,000,000:1 (normal)","Brillo máximo de 800 nits (normal); pico de brillo de 1,200 nits (HDR)","Revestimiento oleofóbico resistente a huellas dactilares","Compatibilidad para mostrar varios idiomas y caracteres simultáneamente"]}
            },
            {
                info:{
                    titulo:"Resistencia a las salpicaduras, al agua y al polvo",
                    lista:["Clasificación IP68 (hasta 30 minutos a una profundidad máxima de 6 metros) según la norma IEC 60529"]}
            },    
            {
                info:{
                    titulo:"Chip",
                    lista:["Chip A15 Bionic","CPU de 6 núcleos con 2 núcleos de rendimiento y 4 de eficiencia","GPU de 5 núcleos","Neural Engine de 16 núcleos"]}
            },   
            {
                info:{
                    titulo:"Sistema de dos cámaras",
                    lista:["Sistema de cámaras Pro de 12 MP: teleobjetivo, gran angular y ultra gran angular","Teleobjetivo: apertura de ƒ/2.8","Gran angular: apertura de ƒ/1.5","Ultra gran angular: apertura de ƒ/1.8 y ángulo de visión de 120°","Zoom óptico de 2x para alejar","Zoom digital de hasta 5x","Modo Retrato con bokeh avanzado y Control de Profundidad","Iluminación de Retrato con seis efectos (Luz Natural, Luz de Estudio Fotográfico, Luz al Contorno, Reflector, Reflector B y N, Clave Alta en B + y N)","Estabilización óptica de imagen por desplazamiento de sensor (cámara gran angular)","Lente de siete elementos (cámara gran angular); lente de cinco elementos (cámara ultra gran angular)","Flash True Tone con sincronización lenta","Fotos panorámicas (hasta 63 MP)","Cubierta del lente de cristal de zafiro","100% Focus Pixels (cámara gran angular)","Modo Noche","Deep Fusion","HDR Inteligente 4","Estilos Fotográficos","Amplia gama de colores en fotos y Live Photos","Corrección de lente (cámara ultra gran angular)","Corrección avanzada de ojos rojos","Estabilización automática de imagen","Modo Ráfaga","Geoetiquetado de fotos","Captura de imagen en formatos HEIF y JPEG"]}
            },
            {
                info:{
                    titulo:"Grabación de video",
                    lista:["Modo Cine para grabar videos con baja profundidad de campo (1080p a 30 cps)","Grabación de video HDR en Dolby Vision de hasta 4K a 60 cps","Grabación de video 4K a 24 cps, 25 cps, 30 cps o 60 cps","Grabación de video HD de 1080p a 25 cps, 30 cps o 60 cps","Grabación de video HD de 720p a 30 cps","Estabilización óptica de imagen para video (cámara gran angular)","Zoom óptico de 2x para alejar","Zoom digital de hasta 3x","Zoom de audio","Flash True Tone","Video QuickTake","Video en cámara lenta de 1080p a 120 cps o 240 cps","Video en cámara rápida con estabilización","Cámara rápida con modo Noche","Estabilización cinemática de video (4K, 1080p y 720p)","Video con autoenfoque continuo","Toma fotos de 8 MP mientras graba videos 4K","Zoom de reproducción","Grabación de video en formatos HEVC y H.264","Grabación estéreo"]}
            },
            {
                info:{
                    titulo:"Cámara TrueDepth",
                    lista:["Cámara de 12 MP","Apertura de ƒ/2.2","Modo Retrato con bokeh avanzado y Control de Profundidad","Iluminación de Retrato con seis efectos (Luz Natural, Luz de Estudio Fotográfico, Luz al Contorno, Reflector, Reflector B y N, Clave Alta en B y N)","Animoji y Memoji","Modo Noche","Deep Fusion","HDR Inteligente 4","Estilos Fotográficos","Modo Cine para grabar videos con baja profundidad de campo (1080p a 30 cps)","Grabación de video HDR en Dolby Vision de hasta 4K a 60 cps","Grabación de video 4K a 24 cps, 25 cps, 30 cps o 60 cps","Grabación de video HD de 1080p a 25 cps, 30 cps o 60 cps","Video en cámara lenta de 1080p a 120 cps","Video en cámara rápida con estabilización","Cámara rápida con modo Noche","Estabilización cinemática de video (4K, 1080p y 720p)" ,"Video QuickTake","Amplia gama de colores en fotos y Live Photos","Corrección de lente ","Retina Flash","Estabilización automática de imagen","Modo Ráfaga"]}
            },
            {
                info:{
                    titulo:"Face ID",
                    lista:["Reconocimiento facial por medio de la cámara TrueDepth"]}
            },
            {
                info:{
                    titulo:"Seguridad",
                    lista:["Emergencia SOS","Detección de Choques"]}
            },
            {
                info:{
                    titulo:"Todos los modelos",
                    lista:["5G (sub-6 GHz) con MIMO 4x45","Gigabit LTE con MIMO 4x4 y LAA5","Wi‑Fi 6 (802.11ax) con MIMO 2x2","Bluetooth 5.3","Chip de banda ultraancha para la detección espacial6","NFC con modo de lectura","Tarjetas Express con carga de reserva"]}
            },
            {
                info:{
                    titulo:"Ubicación",
                    lista:["GPS, GLONASS, Galileo, QZSS y BeiDou","Brújula digital","Wi‑Fi","Red celular","Microlocalización iBeacon"]}
            },
            {
                info:{
                    titulo:"Llamadas de video",
                    lista:["Llamadas de video de FaceTime a través de red celular o Wi-Fi","Llamadas de video de FaceTime HD (1080p) a través de 5G o Wi-Fi","Comparte experiencias como películas, programas de TV, música y apps en una llamada de FaceTime mediante SharePlay","Compartir Pantalla","Modo Retrato en llamadas de video de FaceTime","Audio espacial","Modos de micrófono: Aislamiento de Voz y Espectro Amplio","Zoom con la cámara trasera"]}
            },
            {
                info:{
                    titulo:"Llamadas de audio",
                    lista:["Llamadas de audio de FaceTime","Comparte experiencias como películas, programas de TV, música y apps en una llamada de FaceTime mediante SharePlay","Compartir Pantalla","Audio espacial","Modos de micrófono: Aislamiento de Voz y Espectro Amplio"]}
            },
            {
                info:{
                    titulo:"Reproducción de audio",
                    lista:["Los formatos compatibles incluyen AAC, MP3, Apple Lossless, FLAC, Dolby Digital, Dolby Digital Plus y Dolby Atmos","Reproducción de audio espacial","Volumen máximo configurable por el usuario"]}
            },
            {
                info:{
                    titulo:"Reproducción de video",
                    lista:["Los formatos compatibles incluyen HEVC, H.264 y ProRes","HDR con Dolby Vision, HDR10 y HLG"," AirPlay para duplicación de pantalla y reproducción de fotos y videos hasta 4K HDR a través del Apple TV (segunda generación o posterior) o de una smart TV compatible con AirPlay 2","Compatibilidad con duplicación de video y salida de video: hasta 1080p a través del adaptador de Lightning a AV digital y del adaptador de Lightning a VGA (los adaptadores se venden por separado)"]}
            },
            {
                info:{
                    titulo:"Energía y batería",
                    lista:["Reproducción de video: Hasta 19 horas","Reproducción de video en streaming: Hasta 15 horas","Reproducción de audio: Hasta 75 horas","Carga rápida: Hasta un 50% de carga en aproximadamente 30 minutos con un adaptador de 20 W o superior (disponible por separado)"]}
            },
            {
                info:{
                    titulo:"Ambos modelos:",
                    lista:["Batería de iones de litio recargable integrada","Carga inalámbrica de hasta 15 W con cargadores MagSafe","Carga inalámbrica de hasta 7.5 W con cargadores Qi","Carga mediante el puerto USB de una computadora o con un adaptador de corriente"]}
            },
            {
                info:{
                    titulo:"MagSafe",
                    lista:["Carga inalámbrica de hasta 15 W11","Anillo magnético","Imán de alineación","Identificación de accesorios mediante NFC2","Magnetómetro"]}
            },
            {
                info:{
                    titulo:"Sensores",
                    lista:["Face ID","Barómetro","Giroscopio de alto rango dinámico","Acelerómetro de alta fuerza g","Sensor de proximidad","Dos sensores de luz ambiental"]}
            },
            {
                info:{
                    titulo:"Sistema operativo",
                    lista:["iOS15 es el sistema operativo móvil más personal y seguro del mundo. Incluye funcionalidades avanzadas y está diseñado para proteger tu privacidad."]}
            },
    
            ],
            color: ["green"],
            estado:'En stock',
            tendencia:false,
            marca:'apple',
    categoria:['iphone','all']},
//watch
{
    id:'061',
    nombre:'Watch Serie 8 41MM',
    secid:'watch-8-41mm',
    foto:["https://www.tradeinn.com/f/13933/139331697/apple-watch-series-8-gps-41-mm.jpg"],
    precio:"575",
    memoria:["-"],
    ram:["-"],
    componentes:["-"],
    descripcion:[
        {
        info:{
            titulo:"Suave y sin costuras",
            lista:["Apple Watch Series 8 cuenta con una pantalla siempre encendida grande y brillante. Los bordes angostos empujan la pantalla hasta el borde, lo que da como resultado una integración elegante con la curvatura de la carcasa."]}
                },
    {
        info:{
            titulo:"Pantalla Retina siempre activa",
            lista:["Tómalo todo. Hazlo todo. La pantalla brillante siempre encendida hace que las carátulas detalladas del reloj se vean asombrosas y fáciles de leer, incluso cuando tienes la muñeca hacia abajo. La pantalla grande se adapta a todas sus complicaciones favoritas y hace que tocar, escribir y deslizar sea muy fácil."]
        }
    },
    {
        info:{
            titulo:"Más duro que duro",
            lista:["Las mismas innovaciones utilizadas para crear la hermosa pantalla siempre encendida de borde a borde también ayudan a que sea increíblemente duradera. Un cristal frontal grueso, una geometría robusta y una base plana lo hacen resistente al agrietamiento."]
        }
    },
        ],
    color: ['black','white'],
    estado:'En stock',
    tendencia:false,
    marca:'apple',
    categoria:['watch','all']},

{
    id:'062',
    nombre:'Watch Serie 8 45MM',
    secid:'watch-8-45mm',
    foto:["https://www.tradeinn.com/f/13933/139331700/apple-watch-series-8-gps-45-mm.jpg"],
    precio:"610",
    memoria:["-"],
    ram:["-"],
    componentes:["-"],
    descripcion:[
        {
        info:{
            titulo:"Suave y sin costuras",
            lista:["Apple Watch Series 8 cuenta con una pantalla siempre encendida grande y brillante. Los bordes angostos empujan la pantalla hasta el borde, lo que da como resultado una integración elegante con la curvatura de la carcasa."]}
                },
    {
        info:{
            titulo:"Pantalla Retina siempre activa",
            lista:["Tómalo todo. Hazlo todo. La pantalla brillante siempre encendida hace que las carátulas detalladas del reloj se vean asombrosas y fáciles de leer, incluso cuando tienes la muñeca hacia abajo. La pantalla grande se adapta a todas sus complicaciones favoritas y hace que tocar, escribir y deslizar sea muy fácil."]
        }
    },
    {
        info:{
            titulo:"Más duro que duro",
            lista:["Las mismas innovaciones utilizadas para crear la hermosa pantalla siempre encendida de borde a borde también ayudan a que sea increíblemente duradera. Un cristal frontal grueso, una geometría robusta y una base plana lo hacen resistente al agrietamiento."]
        }
    },
        ],
    color: ['black','white'],
    estado:'En stock',
    tendencia:false,
    marca:'apple',
    categoria:['watch','all']},

{
        id:'063',
        nombre:'Watch Serie 7 41MM',
        secid:'watch-7-41mm',
        foto:["https://www.macstation.com.ar/img/productos/2628-3.jpg","https://www.macstation.com.ar/img/productos/2629-4.jpg"],
        precio:"430",
        memoria:["-"],
        ram:["-"],
        componentes:["-"],
        descripcion:[
            {
            info:{
                titulo:"Suave y sin costuras",
                lista:["Apple Watch Series 8 cuenta con una pantalla siempre encendida grande y brillante. Los bordes angostos empujan la pantalla hasta el borde, lo que da como resultado una integración elegante con la curvatura de la carcasa."]}
                    },
        {
            info:{
                titulo:"Pantalla Retina siempre activa",
                lista:["Tómalo todo. Hazlo todo. La pantalla brillante siempre encendida hace que las carátulas detalladas del reloj se vean asombrosas y fáciles de leer, incluso cuando tienes la muñeca hacia abajo. La pantalla grande se adapta a todas sus complicaciones favoritas y hace que tocar, escribir y deslizar sea muy fácil."]
            }
        },
        {
            info:{
                titulo:"Más duro que duro",
                lista:["Las mismas innovaciones utilizadas para crear la hermosa pantalla siempre encendida de borde a borde también ayudan a que sea increíblemente duradera. Un cristal frontal grueso, una geometría robusta y una base plana lo hacen resistente al agrietamiento."]
            }
        },
            ],
        color: ['blue','green'],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
    categoria:['watch','all']},

{
        id:'064',
        nombre:'Watch Serie 7 45MM',
        secid:'watch-7-45mm',
        foto:["https://www.macstation.com.ar/img/productos/2689-5.jpg","https://www.macstation.com.ar/img/productos/2686-2.jpg"],
        precio:"450",
        memoria:["-"],
        ram:["-"],
        componentes:["-"],
        descripcion:[
            {
            info:{
                titulo:"Suave y sin costuras",
                lista:["Apple Watch Series 8 cuenta con una pantalla siempre encendida grande y brillante. Los bordes angostos empujan la pantalla hasta el borde, lo que da como resultado una integración elegante con la curvatura de la carcasa."]}
                    },
        {
            info:{
                titulo:"Pantalla Retina siempre activa",
                lista:["Tómalo todo. Hazlo todo. La pantalla brillante siempre encendida hace que las carátulas detalladas del reloj se vean asombrosas y fáciles de leer, incluso cuando tienes la muñeca hacia abajo. La pantalla grande se adapta a todas sus complicaciones favoritas y hace que tocar, escribir y deslizar sea muy fácil."]
            }
        },
        {
            info:{
                titulo:"Más duro que duro",
                lista:["Las mismas innovaciones utilizadas para crear la hermosa pantalla siempre encendida de borde a borde también ayudan a que sea increíblemente duradera. Un cristal frontal grueso, una geometría robusta y una base plana lo hacen resistente al agrietamiento."]
            }
        },
            ],
        color: ['red','starlight'],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
    categoria:['watch','all']},

{
            id:'065',
            nombre:'Watch SE 2da Gen 40MM',
            secid:'watch-SE-40mm',
            foto:["https://www.macstation.com.ar/img/productos/2089-1.jpg"],
            precio:"340",
            memoria:["-"],
            ram:["-"],
            componentes:["-"],
            descripcion:[
                {
                info:{
                    titulo:"Suave y sin costuras",
                    lista:["Apple Watch Series 8 cuenta con una pantalla siempre encendida grande y brillante. Los bordes angostos empujan la pantalla hasta el borde, lo que da como resultado una integración elegante con la curvatura de la carcasa."]}
                        },
            {
                info:{
                    titulo:"Pantalla Retina siempre activa",
                    lista:["Tómalo todo. Hazlo todo. La pantalla brillante siempre encendida hace que las carátulas detalladas del reloj se vean asombrosas y fáciles de leer, incluso cuando tienes la muñeca hacia abajo. La pantalla grande se adapta a todas sus complicaciones favoritas y hace que tocar, escribir y deslizar sea muy fácil."]
                }
            },
            {
                info:{
                    titulo:"Más duro que duro",
                    lista:["Las mismas innovaciones utilizadas para crear la hermosa pantalla siempre encendida de borde a borde también ayudan a que sea increíblemente duradera. Un cristal frontal grueso, una geometría robusta y una base plana lo hacen resistente al agrietamiento."]
                }
            },
                ],
            color: ['silver','gray'],
            estado:'En stock',
            tendencia:false,
            marca:'apple',
        categoria:['watch','all']},
{
            id:'066',
            nombre:'Watch SE 2da Gen 44MM',
            secid:'watch-SE-44mm',
            foto:["https://www.macstation.com.ar/img/productos/2091-1.jpg"],
            precio:"370",
            memoria:["-"],
            ram:["-"],
            componentes:["-"],
            descripcion:[
                {
                info:{
                    titulo:"Suave y sin costuras",
                    lista:["Apple Watch Series 8 cuenta con una pantalla siempre encendida grande y brillante. Los bordes angostos empujan la pantalla hasta el borde, lo que da como resultado una integración elegante con la curvatura de la carcasa."]}
                        },
            {
                info:{
                    titulo:"Pantalla Retina siempre activa",
                    lista:["Tómalo todo. Hazlo todo. La pantalla brillante siempre encendida hace que las carátulas detalladas del reloj se vean asombrosas y fáciles de leer, incluso cuando tienes la muñeca hacia abajo. La pantalla grande se adapta a todas sus complicaciones favoritas y hace que tocar, escribir y deslizar sea muy fácil."]
                }
            },
            {
                info:{
                    titulo:"Más duro que duro",
                    lista:["Las mismas innovaciones utilizadas para crear la hermosa pantalla siempre encendida de borde a borde también ayudan a que sea increíblemente duradera. Un cristal frontal grueso, una geometría robusta y una base plana lo hacen resistente al agrietamiento."]
                }
            },
                ],
            color: ['silver','gray'],
            estado:'En stock',
            tendencia:false,
            marca:'apple',
        categoria:['watch','all']},
{
            id:'067',
            nombre:'Watch Serie 3 38MM',
            secid:'watch-3-38mm',
            foto:["https://http2.mlstatic.com/D_NQ_NP_721808-MLA46397778443_062021-O.webp","https://http2.mlstatic.com/D_NQ_NP_985061-MLA46397868333_062021-O.webp","https://http2.mlstatic.com/D_NQ_NP_706098-MLA46397868334_062021-O.webp","https://http2.mlstatic.com/D_NQ_NP_754313-MLA46397466875_062021-O.webp","https://http2.mlstatic.com/D_NQ_NP_729258-MLA46397778446_062021-O.webp"],
            precio:"260",
            memoria:["-"],
            ram:["-"],
            componentes:["-"],
            descripcion:[
                {
                info:{
                    titulo:"Suave y sin costuras",
                    lista:["Apple Watch Series 8 cuenta con una pantalla siempre encendida grande y brillante. Los bordes angostos empujan la pantalla hasta el borde, lo que da como resultado una integración elegante con la curvatura de la carcasa."]}
                        },
            {
                info:{
                    titulo:"Pantalla Retina siempre activa",
                    lista:["Tómalo todo. Hazlo todo. La pantalla brillante siempre encendida hace que las carátulas detalladas del reloj se vean asombrosas y fáciles de leer, incluso cuando tienes la muñeca hacia abajo. La pantalla grande se adapta a todas sus complicaciones favoritas y hace que tocar, escribir y deslizar sea muy fácil."]
                }
            },
            {
                info:{
                    titulo:"Más duro que duro",
                    lista:["Las mismas innovaciones utilizadas para crear la hermosa pantalla siempre encendida de borde a borde también ayudan a que sea increíblemente duradera. Un cristal frontal grueso, una geometría robusta y una base plana lo hacen resistente al agrietamiento."]
                }
            },
                ],
            color: ['silver','gray'],
            estado:'En stock',
            tendencia:false,
            marca:'apple',
        categoria:['watch','all']},

//AIRPODS
{
    id:'068',
    nombre:'Apple Airpods 2 con Estuche de Carga Inalambrica',
    secid:'',
    foto:["https://www.macstation.com.ar/img/productos/1434-1407-1.jpg","https://www.macstation.com.ar/img/productos_multimedia/1083-2.jpg","https://www.macstation.com.ar/img/productos_multimedia/1082-3.jpg",],
    precio:"165",
    memoria:["-"],
    ram:["-"],
    componentes:["-"],
    descripcion:[
        {
        info:{
            titulo:"",
            lista:[""]}
                },,
        ],
    color: ['white'],
    estado:'En stock',
    tendencia:false,
    marca:'apple',
    categoria:['accesorios','all']},

{
    id:'069',
    nombre:'Apple Airpods (3.ª generación)',
    secid:'',
    foto:["https://www.macstation.com.ar/img/productos/2627-1.jpg","https://www.macstation.com.ar/img/productos_multimedia/1083-2.jpg","https://www.macstation.com.ar/img/productos_multimedia/1082-3.jpg",],
    precio:"200",
    memoria:["-"],
    ram:["-"],
    componentes:["-"],
    descripcion:[
        {
        info:{
            titulo:"",
            lista:[""]}
                },
        ],
    color: ['white'],
    estado:'En stock',
    tendencia:false,
    marca:'apple',
    categoria:['accesorios','all']},

{
    id:'070',
    nombre:'Apple Airpods Pro',
    secid:'',
    foto:["https://www.macstation.com.ar/img/productos/2557-1663-apple-airpods-pro.jpg"],
    precio:"210",
    memoria:["-"],
    ram:["-"],
    componentes:["-"],
    descripcion:[
        {
        info:{
            titulo:"",
            lista:[""]}
                },,
        ],
    color: ['white'],
    estado:'En stock',
    tendencia:false,
    marca:'apple',
    categoria:['accesorios','all']},

    //Ipads
{
    id:'071',
    nombre:'iPad (9ª generación) 10.2" Wi-Fi 64GB',
    secid:'',
    foto:["https://http2.mlstatic.com/D_NQ_NP_980498-MLA47871333049_102021-O.webp","https://http2.mlstatic.com/D_NQ_NP_991281-MLA47871333051_102021-O.webp","https://http2.mlstatic.com/D_NQ_NP_811627-MLA47871023475_102021-O.webp","https://http2.mlstatic.com/D_NQ_NP_611573-MLA47871010510_102021-O.webp"],
    precio:"480",
    memoria:["256GB"],
    ram:["-"],
    componentes:["Chip A13 Bionic"],
    descripcion:[
        {
        info:{
            titulo:"",
            lista:[""]}
                },
        ],
    color: ['space'],
    estado:'En stock',
    tendencia:false,
    marca:'apple',
    categoria:['ipad','all']},

    {
        id:'072',
        nombre:'iPad Mini 6ta gen 2021',
        secid:'ipad-mini-6ta',
        foto:["https://www.macstation.com.ar/img/productos_multimedia/1049-ipad-mini-wi-fi-space-gray-pdp-image-position-1a-coes-v1.jpg","https://www.macstation.com.ar/img/productos_multimedia/1047-ipad-mini-wi-fi-space-gray-pdp-image-position-2-coes-v1.jpg","https://www.macstation.com.ar/img/productos_multimedia/1046-ipad-mini-wi-fi-space-gray-pdp-image-position-3-coes-v1.jpg","https://www.macstation.com.ar/img/productos_multimedia/1044-ipad-mini-wi-fi-space-gray-pdp-image-position-8-coes-v1.jpg","https://www.macstation.com.ar/img/productos/2564-1.jpg"],
        precio:"495",
        memoria:["64GB","256GB"],
        ram:["-"],
        componentes:["Chip A15 Bionic (CPU de 6 núcleos / GPU  de 5 núcleos)"],
        descripcion:[
            {
            info:{
                titulo:"",
                lista:[""]}
                    },
            ],
        color: ['starlight','purple','space'],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['ipad','all']},

//imac
    {
        id:'073',
        nombre:'Imac 7 core 24"',
        secid:'',
        foto:["https://www.macstation.com.ar/img/productos/2356-1.jpg","https://www.macstation.com.ar/img/productos_multimedia/893-imac-24-in-silver-2-port-pdp-image-position-2-mxla.jpg","https://www.macstation.com.ar/img/productos_multimedia/892-imac-24-in-silver-2-port-pdp-image-position-3-mxla.jpg","https://www.macstation.com.ar/img/productos_multimedia/891-imac-24-in-silver-2-port-pdp-image-position-4-mxla.jpg"],
        precio:"1550",
        memoria:["256 GB"],
        ram:["8 GB unificada"],
        componentes:["Apple M1 CPU de 7 núcleos / GPU de 8 núcleos"],
        descripcion:[
            {
            info:{
                titulo:"",
                lista:[""]}
                    },
            ],
        color: ['pink'],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['imac','all']},








];

export default productos