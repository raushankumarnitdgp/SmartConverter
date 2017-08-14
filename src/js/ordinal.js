
/**
 * replaces string @ arr[index] to valid ordinal string
 * 
 * @export
 * @param {any} arr 
 * @param {any} index 
 */
export function convertOrdinal(arr,index){
	let find=['onest','twond','threerd','fiveth'];
	let turnTo=['first','second','third','fifth'];
	for(let i=0;i<find.length;i++){
		arr[index]=arr[index].replace(find[i],turnTo[i]);
	}
}