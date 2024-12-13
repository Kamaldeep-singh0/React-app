function filterfn(searchTxt, restroList){
    if (searchTxt===""){
        return restroList;
    }
    return restroList.filter( (restroList)=> restroList.info.name.toLowerCase()?.includes(searchTxt.toLowerCase()));
}


export default filterfn;