const sensorDt = [
    {
        title: "بررسی کیفیت آب",
        power: "on",
        status: "خطرناک",
        report : ".کیفیت اب در حالت مناسبی برای رشد محصولات قرار ندارن"

        
    },
    {
        title: "بررسی میزان نور",
        power: "on",
        status: "خطرناک" , 
        report : "میزان نور مورد نیاز برای گیاهان در حالت مطلوبی قرار ندارد"
    },
    {
        title: "بررسی کیفیت هوا",
        power: "on",
        status: "خطرناک" ,
        report : "وضعیت هوا اصلا در حالت نرمال نیست و وجود یون های خطرناک مشهود است"
    },
    {
        title: "بررسی کیفیت خاک",
        power: "on",
        status: "نرمال",
        report : "تمامی موارد برسی شده در حالت نرمال قرار دارن"
    },
    {
        title: "بررسی مواد معدنی خاک",
        power: "on",
        status: "نرمال",
        report : "تمامی موارد برسی شده در حالت نرمال قرار دارن"
    },
    {
        title: "بررسی افت ها",
        power: "on",
        status: "نرمال",
        report : "تمامی موارد برسی شده در حالت نرمال قرار دارن"
    },
    {
        title: "بررسی یون خاک",
        power: "off",
        status: "نرمال",
        report : "تمامی موارد برسی شده در حالت نرمال قرار دارن"
    },
    {
        title: "وجود مواد شیمیایی",
        power: "on",
        status: "نرمال",
        report : "تمامی موارد برسی شده در حالت نرمال قرار دارن"
    },
    {
        title: "وجود عوامل بیماری زا",
        power: "on",
        status: "نرمال",
        report : "تمامی موارد برسی شده در حالت نرمال قرار دارن"
    },
]

const Pidata = [
    { name: 'گندم', value: 40 },
    { name: 'جو', value: 30 },
    { name: 'برنج', value: 20 },
    { name: 'سیب زمینی', value: 10 },
];

const LinedataWater = [
    {
        name: 'فروردین',
        water: 5000,
    },
    {
        name: 'اردیبهشت',
        water: 4500,
    },
    {
        name: 'خرداد',
        water: 4300,
    },
    {
        name: 'تیر',
        water: 5500,
    },
    {
        name: 'مرداد',
        water: 6200,
    },
    {
        name: 'شهریور',
        water: 5700,
    },
    {
        name: 'مهر',
        water: 4000,
    },
];


const Farm = [
    {
        name: '1400',
        farm: 1000,
    },
    {
        name: '1399',
        farm: 1100,
    },
    {
        name: '1398',
        farm: 950,
    },
    {
        name: '1397',
        farm: 1200,
    },
    {
        name: '1396',
        farm: 1300,
    },
];

const LinedataWaterandPesticides = [
    {
        name: 'فروردین',
        water: 5000,
        pesticides: '120'
    },
    {
        name: 'اردیبهشت',
        water: 4500,
        pesticides: '150'
    },
    {
        name: 'خرداد',
        water: 4300,
        pesticides: '200'
    },
    {
        name: 'تیر',
        water: 5500,
        pesticides: '210'
    },
    {
        name: 'مرداد',
        water: 6200,
        pesticides: '250'
    },
    {
        name: 'شهریور',
        water: 5700,
        pesticides: '200'
    },
    {
        name: 'مهر',
        water: 4000,
        pesticides: '180'
    },
];


export {sensorDt , Pidata , LinedataWaterandPesticides , LinedataWater , Farm}