import Steven from '../Steven.jpg'

const initState = {
  posts: [
    {id: '1', title: 'I\'m Actually CRYING', body: 'MY GOODNESS!!! I received my commission a couple days ago, but I\'m still in tears about how BEAUTIFUL it turned out!!! If you have the money, I recommend commissioning this artist! Very high quality art, and you can tell that they spent a lot of effort on it! I\'m still in TEARS because of how it turned out!!! Thanks again so much!! \u2661\u2661\u2661', picture:Steven},
    {id: '2', title: 'Ouvertures Limitées Mais Valant la Peine d\'Attendre', body: 'Cet artiste ouvre rarement des commandes, mais je suis tellement content d\'avoir pu réserver une place quand je l\'ai fait. Ça valait vraiment la peine d\'attendre! J\'ai choisi la Commission "Polaroid-Style", et ils ont très bien dessiné mon OC, et pour un bon prix aussi! Serait certainement commissionner à nouveau :)', picture:''},
    {id: '3', title: 'Amazing Artist!', body: 'Amazing work! This artist\'s attention to detail was spot on! All of the criteria was met, and the product went above and beyond my expectations! 100% would recommend and would commission again!', picture:''}
  ]
}

const rootReducer = (state = initState, action) => {
  console.log(action);
  if(action.type === 'DELETE_POST'){
   let newPosts = state.posts.filter(post => {
     return post.id !== action.id
   });
   return {
     ...state,
     posts: newPosts
   }
  }
  return state;
}

export default rootReducer