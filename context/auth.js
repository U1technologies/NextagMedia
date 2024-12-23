import { useState, useEffect, useContext, createContext, React } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Loading from "../pages/loading";
import { makeApiRequest } from "@/utils/utils";
 
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    userResult: null,
    token: "",
  });
  const [loading, setLoading] = useState(true);
 
  const getAuthToken = async () => {
    let token = Cookies.get("token");
    if (!token) {
      setLoading(false);
      return;
    }
 
    setLoading(true);
    try {
      const { data } = await makeApiRequest('get',`${process.env.NEXT_PUBLIC_API}/admin/get-profile`,
        {
          headers: { token: `${token}` },
        }
      );
      setAuth({
        userResult: data?.result,
        token: token,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
 
  useEffect(() => {
    if (typeof window !== "undefined") {
      getAuthToken();
    }
  }, []);
 
  useEffect(() => {
    if (auth?.token) {
      axios.defaults.headers.common["token"] = auth.token;
    }
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_API;
  }, [auth?.token]);
 
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {loading ? (
        <div className="text-5xl text-secondary text-center" style={{ marginTop: "40vh" }}>
          {<Loading />}
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
 
const useAuth = () => useContext(AuthContext);
 
export { AuthProvider, useAuth };