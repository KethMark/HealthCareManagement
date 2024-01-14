import {withAuth} from "@kinde-oss/kinde-auth-nextjs/middleware";

export default withAuth((req: any) => {
    return withAuth(req);    
});

export const config = {
    matcher: ['/user', '/user/healthcare', '/user/data', '/user/admin', '/user/patient', '/user/cancel' ]
};