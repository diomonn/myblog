import type {Router} from 'vue-router';

import router from '@/router/index';

export class Back{
    is:boolean=true
    router:Router=router
    constructor(is:boolean ){
        this.is=is
    }
    Backgo(i:number){
        router.push({name:'blog',params:{i:i}})
        this.is=false
    }
}
