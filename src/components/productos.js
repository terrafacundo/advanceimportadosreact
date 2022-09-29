const productos=[
    {   
        id:'001',
        nombre:'MacBook M2 AIR 13,6"',
        foto:[""],
        precio:"",
        memoria:['256GB','512GB','1TB','2TB"'],
        ram:['8GB','16GB', '24GB'],
        componentes:['CPU 8GB/8GB GPU','CPU 8GB/10GB GPU'],
        descripcion:'M1 Chip 7‑core GPU /8GB',
        color: ['space','silver','midnight','gold'],
        estado:'En stock',
        tendencia:true,
        marca:'apple',
        categoria:'macbook'},
    {   
        id:'002',
        nombre:'MacBook M2 PRO 13,6"',
        foto:"https://http2.mlstatic.com/D_NQ_NP_708839-MLA51356236557_082022-O.webp",
        precio:"",
        memoria:['256GB','512GB','1TB','2TB"'],
        ram:['8GB','16GB', '24GB'],
        componentes:['CPU 8GB/8GB GPU'],
        descripcion:'',
        color: ['space','silver','midnight','gold'],
        estado:'En stock',
        tendencia:true,
        marca:'apple',
        categoria:'macbook'},
    {   
        id:'003',
        nombre:'MacBook M1 AIR 13,3"',
        foto:"https://http2.mlstatic.com/D_NQ_NP_840786-MLA46516504421_062021-V.webp",
        precio:"",
        memoria:['256GB','512GB','1TB','2TB"'],
        ram:['8GB','16GB'],
        componentes:['CPU 8GB/7GB GPU'],
        descripcion:'',
        color: ['space','silver','midnight','gold'],
        estado:'En stock',
        tendencia:true,
        marca:'apple',
        categoria:'macbook'},
    {   
        id:'004',
        nombre:'MacBook M1 PRO 14,2"',
        foto:"https://http2.mlstatic.com/D_NQ_NP_945710-MLA48354170509_112021-V.webp",
        precio:"",
        memoria:['256GB','512GB','1TB','2TB','4TB','8TB'],
        ram:['16GB', '32GB'],
        componentes:['CPU 8GB/14GB GPU','CPU 10GB/14GB GPU','CPU 10GB/16GB GPU'],
        descripcion:'',
        color: ['space','silver','midnight','gold'],
        estado:'En stock',
        tendencia:true,
        marca:'apple',
        categoria:'macbook'},
    {   
        id:'005',
        nombre:'MacBook M1 MAX',
        foto:"https://http2.mlstatic.com/D_NQ_NP_945710-MLA48354170509_112021-V.webp",
        precio:"",
        memoria:['512GB','1TB','2TB','4TB','8TB'],
        ram:['32GB','64GB'],
        componentes:['CPU 10GB/24GB GPU','CPU 10GB/32GB GPU'],
        descripcion:'',
        color: ['space','silver','midnight','gold'],
        estado:'En stock',
        tendencia:true,
        marca:'apple',
        categoria:'macbook'},
    {   
        id:'006',
        nombre:'MacBook M1 PRO 16,2"',
        foto:"https://http2.mlstatic.com/D_NQ_NP_946410-MLA48352501573_112021-V.webp",
        precio:"",
        memoria:['512GB','1TB','2TB','4TB','8TB'],
        ram:['16GB','32GB'],
        componentes:['CPU 10GB/16GB GPU','CPU 10GB/24GB GPU'],
        descripcion:'',
        color: ['space','silver','midnight','gold'],
        estado:'En stock',
        tendencia:true,
        marca:'apple',
        categoria:'macbook'},
    {   
        id:'006',
        nombre:'MacBook M1 MAX',
        foto:"https://http2.mlstatic.com/D_NQ_NP_945710-MLA48354170509_112021-V.webp",
        precio:"",
        memoria:['512GB','1TB','2TB','4TB','8TB'],
        ram:['32GB','64GB'],
        componentes:['CPU 10GB/16GB GPU','CPU 10GB/32GB GPU'],
        descripcion:'',
        color: ['space','silver','midnight','gold'],
        estado:'En stock',
        tendencia:true,
        marca:'apple',
        categoria:'macbook'},
    
    //productos apple fin

    //Gafas VR
    {
        id:'028',
        nombre:'Vive Cosmos Elite Virtual Reality System',
        foto:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSOpschEwKGI9sLhWTKTbvp9Po5MLxP0hxn7X6bPAzxlwBN8pBTvy87rqF5lHvbNCmWpuV57_4O7Q&usqp=CAc",
        precio:"",
        descripcion:'With 10 core CPU, 24 core GPU, 32GB RAM',
        estado:'En stock',
        tendencia:false,
        marca:"HTC",
        categoria:'vr'}, 

    {
        id:'029',
        nombre:'Vive Pro 2 Headset Only',
        foto:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ1OQBA5oLXxbiq_hhJV0KPzlicTIgFjIqzl4cpdB3LPXzZIRS65SHpknH0aFmx7Jmnf61YvBAVjQ&usqp=CAc",
        precio:"",
        descripcion:'With 10 core CPU, 24 core GPU, 32GB RAM',
        estado:'En stock',
        tendencia:false,
        marca:"HTC",
        categoria:'vr'}, 
    

    {
        id:'030',
        nombre:'Vive Pro Eye Office Full System - PC',
        foto:"https://m.media-amazon.com/images/I/61m5jK5vvoS._SL1500_.jpg",
        precio:"",
        descripcion:'With 10 core CPU, 24 core GPU, 32GB RAM',
        estado:'En stock',
        tendencia:false,
        marca:"HTC",
        categoria:'vr'}, 
    

    {
        id:'031',
        nombre:'Quest 2',
        foto:"https://m.media-amazon.com/images/I/61tE7IcuLmL._SL1500_.jpg",
        precio:"",
        memoria:256,
        descripcion:'With 10 core CPU, 24 core GPU, 32GB RAM',
        estado:'En stock',
        tendencia:false,
        marca:"Meta",
        categoria:'vr'}, 

    //Notebooks
    {
        id:'033',
        nombre:'Notebook Asus X512JA-211.VBGB',
        foto:"",
        precio:"217,739.50",
        descripcion:'15.6¨ FHD TOUCHSCREEN👆/I7-1065G7/8GB-256GB SSD + 1TB HDD/WIN 10/SLATE GRAY',
        estado:'En stock',
        tendencia:false,
        marca:"Asus",
        categoria:'notebook'},
        

    {
        id:'034',
        nombre:'Notebook Asus X515EA-212.V15TB',
        foto:"",
        precio:"123,310.00",
        descripcion:'15.6 FHD TOUCHSCREEN/I3-1115G4/8GB-256GB SSD/WIN 11/SLATE GREY',
        estado:'En stock',
        tendencia:false,
        marca:"Asus",
        categoria:'notebook'},


    {
        id:'035',
        nombre:'Notebook Asus X515JA-212.V15BB-11',
        foto:"",
        precio:"111,628.00",
        descripcion:'15.6" HD/I3-1005G1/8GB-256GB SSD/TECLADO INGLÉS- PAD NUMÉRICO/WIN 10',
        estado:'En stock',
        tendencia:false,
        marca:"Asus",
        categoria:'notebook'},


    //placas de video

    {
        id:'036',
        nombre:'RTX 2060 12GB REVEL DUAL FAN (12GB GDDR6)',
        foto:"",
        precio:"",
        descripcion:'',
        estado:'En stock',
        tendencia:false,
        marca:"MSI",
        categoria:'mineria'},

    {
        id:'037',
        nombre:'RTX 2060 12GB REVEL DUAL FAN (12GB GDDR6)',
        foto:"",
        precio:"",
        descripcion:'',
        estado:'En stock',
        tendencia:false,
        marca:"MSI",
        categoria:'mineria'},

    {
        id:'038',
        nombre:'RTX 3060 GAMING Z TRIO 12G (12GB GDDR6)',
        foto:"",
        precio:"",
        descripcion:'',
        estado:'En stock',
        tendencia:false,
        marca:"MSI",
        categoria:'mineria'},

    {
        id:'039',
        nombre:'RTX 3060 TI VENTUS 3X 8G OC (8GB GDDR6)',
        foto:"",
        precio:"",
        descripcion:'',
        estado:'En stock',
        tendencia:false,
        marca:"MSI",
        categoria:'mineria'},

    {
        id:'040',
        nombre:'RTX 3070 VENTUS 2X 8GB ',
        foto:"",
        precio:"",
        descripcion:'',
        estado:'En stock',
        tendencia:false,
        marca:"MSI",
        categoria:'mineria'},

    {
        id:'041',
        nombre:'RTX 3070 VENTUS 3X 8GB OC',
        foto:"",
        precio:"",
        descripcion:'',
        estado:'En stock',
        tendencia:false,
        marca:"MSI",
        categoria:'mineria'},

    {
        id:'042',
        nombre:'RTX 3070 TI VENTUS 3X 8G OC (8GB GDDR6X)',
        foto:"",
        precio:"",
        descripcion:'',
        estado:'En stock',
        tendencia:false,
        marca:"MSI",
        categoria:'mineria'},

    {
        id:'043',
        nombre:'RTX 3070 TI XLR8 GAMING REVEL EPIC-X RGB 3xFAN 8GB GDDR6X',
        foto:"",
        precio:"",
        descripcion:'',
        estado:'En stock',
        tendencia:false,
        marca:"PNY",
        categoria:'mineria'},


    {
        id:'044',
        nombre:'RTX 3080 LHR UPRISING TRIPLE FAN 12GB GDDR6X',
        foto:"",
        precio:"",
        descripcion:'',
        estado:'En stock',
        tendencia:false,
        marca:"PNY",
        categoria:'mineria'},


    {
        id:'045',
        nombre:'RTX 3080 TI XLR8 GAMING REVEL EPIC-X RGB 3xFAN 12GB GDDR6X',
        foto:"",
        precio:"",
        descripcion:'',
        estado:'En stock',
        tendencia:false,
        marca:"PNY",
        categoria:'mineria'},

    
    {
        id:'046',
        nombre:'RTX 3090 VENTUS 3X 24G OC (2476)',
        foto:"",
        precio:"",
        descripcion:'',
        estado:'En stock',
        tendencia:false,
        marca:"MSI",
        categoria:'mineria'},

    {
        id:'047',
        nombre:'RTX 3090 TI XLR8 GAMING UPRISING EPIC-X RGB 3xFAN 24GB GDDR6X',
        foto:"",
        precio:"",
        descripcion:'',
        estado:'En stock',
        tendencia:false,
        marca:"PNY",
        categoria:'mineria'},



//MONITORES

{
    id:'048',
    nombre:'ASUS - Monitor para juegos IPS de 1ms FreeSync Extreme Low Motion Blur Eye Care DisplayPort HDMI VGA, Negro',
    foto:"",
    precio:"",
    descripcion:'',
    estado:'En stock',
    tendencia:false,
    marca:"ASUS",
    categoria:'monitores'},

{
    id:'049',
    nombre:'Monitor AOC para videojuegos, curvado, sin marco, FHD 1ms VA 24"',
    foto:"",
    precio:"",
    descripcion:'',
    estado:'En stock',
    tendencia:false,
    marca:"AOC",
    categoria:'monitores'},


{
    id:'050',
    nombre:'Monitor SAMSUNG FHD de 24 pulgadas con diseño sin bisel, LS24R350FHNXZA, gris azul oscuro',
    foto:"",
    precio:"",
    descripcion:'',
    estado:'En stock',
    tendencia:false,
    marca:"samsung",
    categoria:'monitores'},


{
    id:'051',
    nombre:'Monitor LG 34GP83A-B 34´´ 21: 9 UltraGear Curvo QHD (3440 x 1440) 1 ms Nano IPS con 160Hz - Negro',
    foto:"",
    precio:"",
    descripcion:'',
    estado:'En stock',
    tendencia:false,
    marca:"LG",
    categoria:'monitores'},

{
    id:'052',
    nombre:'Monitor LG 32GN650-B Monitor de 32´´ QHD (2560 x 1440), frecuencia de actualización de 165 Hz, 1 ms MBR, HDR 10, sRGB 95%, Negro',
    foto:"",
    precio:"",
    descripcion:'',
    estado:'En stock',
    tendencia:false,
    marca:"LG",
    categoria:'monitores'},

{
    id:'053',
    nombre:'Monitor LG 34GL750-B 21: 9 Ultragear Monitor curvado para juegos compatible con Wfhd (2560 X 1080) IPS 144Hz G-SYNC, 34 pulgadas, negro',
    foto:"",
    precio:"",
    descripcion:'',
    estado:'En stock',
    tendencia:false,
    marca:"LG",
    categoria:'monitores'},


{
    id:'054',
    nombre:'Monitor SAMSUNG de juegos de 49 pulgadas, monitor curvado ultra-ancho, 240 Hz 1 ms, Quantum Mini LED, G-Sync, monitor de altura ajustable, HDR 2000, Odyssey Neo G9, G95NA (LS49AG952NXZA)',
    foto:"",
    precio:"",
    descripcion:'',
    estado:'En stock',
    tendencia:false,
    marca:"samsung",
    categoria:'monitores'},
    ];

export default productos