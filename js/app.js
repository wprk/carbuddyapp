/**************************
 * Application
 **************************/
App = Ember.Application.create({
    LOG_TRANSITIONS: true,
    username: 'will',
    password: '1234'
});

App.Router.map(function() {
    this.route("index", { path: '/'});
    this.route("login");
    this.route("messages");
    this.route("parking");
    this.route("fuel", { path: '/fuel-tracker' });
});

App.IndexRoute = Ember.Route.extend({
    renderTemplate: function() {
        this.render('header', {
            into: 'application',
            outlet: 'header'
        });
        this.render('index', {
            into: 'application',
            outlet: 'content'
        });
    }
});

App.LoginRoute = Ember.Route.extend({
    renderTemplate: function() {
        this.render('header-login', {
            into: 'application',
            outlet: 'header'
        });
        this.render('login', {
            into: 'application',
            outlet: 'content'
        });
    }
});

App.MessagesRoute = Ember.Route.extend({
    renderTemplate: function() {
        this.render('header-messages', {
            into: 'application',
            outlet: 'header'
        });
        this.render('messages', {
            into: 'application',
            outlet: 'content'
        });
    }
});

App.ParkingRoute = Ember.Route.extend({
    renderTemplate: function() {
        this.render('header-parking', {
            into: 'application',
            outlet: 'header'
        });
        this.render('parking', {
            into: 'application',
            outlet: 'content'
        });
    }
});

App.FuelRoute = Ember.Route.extend({
    renderTemplate: function() {
        this.render('header-fuel', {
            into: 'application',
            outlet: 'header'
        });
        this.render('fuel', {
            into: 'application',
            outlet: 'content'
        });
    }
});

var theScroll;
function scroll(){
    theScroll = new iScroll('wrapper');
}
document.addEventListener('DOMContentLoaded', scroll, false);

function checkLogin() {
    alert('Logged in and Ready');
}

/**************************
 * Models
 **************************/
App.Users = Ember.Object.extend({
    username: null,
    password: null
});

App.Messages = Ember.Object.extend({
    message_subject: null,
    message: null,
    sent: 0,
    read: 0
});

/**************************
 * Views
 **************************/
App.LoginUsername = Ember.TextField.extend({
    placeholder: 'Enter your username'
});

App.LoginPassword = Ember.TextField.extend({
    placeholder: 'Enter your password'
});

/**************************
 * Controllers
 **************************/
