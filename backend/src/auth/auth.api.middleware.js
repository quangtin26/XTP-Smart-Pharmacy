function setAuthData(ctx, data) {
    ctx = data;
}

export function GetAuthData(ctx) {
    return ctx;
}

export function NewAuthMiddleware(AuthService) {
    return async (req,res, next) => {
        if (!req.session.user) {
            return res.json("session not found");
        }
        next();
    };
}

export function NewAuthAdminMiddleware(AuthService) {
    return async (req,res, next) => {
        if (!req.session.user) {
            return res.json(`session not found`);
        }
        if(req.session.user.user_id.slice(0,5)!=="ADMIN"){
            return res.json(`This page is not for user!`)
        }
        const token = req.session.user;
        const session = await AuthService.getSession(token.id);
        setAuthData(token, session);
        next();
    };
}
