import React from "react";
import { useAuth } from "@/context/auth";
import Loading from "@/pages/loading";
import { ROUTE_ADMIN } from "@/text";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const withProtectedRoute = (WrappedComponent, allowedRoles) => {
    const Wrapper = (props) => {
        const router = useRouter();
        const [isAuth, setIsAuth] = useState(false);
        const [auth] = useAuth();
        useEffect(() => {
            if (!auth?.token) {
                router.push(ROUTE_ADMIN);
                return;
            }
            if (auth?.userResult) {
                if (!allowedRoles.includes(auth?.userResult?.userType)) {
                    router.push(ROUTE_ADMIN);
                    return;
                } else {
                    setIsAuth(true);
                }
            }
        }, [auth, router]);
        return isAuth ? <WrappedComponent {...props} /> : <Loading />;
    };
    return Wrapper;
};

export default withProtectedRoute;
