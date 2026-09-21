export const vehicles = [
{id:'RR-241',brand:'Range Rover',model:'Range Rover',version:'P530 Autobiography',year:2026,price:198500,cost:149900,color:'Carpathian Grey',hex:'#555c59',stock:3,condition:'Nuevo',days:24,engine:'4.4L V8 · 530 HP',image:'hero',km:0,stage:4},
{id:'RS-086',brand:'Range Rover',model:'Range Rover Sport',version:'P400 Dynamic SE',year:2026,price:142900,cost:107800,color:'Santorini Black',hex:'#282b2c',stock:4,condition:'Nuevo',days:42,engine:'3.0L MHEV · 400 HP',image:'hero',km:0,stage:4},
{id:'DF-110',brand:'Defender',model:'Defender 110',version:'P400 X-Dynamic HSE',year:2026,price:118500,cost:88900,color:'Pangea Green',hex:'#707566',stock:5,condition:'Nuevo',days:18,engine:'3.0L MHEV · 400 HP',image:'hero',km:0,stage:3},
{id:'VL-032',brand:'Range Rover',model:'Range Rover Velar',version:'P250 Dynamic SE',year:2026,price:89900,cost:68000,color:'Fuji White',hex:'#dcdedb',stock:2,condition:'Nuevo',days:76,engine:'2.0L Turbo · 250 HP',image:'hero',km:0,stage:4},
{id:'DC-018',brand:'Discovery',model:'Discovery',version:'D300 Dynamic HSE',year:2026,price:105500,cost:79400,color:'Varesine Blue',hex:'#46596a',stock:2,condition:'Nuevo',days:35,engine:'3.0L Diésel · 300 HP',image:'hero',km:0,stage:2},
{id:'JG-042',brand:'Jaguar',model:'Jaguar F-PACE',version:'P250 R-Dynamic S',year:2025,price:82900,cost:61900,color:'Eiger Grey',hex:'#8a8a85',stock:2,condition:'Nuevo',days:67,engine:'2.0L Turbo · 250 HP',image:'hero',km:0,stage:4},
{id:'AP-014',brand:'Range Rover',model:'Range Rover Sport',version:'P400 HSE · Approved',year:2023,price:92500,cost:67500,color:'Lantau Bronze',hex:'#8a8173',stock:1,condition:'Approved',days:28,engine:'3.0L MHEV · 400 HP',image:'hero',km:28400,stage:4},
{id:'AP-021',brand:'Defender',model:'Defender 90',version:'P300 S · Approved',year:2024,price:74900,cost:55800,color:'Gondwana Stone',hex:'#9e9c8d',stock:1,condition:'Approved',days:54,engine:'2.0L Turbo · 300 HP',image:'hero',km:18600,stage:3}
];
export const seedClients = [
{id:'c1',name:'Alejandro Méndez',initials:'AM',company:'Grupo Pacífico',email:'alejandro@example.com',phone:'+507 6000-0101',interest:'Range Rover Sport',advisor:'Isabella Ríos',stage:'Negociación',value:142900,source:'Showroom',score:94,note:'Busca renovar su SUV. Prefiere Santorini Black. Test drive realizado; pendiente comparar financiamiento.',last:'Hace 35 min'},
{id:'c2',name:'Valentina Torres',initials:'VT',company:'Torres Arquitectos',email:'valentina@example.com',phone:'+507 6000-0102',interest:'Defender 110',advisor:'Isabella Ríos',stage:'Propuesta',value:118500,source:'Instagram',score:89,note:'Uso familiar y escapadas a Buenaventura. Interés en paquete Adventure.',last:'Hace 1 h'},
{id:'c3',name:'Roberto Chen',initials:'RC',company:'Chen & Asociados',email:'roberto@example.com',phone:'+507 6000-0103',interest:'Range Rover',advisor:'Diego Salazar',stage:'Negociación',value:198500,source:'Referido',score:96,note:'Solicita entrega este mes. Evaluando compra corporativa.',last:'Hace 2 h'},
{id:'c4',name:'Camila Herrera',initials:'CH',company:'Cliente particular',email:'camila@example.com',phone:'+507 6000-0104',interest:'Range Rover Velar',advisor:'Isabella Ríos',stage:'Contacto',value:89900,source:'Web',score:72,note:'Solicitó información del Velar. Disponible para visita el viernes.',last:'Ayer'},
{id:'c5',name:'Andrés Castillo',initials:'AC',company:'Castillo Capital',email:'andres@example.com',phone:'+507 6000-0105',interest:'Jaguar F-PACE',advisor:'Sofía Navarro',stage:'Test drive',value:82900,source:'Showroom',score:81,note:'Test drive agendado para mañana a las 10:00.',last:'Hace 3 h'},
{id:'c6',name:'María Fernanda López',initials:'ML',company:'Cliente particular',email:'maria@example.com',phone:'+507 6000-0106',interest:'Defender 110',advisor:'Diego Salazar',stage:'Propuesta',value:118500,source:'Feria',score:85,note:'Contacto de feria. Quiere comparar Defender 90 y 110.',last:'Ayer'},
{id:'c7',name:'Ricardo Arosemena',initials:'RA',company:'Arosemena Holdings',email:'ricardo@example.com',phone:'+507 6000-0107',interest:'Discovery',advisor:'Sofía Navarro',stage:'Contacto',value:105500,source:'Referido',score:68,note:'Interesado en una unidad de siete plazas.',last:'Hace 4 h'},
{id:'c8',name:'Lucía Paredes',initials:'LP',company:'Cliente particular',email:'lucia@example.com',phone:'+507 6000-0108',interest:'Range Rover Sport',advisor:'Isabella Ríos',stage:'Test drive',value:142900,source:'Web',score:87,note:'Visita confirmada. Consultar disponibilidad de unidad demo.',last:'Hace 2 h'},
{id:'c9',name:'Gabriel Moreno',initials:'GM',company:'Moreno Logistics',email:'gabriel@example.com',phone:'+507 6000-0109',interest:'Defender 90',advisor:'Diego Salazar',stage:'Propuesta',value:74900,source:'Showroom',score:79,note:'Interés en Approved. Solicita historial de mantenimiento.',last:'Ayer'}
];
export const accessories=[{id:'a1',name:'Paquete Adventure',desc:'Barras transversales, portaequipaje y estribos',price:3250,cost:2000},{id:'a2',name:'Protección exterior',desc:'Película protectora y tratamiento cerámico',price:1850,cost:950},{id:'a3',name:'Interior a medida',desc:'Alfombras premium y protección de maletero',price:680,cost:340},{id:'a4',name:'Mantenimiento Prestige',desc:'Plan de mantenimiento por 3 años',price:2900,cost:1900}];
export const seedQuotes=[{id:'DPM-260921',clientId:'c1',vehicleId:'RS-086',date:'2026-09-21',total:142900,status:'En negociación',discount:0,accessories:[]},{id:'DPM-260920',clientId:'c2',vehicleId:'DF-110',date:'2026-09-20',total:121750,status:'Enviada',discount:0,accessories:['a1']},{id:'DPM-260919',clientId:'c3',vehicleId:'RR-241',date:'2026-09-19',total:198500,status:'Por aprobar',discount:6,accessories:[]},{id:'DPM-260918',clientId:'c6',vehicleId:'DF-110',date:'2026-09-18',total:118500,status:'Enviada',discount:0,accessories:[]}];
export const history = [];
for(let y=2023;y<=2026;y++){for(let m=0;m<(y===2026?9:12);m++){let n=6+((m*3+y)%7)+(y-2023);for(let j=0;j<n;j++){const v=vehicles[(m+j*3+y)%6];history.push({year:y,month:m,model:v.model,price:v.price*(1-(2026-y)*.035),cost:v.cost*(1-(2026-y)*.035),advisor:['Isabella Ríos','Diego Salazar','Sofía Navarro'][j%3],bank:['BAC','Banco General','Banistmo','Contado'][j%4]});}}}
export const months=['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];

/* Bancos con tasas de ejemplo. Las reales las carga la empresa. */
export const banks = [
  { name:'Banco General', rate:6.50 },
  { name:'Global Bank', rate:6.75 },
  { name:'Banistmo', rate:6.90 },
  { name:'Multibank', rate:7.10 },
  { name:'BAC Credomatic', rate:7.25 }
];
/* Ruta logística de una unidad */
export const logistics = ['Pedido a fábrica','En tránsito','En aduana','En patio','En exhibición'];
