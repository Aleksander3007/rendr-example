module.exports = function(match) {
  match('',          'home#index');
  match('home',      'home#index');
  match('user/:id/', 'user#index');
  match('users', 	 'user#all');
};
