export default function(state = null, action){
	switch(action.type){

		case 'SET_CURRENT_USER':
			return action.user
		
	}
	return state;
}