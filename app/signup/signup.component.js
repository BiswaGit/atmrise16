System.register(['angular2/core', 'angular2/router', '../landing/card.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, card_service_1;
    var SignupComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (card_service_1_1) {
                card_service_1 = card_service_1_1;
            }],
        execute: function() {
            SignupComponent = (function () {
                function SignupComponent(router, _cardService) {
                    this.router = router;
                    this._cardService = _cardService;
                }
                SignupComponent.prototype.submit = function (username, password, mobile) {
                    var _this = this;
                    this._cardService.registerUser(username, password, mobile)
                        .subscribe(function (data) { return _this.data = data; }, function (error) { return _this.errorMessage = error; });
                    console.log(body);
                    //this.router.parent.navigateByUrl('/welcome');
                };
                SignupComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/signup/signup.component.html',
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, card_service_1.CardService])
                ], SignupComponent);
                return SignupComponent;
            }());
            exports_1("SignupComponent", SignupComponent);
        }
    }
});
//# sourceMappingURL=signup.component.js.map