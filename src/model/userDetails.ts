export interface IUserDetails {
    userId: string,
    ip: string,
    login_country: string,
    login_state: string
}

/*  One user can longin a lot of times but one login belongs
    to only one user thus 1 user to many logins 1to many */
// export interface IloginDetails {
//     iLoginDetailsId: string,
//     userId: string,
//     login_time: Date,
//     logout_time: Date
// }