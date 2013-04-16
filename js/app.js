/**************************
 * Application
 **************************/
App = Ember.Application.create({
    username: 'will',
    password: '1234',
    ready: function(){
        checkLogin();
    }
});

/**************************
 * Models
 **************************/
App.Users = Ember.Object.extend({
    username: null,
    password: null
});

App.MessagesIn = Ember.Object.extend({
    message_subject: null,
    message: null
});

App.MessagesOut = Ember.Object.extend({
    message_subject: null,
    message: null,
    sent: 0,
    read: 0
});

/**************************
 * Views
 **************************/
App.LoginUsername = Ember.TextField.extend({
    placeholder: 'Enter your username',
});

App.LoginPassword = Ember.TextField.extend({
    placeholder: 'Enter your password'
});

/**************************
 * Controllers
 **************************/
App.inboxController = Ember.ArrayController.create({
    content: [],
    init: function(){
        // create an instance of the Song model
        var message = App.MessagesIn.create({
            message_subject: 'Example Message',
            message: 'This is the content of the message.'
        });
        this.pushObject(message);
    }
});

var theScroll;
function scroll(){
    theScroll = new iScroll('wrapper');
}
document.addEventListener('DOMContentLoaded', scroll, false);

function checkLogin() {
    // alert('Logged in and Ready');
}