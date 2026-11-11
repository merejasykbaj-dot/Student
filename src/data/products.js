export const products=[
{id:'1',name:'Капучино',category:'coffee',price:1290,rating:4.9,popular:true,description:'Қою эспрессо, жылы сүт және нәзік сүт көбігі.',image:'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800'},
{id:'2',name:'Латте',category:'coffee',price:1390,rating:4.8,popular:true,description:'Жұмсақ дәмді эспрессо және көпіршітілген сүт.',image:'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800'},
{id:'3',name:'Американо',category:'coffee',price:990,rating:4.7,popular:false,description:'Классикалық қара кофе.',image:'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=800'},
{id:'4',name:'Матча латте',category:'tea',price:1590,rating:4.9,popular:true,description:'Матча ұнтағы мен сүттен дайындалған сусын.',image:'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=800'},
{id:'5',name:'Жидек шайы',category:'tea',price:1190,rating:4.8,popular:false,description:'Жидектер қосылған хош иісті шай.',image:'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800'},
{id:'6',name:'Чизкейк',category:'dessert',price:1890,rating:4.9,popular:true,description:'Кремді ірімшіктен жасалған нәзік десерт.',image:'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800'},
{id:'7',name:'Круассан',category:'dessert',price:1190,rating:4.7,popular:true,description:'Қытырлақ, майлы француз тоқашы.',image:'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800'},
{id:'8',name:'Тауық сэндвичі',category:'food',price:2290,rating:4.8,popular:false,description:'Тауық еті, көкөніс және балғын нан.',image:'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800'}];
export const popular=products.filter(p=>p.popular);
