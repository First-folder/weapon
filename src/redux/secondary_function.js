import { addLocationCrumbsThunk, AddLocationPathAC } from "./breadCrumbs";

var curentLocation = [];



let obj10 = [
	{part:{
		path_search:"personal",
		path_out:"/personal",
		name:"Личный кабинет",
		elem:[
			{name:"Личные данные",
				path_search:"profile",
				path_out:"/profile"
			},
			{
				name:"Корзина",
				path_search:"cart",
				path_out:"/profile/cart"
			}
		]
	}
},
	
	{part:{
	path_search:"contact",
	path_out:"/contact",
	name:"Контакты"
}

},
{part:{
	path_search:"complex",
	path_out:"/complex",
	name:"Стрелковый комплекс"
}

},
{part:{
	path_search:"registration",
	path_out:"/registration",
	name:"Регистрация"
}

},
{part:{
	path_search:"workshop",
	path_out:"/workshop",
	name:"Оружейная мастерская"
}

},
{part:{
	path_search:"video",
	path_out:"/video",
	name:"Видео"
}

},
{part:{
	path_search:"delivery",
	path_out:"/delivery",
	name:"Доставка и оплата"
}

},
	{part:{
    path_search:"catalog",
    path_out:"/catalog",
    name:"Каталог товаров",
    subsection:[
                {id:"1",name:"Оружие", items:[
                            {name:"Нарезное оружие",path_out:"/Нарезное оружие"},
                            {name:"Гладкоствольное оружие",path_out:"/Гладкоствольное оружие"},
                            {name:"Пневматическое оружие",path_out:"/Пневматическое оружие"},
                            {name:"Оружие самообороны",path_out:"/Оружие самообороны"}]},
                {id:"2",name:"Патроны", items:[{name:"Газовые патроны",path_out:"/Газовые патроны"},
												{name:"Гладкоствольные патроны",path_out:"/Гладкоствольные патроны"},
												{name:"Нарезные патроны",path_out:"/Нарезные патроны"}]},
                {id:"3",name:"Оптика", items:[{name:"Бинокли",path_out:"/Бинокли"},
												{name:"Прицелы",path_out:"/Прицелы"}]},
                {id:"4",name:"Уход за Оружием", items:[{name:"Масла",path_out:"/Масла"},
														{name:"Наборы для чистки",path_out:"/Наборы для чистки"},
														{name:"Средства для ухода за оружием",path_out:"/Средства для ухода за оружием"}]}
                ],			
        }	

},
	{part:{
	path_search:"promo",
	path_out:"/promo",
	name:"Акции",
	elem:[{id:"1",name:"Подарочные сертификаты"},{id:"2",name:"Дисконтная программа"}]
	}
	},
	{
		part:{
			path_search:"company",
			path_out:"/company",
			name:"Наша компании",
			elem:[
				{name:"Фотогалерея",
					path_search:"photo",
					path_out:"/photo"
				},
				{name:"Сертификаты",
					path_search:"certificate",
					path_out:"/certificate"},
				{name:"album",
				path_search:"album",
				path_out:"/album",
				items:[
							{id:4,name:"Галерея 100 метров"},
							{id:3,name:"Стрелковый Комплекс"},
							{id:2,name:"Магазин пр. Победы"},
							{id:1,name:"Магазин пр. Ленина"}

						]

					},
				{
					name:"Новости",
					path_search:"news",
					path_out:"/news",
					

				},
				{name:"Статьи",
				path_search:"article",
				path_out:"/article",
				items:[
					{id:6, name:"Открытие 300-метровой стрелковой галереи"},
					{id:7,name:"Кронштейн для прицела"},
					{id:8,name:"Выбор газовых баллончиков"}
				]

				},
				{name:"Отзывы",
				path_search:"reviews",
				path_out:"/reviews"
			}	
			]


		}
	}
	


]
export let createPathBreadCrumbs =(pathSite)=>{
	console.log("mym path site");
	console.log(pathSite);
let    regex = /\/[А-Яа-я_A-Za-z0-9:%\s]+/g
    //доработать строку обработки URL
        let allPartPath = pathSite.match(regex);
     if(allPartPath != null) { allPartPath = allPartPath.map(p=>{
            p = p.replace(/^\//g,'');
            return p
        })} else allPartPath="/"

console.log("allPartPath");
console.log(allPartPath);

//breadcrumbs(allPartPath);
return breadcrumbs(allPartPath)
}
export let breadcrumbs = (allPartPath) =>{
  //  console.log(allPartPath);

    let nameSite = "/";
	let i=0;
	
	curentLocation = []  
curentLocation.push({name:"Главная",path:nameSite})
	
	obj10.forEach(p=>{		
     
			if(allPartPath.length > 0){
				if(allPartPath[0] == p.part.path_search){
					curentLocation.push({name:p.part.name,path:p.part.path_out});
					if(allPartPath.length>1){

						if(allPartPath[1] == "section"){
							p.part.subsection.forEach(value=>{
								if(value.id == allPartPath[2]){curentLocation.push({name:value.name,path:p.part.path_out+"/section/"+value.id});

										if(allPartPath.length > 3){
											//debugger
											value.items.forEach(item=>{
												if(item.name == decodeURI(allPartPath[3])) {
														curentLocation.push({name:item.name,path:p.part.path_out+"/section/"+value.id+decodeURI(item.path_out)+"/b"});

													
												}
											})
											
								}
							
							}})

						}
					if(allPartPath[1] == "elem"){
						p.part.elem.forEach(value=>{
							if(value.id == allPartPath[2]){curentLocation.push({name:value.name,path:p.part.path_out+"/elem/"+value.id})

							}
						})
					}
				//	debugger
					if(allPartPath[0]=="company"){
						p.part.elem.forEach(value=>{
							if(value.path_search == allPartPath[1]){curentLocation.push({name:value.name,path:p.part.path_out+value.path_out});
							if(allPartPath[2]=="content"){
								value.items.forEach(p1=>{
									if(p1.id == allPartPath[3]){curentLocation.push({name:p1.name,path:p.part.path_out+"/"+allPartPath[1]+"/content/"+p1.id})}
								})
							}					
						
						}
							
							if(value.path_search == allPartPath[2]){
								// debugger
								value.items.forEach(item=>{
									if(item.id == allPartPath[3]){curentLocation.push({name:item.name,path:p.part.path_out+"/"+allPartPath[1]+value.path_out+"/"+item.id})}	
								})
								
							} 
							
						})
					}
					//cart 
					
					if(allPartPath[0]=="personal"){							
							p.part.elem.forEach((value,i)=>{
									if ((allPartPath.length>=2)&&(i == 0)){curentLocation.push({name:value.name,path:p.part.path_out+value.path_out})}
									if ((allPartPath.length>2)&&(i == 1)){curentLocation.push({name:value.name,path:p.part.path_out+value.path_out})}						
						
						})
							
					}
					//complex
					if(allPartPath[0]=="complex"){
						p.part.elem.forEach((value,i)=>{
							{curentLocation.push({name:value.name,path:p.part.path_out+value.path_out})}

						})
					
					}
					//workshop
					if(allPartPath[0]=="workshop"){
						p.part.elem.forEach((value,i)=>{
							{curentLocation.push({name:value.name,path:p.part.path_out+value.path_out})}

						})
					
					}	
					//video
					if(allPartPath[0]=="video"){
						p.part.elem.forEach((value,i)=>{
							{curentLocation.push({name:value.name,path:p.part.path_out+value.path_out})}

						})
					
					}	
					//registration
					if(allPartPath[0]=="registration"){
						p.part.elem.forEach((value,i)=>{
							{curentLocation.push({name:value.name,path:p.part.path_out+value.path_out})}

						})
					
					}	

					}
				}
		}
	})
//	console.log("my cread crumbs")
	//debugger
	console.log(curentLocation)
	return curentLocation;
}
// объект на  основе которого формируется хлебные крошки

export let moneyFormat=(n)=> {
	return parseFloat(n).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1 ").replace('.', ',');
}
