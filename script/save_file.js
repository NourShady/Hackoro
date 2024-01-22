// const title_el = document.getElementById('title');
// title_el.innerText = api.title; 

const name_txt = document.getElementById('name');
const uniqueId_num = document.getElementById('uniqueId'); 
const age_num = document.getElementById('age'); 
const height_num = document.getElementById('height'); 
const weight_num = document.getElementById('weight'); 
const fromDate_num = document.getElementById('fromDate'); 
const toDate_num = document.getElementById('toDate'); 

const submit_btn = document.getElementById('Submit_btn');

submit_btn.addEventListener('click', async () => {
	const title = name_txt.value;
	const xuniqueId_num = uniqueId_num.value;
    const xage_num =  age_num.value;
    const xheight_num = height_num.value;
    const xweight_num = weight_num.value;
    const xfromDate_num = fromDate_num.value;
    const xtoDate_num = toDate_num.value;


	const res = await api.createNote({
		title,
		xuniqueId_num,
		xage_num,
		xheight_num,
		xweight_num,
		xfromDate_num,
		xtoDate_num,
	})

	console.log(res);

	// note_title_el.value = "";
	// note_content_el.value = "";
})