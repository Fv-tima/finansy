import { createContext, useContext, useState, useEffect } from "react";
import { db } from "../firebase-config";
import { useAuth } from "./AuthContext";
import { query, where, collection, getDocs} from "firebase/firestore";
const ColContext = createContext();

export function useCol() {
  return useContext(ColContext);
}

export const ColContextProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const uid = currentUser?.uid;

  const [lang, setLang] = useState("");
  const [excRate, setExcRate] = useState("");
  const [excCur, setExcCur] = useState("");
  const [defCur, setDefCur] = useState("");
  const [country, setCountry] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const profileCollectionRef = collection(db, "Profile");
  const pQuery = query(profileCollectionRef, where("userId", "==", `${uid}`));

  //Budget
  const [budgetData, setBudgetData] = useState([]);
  const [budName, setBudName] = useState("");
  const [budAmt, setBudAmt] = useState("");
  const [budCat, setBudCat] = useState("");
  const budgetCollectionRef = collection(db, "Budget");
  const bQuery = query(budgetCollectionRef, where("userId", "==", `${uid}`));

  // get budget
  // const getBudget = async () => {
  //   try {
  //     const data = await getDocs(bQuery);
  //     const budgets = data.docs((budget) => ({
  //       ...budget.id,
  //       id: budget.id,
  //     }));
  //     setBudgetData(budgets);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   getBudget();
  // }, []);
  
    onSnapshot(budgetCollectionRef, (snapshot) => {
    const newBud = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(newBud);
  })
  // Edit Budget
  const [ebudName, setEBudName] = useState("");
  const [ebudAmt, setEBudAmt] = useState("");
  const [ebudCat, setEBudCat] = useState("");

  const value = {
    lang,
    setLang,
    excRate,
    setExcRate,
    excCur,
    setExcCur,
    defCur,
    setDefCur,
    country,
    setCountry,
    fullname,
    setFullname,
    email,
    setEmail,
    password,
    setPassword,
    budName,
    setBudName,
    budAmt,
    setBudAmt,
    budCat,
    setBudCat,
    ebudName,
    setEBudName,
    ebudAmt,
    setEBudAmt,
    ebudCat,
    setEBudCat,
    budgetCollectionRef,
    profileCollectionRef,
    bQuery,
    budgetData,
    setBudgetData,
  };

  return <ColContext.Provider value={value}>{children}</ColContext.Provider>;
};
