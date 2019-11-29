
export class DashboardModel{
    Tiles:{
        users:null,
        contentL:null,
        contentT:null
    }
    TopUsers:UserPost[]= []
    TodayPost:{
        title:null,
        createBy:null,
        content:null
    }
    

}

export class UserPost{
    user:string= null
    posts:number=null

}