export default function(state = {}, action){
	switch(action.type){

		case 'SET_CURRENT_USER':
			return action.user
		
	}
	return state;
}