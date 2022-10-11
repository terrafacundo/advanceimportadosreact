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
        tendencia:true,
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
        tendencia:true,
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
        tendencia:true,
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
        tendencia:true,
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
        precio:"",
        memoria:[],
        ram:[],
        componentes:[],
        descripcion:'',
        color: ['black'],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['vr','all']}, 

    {
        id:'008',
        nombre:'Vive Pro 2 Headset Only',
        foto:["https://m.media-amazon.com/images/I/61iR+WmZZhS._SX522_.jpg","https://m.media-amazon.com/images/I/61dY-VzO7vL._SX466_.jpg","https://m.media-amazon.com/images/I/61c7Ow2tHoL._SX466_.jpg","https://m.media-amazon.com/images/I/61aHWjDleqL._SX466_.jpg","https://m.media-amazon.com/images/I/61mikUEOMWL._SX466_.jpg"],
        precio:"",
        memoria:[],
        ram:[],
        componentes:[],
        descripcion:'',
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
        memoria:[],
        ram:[],
        componentes:[],
        descripcion:'',
        color: ['blue'],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['vr','all']}, 
    

    {
        id:'010',
        nombre:'Quest 2',
        foto:["https://m.media-amazon.com/images/I/61kwRNPtMpL._SX466_.jpg"],
        precio:"",
        memoria:['128GB','256GB'],
        ram:[],
        componentes:[],
        descripcion:'',
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
        descripcion:'',
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
        descripcion:'',
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
        descripcion:'',
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
        memoria:[],
        ram:[],
        componentes:[],
        descripcion:'',
        color: [],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['mineria','all']},

    {
        id:'015',
        nombre:'RTX 2060 12GB REVEL DUAL FAN (12GB GDDR6)',
        foto:["https://http2.mlstatic.com/D_NQ_NP_727800-MLA45713390694_042021-O.webp","https://http2.mlstatic.com/D_NQ_NP_723596-MLA45713338880_042021-O.webp","https://http2.mlstatic.com/D_NQ_NP_708917-MLA45713338896_042021-O.webp","https://http2.mlstatic.com/D_NQ_NP_974659-MLA45713440524_042021-O.webp"],
        precio:"",
        memoria:[],
        ram:[],
        componentes:[],
        descripcion:'',
        color: [],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['mineria','all']}, 
,

    {
        id:'016',
        nombre:"RTX 3060 GAMING Z TRIO 12G (12GB GDDR6)",
        foto:["https://http2.mlstatic.com/D_NQ_NP_842844-MLA51562583055_092022-O.webp","https://http2.mlstatic.com/D_NQ_NP_736523-MLA51562390948_092022-O.webp","https://http2.mlstatic.com/D_NQ_NP_675271-MLA51562475690_092022-O.webp"],
        precio:"",
        memoria:[""],
        ram:[""],
        componentes:[""],
        descripcion:'',
        color: [""],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['mineria','all']},
    {
        id:'017',
        nombre:'RTX 3060 TI VENTUS 3X 8G OC (8GB GDDR6)',
        foto:["https://http2.mlstatic.com/D_NQ_NP_738876-MLA48688406522_122021-O.webp","https://http2.mlstatic.com/D_NQ_NP_898892-MLA48688363943_122021-O.webp","https://http2.mlstatic.com/D_NQ_NP_793677-MLA48688406523_122021-O.webp"],
        precio:"",
        memoria:[],
        ram:[],
        componentes:[],
        descripcion:'',
        color: [],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['mineria','all']},

    {
        id:'018',
        nombre:'RTX 3070 VENTUS 2X 8GB ',
        foto:["https://http2.mlstatic.com/D_NQ_NP_716321-MLA44833373951_022021-O.webp","https://http2.mlstatic.com/D_NQ_NP_827131-MLA44835106191_022021-O.webp","https://http2.mlstatic.com/D_NQ_NP_914954-MLA44833373952_022021-O.webp"],
        precio:"",
        memoria:[],
        ram:[],
        componentes:[],
        descripcion:'',
        color: [],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['mineria','all']},

    {
        id:'019',
        nombre:'RTX 3070 VENTUS 3X 8GB OC',
        foto:["https://http2.mlstatic.com/D_NQ_NP_617574-MLA48654681863_122021-O.webp","https://http2.mlstatic.com/D_NQ_NP_648066-MLA48654665840_122021-O.webp","https://http2.mlstatic.com/D_NQ_NP_765825-MLA48654681862_122021-O.webp","https://http2.mlstatic.com/D_NQ_NP_857623-MLA50400215679_062022-O.webp"],
        precio:"",
        memoria:[],
        ram:[],
        componentes:[],
        descripcion:'',
        color: [],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['mineria','all']},

    {
        id:'020',
        nombre:'RTX 3070 TI VENTUS 3X 8G OC (8GB GDDR6X)',
        foto:"",
        memoria:[],
        ram:[],
        componentes:[],
        descripcion:'',
        color: [],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['mineria','all']},

    {
        id:'021',
        nombre:'RTX 3070 TI XLR8 GAMING REVEL EPIC-X RGB 3xFAN 8GB GDDR6X',
        foto:["https://http2.mlstatic.com/D_NQ_NP_876213-MLA49200884523_022022-O.webp","https://http2.mlstatic.com/D_NQ_NP_871373-MLA49200941119_022022-O.webp","https://http2.mlstatic.com/D_NQ_NP_844874-MLA49200928247_022022-O.webp","https://http2.mlstatic.com/D_NQ_NP_859319-MLA49200877536_022022-O.webp","https://http2.mlstatic.com/D_NQ_NP_631227-MLA49200786907_022022-O.webp"],
        precio:"",
        memoria:[],
        ram:[],
        componentes:[],
        descripcion:'',
        color: [],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['mineria','all']},


    {
        id:'022',
        nombre:'RTX 3080 LHR UPRISING TRIPLE FAN 12GB GDDR6X',
        foto:["https://http2.mlstatic.com/D_NQ_NP_856124-MLA51604839769_092022-O.webp"],
        precio:"",
        memoria:[],
        ram:[],
        componentes:[],
        descripcion:'',
        color: [],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['mineria','all']},


    {
        id:'024',
        nombre:'RTX 3080 TI XLR8 GAMING REVEL EPIC-X RGB 3xFAN 12GB GDDR6X',
        foto:["https://http2.mlstatic.com/D_NQ_NP_898724-MLA50584496604_072022-O.webp","https://http2.mlstatic.com/D_NQ_NP_705704-MLA50584496608_072022-O.webp","https://http2.mlstatic.com/D_NQ_NP_911594-MLA50584496607_072022-O.webp"],
        precio:"",
        memoria:[],
        ram:[],
        componentes:[],
        descripcion:'',
        color: [],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['mineria','all']},

    
    {
        id:'025',
        nombre:'RTX 3090 VENTUS 3X 24G OC (2476)',
        foto:["https://http2.mlstatic.com/D_NQ_NP_692818-MLA44385884034_122020-O.webp","https://http2.mlstatic.com/D_NQ_NP_781131-MLA44385614407_122020-O.webp"],
        precio:"",
        memoria:[],
        ram:[],
        componentes:[],
        descripcion:'',
        color: [],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['mineria','all']},

    {
        id:'026',
        nombre:'RTX 3090 TI XLR8 GAMING UPRISING EPIC-X RGB 3xFAN 24GB GDDR6X',
        foto:["https://http2.mlstatic.com/D_NQ_NP_640210-MLA50149474308_052022-O.webp","https://http2.mlstatic.com/D_NQ_NP_951892-MLA50149504184_052022-O.webp","https://http2.mlstatic.com/D_NQ_NP_740502-MLA50149525070_052022-O.webp","https://http2.mlstatic.com/D_NQ_NP_817254-MLA50149508181_052022-O.webp"],
        precio:"",
        memoria:[],
        ram:[],
        componentes:[],
        descripcion:'',
        color: [],
        estado:'En stock',
        tendencia:false,
        marca:'apple',
        categoria:['mineria','all']},



