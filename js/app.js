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
    model: function() {
        return App.Outgoings.all();
    },
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

App.Outgoings = Ember.Object.extend();

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

/**************************
 * Models
 **************************/
App.Outgoings.reopenClass({
    all: function() {
        var outgoings = [];
        var apiPage = "messages";
        var parameters_string = "action=outgoing";
        var url = "http://do-web-design.com/clients/carbuddy/index.php/api/";
        var url = url + apiPage + "?" + parameters_string + "&username=" + "will" + "&password=" + "1234";
        // console.log(url);
        var response = $.ajax({
            type: "GET",
            url: url,
            dataType: "text json",
            success: function(data){
                return data;
                // return JSON.parse(data)
                alert('Its working');   //It will alert when you ajax call returns successfully.
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(JSON.stringify(jqXHR));
                console.log("AJAX error: " + textStatus + ' | ' + errorThrown);
            }
        }).done(function(response) {
            response.forEach( function (outgoing) {
                outgoings.push( App.Outgoings.create(outgoing) );
            });
        });
        return outgoings;
    }
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

/**************************
 * Functions
 **************************/
var theScroll;
function scroll(){
    theScroll = new iScroll('wrapper');
}
document.addEventListener('DOMContentLoaded', scroll, false);

function checkLogin() {
    alert('Logged in and Ready');
}