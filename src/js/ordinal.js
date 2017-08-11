export function convertOrdinal(arr,index){
    let find=['onest','twond','threerd','fiveth'];
    let turnTo=['first','second','third','fifth'];
    for(let i=0;i<find.length;i++){
        arr[index]=arr[index].replace(find[i],turnTo[i]);
    }
}