//MONITORES

{
    id:'027',
    nombre:'ASUS - Monitor para juegos IPS de 1ms FreeSync Extreme Low Motion Blur Eye Care DisplayPort HDMI VGA, Negro',
    foto:["https://m.media-amazon.com/images/I/91G9etn8L4L._AC_SX425_.jpg","https://m.media-amazon.com/images/I/81e9oegCAAL._AC_SX425_.jpg","https://m.media-amazon.com/images/I/81-nlV0dprL._AC_SY355_.jpg","https://m.media-amazon.com/images/I/81n0rn8O4cL._AC_SY355_.jpg","https://m.media-amazon.com/images/I/81x3Ob1Zj-L._AC_SY355_.jpg","https://m.media-amazon.com/images/I/91A15BoQLxL._AC_SY355_.jpg","https://m.media-amazon.com/images/I/81adV8A3UpL._AC_SY355_.jpg"],
    precio:"",
    memoria:[""],
    ram:[""],
    componentes:[""],
    descripcion:'',
    color: ['black'],
    estado:'En stock',
    tendencia:false,
    marca:'apple',
    categoria:['monitores','all']},

{
    id:'049',
    nombre:'Monitor AOC para videojuegos, curvado, sin marco, FHD 1ms VA 24"',
    foto:"",
    precio:"",
    descripcion:'',
    estado:'En stock',
    tendencia:false,
    marca:"AOC",
    categoria:['monitores','all']},


{
    id:'050',
    nombre:'Monitor SAMSUNG FHD de 24 pulgadas con diseño sin bisel, LS24R350FHNXZA, gris azul oscuro',
    foto:"",
    precio:"",
    descripcion:'',
    estado:'En stock',
    tendencia:false,
    marca:"samsung",
    categoria:['monitores','all']},


{
    id:'051',
    nombre:'Monitor LG 34GP83A-B 34´´ 21: 9 UltraGear Curvo QHD (3440 x 1440) 1 ms Nano IPS con 160Hz - Negro',
    foto:"",
    precio:"",
    descripcion:'',
    estado:'En stock',
    tendencia:false,
    marca:"LG",
    categoria:['monitores','all']},

{
    id:'052',
    nombre:'Monitor LG 32GN650-B Monitor de 32´´ QHD (2560 x 1440), frecuencia de actualización de 165 Hz, 1 ms MBR, HDR 10, sRGB 95%, Negro',
    foto:"",
    precio:"",
    descripcion:'',
    estado:'En stock',
    tendencia:false,
    marca:"LG",
    categoria:['monitores','all']},

{
    id:'053',
    nombre:'Monitor LG 34GL750-B 21: 9 Ultragear Monitor curvado para juegos compatible con Wfhd (2560 X 1080) IPS 144Hz G-SYNC, 34 pulgadas, negro',
    foto:"",
    precio:"",
    descripcion:'',
    estado:'En stock',
    tendencia:false,
    marca:"LG",
    categoria:['monitores','all']},


{
    id:'054',
    nombre:'Monitor SAMSUNG de juegos de 49 pulgadas, monitor curvado ultra-ancho, 240 Hz 1 ms, Quantum Mini LED, G-Sync, monitor de altura ajustable, HDR 2000, Odyssey Neo G9, G95NA (LS49AG952NXZA)',
    foto:"",
    precio:"",
    descripcion:'',
    estado:'En stock',
    tendencia:false,
    marca:"samsung",
    categoria:['monitores','all']},
    ];

export default productos