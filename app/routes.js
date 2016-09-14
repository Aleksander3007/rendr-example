module.exports = function(match) {
  match('',          	 'home#index');
  match('home',      	 'home#index');
  match('user/:userId', 'user#index');
  match('users', 	     'user#all');
};
