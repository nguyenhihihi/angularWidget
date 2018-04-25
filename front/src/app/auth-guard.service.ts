import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';

@Injectable()

export class AuthGuardService implements CanActivate {
    constructor(public router: Router) {}
    canActivate(): boolean {
        var self = this;
        const username = localStorage.getItem('username');

        if (username != null){
            return true;
        }
        
        self.router.navigate(['login']);
        return false;
    }
}